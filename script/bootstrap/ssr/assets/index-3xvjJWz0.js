import { b as formatDate, f as formatDateToMonthShort } from "./formatters-DpL1jrjT.js";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext, withModifiers, withDirectives, vShow, withAsyncContext, computed, watch } from "vue";
import { _ as _sfc_main$4 } from "./MoreBtn-CtW8Gck8.js";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { V as VExpandTransition } from "./index-D5WAZiYx.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { a as VIcon, V as VBtn } from "../ssr.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { u as useResponsiveLeftSidebar, V as VLayout, a as VMain } from "./VMain-BANwmGQ5.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import "./helpers-DX2i3Kdq.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./dialog-transition-CtM2qLK8.js";
import "./ssrBoot-Co4_dNdy.js";
/* empty css               */
import "ofetch";
import "./VSlideGroup-Bvz86g7R.js";
import "ufo";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
const _sfc_main$3 = {
  __name: "ComposeDialog",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const to = ref("");
    const cc = ref("");
    const bcc = ref("");
    const subject = ref("");
    const message = ref("");
    const emailCc = ref(false);
    const emailBcc = ref(false);
    const resetValues = () => {
      to.value = subject.value = message.value = "";
    };
    const editor = useEditor({
      content: "",
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({ placeholder: "Message" }),
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "email-compose-dialog",
        elevation: "10",
        "max-width": "30vw"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "py-3" }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => _ctx.$emit("close")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-subtract-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-subtract-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => {
                      _ctx.$emit("close");
                      resetValues();
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-close-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-close-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => _ctx.$emit("close")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-subtract-line" })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => {
                        _ctx.$emit("close");
                        resetValues();
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-close-line" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-medium-emphasis" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Compose Mail `);
                      } else {
                        return [
                          createTextVNode(" Compose Mail ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-medium-emphasis" }, {
                      default: withCtx(() => [
                        createTextVNode(" Compose Mail ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="pe-5"${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(to),
              "onUpdate:modelValue": ($event) => isRef(to) ? to.value = $event : null,
              density: "compact"
            }, {
              "prepend-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-body-1 text-disabled font-weight-medium"${_scopeId2}> To: </div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " To: ")
                  ];
                }
              }),
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="d-flex text-body-1 cursor-pointer text-medium-emphasis"${_scopeId2}><div${_scopeId2}>Cc</div><div class="mx-1"${_scopeId2}>|</div><div${_scopeId2}>Bcc</div></span>`);
                } else {
                  return [
                    createVNode("span", { class: "d-flex text-body-1 cursor-pointer text-medium-emphasis" }, [
                      createVNode("div", {
                        onClick: ($event) => emailCc.value = !unref(emailCc)
                      }, "Cc", 8, ["onClick"]),
                      createVNode("div", { class: "mx-1" }, "|"),
                      createVNode("div", {
                        onClick: ($event) => emailBcc.value = !unref(emailBcc)
                      }, "Bcc", 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(emailCc)) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: unref(cc),
                      "onUpdate:modelValue": ($event) => isRef(cc) ? cc.value = $event : null,
                      density: "compact"
                    }, {
                      "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-body-1 text-disabled font-weight-medium"${_scopeId3}> Cc: </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Cc: ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(emailCc) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(VDivider),
                      createVNode(VTextField, {
                        modelValue: unref(cc),
                        "onUpdate:modelValue": ($event) => isRef(cc) ? cc.value = $event : null,
                        density: "compact"
                      }, {
                        "prepend-inner": withCtx(() => [
                          createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Cc: ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(emailBcc)) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: unref(bcc),
                      "onUpdate:modelValue": ($event) => isRef(bcc) ? bcc.value = $event : null,
                      density: "compact"
                    }, {
                      "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-body-1 text-disabled font-weight-medium"${_scopeId3}> Bcc: </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Bcc: ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(emailBcc) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(VDivider),
                      createVNode(VTextField, {
                        modelValue: unref(bcc),
                        "onUpdate:modelValue": ($event) => isRef(bcc) ? bcc.value = $event : null,
                        density: "compact"
                      }, {
                        "prepend-inner": withCtx(() => [
                          createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Bcc: ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(subject),
              "onUpdate:modelValue": ($event) => isRef(subject) ? subject.value = $event : null,
              density: "compact"
            }, {
              "prepend-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-body-1 text-disabled font-weight-medium"${_scopeId2}> Subject: </div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Subject: ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="tiptap-editor-wrapper"${_scopeId}>`);
            if (unref(editor)) {
              _push2(`<div class="d-flex flex-wrap gap-x-1 px-4 py-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                color: unref(editor).isActive("bold") ? "primary" : "",
                variant: unref(editor).isActive("bold") ? "tonal" : "text",
                onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-bold" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-bold" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                color: unref(editor).isActive("underline") ? "primary" : "",
                variant: unref(editor).isActive("underline") ? "tonal" : "text",
                onClick: ($event) => unref(editor).commands.toggleUnderline()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-underline" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-underline" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                color: unref(editor).isActive("italic") ? "primary" : "",
                variant: unref(editor).isActive("italic") ? "tonal" : "text",
                onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-italic" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-italic" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                color: unref(editor).isActive("bulletList") ? "primary" : "",
                variant: unref(editor).isActive("bulletList") ? "tonal" : "text",
                onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-list-check" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-list-check" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                color: unref(editor).isActive("orderedList") ? "primary" : "",
                variant: unref(editor).isActive("orderedList") ? "tonal" : "text",
                onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-list-ordered-2" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-list-ordered-2" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                onClick: setLink
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-links-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-links-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                size: "small",
                rounded: "",
                onClick: addImage
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-image-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-image-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="mx-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="d-flex align-center px-5 py-4 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, { "append-icon": "ri-send-plane-line" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send `);
                  _push3(ssrRenderComponent(VMenu, { activator: "parent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(["Schedule Mail", "Save Draft", "Sent"], (item, index) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: index,
                                  value: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(["Schedule Mail", "Save Draft", "Sent"], (item, index) => {
                                  return createVNode(VListItem, {
                                    key: index,
                                    value: index
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(["Schedule Mail", "Save Draft", "Sent"], (item, index) => {
                                return createVNode(VListItem, {
                                  key: index,
                                  value: index
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
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
                    createTextVNode(" Send "),
                    createVNode(VMenu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(["Schedule Mail", "Save Draft", "Sent"], (item, index) => {
                              return createVNode(VListItem, {
                                key: index,
                                value: index
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-attachment-2" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-attachment-2" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-more-2-line" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              size: "small",
              onClick: ($event) => {
                _ctx.$emit("close");
                resetValues();
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(VCardItem, { class: "py-3" }, {
                append: withCtx(() => [
                  createVNode(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => _ctx.$emit("close")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-subtract-line" })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => {
                      _ctx.$emit("close");
                      resetValues();
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-close-line" })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-medium-emphasis" }, {
                    default: withCtx(() => [
                      createTextVNode(" Compose Mail ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "pe-5" }, [
                createVNode(VTextField, {
                  modelValue: unref(to),
                  "onUpdate:modelValue": ($event) => isRef(to) ? to.value = $event : null,
                  density: "compact"
                }, {
                  "prepend-inner": withCtx(() => [
                    createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " To: ")
                  ]),
                  append: withCtx(() => [
                    createVNode("span", { class: "d-flex text-body-1 cursor-pointer text-medium-emphasis" }, [
                      createVNode("div", {
                        onClick: ($event) => emailCc.value = !unref(emailCc)
                      }, "Cc", 8, ["onClick"]),
                      createVNode("div", { class: "mx-1" }, "|"),
                      createVNode("div", {
                        onClick: ($event) => emailBcc.value = !unref(emailBcc)
                      }, "Bcc", 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode(VExpandTransition, null, {
                default: withCtx(() => [
                  unref(emailCc) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(VDivider),
                    createVNode(VTextField, {
                      modelValue: unref(cc),
                      "onUpdate:modelValue": ($event) => isRef(cc) ? cc.value = $event : null,
                      density: "compact"
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Cc: ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VExpandTransition, null, {
                default: withCtx(() => [
                  unref(emailBcc) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(VDivider),
                    createVNode(VTextField, {
                      modelValue: unref(bcc),
                      "onUpdate:modelValue": ($event) => isRef(bcc) ? bcc.value = $event : null,
                      density: "compact"
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Bcc: ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VTextField, {
                modelValue: unref(subject),
                "onUpdate:modelValue": ($event) => isRef(subject) ? subject.value = $event : null,
                density: "compact"
              }, {
                "prepend-inner": withCtx(() => [
                  createVNode("div", { class: "text-body-1 text-disabled font-weight-medium" }, " Subject: ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VDivider),
              createVNode("div", { class: "tiptap-editor-wrapper" }, [
                unref(editor) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex flex-wrap gap-x-1 px-4 py-2"
                }, [
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    color: unref(editor).isActive("bold") ? "primary" : "",
                    variant: unref(editor).isActive("bold") ? "tonal" : "text",
                    onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-bold" })
                    ]),
                    _: 1
                  }, 8, ["color", "variant", "onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    color: unref(editor).isActive("underline") ? "primary" : "",
                    variant: unref(editor).isActive("underline") ? "tonal" : "text",
                    onClick: ($event) => unref(editor).commands.toggleUnderline()
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-underline" })
                    ]),
                    _: 1
                  }, 8, ["color", "variant", "onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    color: unref(editor).isActive("italic") ? "primary" : "",
                    variant: unref(editor).isActive("italic") ? "tonal" : "text",
                    onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-italic" })
                    ]),
                    _: 1
                  }, 8, ["color", "variant", "onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    color: unref(editor).isActive("bulletList") ? "primary" : "",
                    variant: unref(editor).isActive("bulletList") ? "tonal" : "text",
                    onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-list-check" })
                    ]),
                    _: 1
                  }, 8, ["color", "variant", "onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    color: unref(editor).isActive("orderedList") ? "primary" : "",
                    variant: unref(editor).isActive("orderedList") ? "tonal" : "text",
                    onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-list-ordered-2" })
                    ]),
                    _: 1
                  }, 8, ["color", "variant", "onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    onClick: setLink
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-links-line" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    rounded: "",
                    onClick: addImage
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-image-line" })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode(VDivider),
                createVNode("div", { class: "mx-5" }, [
                  createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                ])
              ]),
              createVNode("div", { class: "d-flex align-center px-5 py-4 gap-4" }, [
                createVNode(VBtn, { "append-icon": "ri-send-plane-line" }, {
                  default: withCtx(() => [
                    createTextVNode(" Send "),
                    createVNode(VMenu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(["Schedule Mail", "Save Draft", "Sent"], (item, index) => {
                              return createVNode(VListItem, {
                                key: index,
                                value: index
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_IconBtn, { size: "small" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-attachment-2" })
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                createVNode(_component_IconBtn, { size: "small" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-more-2-line" })
                  ]),
                  _: 1
                }),
                createVNode(_component_IconBtn, {
                  size: "small",
                  onClick: ($event) => {
                    _ctx.$emit("close");
                    resetValues();
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/email/ComposeDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "EmailLeftSidebarContent",
  __ssrInlineRender: true,
  emits: ["toggleComposeDialogVisibility"],
  setup(__props, { emit: __emit }) {
    const folders = [
      {
        title: "Inbox",
        prependIcon: "ri-mail-line",
        to: { name: "apps-email" },
        badge: {
          content: "21",
          color: "primary"
        }
      },
      {
        title: "Sent",
        prependIcon: "ri-send-plane-line",
        to: {
          name: "apps-email-filter",
          params: { filter: "sent" }
        }
      },
      {
        title: "Draft",
        prependIcon: "ri-edit-box-line",
        to: {
          name: "apps-email-filter",
          params: { filter: "draft" }
        },
        badge: {
          content: "2",
          color: "warning"
        }
      },
      {
        title: "Starred",
        prependIcon: "ri-star-line",
        to: {
          name: "apps-email-filter",
          params: { filter: "starred" }
        }
      },
      {
        title: "Spam",
        prependIcon: "ri-spam-2-line",
        to: {
          name: "apps-email-filter",
          params: { filter: "spam" }
        },
        badge: {
          content: "4",
          color: "error"
        }
      },
      {
        title: "Trash",
        prependIcon: "ri-delete-bin-7-line",
        to: {
          name: "apps-email-filter",
          params: { filter: "trashed" }
        }
      }
    ];
    const labels = [
      {
        title: "Personal",
        color: "success",
        to: {
          name: "apps-email-label",
          params: { label: "personal" }
        }
      },
      {
        title: "Company",
        color: "primary",
        to: {
          name: "apps-email-label",
          params: { label: "company" }
        }
      },
      {
        title: "Important",
        color: "warning",
        to: {
          name: "apps-email-label",
          params: { label: "important" }
        }
      },
      {
        title: "Private",
        color: "error",
        to: {
          name: "apps-email-label",
          params: { label: "private" }
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column h-100" }, _attrs))}><div class="pa-5">`);
      _push(ssrRenderComponent(VBtn, {
        block: "",
        onClick: ($event) => _ctx.$emit("toggleComposeDialogVisibility")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Compose `);
          } else {
            return [
              createTextVNode(" Compose ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(PerfectScrollbar), {
        options: { wheelPropagation: false },
        class: "h-100 pt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="email-filters-labels"${_scopeId}><!--[-->`);
            ssrRenderList(folders, (folder) => {
              _push2(ssrRenderComponent(_component_RouterLink, {
                key: folder.title,
                class: "d-flex align-center cursor-pointer",
                to: folder.to,
                custom: ""
              }, {
                default: withCtx(({ isActive, href, navigate }, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<li${ssrRenderAttrs(mergeProps({ ref_for: true }, _ctx.$attrs, {
                      href,
                      class: [isActive && "email-filter-active text-primary", "d-flex align-center cursor-pointer"]
                    }))}${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: folder.prependIcon,
                      class: "me-2",
                      size: "20"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-base"${_scopeId2}>${ssrInterpolate(folder.title)}</span>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    if ((_a = folder.badge) == null ? void 0 : _a.content) {
                      _push3(ssrRenderComponent(VBadge, {
                        size: "x-small",
                        variant: "tonal",
                        inline: "",
                        class: "v-badge--tonal badge-custom-padding",
                        color: folder.badge.color,
                        content: folder.badge.content
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</li>`);
                  } else {
                    return [
                      createVNode("li", mergeProps({ ref_for: true }, _ctx.$attrs, {
                        href,
                        class: [isActive && "email-filter-active text-primary", "d-flex align-center cursor-pointer"],
                        onClick: navigate
                      }), [
                        createVNode(VIcon, {
                          icon: folder.prependIcon,
                          class: "me-2",
                          size: "20"
                        }, null, 8, ["icon"]),
                        createVNode("span", { class: "text-base" }, toDisplayString(folder.title), 1),
                        createVNode(VSpacer),
                        ((_b = folder.badge) == null ? void 0 : _b.content) ? (openBlock(), createBlock(VBadge, {
                          key: 0,
                          size: "x-small",
                          variant: "tonal",
                          inline: "",
                          class: "v-badge--tonal badge-custom-padding",
                          color: folder.badge.color,
                          content: folder.badge.content
                        }, null, 8, ["color", "content"])) : createCommentVNode("", true)
                      ], 16, ["href", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><li class="text-sm d-block text-uppercase text-disabled mt-6 mb-3"${_scopeId}> LABELS </li><!--[-->`);
            ssrRenderList(labels, (label) => {
              _push2(ssrRenderComponent(_component_RouterLink, {
                key: label.title,
                class: "d-flex align-center",
                to: label.to,
                custom: ""
              }, {
                default: withCtx(({ isActive, href, navigate }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li${ssrRenderAttrs(mergeProps({ ref_for: true }, _ctx.$attrs, {
                      href,
                      class: [isActive && "email-label-active text-primary", "cursor-pointer"]
                    }))}${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      color: label.color,
                      icon: "ri-circle-fill",
                      size: "12",
                      class: "me-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-body-1 text-high-emphasis d-inline-block"${_scopeId2}>${ssrInterpolate(label.title)}</span></li>`);
                  } else {
                    return [
                      createVNode("li", mergeProps({ ref_for: true }, _ctx.$attrs, {
                        href,
                        class: [isActive && "email-label-active text-primary", "cursor-pointer"],
                        onClick: navigate
                      }), [
                        createVNode(VIcon, {
                          color: label.color,
                          icon: "ri-circle-fill",
                          size: "12",
                          class: "me-2"
                        }, null, 8, ["color"]),
                        createVNode("span", { class: "text-body-1 text-high-emphasis d-inline-block" }, toDisplayString(label.title), 1)
                      ], 16, ["href", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "email-filters-labels" }, [
                (openBlock(), createBlock(Fragment, null, renderList(folders, (folder) => {
                  return createVNode(_component_RouterLink, {
                    key: folder.title,
                    class: "d-flex align-center cursor-pointer",
                    to: folder.to,
                    custom: ""
                  }, {
                    default: withCtx(({ isActive, href, navigate }) => {
                      var _a;
                      return [
                        createVNode("li", mergeProps({ ref_for: true }, _ctx.$attrs, {
                          href,
                          class: [isActive && "email-filter-active text-primary", "d-flex align-center cursor-pointer"],
                          onClick: navigate
                        }), [
                          createVNode(VIcon, {
                            icon: folder.prependIcon,
                            class: "me-2",
                            size: "20"
                          }, null, 8, ["icon"]),
                          createVNode("span", { class: "text-base" }, toDisplayString(folder.title), 1),
                          createVNode(VSpacer),
                          ((_a = folder.badge) == null ? void 0 : _a.content) ? (openBlock(), createBlock(VBadge, {
                            key: 0,
                            size: "x-small",
                            variant: "tonal",
                            inline: "",
                            class: "v-badge--tonal badge-custom-padding",
                            color: folder.badge.color,
                            content: folder.badge.content
                          }, null, 8, ["color", "content"])) : createCommentVNode("", true)
                        ], 16, ["href", "onClick"])
                      ];
                    }),
                    _: 2
                  }, 1032, ["to"]);
                }), 64)),
                createVNode("li", { class: "text-sm d-block text-uppercase text-disabled mt-6 mb-3" }, " LABELS "),
                (openBlock(), createBlock(Fragment, null, renderList(labels, (label) => {
                  return createVNode(_component_RouterLink, {
                    key: label.title,
                    class: "d-flex align-center",
                    to: label.to,
                    custom: ""
                  }, {
                    default: withCtx(({ isActive, href, navigate }) => [
                      createVNode("li", mergeProps({ ref_for: true }, _ctx.$attrs, {
                        href,
                        class: [isActive && "email-label-active text-primary", "cursor-pointer"],
                        onClick: navigate
                      }), [
                        createVNode(VIcon, {
                          color: label.color,
                          icon: "ri-circle-fill",
                          size: "12",
                          class: "me-2"
                        }, null, 8, ["color"]),
                        createVNode("span", { class: "text-body-1 text-high-emphasis d-inline-block" }, toDisplayString(label.title), 1)
                      ], 16, ["href", "onClick"])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/email/EmailLeftSidebarContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useEmail = () => {
  const route = useRoute("apps-email-filter");
  const updateEmails = async (ids, data) => {
    await $api("apps/email", {
      method: "POST",
      body: JSON.stringify({ ids, data })
    });
  };
  const updateEmailLabels = async (ids, label) => {
    await $api("/apps/email", {
      method: "POST",
      body: { ids, label }
    });
  };
  const emailMoveToFolderActions = [
    { action: "inbox", icon: "ri-mail-line" },
    { action: "spam", icon: "ri-spam-2-line" },
    { action: "trash", icon: "ri-delete-bin-line" }
  ];
  const labels = [
    {
      title: "personal",
      color: "success"
    },
    {
      title: "company",
      color: "primary"
    },
    {
      title: "important",
      color: "warning"
    },
    {
      title: "private",
      color: "error"
    }
  ];
  const resolveLabelColor = (label) => {
    if (label === "personal")
      return "success";
    if (label === "company")
      return "primary";
    if (label === "important")
      return "warning";
    if (label === "private")
      return "error";
    return "secondary";
  };
  const shallShowMoveToActionFor = (action) => {
    if (action === "trash")
      return route.params.filter !== "trashed";
    else if (action === "inbox")
      return !(route.params.filter === void 0 || route.params.filter === "sent" || route.params.filter === "draft");
    else if (action === "spam")
      return !(route.params.filter === "spam" || route.params.filter === "sent" || route.params.filter === "draft");
    return false;
  };
  const moveSelectedEmailTo = async (action, selectedEmails) => {
    const dataToUpdate = {};
    if (action === "inbox") {
      if (route.params.filter === "trashed")
        dataToUpdate.isDeleted = false;
      dataToUpdate.folder = "inbox";
    } else if (action === "spam") {
      if (route.params.filter === "trashed")
        dataToUpdate.isDeleted = false;
      dataToUpdate.folder = "spam";
    } else if (action === "trash") {
      dataToUpdate.isDeleted = true;
    }
    await updateEmails(selectedEmails, dataToUpdate);
  };
  return {
    labels,
    resolveLabelColor,
    shallShowMoveToActionFor,
    emailMoveToFolderActions,
    moveSelectedEmailTo,
    updateEmails,
    updateEmailLabels
  };
};
const _sfc_main$1 = {
  __name: "EmailView",
  __ssrInlineRender: true,
  props: {
    email: {
      type: null,
      required: true
    },
    emailMeta: {
      type: Object,
      required: true
    }
  },
  emits: [
    "refresh",
    "navigated",
    "close",
    "trash",
    "unread",
    "read",
    "star",
    "unstar"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { updateEmailLabels } = useEmail();
    const { labels, resolveLabelColor, emailMoveToFolderActions, shallShowMoveToActionFor, moveSelectedEmailTo } = useEmail();
    const handleMoveMailsTo = async (action) => {
      await moveSelectedEmailTo(action, [props.email.id]);
      emit("refresh");
      emit("close");
    };
    const updateMailLabel = async (label) => {
      await updateEmailLabels([props.email.id], label);
      emit("refresh");
    };
    const editor = useEditor({
      content: "",
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({ placeholder: "Write your message..." }),
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_MoreBtn = _sfc_main$4;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        "model-value": !!props.email,
        location: "right",
        scrim: false,
        floating: "",
        class: "email-view"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.email) {
              _push2(`<!--[--><div class="email-view-header d-flex align-center px-5 py-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconBtn, {
                class: "me-2 flip-in-rtl",
                onClick: ($event) => _ctx.$emit("close")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-s-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-arrow-left-s-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2"${_scopeId}><h6 class="text-body-1 text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(props.email.subject)}</h6><div class="d-flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(props.email.labels, (label) => {
                _push2(ssrRenderComponent(VChip, {
                  key: label,
                  color: unref(resolveLabelColor)(label),
                  size: "small",
                  class: "text-capitalize flex-shrink-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="d-flex align-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconBtn, {
                variant: "plain",
                disabled: !props.emailMeta.hasPreviousEmail,
                class: "flip-in-rtl",
                onClick: ($event) => _ctx.$emit("navigated", "previous")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-s-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-arrow-left-s-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                variant: "plain",
                class: "flip-in-rtl",
                disabled: !props.emailMeta.hasNextEmail,
                onClick: ($event) => _ctx.$emit("navigated", "next")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-s-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-arrow-right-s-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
              _push2(`<div class="email-view-action-bar d-flex align-center text-medium-emphasis gap-1 px-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconBtn, {
                style: !props.email.isDeleted ? null : { display: "none" },
                onClick: ($event) => {
                  _ctx.$emit("trash", props.email.id);
                  _ctx.$emit("close");
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Delete Mail `);
                        } else {
                          return [
                            createTextVNode(" Delete Mail ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete Mail ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                onClick: ($event) => {
                  _ctx.$emit("unread");
                  _ctx.$emit("close");
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-mail-line" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Mark as Unread `);
                        } else {
                          return [
                            createTextVNode(" Mark as Unread ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-mail-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Mark as Unread ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-folder-line" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Move to `);
                        } else {
                          return [
                            createTextVNode(" Move to ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VMenu, { activator: "parent" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, { density: "compact" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(emailMoveToFolderActions), (moveTo) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    class: [unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none", "align-center"],
                                    href: "#",
                                    onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                  }, {
                                    prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon: moveTo.icon,
                                          class: "me-2",
                                          size: "20"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            icon: moveTo.icon,
                                            class: "me-2",
                                            size: "20"
                                          }, null, 8, ["icon"])
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, { class: "text-capitalize" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(moveTo.action)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(moveTo.action), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(moveTo.action), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: moveTo.title,
                                      class: [unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none", "align-center"],
                                      href: "#",
                                      onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: moveTo.icon,
                                          class: "me-2",
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(moveTo.action), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "onClick"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, { density: "compact" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: moveTo.title,
                                    class: [unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none", "align-center"],
                                    href: "#",
                                    onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: moveTo.icon,
                                        class: "me-2",
                                        size: "20"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(moveTo.action), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 128))
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
                      createVNode(VIcon, { icon: "ri-folder-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Move to ")
                        ]),
                        _: 1
                      }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: moveTo.title,
                                  class: [unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none", "align-center"],
                                  href: "#",
                                  onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: moveTo.icon,
                                      class: "me-2",
                                      size: "20"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(moveTo.action), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick"]);
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-price-tag-3-line" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VTooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Label `);
                        } else {
                          return [
                            createTextVNode(" Label ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VMenu, { activator: "parent" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, { density: "compact" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(labels), (label) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: label.title,
                                    href: "#",
                                    onClick: ($event) => updateMailLabel(label.title)
                                  }, {
                                    prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VBadge, {
                                          inline: "",
                                          color: unref(resolveLabelColor)(label.title),
                                          dot: ""
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VBadge, {
                                            inline: "",
                                            color: unref(resolveLabelColor)(label.title),
                                            dot: ""
                                          }, null, 8, ["color"])
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(label.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(label.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(label.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: label.title,
                                      href: "#",
                                      onClick: withModifiers(($event) => updateMailLabel(label.title), ["stop"])
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VBadge, {
                                          inline: "",
                                          color: unref(resolveLabelColor)(label.title),
                                          dot: ""
                                        }, null, 8, ["color"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(label.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, { density: "compact" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: label.title,
                                    href: "#",
                                    onClick: withModifiers(($event) => updateMailLabel(label.title), ["stop"])
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VBadge, {
                                        inline: "",
                                        color: unref(resolveLabelColor)(label.title),
                                        dot: ""
                                      }, null, 8, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(label.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
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
                      createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Label ")
                        ]),
                        _: 1
                      }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: label.title,
                                  href: "#",
                                  onClick: withModifiers(($event) => updateMailLabel(label.title), ["stop"])
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VBadge, {
                                      inline: "",
                                      color: unref(resolveLabelColor)(label.title),
                                      dot: ""
                                    }, null, 8, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(label.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_IconBtn, {
                color: props.email.isStarred ? "warning" : "default",
                onClick: ($event) => {
                  var _a;
                  return ((_a = props.email) == null ? void 0 : _a.isStarred) ? _ctx.$emit("unstar") : _ctx.$emit("star");
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { icon: "ri-star-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { icon: "ri-star-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_MoreBtn, null, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                tag: "div",
                class: "mail-content-container flex-grow-1",
                options: { wheelPropagation: false }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "ma-6 mb-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "mail-header" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-start"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "38",
                                  class: "me-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        src: props.email.from.avatar,
                                        alt: props.email.from.name
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          src: props.email.from.avatar,
                                          alt: props.email.from.name
                                        }, null, 8, ["src", "alt"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-wrap flex-grow-1 overflow-hidden"${_scopeId4}><div class="text-truncate"${_scopeId4}><h6 class="text-h6 font-weight-regular text-truncate"${_scopeId4}>${ssrInterpolate(props.email.from.name)}</h6><p class="text-body-2 mb-0"${_scopeId4}>${ssrInterpolate(props.email.from.email)}</p></div>`);
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(`<div class="d-flex align-center"${_scopeId4}><span class="text-disabled me-4"${_scopeId4}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(props.email.time))}</span>`);
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  style: props.email.attachments.length ? null : { display: "none" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-attachment-2" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-attachment-2" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                                _push5(ssrRenderComponent(_component_MoreBtn, { class: "align-self-sm-center" }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-start" }, [
                                    createVNode(VAvatar, {
                                      size: "38",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: props.email.from.avatar,
                                          alt: props.email.from.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex flex-wrap flex-grow-1 overflow-hidden" }, [
                                      createVNode("div", { class: "text-truncate" }, [
                                        createVNode("h6", { class: "text-h6 font-weight-regular text-truncate" }, toDisplayString(props.email.from.name), 1),
                                        createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(props.email.from.email), 1)
                                      ]),
                                      createVNode(VSpacer),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("span", { class: "text-disabled me-4" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(props.email.time)), 1),
                                        withDirectives(createVNode(_component_IconBtn, null, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "ri-attachment-2" })
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, props.email.attachments.length]
                                        ])
                                      ])
                                    ]),
                                    createVNode(_component_MoreBtn, { class: "align-self-sm-center" })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-base"${_scopeId4}>${props.email.message ?? ""}</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "text-base",
                                    innerHTML: props.email.message
                                  }, null, 8, ["innerHTML"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (props.email.attachments.length) {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>Attachments</span><!--[-->`);
                                  ssrRenderList(props.email.attachments, (attachment) => {
                                    _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VImg, {
                                      src: attachment.thumbnail,
                                      alt: attachment.fileName,
                                      "aspect-ratio": "1",
                                      "max-height": "24",
                                      "max-width": "24",
                                      class: "me-2"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(attachment.fileName)}</span></div>`);
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    createVNode("span", null, "Attachments"),
                                    (openBlock(true), createBlock(Fragment, null, renderList(props.email.attachments, (attachment) => {
                                      return openBlock(), createBlock("div", {
                                        key: attachment.fileName,
                                        class: "d-flex align-center"
                                      }, [
                                        createVNode(VImg, {
                                          src: attachment.thumbnail,
                                          alt: attachment.fileName,
                                          "aspect-ratio": "1",
                                          "max-height": "24",
                                          "max-width": "24",
                                          class: "me-2"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode("span", null, toDisplayString(attachment.fileName), 1)
                                      ]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(VCardText, { class: "mail-header" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-start" }, [
                                  createVNode(VAvatar, {
                                    size: "38",
                                    class: "me-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: props.email.from.avatar,
                                        alt: props.email.from.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-flex flex-wrap flex-grow-1 overflow-hidden" }, [
                                    createVNode("div", { class: "text-truncate" }, [
                                      createVNode("h6", { class: "text-h6 font-weight-regular text-truncate" }, toDisplayString(props.email.from.name), 1),
                                      createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(props.email.from.email), 1)
                                    ]),
                                    createVNode(VSpacer),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode("span", { class: "text-disabled me-4" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(props.email.time)), 1),
                                      withDirectives(createVNode(_component_IconBtn, null, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-attachment-2" })
                                        ]),
                                        _: 1
                                      }, 512), [
                                        [vShow, props.email.attachments.length]
                                      ])
                                    ])
                                  ]),
                                  createVNode(_component_MoreBtn, { class: "align-self-sm-center" })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "text-base",
                                  innerHTML: props.email.message
                                }, null, 8, ["innerHTML"])
                              ]),
                              _: 1
                            }),
                            props.email.attachments.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(VDivider),
                              createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Attachments"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.email.attachments, (attachment) => {
                                    return openBlock(), createBlock("div", {
                                      key: attachment.fileName,
                                      class: "d-flex align-center"
                                    }, [
                                      createVNode(VImg, {
                                        src: attachment.thumbnail,
                                        alt: attachment.fileName,
                                        "aspect-ratio": "1",
                                        "max-height": "24",
                                        "max-width": "24",
                                        class: "me-2"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode("span", null, toDisplayString(attachment.fileName), 1)
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCard, { class: "ma-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6 font-weight-regular mb-6"${_scopeId4}> Reply to Ross Geller </h6><div class="tiptap-editor-wrapper"${_scopeId4}>`);
                                if (unref(editor)) {
                                  _push5(`<div class="d-flex flex-wrap gap-x-2 mb-6"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-bold",
                                    color: unref(editor).isActive("bold") ? "primary" : "",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    color: unref(editor).isActive("underline") ? "primary" : "",
                                    icon: "ri-underline",
                                    size: "20",
                                    onClick: ($event) => unref(editor).commands.toggleUnderline()
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    color: unref(editor).isActive("italic") ? "primary" : "",
                                    icon: "ri-italic",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    color: unref(editor).isActive("bulletList") ? "primary" : "",
                                    icon: "ri-list-check",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    color: unref(editor).isActive("orderedList") ? "primary" : "",
                                    icon: "ri-list-ordered-2",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-links-line",
                                    size: "20",
                                    onClick: setLink
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-image-line",
                                    size: "20",
                                    onClick: addImage
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="d-flex align-center justify-space-between justify-sm-end gap-4 mt-6 flex-wrap"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  variant: "plain",
                                  "prepend-icon": "ri-attachment-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Attachments `);
                                    } else {
                                      return [
                                        createTextVNode(" Attachments ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, { "append-icon": "ri-send-plane-line" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Send `);
                                    } else {
                                      return [
                                        createTextVNode(" Send ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6 font-weight-regular mb-6" }, " Reply to Ross Geller "),
                                  createVNode("div", { class: "tiptap-editor-wrapper" }, [
                                    unref(editor) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "d-flex flex-wrap gap-x-2 mb-6"
                                    }, [
                                      createVNode(VIcon, {
                                        icon: "ri-bold",
                                        color: unref(editor).isActive("bold") ? "primary" : "",
                                        size: "20",
                                        onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                      }, null, 8, ["color", "onClick"]),
                                      createVNode(VIcon, {
                                        color: unref(editor).isActive("underline") ? "primary" : "",
                                        icon: "ri-underline",
                                        size: "20",
                                        onClick: ($event) => unref(editor).commands.toggleUnderline()
                                      }, null, 8, ["color", "onClick"]),
                                      createVNode(VIcon, {
                                        color: unref(editor).isActive("italic") ? "primary" : "",
                                        icon: "ri-italic",
                                        size: "20",
                                        onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
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
                                    ])) : createCommentVNode("", true),
                                    createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between justify-sm-end gap-4 mt-6 flex-wrap" }, [
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "plain",
                                      "prepend-icon": "ri-attachment-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Attachments ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, { "append-icon": "ri-send-plane-line" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Send ")
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
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 font-weight-regular mb-6" }, " Reply to Ross Geller "),
                                createVNode("div", { class: "tiptap-editor-wrapper" }, [
                                  unref(editor) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "d-flex flex-wrap gap-x-2 mb-6"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-bold",
                                      color: unref(editor).isActive("bold") ? "primary" : "",
                                      size: "20",
                                      onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                    }, null, 8, ["color", "onClick"]),
                                    createVNode(VIcon, {
                                      color: unref(editor).isActive("underline") ? "primary" : "",
                                      icon: "ri-underline",
                                      size: "20",
                                      onClick: ($event) => unref(editor).commands.toggleUnderline()
                                    }, null, 8, ["color", "onClick"]),
                                    createVNode(VIcon, {
                                      color: unref(editor).isActive("italic") ? "primary" : "",
                                      icon: "ri-italic",
                                      size: "20",
                                      onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
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
                                  ])) : createCommentVNode("", true),
                                  createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between justify-sm-end gap-4 mt-6 flex-wrap" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "plain",
                                    "prepend-icon": "ri-attachment-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Attachments ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { "append-icon": "ri-send-plane-line" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send ")
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, { class: "ma-6 mb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "mail-header" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-start" }, [
                                createVNode(VAvatar, {
                                  size: "38",
                                  class: "me-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: props.email.from.avatar,
                                      alt: props.email.from.name
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-wrap flex-grow-1 overflow-hidden" }, [
                                  createVNode("div", { class: "text-truncate" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-regular text-truncate" }, toDisplayString(props.email.from.name), 1),
                                    createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(props.email.from.email), 1)
                                  ]),
                                  createVNode(VSpacer),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("span", { class: "text-disabled me-4" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(props.email.time)), 1),
                                    withDirectives(createVNode(_component_IconBtn, null, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-attachment-2" })
                                      ]),
                                      _: 1
                                    }, 512), [
                                      [vShow, props.email.attachments.length]
                                    ])
                                  ])
                                ]),
                                createVNode(_component_MoreBtn, { class: "align-self-sm-center" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "text-base",
                                innerHTML: props.email.message
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 1
                          }),
                          props.email.attachments.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(VDivider),
                            createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Attachments"),
                                (openBlock(true), createBlock(Fragment, null, renderList(props.email.attachments, (attachment) => {
                                  return openBlock(), createBlock("div", {
                                    key: attachment.fileName,
                                    class: "d-flex align-center"
                                  }, [
                                    createVNode(VImg, {
                                      src: attachment.thumbnail,
                                      alt: attachment.fileName,
                                      "aspect-ratio": "1",
                                      "max-height": "24",
                                      "max-width": "24",
                                      class: "me-2"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("span", null, toDisplayString(attachment.fileName), 1)
                                  ]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(VCard, { class: "ma-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 font-weight-regular mb-6" }, " Reply to Ross Geller "),
                              createVNode("div", { class: "tiptap-editor-wrapper" }, [
                                unref(editor) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex flex-wrap gap-x-2 mb-6"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-bold",
                                    color: unref(editor).isActive("bold") ? "primary" : "",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                  }, null, 8, ["color", "onClick"]),
                                  createVNode(VIcon, {
                                    color: unref(editor).isActive("underline") ? "primary" : "",
                                    icon: "ri-underline",
                                    size: "20",
                                    onClick: ($event) => unref(editor).commands.toggleUnderline()
                                  }, null, 8, ["color", "onClick"]),
                                  createVNode(VIcon, {
                                    color: unref(editor).isActive("italic") ? "primary" : "",
                                    icon: "ri-italic",
                                    size: "20",
                                    onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
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
                                ])) : createCommentVNode("", true),
                                createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between justify-sm-end gap-4 mt-6 flex-wrap" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "plain",
                                  "prepend-icon": "ri-attachment-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Attachments ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { "append-icon": "ri-send-plane-line" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Send ")
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
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.email ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", { class: "email-view-header d-flex align-center px-5 py-4" }, [
                  createVNode(_component_IconBtn, {
                    class: "me-2 flip-in-rtl",
                    onClick: ($event) => _ctx.$emit("close")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-arrow-left-s-line" })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("div", { class: "d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2" }, [
                    createVNode("h6", { class: "text-body-1 text-high-emphasis text-truncate" }, toDisplayString(props.email.subject), 1),
                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.email.labels, (label) => {
                        return openBlock(), createBlock(VChip, {
                          key: label,
                          color: unref(resolveLabelColor)(label),
                          size: "small",
                          class: "text-capitalize flex-shrink-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(label), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-center gap-2" }, [
                    createVNode(_component_IconBtn, {
                      variant: "plain",
                      disabled: !props.emailMeta.hasPreviousEmail,
                      class: "flip-in-rtl",
                      onClick: ($event) => _ctx.$emit("navigated", "previous")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-arrow-left-s-line" })
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    createVNode(_component_IconBtn, {
                      variant: "plain",
                      class: "flip-in-rtl",
                      disabled: !props.emailMeta.hasNextEmail,
                      onClick: ($event) => _ctx.$emit("navigated", "next")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-arrow-right-s-line" })
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ])
                ]),
                createVNode(VDivider),
                createVNode("div", { class: "email-view-action-bar d-flex align-center text-medium-emphasis gap-1 px-5" }, [
                  withDirectives(createVNode(_component_IconBtn, {
                    onClick: ($event) => {
                      _ctx.$emit("trash", props.email.id);
                      _ctx.$emit("close");
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete Mail ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]), [
                    [vShow, !props.email.isDeleted]
                  ]),
                  createVNode(_component_IconBtn, {
                    onClick: withModifiers(($event) => {
                      _ctx.$emit("unread");
                      _ctx.$emit("close");
                    }, ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-mail-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Mark as Unread ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_IconBtn, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-folder-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Move to ")
                        ]),
                        _: 1
                      }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: moveTo.title,
                                  class: [unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none", "align-center"],
                                  href: "#",
                                  onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: moveTo.icon,
                                      class: "me-2",
                                      size: "20"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(moveTo.action), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_IconBtn, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Label ")
                        ]),
                        _: 1
                      }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: label.title,
                                  href: "#",
                                  onClick: withModifiers(($event) => updateMailLabel(label.title), ["stop"])
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VBadge, {
                                      inline: "",
                                      color: unref(resolveLabelColor)(label.title),
                                      dot: ""
                                    }, null, 8, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(label.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(_component_IconBtn, {
                    color: props.email.isStarred ? "warning" : "default",
                    onClick: ($event) => {
                      var _a;
                      return ((_a = props.email) == null ? void 0 : _a.isStarred) ? _ctx.$emit("unstar") : _ctx.$emit("star");
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-star-line" })
                    ]),
                    _: 1
                  }, 8, ["color", "onClick"]),
                  createVNode(_component_MoreBtn)
                ]),
                createVNode(VDivider),
                createVNode(unref(PerfectScrollbar), {
                  tag: "div",
                  class: "mail-content-container flex-grow-1",
                  options: { wheelPropagation: false }
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "ma-6 mb-4" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "mail-header" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-start" }, [
                              createVNode(VAvatar, {
                                size: "38",
                                class: "me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: props.email.from.avatar,
                                    alt: props.email.from.name
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex flex-wrap flex-grow-1 overflow-hidden" }, [
                                createVNode("div", { class: "text-truncate" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-regular text-truncate" }, toDisplayString(props.email.from.name), 1),
                                  createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(props.email.from.email), 1)
                                ]),
                                createVNode(VSpacer),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("span", { class: "text-disabled me-4" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(props.email.time)), 1),
                                  withDirectives(createVNode(_component_IconBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-attachment-2" })
                                    ]),
                                    _: 1
                                  }, 512), [
                                    [vShow, props.email.attachments.length]
                                  ])
                                ])
                              ]),
                              createVNode(_component_MoreBtn, { class: "align-self-sm-center" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "text-base",
                              innerHTML: props.email.message
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        }),
                        props.email.attachments.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(VDivider),
                          createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Attachments"),
                              (openBlock(true), createBlock(Fragment, null, renderList(props.email.attachments, (attachment) => {
                                return openBlock(), createBlock("div", {
                                  key: attachment.fileName,
                                  class: "d-flex align-center"
                                }, [
                                  createVNode(VImg, {
                                    src: attachment.thumbnail,
                                    alt: attachment.fileName,
                                    "aspect-ratio": "1",
                                    "max-height": "24",
                                    "max-width": "24",
                                    class: "me-2"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("span", null, toDisplayString(attachment.fileName), 1)
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { class: "ma-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 font-weight-regular mb-6" }, " Reply to Ross Geller "),
                            createVNode("div", { class: "tiptap-editor-wrapper" }, [
                              unref(editor) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex flex-wrap gap-x-2 mb-6"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-bold",
                                  color: unref(editor).isActive("bold") ? "primary" : "",
                                  size: "20",
                                  onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                                }, null, 8, ["color", "onClick"]),
                                createVNode(VIcon, {
                                  color: unref(editor).isActive("underline") ? "primary" : "",
                                  icon: "ri-underline",
                                  size: "20",
                                  onClick: ($event) => unref(editor).commands.toggleUnderline()
                                }, null, 8, ["color", "onClick"]),
                                createVNode(VIcon, {
                                  color: unref(editor).isActive("italic") ? "primary" : "",
                                  icon: "ri-italic",
                                  size: "20",
                                  onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
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
                              ])) : createCommentVNode("", true),
                              createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between justify-sm-end gap-4 mt-6 flex-wrap" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "plain",
                                "prepend-icon": "ri-attachment-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Attachments ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { "append-icon": "ri-send-plane-line" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Send ")
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
                })
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/email/EmailView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { isLeftSidebarOpen } = useResponsiveLeftSidebar();
    const route = useRoute();
    const { labels, resolveLabelColor, emailMoveToFolderActions, shallShowMoveToActionFor, moveSelectedEmailTo, updateEmails, updateEmailLabels } = useEmail();
    const isComposeDialogVisible = ref(false);
    const q = ref("");
    const selectedEmails = ref([]);
    const {
      data: emailData,
      execute: fetchEmails
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/email", {
      query: {
        q,
        filter: () => "filter" in route.params ? route.params.filter : void 0,
        label: () => "label" in route.params ? route.params.label : void 0
      }
    }))), __temp = await __temp, __restore(), __temp);
    const emails = computed(() => emailData.value.emails);
    const toggleSelectedEmail = (emailId) => {
      const emailIndex = selectedEmails.value.indexOf(emailId);
      if (emailIndex === -1)
        selectedEmails.value.push(emailId);
      else
        selectedEmails.value.splice(emailIndex, 1);
    };
    const selectAllEmailCheckbox = computed(() => emails.value.length && emails.value.length === selectedEmails.value.length);
    const isSelectAllEmailCheckboxIndeterminate = computed(() => Boolean(selectedEmails.value.length) && emails.value.length !== selectedEmails.value.length);
    const isAllMarkRead = computed(() => {
      return selectedEmails.value.every((emailId) => {
        var _a;
        return (_a = emails.value.find((email) => email.id === emailId)) == null ? void 0 : _a.isRead;
      });
    });
    const selectAllCheckboxUpdate = () => {
      selectedEmails.value = !selectAllEmailCheckbox.value ? emails.value.map((email) => email.id) : [];
    };
    const openedEmail = ref(null);
    const emailViewMeta = computed(() => {
      const returnValue = {
        hasNextEmail: false,
        hasPreviousEmail: false
      };
      if (openedEmail.value) {
        const openedEmailIndex = emails.value.findIndex((e) => {
          var _a;
          return e.id === ((_a = openedEmail.value) == null ? void 0 : _a.id);
        });
        returnValue.hasNextEmail = !!emails.value[openedEmailIndex + 1];
        returnValue.hasPreviousEmail = !!emails.value[openedEmailIndex - 1];
      }
      return returnValue;
    });
    const refreshOpenedEmail = async () => {
      await fetchEmails();
      if (openedEmail.value)
        openedEmail.value = emails.value.find((e) => {
          var _a;
          return e.id === ((_a = openedEmail.value) == null ? void 0 : _a.id);
        });
    };
    const handleActionClick = async (action, emailIds = selectedEmails.value) => {
      selectedEmails.value = [];
      if (!emailIds.length)
        return;
      if (action === "trash")
        await updateEmails(emailIds, { isDeleted: true });
      else if (action === "spam")
        await updateEmails(emailIds, { folder: "spam" });
      else if (action === "unread")
        await updateEmails(emailIds, { isRead: false });
      else if (action === "read")
        await updateEmails(emailIds, { isRead: true });
      else if (action === "star")
        await updateEmails(emailIds, { isStarred: true });
      else if (action === "unstar")
        await updateEmails(emailIds, { isStarred: false });
      if (openedEmail.value)
        refreshOpenedEmail();
      else
        await fetchEmails();
    };
    const handleMoveMailsTo = async (action) => {
      await moveSelectedEmailTo(action, selectedEmails.value);
      await fetchEmails();
    };
    const handleEmailLabels = async (labelTitle) => {
      await updateEmailLabels(selectedEmails.value, labelTitle);
      await fetchEmails();
    };
    const changeOpenedEmail = (dir) => {
      if (!openedEmail.value)
        return;
      const openedEmailIndex = emails.value.findIndex((e) => {
        var _a;
        return e.id === ((_a = openedEmail.value) == null ? void 0 : _a.id);
      });
      const newEmailIndex = dir === "previous" ? openedEmailIndex - 1 : openedEmailIndex + 1;
      openedEmail.value = emails.value[newEmailIndex];
    };
    const openEmail = async (email) => {
      openedEmail.value = email;
      await handleActionClick("read", [email.id]);
    };
    watch(() => route.params, () => {
      selectedEmails.value = [];
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_MoreBtn = _sfc_main$4;
      _push(ssrRenderComponent(VLayout, mergeProps({
        style: { "min-block-size": "100%" },
        class: "email-app-layout"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(isLeftSidebarOpen),
              "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
              absolute: "",
              touchless: "",
              location: "start",
              temporary: _ctx.$vuetify.display.mdAndDown
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    onToggleComposeDialogVisibility: ($event) => isComposeDialogVisible.value = !unref(isComposeDialogVisible)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      onToggleComposeDialogVisibility: ($event) => isComposeDialogVisible.value = !unref(isComposeDialogVisible)
                    }, null, 8, ["onToggleComposeDialogVisibility"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              email: unref(openedEmail),
              "email-meta": unref(emailViewMeta),
              onRefresh: refreshOpenedEmail,
              onNavigated: changeOpenedEmail,
              onClose: ($event) => openedEmail.value = null,
              onTrash: ($event) => handleActionClick("trash", unref(openedEmail) ? [unref(openedEmail).id] : []),
              onUnread: ($event) => handleActionClick("unread", unref(openedEmail) ? [unref(openedEmail).id] : []),
              onStar: ($event) => handleActionClick("star", unref(openedEmail) ? [unref(openedEmail).id] : []),
              onUnstar: ($event) => handleActionClick("unstar", unref(openedEmail) ? [unref(openedEmail).id] : [])
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    class: "email-content-list h-100 d-flex flex-column"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_IconBtn, {
                          class: "d-lg-none ms-3",
                          onClick: ($event) => isLeftSidebarOpen.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-menu-line" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "ri-menu-line" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          density: "default",
                          class: "email-search px-1 flex-grow-1",
                          placeholder: "Search mail"
                        }, {
                          "prepend-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "disabled",
                                size: "22",
                                icon: "ri-search-line",
                                class: "me-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "disabled",
                                  size: "22",
                                  icon: "ri-search-line",
                                  class: "me-2"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<div class="py-2 px-4 d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCheckbox, {
                          "model-value": unref(selectAllEmailCheckbox),
                          indeterminate: unref(isSelectAllEmailCheckboxIndeterminate),
                          class: "me-1",
                          "onUpdate:modelValue": selectAllCheckboxUpdate
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="w-100 d-flex align-center action-bar-actions gap-1" style="${ssrRenderStyle({
                          visibility: unref(isSelectAllEmailCheckboxIndeterminate) || unref(selectAllEmailCheckbox) ? void 0 : "hidden"
                        })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_IconBtn, {
                          style: ("filter" in unref(route).params ? unref(route).params.filter !== "trashed" : true) ? null : { display: "none" },
                          onClick: ($event) => handleActionClick("trash")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Delete Mail `);
                                  } else {
                                    return [
                                      createTextVNode(" Delete Mail ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete Mail ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_IconBtn, {
                          onClick: ($event) => unref(isAllMarkRead) ? handleActionClick("unread") : handleActionClick("read")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                }, null, 8, ["icon"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read"), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_IconBtn, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-folder-line" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Folder `);
                                  } else {
                                    return [
                                      createTextVNode(" Folder ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VMenu, { activator: "parent" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, { density: "compact" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(emailMoveToFolderActions), (moveTo) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              class: [
                                                unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                                "align-center"
                                              ],
                                              href: "#",
                                              onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: moveTo.icon,
                                                    class: "me-2",
                                                    size: "20"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: moveTo.icon,
                                                      class: "me-2",
                                                      size: "20"
                                                    }, null, 8, ["icon"])
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, { class: "text-capitalize" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(moveTo.action)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(moveTo.action), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(moveTo.action), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: moveTo.title,
                                                class: [
                                                  unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                                  "align-center"
                                                ],
                                                href: "#",
                                                onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: moveTo.icon,
                                                    class: "me-2",
                                                    size: "20"
                                                  }, null, 8, ["icon"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(moveTo.action), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["class", "onClick"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, { density: "compact" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: moveTo.title,
                                              class: [
                                                unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                                "align-center"
                                              ],
                                              href: "#",
                                              onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: moveTo.icon,
                                                  class: "me-2",
                                                  size: "20"
                                                }, null, 8, ["icon"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(moveTo.action), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"]);
                                          }), 128))
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
                                createVNode(VIcon, { icon: "ri-folder-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Folder ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, { density: "compact" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: moveTo.title,
                                            class: [
                                              unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                              "align-center"
                                            ],
                                            href: "#",
                                            onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: moveTo.icon,
                                                class: "me-2",
                                                size: "20"
                                              }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(moveTo.action), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"]);
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_IconBtn, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-price-tag-3-line" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Label `);
                                  } else {
                                    return [
                                      createTextVNode(" Label ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VMenu, { activator: "parent" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, { density: "compact" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(labels), (label) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: label.title,
                                              href: "#",
                                              onClick: ($event) => handleEmailLabels(label.title)
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBadge, {
                                                    inline: "",
                                                    color: unref(resolveLabelColor)(label.title),
                                                    dot: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBadge, {
                                                      inline: "",
                                                      color: unref(resolveLabelColor)(label.title),
                                                      dot: ""
                                                    }, null, 8, ["color"])
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(label.title)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(label.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(label.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: label.title,
                                                href: "#",
                                                onClick: ($event) => handleEmailLabels(label.title)
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VBadge, {
                                                    inline: "",
                                                    color: unref(resolveLabelColor)(label.title),
                                                    dot: ""
                                                  }, null, 8, ["color"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(label.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, { density: "compact" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: label.title,
                                              href: "#",
                                              onClick: ($event) => handleEmailLabels(label.title)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VBadge, {
                                                  inline: "",
                                                  color: unref(resolveLabelColor)(label.title),
                                                  dot: ""
                                                }, null, 8, ["color"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(label.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128))
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
                                createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Label ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, { density: "compact" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: label.title,
                                            href: "#",
                                            onClick: ($event) => handleEmailLabels(label.title)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VBadge, {
                                                inline: "",
                                                color: unref(resolveLabelColor)(label.title),
                                                dot: ""
                                              }, null, 8, ["color"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(label.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
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
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_IconBtn, {
                          class: "me-1",
                          onClick: unref(fetchEmails)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-refresh-line" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "ri-refresh-line" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MoreBtn, { class: "text-medium-emphasis" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(PerfectScrollbar), {
                          tag: "ul",
                          options: { wheelPropagation: false },
                          class: "email-list"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(emails), (email) => {
                                var _a;
                                _push5(`<li style="${ssrRenderStyle(((_a = unref(emails)) == null ? void 0 : _a.length) ? null : { display: "none" })}" class="${ssrRenderClass([[{ "email-read": email.isRead }], "email-item d-flex align-center pa-4 gap-2 cursor-pointer"])}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VCheckbox, {
                                  "model-value": unref(selectedEmails).includes(email.id),
                                  class: "flex-shrink-0",
                                  "onUpdate:modelValue": ($event) => toggleSelectedEmail(email.id),
                                  onClick: () => {
                                  }
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  color: email.isStarred ? "warning" : "default",
                                  onClick: ($event) => handleActionClick(email.isStarred ? "unstar" : "star", [email.id])
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-star-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-star-line" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VAvatar, { size: "32" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        src: email.from.avatar,
                                        alt: email.from.name
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          src: email.from.avatar,
                                          alt: email.from.name
                                        }, null, 8, ["src", "alt"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h6 class="text-h6"${_scopeId4}>${ssrInterpolate(email.from.name)}</h6><span class="text-body-2 truncate"${_scopeId4}>${ssrInterpolate(email.subject)}</span>`);
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(`<div class="${ssrRenderClass([_ctx.$vuetify.display.xs ? "d-none" : "", "email-meta align-center gap-2"])}"${_scopeId4}><!--[-->`);
                                ssrRenderList(email.labels, (label) => {
                                  _push5(ssrRenderComponent(VIcon, {
                                    key: label,
                                    icon: "ri-circle-fill",
                                    size: "10",
                                    color: unref(resolveLabelColor)(label)
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--><span class="text-sm text-disabled"${_scopeId4}>${ssrInterpolate(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(email.time))}</span></div><div class="email-actions d-none"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  onClick: ($event) => handleActionClick("trash", [email.id])
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Delete Mail `);
                                          } else {
                                            return [
                                              createTextVNode(" Delete Mail ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Delete Mail ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  class: "mx-2",
                                  onClick: ($event) => handleActionClick(email.isRead ? "unread" : "read", [email.id])
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(email.isRead ? "Mark as Unread" : "Mark as Read")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                        }, null, 8, ["icon"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  onClick: ($event) => handleActionClick("spam", [email.id])
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-error-warning-line" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Move to Spam `);
                                          } else {
                                            return [
                                              createTextVNode(" Move to Spam ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-error-warning-line" }),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Move to Spam ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></li>`);
                              });
                              _push5(`<!--]--><li style="${ssrRenderStyle(!unref(emails).length ? null : { display: "none" })}" class="py-4 px-5 text-center"${_scopeId4}><span class="text-high-emphasis"${_scopeId4}>No items found.</span></li>`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(emails), (email) => {
                                  var _a;
                                  return withDirectives((openBlock(), createBlock("li", {
                                    key: email.id,
                                    class: ["email-item d-flex align-center pa-4 gap-2 cursor-pointer", [{ "email-read": email.isRead }]],
                                    onClick: ($event) => openEmail(email)
                                  }, [
                                    createVNode(VCheckbox, {
                                      "model-value": unref(selectedEmails).includes(email.id),
                                      class: "flex-shrink-0",
                                      "onUpdate:modelValue": ($event) => toggleSelectedEmail(email.id),
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                                    createVNode(_component_IconBtn, {
                                      color: email.isStarred ? "warning" : "default",
                                      onClick: withModifiers(($event) => handleActionClick(email.isStarred ? "unstar" : "star", [email.id]), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-star-line" })
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]),
                                    createVNode(VAvatar, { size: "32" }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: email.from.avatar,
                                          alt: email.from.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(email.from.name), 1),
                                    createVNode("span", { class: "text-body-2 truncate" }, toDisplayString(email.subject), 1),
                                    createVNode(VSpacer),
                                    createVNode("div", {
                                      class: ["email-meta align-center gap-2", _ctx.$vuetify.display.xs ? "d-none" : ""]
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(email.labels, (label) => {
                                        return openBlock(), createBlock(VIcon, {
                                          key: label,
                                          icon: "ri-circle-fill",
                                          size: "10",
                                          color: unref(resolveLabelColor)(label)
                                        }, null, 8, ["color"]);
                                      }), 128)),
                                      createVNode("span", { class: "text-sm text-disabled" }, toDisplayString(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(email.time)), 1)
                                    ], 2),
                                    createVNode("div", { class: "email-actions d-none" }, [
                                      createVNode(_component_IconBtn, {
                                        onClick: withModifiers(($event) => handleActionClick("trash", [email.id]), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Delete Mail ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_IconBtn, {
                                        class: "mx-2",
                                        onClick: withModifiers(($event) => handleActionClick(email.isRead ? "unread" : "read", [email.id]), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                          }, null, 8, ["icon"]),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_IconBtn, {
                                        onClick: withModifiers(($event) => handleActionClick("spam", [email.id]), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-error-warning-line" }),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Move to Spam ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ], 10, ["onClick"])), [
                                    [vShow, (_a = unref(emails)) == null ? void 0 : _a.length]
                                  ]);
                                }), 128)),
                                withDirectives(createVNode("li", { class: "py-4 px-5 text-center" }, [
                                  createVNode("span", { class: "text-high-emphasis" }, "No items found.")
                                ], 512), [
                                  [vShow, !unref(emails).length]
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_IconBtn, {
                              class: "d-lg-none ms-3",
                              onClick: ($event) => isLeftSidebarOpen.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-menu-line" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VTextField, {
                              modelValue: unref(q),
                              "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                              density: "default",
                              class: "email-search px-1 flex-grow-1",
                              placeholder: "Search mail"
                            }, {
                              "prepend-inner": withCtx(() => [
                                createVNode(VIcon, {
                                  color: "disabled",
                                  size: "22",
                                  icon: "ri-search-line",
                                  class: "me-2"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VDivider),
                          createVNode("div", { class: "py-2 px-4 d-flex align-center" }, [
                            createVNode(VCheckbox, {
                              "model-value": unref(selectAllEmailCheckbox),
                              indeterminate: unref(isSelectAllEmailCheckboxIndeterminate),
                              class: "me-1",
                              "onUpdate:modelValue": selectAllCheckboxUpdate
                            }, null, 8, ["model-value", "indeterminate"]),
                            createVNode("div", {
                              class: "w-100 d-flex align-center action-bar-actions gap-1",
                              style: {
                                visibility: unref(isSelectAllEmailCheckboxIndeterminate) || unref(selectAllEmailCheckbox) ? void 0 : "hidden"
                              }
                            }, [
                              withDirectives(createVNode(_component_IconBtn, {
                                onClick: ($event) => handleActionClick("trash")
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete Mail ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]), [
                                [vShow, "filter" in unref(route).params ? unref(route).params.filter !== "trashed" : true]
                              ]),
                              createVNode(_component_IconBtn, {
                                onClick: ($event) => unref(isAllMarkRead) ? handleActionClick("unread") : handleActionClick("read")
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                  }, null, 8, ["icon"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_IconBtn, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-folder-line" }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Folder ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VMenu, { activator: "parent" }, {
                                    default: withCtx(() => [
                                      createVNode(VList, { density: "compact" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: moveTo.title,
                                              class: [
                                                unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                                "align-center"
                                              ],
                                              href: "#",
                                              onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: moveTo.icon,
                                                  class: "me-2",
                                                  size: "20"
                                                }, null, 8, ["icon"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(moveTo.action), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_IconBtn, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Label ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VMenu, { activator: "parent" }, {
                                    default: withCtx(() => [
                                      createVNode(VList, { density: "compact" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: label.title,
                                              href: "#",
                                              onClick: ($event) => handleEmailLabels(label.title)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VBadge, {
                                                  inline: "",
                                                  color: unref(resolveLabelColor)(label.title),
                                                  dot: ""
                                                }, null, 8, ["color"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(label.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 4),
                            createVNode(VSpacer),
                            createVNode(_component_IconBtn, {
                              class: "me-1",
                              onClick: unref(fetchEmails)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-refresh-line" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_MoreBtn, { class: "text-medium-emphasis" })
                          ]),
                          createVNode(VDivider),
                          createVNode(unref(PerfectScrollbar), {
                            tag: "ul",
                            options: { wheelPropagation: false },
                            class: "email-list"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(emails), (email) => {
                                var _a;
                                return withDirectives((openBlock(), createBlock("li", {
                                  key: email.id,
                                  class: ["email-item d-flex align-center pa-4 gap-2 cursor-pointer", [{ "email-read": email.isRead }]],
                                  onClick: ($event) => openEmail(email)
                                }, [
                                  createVNode(VCheckbox, {
                                    "model-value": unref(selectedEmails).includes(email.id),
                                    class: "flex-shrink-0",
                                    "onUpdate:modelValue": ($event) => toggleSelectedEmail(email.id),
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                                  createVNode(_component_IconBtn, {
                                    color: email.isStarred ? "warning" : "default",
                                    onClick: withModifiers(($event) => handleActionClick(email.isStarred ? "unstar" : "star", [email.id]), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-star-line" })
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"]),
                                  createVNode(VAvatar, { size: "32" }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: email.from.avatar,
                                        alt: email.from.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(email.from.name), 1),
                                  createVNode("span", { class: "text-body-2 truncate" }, toDisplayString(email.subject), 1),
                                  createVNode(VSpacer),
                                  createVNode("div", {
                                    class: ["email-meta align-center gap-2", _ctx.$vuetify.display.xs ? "d-none" : ""]
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(email.labels, (label) => {
                                      return openBlock(), createBlock(VIcon, {
                                        key: label,
                                        icon: "ri-circle-fill",
                                        size: "10",
                                        color: unref(resolveLabelColor)(label)
                                      }, null, 8, ["color"]);
                                    }), 128)),
                                    createVNode("span", { class: "text-sm text-disabled" }, toDisplayString(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(email.time)), 1)
                                  ], 2),
                                  createVNode("div", { class: "email-actions d-none" }, [
                                    createVNode(_component_IconBtn, {
                                      onClick: withModifiers(($event) => handleActionClick("trash", [email.id]), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Delete Mail ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_IconBtn, {
                                      class: "mx-2",
                                      onClick: withModifiers(($event) => handleActionClick(email.isRead ? "unread" : "read", [email.id]), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                        }, null, 8, ["icon"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_IconBtn, {
                                      onClick: withModifiers(($event) => handleActionClick("spam", [email.id]), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-error-warning-line" }),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Move to Spam ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ], 10, ["onClick"])), [
                                  [vShow, (_a = unref(emails)) == null ? void 0 : _a.length]
                                ]);
                              }), 128)),
                              withDirectives(createVNode("li", { class: "py-4 px-5 text-center" }, [
                                createVNode("span", { class: "text-high-emphasis" }, "No items found.")
                              ], 512), [
                                [vShow, !unref(emails).length]
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    style: unref(isComposeDialogVisible) ? null : { display: "none" },
                    onClose: ($event) => isComposeDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      class: "email-content-list h-100 d-flex flex-column"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(_component_IconBtn, {
                            class: "d-lg-none ms-3",
                            onClick: ($event) => isLeftSidebarOpen.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-menu-line" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VTextField, {
                            modelValue: unref(q),
                            "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                            density: "default",
                            class: "email-search px-1 flex-grow-1",
                            placeholder: "Search mail"
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode(VIcon, {
                                color: "disabled",
                                size: "22",
                                icon: "ri-search-line",
                                class: "me-2"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VDivider),
                        createVNode("div", { class: "py-2 px-4 d-flex align-center" }, [
                          createVNode(VCheckbox, {
                            "model-value": unref(selectAllEmailCheckbox),
                            indeterminate: unref(isSelectAllEmailCheckboxIndeterminate),
                            class: "me-1",
                            "onUpdate:modelValue": selectAllCheckboxUpdate
                          }, null, 8, ["model-value", "indeterminate"]),
                          createVNode("div", {
                            class: "w-100 d-flex align-center action-bar-actions gap-1",
                            style: {
                              visibility: unref(isSelectAllEmailCheckboxIndeterminate) || unref(selectAllEmailCheckbox) ? void 0 : "hidden"
                            }
                          }, [
                            withDirectives(createVNode(_component_IconBtn, {
                              onClick: ($event) => handleActionClick("trash")
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete Mail ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]), [
                              [vShow, "filter" in unref(route).params ? unref(route).params.filter !== "trashed" : true]
                            ]),
                            createVNode(_component_IconBtn, {
                              onClick: ($event) => unref(isAllMarkRead) ? handleActionClick("unread") : handleActionClick("read")
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                }, null, 8, ["icon"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-folder-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Folder ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, { density: "compact" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: moveTo.title,
                                            class: [
                                              unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                              "align-center"
                                            ],
                                            href: "#",
                                            onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: moveTo.icon,
                                                class: "me-2",
                                                size: "20"
                                              }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(moveTo.action), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Label ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, { density: "compact" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: label.title,
                                            href: "#",
                                            onClick: ($event) => handleEmailLabels(label.title)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VBadge, {
                                                inline: "",
                                                color: unref(resolveLabelColor)(label.title),
                                                dot: ""
                                              }, null, 8, ["color"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(label.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 4),
                          createVNode(VSpacer),
                          createVNode(_component_IconBtn, {
                            class: "me-1",
                            onClick: unref(fetchEmails)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-refresh-line" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_MoreBtn, { class: "text-medium-emphasis" })
                        ]),
                        createVNode(VDivider),
                        createVNode(unref(PerfectScrollbar), {
                          tag: "ul",
                          options: { wheelPropagation: false },
                          class: "email-list"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(emails), (email) => {
                              var _a;
                              return withDirectives((openBlock(), createBlock("li", {
                                key: email.id,
                                class: ["email-item d-flex align-center pa-4 gap-2 cursor-pointer", [{ "email-read": email.isRead }]],
                                onClick: ($event) => openEmail(email)
                              }, [
                                createVNode(VCheckbox, {
                                  "model-value": unref(selectedEmails).includes(email.id),
                                  class: "flex-shrink-0",
                                  "onUpdate:modelValue": ($event) => toggleSelectedEmail(email.id),
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                                createVNode(_component_IconBtn, {
                                  color: email.isStarred ? "warning" : "default",
                                  onClick: withModifiers(($event) => handleActionClick(email.isStarred ? "unstar" : "star", [email.id]), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-star-line" })
                                  ]),
                                  _: 2
                                }, 1032, ["color", "onClick"]),
                                createVNode(VAvatar, { size: "32" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: email.from.avatar,
                                      alt: email.from.name
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("h6", { class: "text-h6" }, toDisplayString(email.from.name), 1),
                                createVNode("span", { class: "text-body-2 truncate" }, toDisplayString(email.subject), 1),
                                createVNode(VSpacer),
                                createVNode("div", {
                                  class: ["email-meta align-center gap-2", _ctx.$vuetify.display.xs ? "d-none" : ""]
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(email.labels, (label) => {
                                    return openBlock(), createBlock(VIcon, {
                                      key: label,
                                      icon: "ri-circle-fill",
                                      size: "10",
                                      color: unref(resolveLabelColor)(label)
                                    }, null, 8, ["color"]);
                                  }), 128)),
                                  createVNode("span", { class: "text-sm text-disabled" }, toDisplayString(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(email.time)), 1)
                                ], 2),
                                createVNode("div", { class: "email-actions d-none" }, [
                                  createVNode(_component_IconBtn, {
                                    onClick: withModifiers(($event) => handleActionClick("trash", [email.id]), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Delete Mail ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_IconBtn, {
                                    class: "mx-2",
                                    onClick: withModifiers(($event) => handleActionClick(email.isRead ? "unread" : "read", [email.id]), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                      }, null, 8, ["icon"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_IconBtn, {
                                    onClick: withModifiers(($event) => handleActionClick("spam", [email.id]), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-error-warning-line" }),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Move to Spam ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ], 10, ["onClick"])), [
                                [vShow, (_a = unref(emails)) == null ? void 0 : _a.length]
                              ]);
                            }), 128)),
                            withDirectives(createVNode("li", { class: "py-4 px-5 text-center" }, [
                              createVNode("span", { class: "text-high-emphasis" }, "No items found.")
                            ], 512), [
                              [vShow, !unref(emails).length]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(_sfc_main$3, {
                      onClose: ($event) => isComposeDialogVisible.value = false
                    }, null, 8, ["onClose"]), [
                      [vShow, unref(isComposeDialogVisible)]
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
                absolute: "",
                touchless: "",
                location: "start",
                temporary: _ctx.$vuetify.display.mdAndDown
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, {
                    onToggleComposeDialogVisibility: ($event) => isComposeDialogVisible.value = !unref(isComposeDialogVisible)
                  }, null, 8, ["onToggleComposeDialogVisibility"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "temporary"]),
              createVNode(_sfc_main$1, {
                email: unref(openedEmail),
                "email-meta": unref(emailViewMeta),
                onRefresh: refreshOpenedEmail,
                onNavigated: changeOpenedEmail,
                onClose: ($event) => openedEmail.value = null,
                onTrash: ($event) => handleActionClick("trash", unref(openedEmail) ? [unref(openedEmail).id] : []),
                onUnread: ($event) => handleActionClick("unread", unref(openedEmail) ? [unref(openedEmail).id] : []),
                onStar: ($event) => handleActionClick("star", unref(openedEmail) ? [unref(openedEmail).id] : []),
                onUnstar: ($event) => handleActionClick("unstar", unref(openedEmail) ? [unref(openedEmail).id] : [])
              }, null, 8, ["email", "email-meta", "onClose", "onTrash", "onUnread", "onStar", "onUnstar"]),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    class: "email-content-list h-100 d-flex flex-column"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_IconBtn, {
                          class: "d-lg-none ms-3",
                          onClick: ($event) => isLeftSidebarOpen.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-menu-line" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VTextField, {
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          density: "default",
                          class: "email-search px-1 flex-grow-1",
                          placeholder: "Search mail"
                        }, {
                          "prepend-inner": withCtx(() => [
                            createVNode(VIcon, {
                              color: "disabled",
                              size: "22",
                              icon: "ri-search-line",
                              class: "me-2"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VDivider),
                      createVNode("div", { class: "py-2 px-4 d-flex align-center" }, [
                        createVNode(VCheckbox, {
                          "model-value": unref(selectAllEmailCheckbox),
                          indeterminate: unref(isSelectAllEmailCheckboxIndeterminate),
                          class: "me-1",
                          "onUpdate:modelValue": selectAllCheckboxUpdate
                        }, null, 8, ["model-value", "indeterminate"]),
                        createVNode("div", {
                          class: "w-100 d-flex align-center action-bar-actions gap-1",
                          style: {
                            visibility: unref(isSelectAllEmailCheckboxIndeterminate) || unref(selectAllEmailCheckbox) ? void 0 : "hidden"
                          }
                        }, [
                          withDirectives(createVNode(_component_IconBtn, {
                            onClick: ($event) => handleActionClick("trash")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete Mail ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]), [
                            [vShow, "filter" in unref(route).params ? unref(route).params.filter !== "trashed" : true]
                          ]),
                          createVNode(_component_IconBtn, {
                            onClick: ($event) => unref(isAllMarkRead) ? handleActionClick("unread") : handleActionClick("read")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                              }, null, 8, ["icon"]),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(isAllMarkRead) ? "Mark as Unread" : "Mark as Read"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-folder-line" }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Folder ")
                                ]),
                                _: 1
                              }),
                              createVNode(VMenu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(VList, { density: "compact" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(emailMoveToFolderActions), (moveTo) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: moveTo.title,
                                          class: [
                                            unref(shallShowMoveToActionFor)(moveTo.action) ? "d-flex" : "d-none",
                                            "align-center"
                                          ],
                                          href: "#",
                                          onClick: ($event) => handleMoveMailsTo(moveTo.action)
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: moveTo.icon,
                                              class: "me-2",
                                              size: "20"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(moveTo.action), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-price-tag-3-line" }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Label ")
                                ]),
                                _: 1
                              }),
                              createVNode(VMenu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(VList, { density: "compact" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: label.title,
                                          href: "#",
                                          onClick: ($event) => handleEmailLabels(label.title)
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VBadge, {
                                              inline: "",
                                              color: unref(resolveLabelColor)(label.title),
                                              dot: ""
                                            }, null, 8, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "ms-2 text-capitalize" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(label.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ], 4),
                        createVNode(VSpacer),
                        createVNode(_component_IconBtn, {
                          class: "me-1",
                          onClick: unref(fetchEmails)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-refresh-line" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_MoreBtn, { class: "text-medium-emphasis" })
                      ]),
                      createVNode(VDivider),
                      createVNode(unref(PerfectScrollbar), {
                        tag: "ul",
                        options: { wheelPropagation: false },
                        class: "email-list"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(emails), (email) => {
                            var _a;
                            return withDirectives((openBlock(), createBlock("li", {
                              key: email.id,
                              class: ["email-item d-flex align-center pa-4 gap-2 cursor-pointer", [{ "email-read": email.isRead }]],
                              onClick: ($event) => openEmail(email)
                            }, [
                              createVNode(VCheckbox, {
                                "model-value": unref(selectedEmails).includes(email.id),
                                class: "flex-shrink-0",
                                "onUpdate:modelValue": ($event) => toggleSelectedEmail(email.id),
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                              createVNode(_component_IconBtn, {
                                color: email.isStarred ? "warning" : "default",
                                onClick: withModifiers(($event) => handleActionClick(email.isStarred ? "unstar" : "star", [email.id]), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-star-line" })
                                ]),
                                _: 2
                              }, 1032, ["color", "onClick"]),
                              createVNode(VAvatar, { size: "32" }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: email.from.avatar,
                                    alt: email.from.name
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("h6", { class: "text-h6" }, toDisplayString(email.from.name), 1),
                              createVNode("span", { class: "text-body-2 truncate" }, toDisplayString(email.subject), 1),
                              createVNode(VSpacer),
                              createVNode("div", {
                                class: ["email-meta align-center gap-2", _ctx.$vuetify.display.xs ? "d-none" : ""]
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(email.labels, (label) => {
                                  return openBlock(), createBlock(VIcon, {
                                    key: label,
                                    icon: "ri-circle-fill",
                                    size: "10",
                                    color: unref(resolveLabelColor)(label)
                                  }, null, 8, ["color"]);
                                }), 128)),
                                createVNode("span", { class: "text-sm text-disabled" }, toDisplayString(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(email.time)), 1)
                              ], 2),
                              createVNode("div", { class: "email-actions d-none" }, [
                                createVNode(_component_IconBtn, {
                                  onClick: withModifiers(($event) => handleActionClick("trash", [email.id]), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Delete Mail ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_IconBtn, {
                                  class: "mx-2",
                                  onClick: withModifiers(($event) => handleActionClick(email.isRead ? "unread" : "read", [email.id]), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: email.isRead ? "ri-mail-line" : "ri-mail-open-line"
                                    }, null, 8, ["icon"]),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(email.isRead ? "Mark as Unread" : "Mark as Read"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_IconBtn, {
                                  onClick: withModifiers(($event) => handleActionClick("spam", [email.id]), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-error-warning-line" }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Move to Spam ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ], 10, ["onClick"])), [
                              [vShow, (_a = unref(emails)) == null ? void 0 : _a.length]
                            ]);
                          }), 128)),
                          withDirectives(createVNode("li", { class: "py-4 px-5 text-center" }, [
                            createVNode("span", { class: "text-high-emphasis" }, "No items found.")
                          ], 512), [
                            [vShow, !unref(emails).length]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  withDirectives(createVNode(_sfc_main$3, {
                    onClose: ($event) => isComposeDialogVisible.value = false
                  }, null, 8, ["onClose"]), [
                    [vShow, unref(isComposeDialogVisible)]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
