import { _ as _sfc_main$2 } from "./AppDateTimePicker-B0c_dYDs.js";
import { _ as _sfc_main$1 } from "./TiptapEditor-BF8KOFhK.js";
import { ref, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useFileDialog, useObjectUrl, useDropZone } from "@vueuse/core";
import { _ as _export_sfc, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, b as VCardActions } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-text-align";
import "@tiptap/extension-underline";
import "@tiptap/starter-kit";
import "@tiptap/vue-3";
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
import "vue3-perfect-scrollbar";
import "@antfu/utils";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./forwardRefs-IZGbB77j.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const optionCounter = ref(1);
    const dropZoneRef = ref();
    const fileData = ref([]);
    const { open, onChange } = useFileDialog({ accept: "image/*" });
    function onDrop(DroppedFiles) {
      DroppedFiles == null ? void 0 : DroppedFiles.forEach((file) => {
        if (file.type.slice(0, 6) !== "image/") {
          alert("Only image files are allowed");
          return;
        }
        fileData.value.push({
          file,
          url: useObjectUrl(file).value ?? ""
        });
      });
    }
    onChange((selectedFiles) => {
      if (!selectedFiles)
        return;
      for (const file of selectedFiles) {
        fileData.value.push({
          file,
          url: useObjectUrl(file).value ?? ""
        });
      }
    });
    useDropZone(dropZoneRef, onDrop);
    const content = ref(`<p>
      This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
    </p>
    <p>
      The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
    </p>`);
    const activeTab = ref("Restock");
    const shippingList = [
      {
        desc: "You'll be responsible for product delivery.Any damage or delay during shipping may cost you a Damage fee",
        title: "Fulfilled by Seller",
        value: "Fulfilled by Seller"
      },
      {
        desc: "Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.",
        title: "Fulfilled by Company name",
        value: "Fulfilled by Company name"
      }
    ];
    const shippingType = ref("Fulfilled by Company name");
    const deliveryType = ref("Worldwide delivery");
    const selectedAttrs = ref([
      "Biodegradable",
      "Expiry Date"
    ]);
    const inventoryTabsData = [
      {
        icon: "ri-add-line",
        title: "Restock",
        value: "Restock"
      },
      {
        icon: "ri-car-line",
        title: "Shipping",
        value: "Shipping"
      },
      {
        icon: "ri-global-line",
        title: "Global Delivery",
        value: "Global Delivery"
      },
      {
        icon: "ri-link-m",
        title: "Attributes",
        value: "Attributes"
      },
      {
        icon: "ri-lock-unlock-line",
        title: "Advanced",
        value: "Advanced"
      }
    ];
    const inStock = ref(true);
    const isTaxable = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TiptapEditor = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a981e1a4><div class="d-flex flex-wrap justify-space-between gap-4 mb-6" data-v-a981e1a4><div class="d-flex flex-column justify-center" data-v-a981e1a4><h4 class="text-h4 mb-1" data-v-a981e1a4> Add a new product </h4><p class="text-body-1 mb-0" data-v-a981e1a4> Orders placed across your store </p></div><div class="d-flex gap-4 align-center flex-wrap" data-v-a981e1a4>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discard `);
          } else {
            return [
              createTextVNode(" Discard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Save Draft `);
          } else {
            return [
              createTextVNode(" Save Draft ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Publish Product`);
          } else {
            return [
              createTextVNode("Publish Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { md: "8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    title: "Product Information"
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
                                            label: "Product Name",
                                            placeholder: "iPhone 14"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Product Name",
                                              placeholder: "iPhone 14"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "SKU",
                                            placeholder: "FXSK123U"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "SKU",
                                              placeholder: "FXSK123U"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Barcode",
                                            placeholder: "0123-4567"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Barcode",
                                              placeholder: "0123-4567"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VLabel, { class: "mb-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Description (Optional) `);
                                              } else {
                                                return [
                                                  createTextVNode(" Description (Optional) ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_TiptapEditor, {
                                            modelValue: content.value,
                                            "onUpdate:modelValue": ($event) => content.value = $event,
                                            class: "border rounded-lg"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VLabel, { class: "mb-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Description (Optional) ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_TiptapEditor, {
                                              modelValue: content.value,
                                              "onUpdate:modelValue": ($event) => content.value = $event,
                                              class: "border rounded-lg"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            label: "Product Name",
                                            placeholder: "iPhone 14"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "SKU",
                                            placeholder: "FXSK123U"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Barcode",
                                            placeholder: "0123-4567"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, { class: "mb-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Description (Optional) ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TiptapEditor, {
                                            modelValue: content.value,
                                            "onUpdate:modelValue": ($event) => content.value = $event,
                                            class: "border rounded-lg"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          label: "Product Name",
                                          placeholder: "iPhone 14"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "SKU",
                                          placeholder: "FXSK123U"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Barcode",
                                          placeholder: "0123-4567"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, { class: "mb-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Description (Optional) ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_TiptapEditor, {
                                          modelValue: content.value,
                                          "onUpdate:modelValue": ($event) => content.value = $event,
                                          class: "border rounded-lg"
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
                                        label: "Product Name",
                                        placeholder: "iPhone 14"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "SKU",
                                        placeholder: "FXSK123U"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Barcode",
                                        placeholder: "0123-4567"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, { class: "mb-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Description (Optional) ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TiptapEditor, {
                                        modelValue: content.value,
                                        "onUpdate:modelValue": ($event) => content.value = $event,
                                        class: "border rounded-lg"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(VCard, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Product Image `);
                            } else {
                              return [
                                createTextVNode(" Product Image ")
                              ];
                            }
                          }),
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 text-primary cursor-pointer" data-v-a981e1a4${_scopeId4}> Add Media from URL </h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Add Media from URL ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex" data-v-a981e1a4${_scopeId4}><div class="w-full h-auto relative" data-v-a981e1a4${_scopeId4}><div class="cursor-pointer" data-v-a981e1a4${_scopeId4}>`);
                              if (fileData.value.length === 0) {
                                _push5(`<div class="d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone" data-v-a981e1a4${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  color: "secondary",
                                  rounded: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-upload-2-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-upload-2-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<h4 class="text-h4 text-wrap" data-v-a981e1a4${_scopeId4}> Drag and Drop Your Image Here. </h4><span class="text-disabled" data-v-a981e1a4${_scopeId4}>or</span>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "outlined",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Browse Images `);
                                    } else {
                                      return [
                                        createTextVNode(" Browse Images ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<div class="d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap" data-v-a981e1a4${_scopeId4}>`);
                                _push5(ssrRenderComponent(VRow, { class: "match-height w-100" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(fileData.value, (item, index2) => {
                                        _push6(ssrRenderComponent(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCard, { ripple: false }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VCardText, {
                                                      class: "d-flex flex-column",
                                                      onClick: () => {
                                                      }
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VImg, {
                                                            src: item.url,
                                                            width: "200px",
                                                            height: "150px",
                                                            class: "w-100 mx-auto"
                                                          }, null, _parent9, _scopeId8));
                                                          _push9(`<div class="mt-2" data-v-a981e1a4${_scopeId8}><span class="clamp-text text-wrap" data-v-a981e1a4${_scopeId8}>${ssrInterpolate(item.file.name)}</span><span data-v-a981e1a4${_scopeId8}>${ssrInterpolate(item.file.size / 1e3)} KB </span></div>`);
                                                        } else {
                                                          return [
                                                            createVNode(VImg, {
                                                              src: item.url,
                                                              width: "200px",
                                                              height: "150px",
                                                              class: "w-100 mx-auto"
                                                            }, null, 8, ["src"]),
                                                            createVNode("div", { class: "mt-2" }, [
                                                              createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                              createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                            ])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VCardActions, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VBtn, {
                                                            variant: "text",
                                                            block: "",
                                                            onClick: ($event) => fileData.value.splice(index2, 1)
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` Remove File `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" Remove File ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VBtn, {
                                                              variant: "text",
                                                              block: "",
                                                              onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Remove File ")
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VCardText, {
                                                        class: "d-flex flex-column",
                                                        onClick: withModifiers(() => {
                                                        }, ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            src: item.url,
                                                            width: "200px",
                                                            height: "150px",
                                                            class: "w-100 mx-auto"
                                                          }, null, 8, ["src"]),
                                                          createVNode("div", { class: "mt-2" }, [
                                                            createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                            createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]),
                                                      createVNode(VCardActions, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            variant: "text",
                                                            block: "",
                                                            onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Remove File ")
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
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCard, { ripple: false }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, {
                                                      class: "d-flex flex-column",
                                                      onClick: withModifiers(() => {
                                                      }, ["stop"])
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: item.url,
                                                          width: "200px",
                                                          height: "150px",
                                                          class: "w-100 mx-auto"
                                                        }, null, 8, ["src"]),
                                                        createVNode("div", { class: "mt-2" }, [
                                                          createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                          createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]),
                                                    createVNode(VCardActions, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          variant: "text",
                                                          block: "",
                                                          onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Remove File ")
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(fileData.value, (item, index2) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: index2,
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, { ripple: false }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, {
                                                    class: "d-flex flex-column",
                                                    onClick: withModifiers(() => {
                                                    }, ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: item.url,
                                                        width: "200px",
                                                        height: "150px",
                                                        class: "w-100 mx-auto"
                                                      }, null, 8, ["src"]),
                                                      createVNode("div", { class: "mt-2" }, [
                                                        createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                        createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]),
                                                  createVNode(VCardActions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        variant: "text",
                                                        block: "",
                                                        onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Remove File ")
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
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              }
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("div", { class: "w-full h-auto relative" }, [
                                    createVNode("div", {
                                      ref_key: "dropZoneRef",
                                      ref: dropZoneRef,
                                      class: "cursor-pointer",
                                      onClick: () => unref(open)()
                                    }, [
                                      fileData.value.length === 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                                      }, [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          color: "secondary",
                                          rounded: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "ri-upload-2-line" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h4", { class: "text-h4 text-wrap" }, " Drag and Drop Your Image Here. "),
                                        createVNode("span", { class: "text-disabled" }, "or"),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Browse Images ")
                                          ]),
                                          _: 1
                                        })
                                      ])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                                      }, [
                                        createVNode(VRow, { class: "match-height w-100" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(fileData.value, (item, index2) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: index2,
                                                cols: "12",
                                                sm: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, { ripple: false }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, {
                                                        class: "d-flex flex-column",
                                                        onClick: withModifiers(() => {
                                                        }, ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            src: item.url,
                                                            width: "200px",
                                                            height: "150px",
                                                            class: "w-100 mx-auto"
                                                          }, null, 8, ["src"]),
                                                          createVNode("div", { class: "mt-2" }, [
                                                            createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                            createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]),
                                                      createVNode(VCardActions, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            variant: "text",
                                                            block: "",
                                                            onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Remove File ")
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
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            title: withCtx(() => [
                              createTextVNode(" Product Image ")
                            ]),
                            append: withCtx(() => [
                              createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Add Media from URL ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex" }, [
                                createVNode("div", { class: "w-full h-auto relative" }, [
                                  createVNode("div", {
                                    ref_key: "dropZoneRef",
                                    ref: dropZoneRef,
                                    class: "cursor-pointer",
                                    onClick: () => unref(open)()
                                  }, [
                                    fileData.value.length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                                    }, [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        color: "secondary",
                                        rounded: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-upload-2-line" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h4", { class: "text-h4 text-wrap" }, " Drag and Drop Your Image Here. "),
                                      createVNode("span", { class: "text-disabled" }, "or"),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Browse Images ")
                                        ]),
                                        _: 1
                                      })
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                                    }, [
                                      createVNode(VRow, { class: "match-height w-100" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(fileData.value, (item, index2) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: index2,
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, { ripple: false }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, {
                                                      class: "d-flex flex-column",
                                                      onClick: withModifiers(() => {
                                                      }, ["stop"])
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: item.url,
                                                          width: "200px",
                                                          height: "150px",
                                                          class: "w-100 mx-auto"
                                                        }, null, 8, ["src"]),
                                                        createVNode("div", { class: "mt-2" }, [
                                                          createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                          createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]),
                                                    createVNode(VCardActions, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          variant: "text",
                                                          block: "",
                                                          onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Remove File ")
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
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]))
                                  ], 8, ["onClick"])
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
                  _push3(ssrRenderComponent(VCard, {
                    title: "Variants",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(optionCounter.value, (i) => {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSelect, {
                                              items: ["Size", "Color", "Weight", "Smell"],
                                              placeholder: "Select Variant",
                                              label: "Select Variant"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                items: ["Size", "Color", "Weight", "Smell"],
                                                placeholder: "Select Variant",
                                                label: "Select Variant"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "8"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextField, {
                                              label: "Variant Value",
                                              type: "number",
                                              placeholder: "Enter Variant Value"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                label: "Variant Value",
                                                type: "number",
                                                placeholder: "Enter Variant Value"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              items: ["Size", "Color", "Weight", "Smell"],
                                              placeholder: "Select Variant",
                                              label: "Select Variant"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "8"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Variant Value",
                                              type: "number",
                                              placeholder: "Enter Variant Value"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(VBtn, {
                                class: "mt-6",
                                "prepend-icon": "ri-add-line",
                                onClick: ($event) => optionCounter.value++
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Add another option `);
                                  } else {
                                    return [
                                      createTextVNode(" Add another option ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(optionCounter.value, (i) => {
                                  return openBlock(), createBlock(VRow, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            items: ["Size", "Color", "Weight", "Smell"],
                                            placeholder: "Select Variant",
                                            label: "Select Variant"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Variant Value",
                                            type: "number",
                                            placeholder: "Enter Variant Value"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  });
                                }), 128)),
                                createVNode(VBtn, {
                                  class: "mt-6",
                                  "prepend-icon": "ri-add-line",
                                  onClick: ($event) => optionCounter.value++
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add another option ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(optionCounter.value, (i) => {
                                return openBlock(), createBlock(VRow, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          items: ["Size", "Color", "Weight", "Smell"],
                                          placeholder: "Select Variant",
                                          label: "Select Variant"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "8"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Variant Value",
                                          type: "number",
                                          placeholder: "Enter Variant Value"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                });
                              }), 128)),
                              createVNode(VBtn, {
                                class: "mt-6",
                                "prepend-icon": "ri-add-line",
                                onClick: ($event) => optionCounter.value++
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add another option ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    title: "Inventory",
                    class: "inventory-card"
                  }, {
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
                                      md: "4",
                                      class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="pe-3" data-v-a981e1a4${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VTabs, {
                                            modelValue: activeTab.value,
                                            "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                            direction: "vertical",
                                            color: "primary",
                                            class: "v-tabs-pill"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(inventoryTabsData, (tab, index2) => {
                                                  _push8(ssrRenderComponent(VTab, {
                                                    key: index2,
                                                    value: tab.value
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, {
                                                          icon: tab.icon,
                                                          class: "me-2"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`<span data-v-a981e1a4${_scopeId8}>${ssrInterpolate(tab.title)}</span>`);
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, {
                                                            icon: tab.icon,
                                                            class: "me-2"
                                                          }, null, 8, ["icon"]),
                                                          createVNode("span", null, toDisplayString(tab.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                                    return createVNode(VTab, {
                                                      key: index2,
                                                      value: tab.value
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: tab.icon,
                                                          class: "me-2"
                                                        }, null, 8, ["icon"]),
                                                        createVNode("span", null, toDisplayString(tab.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "pe-3" }, [
                                              createVNode(VTabs, {
                                                modelValue: activeTab.value,
                                                "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                                direction: "vertical",
                                                color: "primary",
                                                class: "v-tabs-pill"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                                    return createVNode(VTab, {
                                                      key: index2,
                                                      value: tab.value
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: tab.icon,
                                                          class: "me-2"
                                                        }, null, 8, ["icon"]),
                                                        createVNode("span", null, toDisplayString(tab.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "8",
                                      class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VWindow, {
                                            modelValue: activeTab.value,
                                            "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                            class: "w-100",
                                            touch: false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VWindowItem, { value: "Restock" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="d-flex flex-column gap-y-4 ps-md-3" data-v-a981e1a4${_scopeId8}><div class="text-body-1 font-weight-medium" data-v-a981e1a4${_scopeId8}> Options </div><div class="d-flex gap-x-4 align-center" data-v-a981e1a4${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        label: "Add to stock",
                                                        placeholder: "100",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Confirm `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Confirm ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div><div class="d-flex flex-column gap-2 text-high-emphasis" data-v-a981e1a4${_scopeId8}><div data-v-a981e1a4${_scopeId8}> Product in stock now: <span class="font-weight-medium" data-v-a981e1a4${_scopeId8}>54</span></div><div data-v-a981e1a4${_scopeId8}> Product in transit: <span class="font-weight-medium" data-v-a981e1a4${_scopeId8}>390</span></div><div data-v-a981e1a4${_scopeId8}> Last time restocked: <span class="font-weight-medium" data-v-a981e1a4${_scopeId8}>24th June, 2022</span></div><div data-v-a981e1a4${_scopeId8}> Total stock over lifetime: <span class="font-weight-medium" data-v-a981e1a4${_scopeId8}>2,430</span></div></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                          createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                          createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                            createVNode(VTextField, {
                                                              label: "Add to stock",
                                                              placeholder: "100",
                                                              density: "compact"
                                                            }),
                                                            createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Confirm ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                            createVNode("div", null, [
                                                              createTextVNode(" Product in stock now: "),
                                                              createVNode("span", { class: "font-weight-medium" }, "54")
                                                            ]),
                                                            createVNode("div", null, [
                                                              createTextVNode(" Product in transit: "),
                                                              createVNode("span", { class: "font-weight-medium" }, "390")
                                                            ]),
                                                            createVNode("div", null, [
                                                              createTextVNode(" Last time restocked: "),
                                                              createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                            ]),
                                                            createVNode("div", null, [
                                                              createTextVNode(" Total stock over lifetime: "),
                                                              createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                            ])
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VWindowItem, { value: "Shipping" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VRadioGroup, {
                                                        modelValue: shippingType.value,
                                                        "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                        class: "ps-md-3"
                                                      }, {
                                                        label: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="font-weight-medium mb-1" data-v-a981e1a4${_scopeId9}>Shipping Type</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                            ];
                                                          }
                                                        }),
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(shippingList, (item) => {
                                                              _push10(ssrRenderComponent(VRadio, {
                                                                key: item.value,
                                                                value: item.value,
                                                                class: "mb-4",
                                                                inline: ""
                                                              }, {
                                                                label: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<div data-v-a981e1a4${_scopeId10}><div class="text-high-emphasis font-weight-medium mb-1" data-v-a981e1a4${_scopeId10}>${ssrInterpolate(item.title)}</div><div class="text-sm" data-v-a981e1a4${_scopeId10}>${ssrInterpolate(item.desc)}</div></div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("div", null, [
                                                                        createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                                        createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                                      ])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                                return createVNode(VRadio, {
                                                                  key: item.value,
                                                                  value: item.value,
                                                                  class: "mb-4",
                                                                  inline: ""
                                                                }, {
                                                                  label: withCtx(() => [
                                                                    createVNode("div", null, [
                                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                                      createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                                    ])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VRadioGroup, {
                                                          modelValue: shippingType.value,
                                                          "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                          class: "ps-md-3"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                          ]),
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                              return createVNode(VRadio, {
                                                                key: item.value,
                                                                value: item.value,
                                                                class: "mb-4",
                                                                inline: ""
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                                    createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                                  ])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["value"]);
                                                            }), 64))
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VWindowItem, { value: "Global Delivery" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="ps-md-3" data-v-a981e1a4${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(VRadioGroup, {
                                                        modelValue: deliveryType.value,
                                                        "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                      }, {
                                                        label: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="font-weight-medium mb-1" data-v-a981e1a4${_scopeId9}>Global Delivery</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                            ];
                                                          }
                                                        }),
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VRadio, {
                                                              value: "Worldwide delivery",
                                                              class: "mb-4"
                                                            }, {
                                                              label: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`<div data-v-a981e1a4${_scopeId10}><div class="text-high-emphasis font-weight-medium mb-1" data-v-a981e1a4${_scopeId10}> Worldwide delivery </div><div class="text-sm" data-v-a981e1a4${_scopeId10}> Only available with Shipping method: <span class="text-primary" data-v-a981e1a4${_scopeId10}> Fulfilled by Company name </span></div></div>`);
                                                                } else {
                                                                  return [
                                                                    createVNode("div", null, [
                                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                                      createVNode("div", { class: "text-sm" }, [
                                                                        createTextVNode(" Only available with Shipping method: "),
                                                                        createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                                      ])
                                                                    ])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VRadio, {
                                                              value: "Selected Countries",
                                                              class: "mb-4"
                                                            }, {
                                                              label: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`<div data-v-a981e1a4${_scopeId10}><div class="text-high-emphasis font-weight-medium mb-1" data-v-a981e1a4${_scopeId10}> Selected Countries </div>`);
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    placeholder: "USA",
                                                                    density: "compact",
                                                                    style: { "min-inline-size": "200px" }
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(`</div>`);
                                                                } else {
                                                                  return [
                                                                    createVNode("div", null, [
                                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                                      createVNode(VTextField, {
                                                                        placeholder: "USA",
                                                                        density: "compact",
                                                                        style: { "min-inline-size": "200px" }
                                                                      })
                                                                    ])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VRadio, null, {
                                                              label: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`<div data-v-a981e1a4${_scopeId10}><div class="text-high-emphasis font-weight-medium mb-1" data-v-a981e1a4${_scopeId10}> Local delivery </div><div class="text-sm" data-v-a981e1a4${_scopeId10}> Deliver to your country of residence <span class="text-primary" data-v-a981e1a4${_scopeId10}> Change profile address </span></div></div>`);
                                                                } else {
                                                                  return [
                                                                    createVNode("div", null, [
                                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                                      createVNode("div", { class: "text-sm" }, [
                                                                        createTextVNode(" Deliver to your country of residence "),
                                                                        createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                                      ])
                                                                    ])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VRadio, {
                                                                value: "Worldwide delivery",
                                                                class: "mb-4"
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                                    createVNode("div", { class: "text-sm" }, [
                                                                      createTextVNode(" Only available with Shipping method: "),
                                                                      createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                                    ])
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VRadio, {
                                                                value: "Selected Countries",
                                                                class: "mb-4"
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                                    createVNode(VTextField, {
                                                                      placeholder: "USA",
                                                                      density: "compact",
                                                                      style: { "min-inline-size": "200px" }
                                                                    })
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VRadio, null, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                                    createVNode("div", { class: "text-sm" }, [
                                                                      createTextVNode(" Deliver to your country of residence "),
                                                                      createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                                    ])
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "ps-md-3" }, [
                                                          createVNode(VRadioGroup, {
                                                            modelValue: deliveryType.value,
                                                            "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VRadio, {
                                                                value: "Worldwide delivery",
                                                                class: "mb-4"
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                                    createVNode("div", { class: "text-sm" }, [
                                                                      createTextVNode(" Only available with Shipping method: "),
                                                                      createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                                    ])
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VRadio, {
                                                                value: "Selected Countries",
                                                                class: "mb-4"
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                                    createVNode(VTextField, {
                                                                      placeholder: "USA",
                                                                      density: "compact",
                                                                      style: { "min-inline-size": "200px" }
                                                                    })
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VRadio, null, {
                                                                label: withCtx(() => [
                                                                  createVNode("div", null, [
                                                                    createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                                    createVNode("div", { class: "text-sm" }, [
                                                                      createTextVNode(" Deliver to your country of residence "),
                                                                      createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                                    ])
                                                                  ])
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VWindowItem, { value: "Attributes" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="ps-md-3" data-v-a981e1a4${_scopeId8}><div class="mb-2 text-base font-weight-medium" data-v-a981e1a4${_scopeId8}> Attributes </div><div data-v-a981e1a4${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        label: "Fragile Product",
                                                        value: "Fragile Product",
                                                        class: "ps-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Biodegradable",
                                                        label: "Biodegradable",
                                                        class: "ps-3 mb-1"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Frozen Product",
                                                        class: "ps-3 mb-1"
                                                      }, {
                                                        label: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<div class="d-flex flex-column mb-1" data-v-a981e1a4${_scopeId9}><div data-v-a981e1a4${_scopeId9}>Frozen Product</div>`);
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              placeholder: "40 C",
                                                              type: "number",
                                                              density: "compact",
                                                              style: { "max-inline-size": "250px" }
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(`</div>`);
                                                          } else {
                                                            return [
                                                              createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                createVNode("div", null, "Frozen Product"),
                                                                createVNode(VTextField, {
                                                                  placeholder: "40 C",
                                                                  type: "number",
                                                                  density: "compact",
                                                                  style: { "max-inline-size": "250px" }
                                                                })
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Expiry Date",
                                                        class: "ps-3"
                                                      }, {
                                                        label: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<div class="d-flex flex-column mb-1" data-v-a981e1a4${_scopeId9}><div data-v-a981e1a4${_scopeId9}>Expiry Date of Product</div>`);
                                                            _push10(ssrRenderComponent(_component_AppDateTimePicker, {
                                                              "model-value": "2025-06-14",
                                                              density: "compact",
                                                              placeholder: "Select a Date"
                                                            }, null, _parent10, _scopeId9));
                                                            _push10(`</div>`);
                                                          } else {
                                                            return [
                                                              createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                createVNode("div", null, "Expiry Date of Product"),
                                                                createVNode(_component_AppDateTimePicker, {
                                                                  "model-value": "2025-06-14",
                                                                  density: "compact",
                                                                  placeholder: "Select a Date"
                                                                })
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "ps-md-3" }, [
                                                          createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                          createVNode("div", null, [
                                                            createVNode(VCheckbox, {
                                                              modelValue: selectedAttrs.value,
                                                              "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                              label: "Fragile Product",
                                                              value: "Fragile Product",
                                                              class: "ps-3"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VCheckbox, {
                                                              modelValue: selectedAttrs.value,
                                                              "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                              value: "Biodegradable",
                                                              label: "Biodegradable",
                                                              class: "ps-3 mb-1"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VCheckbox, {
                                                              modelValue: selectedAttrs.value,
                                                              "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                              value: "Frozen Product",
                                                              class: "ps-3 mb-1"
                                                            }, {
                                                              label: withCtx(() => [
                                                                createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                  createVNode("div", null, "Frozen Product"),
                                                                  createVNode(VTextField, {
                                                                    placeholder: "40 C",
                                                                    type: "number",
                                                                    density: "compact",
                                                                    style: { "max-inline-size": "250px" }
                                                                  })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                            createVNode(VCheckbox, {
                                                              modelValue: selectedAttrs.value,
                                                              "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                              value: "Expiry Date",
                                                              class: "ps-3"
                                                            }, {
                                                              label: withCtx(() => [
                                                                createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                  createVNode("div", null, "Expiry Date of Product"),
                                                                  createVNode(_component_AppDateTimePicker, {
                                                                    "model-value": "2025-06-14",
                                                                    density: "compact",
                                                                    placeholder: "Select a Date"
                                                                  })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VWindowItem, { value: "Advanced" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="ps-md-3" data-v-a981e1a4${_scopeId8}><div class="mb-3 text-base font-weight-medium" data-v-a981e1a4${_scopeId8}> Advanced </div>`);
                                                      _push9(ssrRenderComponent(VRow, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCol, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "7"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VSelect, {
                                                                    style: { "min-inline-size": "200px" },
                                                                    label: "Product ID Type",
                                                                    placeholder: "Select Product Type",
                                                                    items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                    density: "compact"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VSelect, {
                                                                      style: { "min-inline-size": "200px" },
                                                                      label: "Product ID Type",
                                                                      placeholder: "Select Product Type",
                                                                      items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                      density: "compact"
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "5"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    label: "Product Id",
                                                                    placeholder: "100023",
                                                                    type: "number",
                                                                    density: "compact"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      label: "Product Id",
                                                                      placeholder: "100023",
                                                                      type: "number",
                                                                      density: "compact"
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "7"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSelect, {
                                                                    style: { "min-inline-size": "200px" },
                                                                    label: "Product ID Type",
                                                                    placeholder: "Select Product Type",
                                                                    items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                    density: "compact"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "5"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    label: "Product Id",
                                                                    placeholder: "100023",
                                                                    type: "number",
                                                                    density: "compact"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "ps-md-3" }, [
                                                          createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                          createVNode(VRow, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "7"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSelect, {
                                                                    style: { "min-inline-size": "200px" },
                                                                    label: "Product ID Type",
                                                                    placeholder: "Select Product Type",
                                                                    items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                    density: "compact"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "5"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    label: "Product Id",
                                                                    placeholder: "100023",
                                                                    type: "number",
                                                                    density: "compact"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VWindowItem, { value: "Restock" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                        createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                        createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                          createVNode(VTextField, {
                                                            label: "Add to stock",
                                                            placeholder: "100",
                                                            density: "compact"
                                                          }),
                                                          createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Confirm ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                          createVNode("div", null, [
                                                            createTextVNode(" Product in stock now: "),
                                                            createVNode("span", { class: "font-weight-medium" }, "54")
                                                          ]),
                                                          createVNode("div", null, [
                                                            createTextVNode(" Product in transit: "),
                                                            createVNode("span", { class: "font-weight-medium" }, "390")
                                                          ]),
                                                          createVNode("div", null, [
                                                            createTextVNode(" Last time restocked: "),
                                                            createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                          ]),
                                                          createVNode("div", null, [
                                                            createTextVNode(" Total stock over lifetime: "),
                                                            createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                          ])
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VWindowItem, { value: "Shipping" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VRadioGroup, {
                                                        modelValue: shippingType.value,
                                                        "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                        class: "ps-md-3"
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                        ]),
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                            return createVNode(VRadio, {
                                                              key: item.value,
                                                              value: item.value,
                                                              class: "mb-4",
                                                              inline: ""
                                                            }, {
                                                              label: withCtx(() => [
                                                                createVNode("div", null, [
                                                                  createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                                  createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                                ])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value"]);
                                                          }), 64))
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VWindowItem, { value: "Global Delivery" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "ps-md-3" }, [
                                                        createVNode(VRadioGroup, {
                                                          modelValue: deliveryType.value,
                                                          "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VRadio, {
                                                              value: "Worldwide delivery",
                                                              class: "mb-4"
                                                            }, {
                                                              label: withCtx(() => [
                                                                createVNode("div", null, [
                                                                  createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                                  createVNode("div", { class: "text-sm" }, [
                                                                    createTextVNode(" Only available with Shipping method: "),
                                                                    createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                                  ])
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VRadio, {
                                                              value: "Selected Countries",
                                                              class: "mb-4"
                                                            }, {
                                                              label: withCtx(() => [
                                                                createVNode("div", null, [
                                                                  createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                                  createVNode(VTextField, {
                                                                    placeholder: "USA",
                                                                    density: "compact",
                                                                    style: { "min-inline-size": "200px" }
                                                                  })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VRadio, null, {
                                                              label: withCtx(() => [
                                                                createVNode("div", null, [
                                                                  createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                                  createVNode("div", { class: "text-sm" }, [
                                                                    createTextVNode(" Deliver to your country of residence "),
                                                                    createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                                  ])
                                                                ])
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
                                                  createVNode(VWindowItem, { value: "Attributes" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "ps-md-3" }, [
                                                        createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                        createVNode("div", null, [
                                                          createVNode(VCheckbox, {
                                                            modelValue: selectedAttrs.value,
                                                            "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                            label: "Fragile Product",
                                                            value: "Fragile Product",
                                                            class: "ps-3"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VCheckbox, {
                                                            modelValue: selectedAttrs.value,
                                                            "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                            value: "Biodegradable",
                                                            label: "Biodegradable",
                                                            class: "ps-3 mb-1"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VCheckbox, {
                                                            modelValue: selectedAttrs.value,
                                                            "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                            value: "Frozen Product",
                                                            class: "ps-3 mb-1"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                createVNode("div", null, "Frozen Product"),
                                                                createVNode(VTextField, {
                                                                  placeholder: "40 C",
                                                                  type: "number",
                                                                  density: "compact",
                                                                  style: { "max-inline-size": "250px" }
                                                                })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                          createVNode(VCheckbox, {
                                                            modelValue: selectedAttrs.value,
                                                            "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                            value: "Expiry Date",
                                                            class: "ps-3"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                                createVNode("div", null, "Expiry Date of Product"),
                                                                createVNode(_component_AppDateTimePicker, {
                                                                  "model-value": "2025-06-14",
                                                                  density: "compact",
                                                                  placeholder: "Select a Date"
                                                                })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VWindowItem, { value: "Advanced" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "ps-md-3" }, [
                                                        createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "7"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VSelect, {
                                                                  style: { "min-inline-size": "200px" },
                                                                  label: "Product ID Type",
                                                                  placeholder: "Select Product Type",
                                                                  items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                  density: "compact"
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "5"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  label: "Product Id",
                                                                  placeholder: "100023",
                                                                  type: "number",
                                                                  density: "compact"
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VWindow, {
                                              modelValue: activeTab.value,
                                              "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                              class: "w-100",
                                              touch: false
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VWindowItem, { value: "Restock" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                      createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                      createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                        createVNode(VTextField, {
                                                          label: "Add to stock",
                                                          placeholder: "100",
                                                          density: "compact"
                                                        }),
                                                        createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Confirm ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                        createVNode("div", null, [
                                                          createTextVNode(" Product in stock now: "),
                                                          createVNode("span", { class: "font-weight-medium" }, "54")
                                                        ]),
                                                        createVNode("div", null, [
                                                          createTextVNode(" Product in transit: "),
                                                          createVNode("span", { class: "font-weight-medium" }, "390")
                                                        ]),
                                                        createVNode("div", null, [
                                                          createTextVNode(" Last time restocked: "),
                                                          createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                        ]),
                                                        createVNode("div", null, [
                                                          createTextVNode(" Total stock over lifetime: "),
                                                          createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                        ])
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VWindowItem, { value: "Shipping" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VRadioGroup, {
                                                      modelValue: shippingType.value,
                                                      "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                      class: "ps-md-3"
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                      ]),
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                          return createVNode(VRadio, {
                                                            key: item.value,
                                                            value: item.value,
                                                            class: "mb-4",
                                                            inline: ""
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("div", null, [
                                                                createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                                createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value"]);
                                                        }), 64))
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VWindowItem, { value: "Global Delivery" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "ps-md-3" }, [
                                                      createVNode(VRadioGroup, {
                                                        modelValue: deliveryType.value,
                                                        "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VRadio, {
                                                            value: "Worldwide delivery",
                                                            class: "mb-4"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("div", null, [
                                                                createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                                createVNode("div", { class: "text-sm" }, [
                                                                  createTextVNode(" Only available with Shipping method: "),
                                                                  createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                                ])
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VRadio, {
                                                            value: "Selected Countries",
                                                            class: "mb-4"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createVNode("div", null, [
                                                                createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                                createVNode(VTextField, {
                                                                  placeholder: "USA",
                                                                  density: "compact",
                                                                  style: { "min-inline-size": "200px" }
                                                                })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VRadio, null, {
                                                            label: withCtx(() => [
                                                              createVNode("div", null, [
                                                                createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                                createVNode("div", { class: "text-sm" }, [
                                                                  createTextVNode(" Deliver to your country of residence "),
                                                                  createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                                ])
                                                              ])
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
                                                createVNode(VWindowItem, { value: "Attributes" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "ps-md-3" }, [
                                                      createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                      createVNode("div", null, [
                                                        createVNode(VCheckbox, {
                                                          modelValue: selectedAttrs.value,
                                                          "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                          label: "Fragile Product",
                                                          value: "Fragile Product",
                                                          class: "ps-3"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VCheckbox, {
                                                          modelValue: selectedAttrs.value,
                                                          "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                          value: "Biodegradable",
                                                          label: "Biodegradable",
                                                          class: "ps-3 mb-1"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VCheckbox, {
                                                          modelValue: selectedAttrs.value,
                                                          "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                          value: "Frozen Product",
                                                          class: "ps-3 mb-1"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                              createVNode("div", null, "Frozen Product"),
                                                              createVNode(VTextField, {
                                                                placeholder: "40 C",
                                                                type: "number",
                                                                density: "compact",
                                                                style: { "max-inline-size": "250px" }
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        createVNode(VCheckbox, {
                                                          modelValue: selectedAttrs.value,
                                                          "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                          value: "Expiry Date",
                                                          class: "ps-3"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                              createVNode("div", null, "Expiry Date of Product"),
                                                              createVNode(_component_AppDateTimePicker, {
                                                                "model-value": "2025-06-14",
                                                                density: "compact",
                                                                placeholder: "Select a Date"
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VWindowItem, { value: "Advanced" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "ps-md-3" }, [
                                                      createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "7"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VSelect, {
                                                                style: { "min-inline-size": "200px" },
                                                                label: "Product ID Type",
                                                                placeholder: "Select Product Type",
                                                                items: ["ISBN", "UPC", "EAN", "JAN"],
                                                                density: "compact"
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "5"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                label: "Product Id",
                                                                placeholder: "100023",
                                                                type: "number",
                                                                density: "compact"
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4",
                                        class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "pe-3" }, [
                                            createVNode(VTabs, {
                                              modelValue: activeTab.value,
                                              "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                              direction: "vertical",
                                              color: "primary",
                                              class: "v-tabs-pill"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                                  return createVNode(VTab, {
                                                    key: index2,
                                                    value: tab.value
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: tab.icon,
                                                        class: "me-2"
                                                      }, null, 8, ["icon"]),
                                                      createVNode("span", null, toDisplayString(tab.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "8",
                                        class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VWindow, {
                                            modelValue: activeTab.value,
                                            "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                            class: "w-100",
                                            touch: false
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VWindowItem, { value: "Restock" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                    createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                    createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                      createVNode(VTextField, {
                                                        label: "Add to stock",
                                                        placeholder: "100",
                                                        density: "compact"
                                                      }),
                                                      createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Confirm ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                      createVNode("div", null, [
                                                        createTextVNode(" Product in stock now: "),
                                                        createVNode("span", { class: "font-weight-medium" }, "54")
                                                      ]),
                                                      createVNode("div", null, [
                                                        createTextVNode(" Product in transit: "),
                                                        createVNode("span", { class: "font-weight-medium" }, "390")
                                                      ]),
                                                      createVNode("div", null, [
                                                        createTextVNode(" Last time restocked: "),
                                                        createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                      ]),
                                                      createVNode("div", null, [
                                                        createTextVNode(" Total stock over lifetime: "),
                                                        createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                      ])
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VWindowItem, { value: "Shipping" }, {
                                                default: withCtx(() => [
                                                  createVNode(VRadioGroup, {
                                                    modelValue: shippingType.value,
                                                    "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                    class: "ps-md-3"
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                    ]),
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                        return createVNode(VRadio, {
                                                          key: item.value,
                                                          value: item.value,
                                                          class: "mb-4",
                                                          inline: ""
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("div", null, [
                                                              createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                              createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                            ])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 64))
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VWindowItem, { value: "Global Delivery" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "ps-md-3" }, [
                                                    createVNode(VRadioGroup, {
                                                      modelValue: deliveryType.value,
                                                      "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VRadio, {
                                                          value: "Worldwide delivery",
                                                          class: "mb-4"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("div", null, [
                                                              createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                              createVNode("div", { class: "text-sm" }, [
                                                                createTextVNode(" Only available with Shipping method: "),
                                                                createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                              ])
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VRadio, {
                                                          value: "Selected Countries",
                                                          class: "mb-4"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createVNode("div", null, [
                                                              createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                              createVNode(VTextField, {
                                                                placeholder: "USA",
                                                                density: "compact",
                                                                style: { "min-inline-size": "200px" }
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VRadio, null, {
                                                          label: withCtx(() => [
                                                            createVNode("div", null, [
                                                              createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                              createVNode("div", { class: "text-sm" }, [
                                                                createTextVNode(" Deliver to your country of residence "),
                                                                createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                              ])
                                                            ])
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
                                              createVNode(VWindowItem, { value: "Attributes" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "ps-md-3" }, [
                                                    createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                    createVNode("div", null, [
                                                      createVNode(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        label: "Fragile Product",
                                                        value: "Fragile Product",
                                                        class: "ps-3"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Biodegradable",
                                                        label: "Biodegradable",
                                                        class: "ps-3 mb-1"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Frozen Product",
                                                        class: "ps-3 mb-1"
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                            createVNode("div", null, "Frozen Product"),
                                                            createVNode(VTextField, {
                                                              placeholder: "40 C",
                                                              type: "number",
                                                              density: "compact",
                                                              style: { "max-inline-size": "250px" }
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      createVNode(VCheckbox, {
                                                        modelValue: selectedAttrs.value,
                                                        "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                        value: "Expiry Date",
                                                        class: "ps-3"
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                            createVNode("div", null, "Expiry Date of Product"),
                                                            createVNode(_component_AppDateTimePicker, {
                                                              "model-value": "2025-06-14",
                                                              density: "compact",
                                                              placeholder: "Select a Date"
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VWindowItem, { value: "Advanced" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "ps-md-3" }, [
                                                    createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "7"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              style: { "min-inline-size": "200px" },
                                                              label: "Product ID Type",
                                                              placeholder: "Select Product Type",
                                                              items: ["ISBN", "UPC", "EAN", "JAN"],
                                                              density: "compact"
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "5"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              label: "Product Id",
                                                              placeholder: "100023",
                                                              type: "number",
                                                              density: "compact"
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
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
                                      md: "4",
                                      class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "pe-3" }, [
                                          createVNode(VTabs, {
                                            modelValue: activeTab.value,
                                            "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                            direction: "vertical",
                                            color: "primary",
                                            class: "v-tabs-pill"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                                return createVNode(VTab, {
                                                  key: index2,
                                                  value: tab.value
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: tab.icon,
                                                      class: "me-2"
                                                    }, null, 8, ["icon"]),
                                                    createVNode("span", null, toDisplayString(tab.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "8",
                                      class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VWindow, {
                                          modelValue: activeTab.value,
                                          "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                          class: "w-100",
                                          touch: false
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VWindowItem, { value: "Restock" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                  createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                    createVNode(VTextField, {
                                                      label: "Add to stock",
                                                      placeholder: "100",
                                                      density: "compact"
                                                    }),
                                                    createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Confirm ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                    createVNode("div", null, [
                                                      createTextVNode(" Product in stock now: "),
                                                      createVNode("span", { class: "font-weight-medium" }, "54")
                                                    ]),
                                                    createVNode("div", null, [
                                                      createTextVNode(" Product in transit: "),
                                                      createVNode("span", { class: "font-weight-medium" }, "390")
                                                    ]),
                                                    createVNode("div", null, [
                                                      createTextVNode(" Last time restocked: "),
                                                      createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                    ]),
                                                    createVNode("div", null, [
                                                      createTextVNode(" Total stock over lifetime: "),
                                                      createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, { value: "Shipping" }, {
                                              default: withCtx(() => [
                                                createVNode(VRadioGroup, {
                                                  modelValue: shippingType.value,
                                                  "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                  class: "ps-md-3"
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                  ]),
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                      return createVNode(VRadio, {
                                                        key: item.value,
                                                        value: item.value,
                                                        class: "mb-4",
                                                        inline: ""
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("div", null, [
                                                            createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                            createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 64))
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, { value: "Global Delivery" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "ps-md-3" }, [
                                                  createVNode(VRadioGroup, {
                                                    modelValue: deliveryType.value,
                                                    "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        value: "Worldwide delivery",
                                                        class: "mb-4"
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("div", null, [
                                                            createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                            createVNode("div", { class: "text-sm" }, [
                                                              createTextVNode(" Only available with Shipping method: "),
                                                              createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VRadio, {
                                                        value: "Selected Countries",
                                                        class: "mb-4"
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("div", null, [
                                                            createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                            createVNode(VTextField, {
                                                              placeholder: "USA",
                                                              density: "compact",
                                                              style: { "min-inline-size": "200px" }
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VRadio, null, {
                                                        label: withCtx(() => [
                                                          createVNode("div", null, [
                                                            createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                            createVNode("div", { class: "text-sm" }, [
                                                              createTextVNode(" Deliver to your country of residence "),
                                                              createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                            ])
                                                          ])
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
                                            createVNode(VWindowItem, { value: "Attributes" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "ps-md-3" }, [
                                                  createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                  createVNode("div", null, [
                                                    createVNode(VCheckbox, {
                                                      modelValue: selectedAttrs.value,
                                                      "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                      label: "Fragile Product",
                                                      value: "Fragile Product",
                                                      class: "ps-3"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VCheckbox, {
                                                      modelValue: selectedAttrs.value,
                                                      "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                      value: "Biodegradable",
                                                      label: "Biodegradable",
                                                      class: "ps-3 mb-1"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VCheckbox, {
                                                      modelValue: selectedAttrs.value,
                                                      "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                      value: "Frozen Product",
                                                      class: "ps-3 mb-1"
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                          createVNode("div", null, "Frozen Product"),
                                                          createVNode(VTextField, {
                                                            placeholder: "40 C",
                                                            type: "number",
                                                            density: "compact",
                                                            style: { "max-inline-size": "250px" }
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(VCheckbox, {
                                                      modelValue: selectedAttrs.value,
                                                      "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                      value: "Expiry Date",
                                                      class: "ps-3"
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                          createVNode("div", null, "Expiry Date of Product"),
                                                          createVNode(_component_AppDateTimePicker, {
                                                            "model-value": "2025-06-14",
                                                            density: "compact",
                                                            placeholder: "Select a Date"
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, { value: "Advanced" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "ps-md-3" }, [
                                                  createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "7"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            style: { "min-inline-size": "200px" },
                                                            label: "Product ID Type",
                                                            placeholder: "Select Product Type",
                                                            items: ["ISBN", "UPC", "EAN", "JAN"],
                                                            density: "compact"
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "5"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            label: "Product Id",
                                                            placeholder: "100023",
                                                            type: "number",
                                                            density: "compact"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }, 8, ["class"])
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
                                    md: "4",
                                    class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pe-3" }, [
                                        createVNode(VTabs, {
                                          modelValue: activeTab.value,
                                          "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                          direction: "vertical",
                                          color: "primary",
                                          class: "v-tabs-pill"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                              return createVNode(VTab, {
                                                key: index2,
                                                value: tab.value
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: tab.icon,
                                                    class: "me-2"
                                                  }, null, 8, ["icon"]),
                                                  createVNode("span", null, toDisplayString(tab.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "8",
                                    class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindow, {
                                        modelValue: activeTab.value,
                                        "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                        class: "w-100",
                                        touch: false
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VWindowItem, { value: "Restock" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                                createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                                createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                  createVNode(VTextField, {
                                                    label: "Add to stock",
                                                    placeholder: "100",
                                                    density: "compact"
                                                  }),
                                                  createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Confirm ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                  createVNode("div", null, [
                                                    createTextVNode(" Product in stock now: "),
                                                    createVNode("span", { class: "font-weight-medium" }, "54")
                                                  ]),
                                                  createVNode("div", null, [
                                                    createTextVNode(" Product in transit: "),
                                                    createVNode("span", { class: "font-weight-medium" }, "390")
                                                  ]),
                                                  createVNode("div", null, [
                                                    createTextVNode(" Last time restocked: "),
                                                    createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                  ]),
                                                  createVNode("div", null, [
                                                    createTextVNode(" Total stock over lifetime: "),
                                                    createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                  ])
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, { value: "Shipping" }, {
                                            default: withCtx(() => [
                                              createVNode(VRadioGroup, {
                                                modelValue: shippingType.value,
                                                "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                                class: "ps-md-3"
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                                ]),
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                    return createVNode(VRadio, {
                                                      key: item.value,
                                                      value: item.value,
                                                      class: "mb-4",
                                                      inline: ""
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", null, [
                                                          createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                          createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, { value: "Global Delivery" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "ps-md-3" }, [
                                                createVNode(VRadioGroup, {
                                                  modelValue: deliveryType.value,
                                                  "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      value: "Worldwide delivery",
                                                      class: "mb-4"
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", null, [
                                                          createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                          createVNode("div", { class: "text-sm" }, [
                                                            createTextVNode(" Only available with Shipping method: "),
                                                            createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VRadio, {
                                                      value: "Selected Countries",
                                                      class: "mb-4"
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", null, [
                                                          createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                          createVNode(VTextField, {
                                                            placeholder: "USA",
                                                            density: "compact",
                                                            style: { "min-inline-size": "200px" }
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VRadio, null, {
                                                      label: withCtx(() => [
                                                        createVNode("div", null, [
                                                          createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                          createVNode("div", { class: "text-sm" }, [
                                                            createTextVNode(" Deliver to your country of residence "),
                                                            createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                          ])
                                                        ])
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
                                          createVNode(VWindowItem, { value: "Attributes" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "ps-md-3" }, [
                                                createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                                createVNode("div", null, [
                                                  createVNode(VCheckbox, {
                                                    modelValue: selectedAttrs.value,
                                                    "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                    label: "Fragile Product",
                                                    value: "Fragile Product",
                                                    class: "ps-3"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VCheckbox, {
                                                    modelValue: selectedAttrs.value,
                                                    "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                    value: "Biodegradable",
                                                    label: "Biodegradable",
                                                    class: "ps-3 mb-1"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VCheckbox, {
                                                    modelValue: selectedAttrs.value,
                                                    "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                    value: "Frozen Product",
                                                    class: "ps-3 mb-1"
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                        createVNode("div", null, "Frozen Product"),
                                                        createVNode(VTextField, {
                                                          placeholder: "40 C",
                                                          type: "number",
                                                          density: "compact",
                                                          style: { "max-inline-size": "250px" }
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VCheckbox, {
                                                    modelValue: selectedAttrs.value,
                                                    "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                    value: "Expiry Date",
                                                    class: "ps-3"
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                        createVNode("div", null, "Expiry Date of Product"),
                                                        createVNode(_component_AppDateTimePicker, {
                                                          "model-value": "2025-06-14",
                                                          density: "compact",
                                                          placeholder: "Select a Date"
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, { value: "Advanced" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "ps-md-3" }, [
                                                createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "7"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          style: { "min-inline-size": "200px" },
                                                          label: "Product ID Type",
                                                          placeholder: "Select Product Type",
                                                          items: ["ISBN", "UPC", "EAN", "JAN"],
                                                          density: "compact"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "5"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          label: "Product Id",
                                                          placeholder: "100023",
                                                          type: "number",
                                                          density: "compact"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
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
                      class: "mb-6",
                      title: "Product Information"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Product Name",
                                      placeholder: "iPhone 14"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "SKU",
                                      placeholder: "FXSK123U"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Barcode",
                                      placeholder: "0123-4567"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VLabel, { class: "mb-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Description (Optional) ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TiptapEditor, {
                                      modelValue: content.value,
                                      "onUpdate:modelValue": ($event) => content.value = $event,
                                      class: "border rounded-lg"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCard, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          title: withCtx(() => [
                            createTextVNode(" Product Image ")
                          ]),
                          append: withCtx(() => [
                            createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Add Media from URL ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex" }, [
                              createVNode("div", { class: "w-full h-auto relative" }, [
                                createVNode("div", {
                                  ref_key: "dropZoneRef",
                                  ref: dropZoneRef,
                                  class: "cursor-pointer",
                                  onClick: () => unref(open)()
                                }, [
                                  fileData.value.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                                  }, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      color: "secondary",
                                      rounded: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-upload-2-line" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h4", { class: "text-h4 text-wrap" }, " Drag and Drop Your Image Here. "),
                                    createVNode("span", { class: "text-disabled" }, "or"),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Browse Images ")
                                      ]),
                                      _: 1
                                    })
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                                  }, [
                                    createVNode(VRow, { class: "match-height w-100" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(fileData.value, (item, index2) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: index2,
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, { ripple: false }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, {
                                                    class: "d-flex flex-column",
                                                    onClick: withModifiers(() => {
                                                    }, ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: item.url,
                                                        width: "200px",
                                                        height: "150px",
                                                        class: "w-100 mx-auto"
                                                      }, null, 8, ["src"]),
                                                      createVNode("div", { class: "mt-2" }, [
                                                        createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                        createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]),
                                                  createVNode(VCardActions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        variant: "text",
                                                        block: "",
                                                        onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Remove File ")
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
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      title: "Variants",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(optionCounter.value, (i) => {
                              return openBlock(), createBlock(VRow, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        items: ["Size", "Color", "Weight", "Smell"],
                                        placeholder: "Select Variant",
                                        label: "Select Variant"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Variant Value",
                                        type: "number",
                                        placeholder: "Enter Variant Value"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              });
                            }), 128)),
                            createVNode(VBtn, {
                              class: "mt-6",
                              "prepend-icon": "ri-add-line",
                              onClick: ($event) => optionCounter.value++
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add another option ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      title: "Inventory",
                      class: "inventory-card"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pe-3" }, [
                                      createVNode(VTabs, {
                                        modelValue: activeTab.value,
                                        "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                        direction: "vertical",
                                        color: "primary",
                                        class: "v-tabs-pill"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                            return createVNode(VTab, {
                                              key: index2,
                                              value: tab.value
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: tab.icon,
                                                  class: "me-2"
                                                }, null, 8, ["icon"]),
                                                createVNode("span", null, toDisplayString(tab.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8",
                                  class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindow, {
                                      modelValue: activeTab.value,
                                      "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                      class: "w-100",
                                      touch: false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VWindowItem, { value: "Restock" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                              createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                              createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                                createVNode(VTextField, {
                                                  label: "Add to stock",
                                                  placeholder: "100",
                                                  density: "compact"
                                                }),
                                                createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Confirm ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                                createVNode("div", null, [
                                                  createTextVNode(" Product in stock now: "),
                                                  createVNode("span", { class: "font-weight-medium" }, "54")
                                                ]),
                                                createVNode("div", null, [
                                                  createTextVNode(" Product in transit: "),
                                                  createVNode("span", { class: "font-weight-medium" }, "390")
                                                ]),
                                                createVNode("div", null, [
                                                  createTextVNode(" Last time restocked: "),
                                                  createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                                ]),
                                                createVNode("div", null, [
                                                  createTextVNode(" Total stock over lifetime: "),
                                                  createVNode("span", { class: "font-weight-medium" }, "2,430")
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, { value: "Shipping" }, {
                                          default: withCtx(() => [
                                            createVNode(VRadioGroup, {
                                              modelValue: shippingType.value,
                                              "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                              class: "ps-md-3"
                                            }, {
                                              label: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                              ]),
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                  return createVNode(VRadio, {
                                                    key: item.value,
                                                    value: item.value,
                                                    class: "mb-4",
                                                    inline: ""
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                        createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, { value: "Global Delivery" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "ps-md-3" }, [
                                              createVNode(VRadioGroup, {
                                                modelValue: deliveryType.value,
                                                "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VRadio, {
                                                    value: "Worldwide delivery",
                                                    class: "mb-4"
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                        createVNode("div", { class: "text-sm" }, [
                                                          createTextVNode(" Only available with Shipping method: "),
                                                          createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VRadio, {
                                                    value: "Selected Countries",
                                                    class: "mb-4"
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                        createVNode(VTextField, {
                                                          placeholder: "USA",
                                                          density: "compact",
                                                          style: { "min-inline-size": "200px" }
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VRadio, null, {
                                                    label: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                        createVNode("div", { class: "text-sm" }, [
                                                          createTextVNode(" Deliver to your country of residence "),
                                                          createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                        ])
                                                      ])
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
                                        createVNode(VWindowItem, { value: "Attributes" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "ps-md-3" }, [
                                              createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                              createVNode("div", null, [
                                                createVNode(VCheckbox, {
                                                  modelValue: selectedAttrs.value,
                                                  "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                  label: "Fragile Product",
                                                  value: "Fragile Product",
                                                  class: "ps-3"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VCheckbox, {
                                                  modelValue: selectedAttrs.value,
                                                  "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                  value: "Biodegradable",
                                                  label: "Biodegradable",
                                                  class: "ps-3 mb-1"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VCheckbox, {
                                                  modelValue: selectedAttrs.value,
                                                  "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                  value: "Frozen Product",
                                                  class: "ps-3 mb-1"
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                      createVNode("div", null, "Frozen Product"),
                                                      createVNode(VTextField, {
                                                        placeholder: "40 C",
                                                        type: "number",
                                                        density: "compact",
                                                        style: { "max-inline-size": "250px" }
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VCheckbox, {
                                                  modelValue: selectedAttrs.value,
                                                  "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                  value: "Expiry Date",
                                                  class: "ps-3"
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                      createVNode("div", null, "Expiry Date of Product"),
                                                      createVNode(_component_AppDateTimePicker, {
                                                        "model-value": "2025-06-14",
                                                        density: "compact",
                                                        placeholder: "Select a Date"
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, { value: "Advanced" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "ps-md-3" }, [
                                              createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "7"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        style: { "min-inline-size": "200px" },
                                                        label: "Product ID Type",
                                                        placeholder: "Select Product Type",
                                                        items: ["ISBN", "UPC", "EAN", "JAN"],
                                                        density: "compact"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        label: "Product Id",
                                                        placeholder: "100023",
                                                        type: "number",
                                                        density: "compact"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["class"])
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
              md: "4",
              cols: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "Pricing",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Base Price",
                                placeholder: "iPhone 14",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Discounted Price",
                                placeholder: "$499",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCheckbox, {
                                modelValue: isTaxable.value,
                                "onUpdate:modelValue": ($event) => isTaxable.value = $event,
                                label: "Charge Tax on this product"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-raw align-center justify-space-between" data-v-a981e1a4${_scopeId4}><span data-v-a981e1a4${_scopeId4}>In stock</span>`);
                              _push5(ssrRenderComponent(VSwitch, {
                                modelValue: inStock.value,
                                "onUpdate:modelValue": ($event) => inStock.value = $event,
                                density: "compact"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Base Price",
                                  placeholder: "iPhone 14",
                                  class: "mb-6"
                                }),
                                createVNode(VTextField, {
                                  label: "Discounted Price",
                                  placeholder: "$499",
                                  class: "mb-6"
                                }),
                                createVNode(VCheckbox, {
                                  modelValue: isTaxable.value,
                                  "onUpdate:modelValue": ($event) => isTaxable.value = $event,
                                  label: "Charge Tax on this product"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode("div", { class: "d-flex flex-raw align-center justify-space-between" }, [
                                  createVNode("span", null, "In stock"),
                                  createVNode(VSwitch, {
                                    modelValue: inStock.value,
                                    "onUpdate:modelValue": ($event) => inStock.value = $event,
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode(VTextField, {
                                label: "Base Price",
                                placeholder: "iPhone 14",
                                class: "mb-6"
                              }),
                              createVNode(VTextField, {
                                label: "Discounted Price",
                                placeholder: "$499",
                                class: "mb-6"
                              }),
                              createVNode(VCheckbox, {
                                modelValue: isTaxable.value,
                                "onUpdate:modelValue": ($event) => isTaxable.value = $event,
                                label: "Charge Tax on this product"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode("div", { class: "d-flex flex-raw align-center justify-space-between" }, [
                                createVNode("span", null, "In stock"),
                                createVNode(VSwitch, {
                                  modelValue: inStock.value,
                                  "onUpdate:modelValue": ($event) => inStock.value = $event,
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, { title: "Organize" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column gap-y-5" data-v-a981e1a4${_scopeId4}>`);
                              _push5(ssrRenderComponent(VSelect, {
                                placeholder: "Select Vendor",
                                label: "Vendor",
                                items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                placeholder: "Select Category",
                                label: "Category",
                                items: ["Household", "Office", "Electronics", "Management", "Automotive"]
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_IconBtn, {
                                      size: "large",
                                      variant: "outlined",
                                      color: "primary",
                                      rounded: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            size: "28",
                                            icon: "ri-add-line"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              size: "28",
                                              icon: "ri-add-line"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_IconBtn, {
                                        size: "large",
                                        variant: "outlined",
                                        color: "primary",
                                        rounded: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "28",
                                            icon: "ri-add-line"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                placeholder: "Select Collection",
                                label: "Collection",
                                items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                placeholder: "Select Status",
                                label: "Status",
                                items: ["Published", "Inactive", "Scheduled"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Tags",
                                placeholder: "Fashion, Trending, Summer"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column gap-y-5" }, [
                                  createVNode(VSelect, {
                                    placeholder: "Select Vendor",
                                    label: "Vendor",
                                    items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                                  }),
                                  createVNode(VSelect, {
                                    placeholder: "Select Category",
                                    label: "Category",
                                    items: ["Household", "Office", "Electronics", "Management", "Automotive"]
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_IconBtn, {
                                        size: "large",
                                        variant: "outlined",
                                        color: "primary",
                                        rounded: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "28",
                                            icon: "ri-add-line"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    placeholder: "Select Collection",
                                    label: "Collection",
                                    items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                                  }),
                                  createVNode(VSelect, {
                                    placeholder: "Select Status",
                                    label: "Status",
                                    items: ["Published", "Inactive", "Scheduled"]
                                  }),
                                  createVNode(VTextField, {
                                    label: "Tags",
                                    placeholder: "Fashion, Trending, Summer"
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
                              createVNode("div", { class: "d-flex flex-column gap-y-5" }, [
                                createVNode(VSelect, {
                                  placeholder: "Select Vendor",
                                  label: "Vendor",
                                  items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                                }),
                                createVNode(VSelect, {
                                  placeholder: "Select Category",
                                  label: "Category",
                                  items: ["Household", "Office", "Electronics", "Management", "Automotive"]
                                }, {
                                  append: withCtx(() => [
                                    createVNode(_component_IconBtn, {
                                      size: "large",
                                      variant: "outlined",
                                      color: "primary",
                                      rounded: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "28",
                                          icon: "ri-add-line"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  placeholder: "Select Collection",
                                  label: "Collection",
                                  items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                                }),
                                createVNode(VSelect, {
                                  placeholder: "Select Status",
                                  label: "Status",
                                  items: ["Published", "Inactive", "Scheduled"]
                                }),
                                createVNode(VTextField, {
                                  label: "Tags",
                                  placeholder: "Fashion, Trending, Summer"
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
                    createVNode(VCard, {
                      title: "Pricing",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Base Price",
                              placeholder: "iPhone 14",
                              class: "mb-6"
                            }),
                            createVNode(VTextField, {
                              label: "Discounted Price",
                              placeholder: "$499",
                              class: "mb-6"
                            }),
                            createVNode(VCheckbox, {
                              modelValue: isTaxable.value,
                              "onUpdate:modelValue": ($event) => isTaxable.value = $event,
                              label: "Charge Tax on this product"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode("div", { class: "d-flex flex-raw align-center justify-space-between" }, [
                              createVNode("span", null, "In stock"),
                              createVNode(VSwitch, {
                                modelValue: inStock.value,
                                "onUpdate:modelValue": ($event) => inStock.value = $event,
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { title: "Organize" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column gap-y-5" }, [
                              createVNode(VSelect, {
                                placeholder: "Select Vendor",
                                label: "Vendor",
                                items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                              }),
                              createVNode(VSelect, {
                                placeholder: "Select Category",
                                label: "Category",
                                items: ["Household", "Office", "Electronics", "Management", "Automotive"]
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_IconBtn, {
                                    size: "large",
                                    variant: "outlined",
                                    color: "primary",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "28",
                                        icon: "ri-add-line"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                placeholder: "Select Collection",
                                label: "Collection",
                                items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                              }),
                              createVNode(VSelect, {
                                placeholder: "Select Status",
                                label: "Status",
                                items: ["Published", "Inactive", "Scheduled"]
                              }),
                              createVNode(VTextField, {
                                label: "Tags",
                                placeholder: "Fashion, Trending, Summer"
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
          } else {
            return [
              createVNode(VCol, { md: "8" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mb-6",
                    title: "Product Information"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Product Name",
                                    placeholder: "iPhone 14"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "SKU",
                                    placeholder: "FXSK123U"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Barcode",
                                    placeholder: "0123-4567"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VLabel, { class: "mb-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Description (Optional) ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TiptapEditor, {
                                    modelValue: content.value,
                                    "onUpdate:modelValue": ($event) => content.value = $event,
                                    class: "border rounded-lg"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(VCard, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        title: withCtx(() => [
                          createTextVNode(" Product Image ")
                        ]),
                        append: withCtx(() => [
                          createVNode("h6", { class: "text-h6 text-primary cursor-pointer" }, " Add Media from URL ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", { class: "w-full h-auto relative" }, [
                              createVNode("div", {
                                ref_key: "dropZoneRef",
                                ref: dropZoneRef,
                                class: "cursor-pointer",
                                onClick: () => unref(open)()
                              }, [
                                fileData.value.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                                }, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    color: "secondary",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-upload-2-line" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h4", { class: "text-h4 text-wrap" }, " Drag and Drop Your Image Here. "),
                                  createVNode("span", { class: "text-disabled" }, "or"),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Browse Images ")
                                    ]),
                                    _: 1
                                  })
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                                }, [
                                  createVNode(VRow, { class: "match-height w-100" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(fileData.value, (item, index2) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: index2,
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, { ripple: false }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, {
                                                  class: "d-flex flex-column",
                                                  onClick: withModifiers(() => {
                                                  }, ["stop"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.url,
                                                      width: "200px",
                                                      height: "150px",
                                                      class: "w-100 mx-auto"
                                                    }, null, 8, ["src"]),
                                                    createVNode("div", { class: "mt-2" }, [
                                                      createVNode("span", { class: "clamp-text text-wrap" }, toDisplayString(item.file.name), 1),
                                                      createVNode("span", null, toDisplayString(item.file.size / 1e3) + " KB ", 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(VCardActions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      variant: "text",
                                                      block: "",
                                                      onClick: withModifiers(($event) => fileData.value.splice(index2, 1), ["stop"])
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Remove File ")
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
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]))
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, {
                    title: "Variants",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(optionCounter.value, (i) => {
                            return openBlock(), createBlock(VRow, { key: i }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      items: ["Size", "Color", "Weight", "Smell"],
                                      placeholder: "Select Variant",
                                      label: "Select Variant"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Variant Value",
                                      type: "number",
                                      placeholder: "Enter Variant Value"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            });
                          }), 128)),
                          createVNode(VBtn, {
                            class: "mt-6",
                            "prepend-icon": "ri-add-line",
                            onClick: ($event) => optionCounter.value++
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add another option ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, {
                    title: "Inventory",
                    class: "inventory-card"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b pb-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pe-3" }, [
                                    createVNode(VTabs, {
                                      modelValue: activeTab.value,
                                      "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                      direction: "vertical",
                                      color: "primary",
                                      class: "v-tabs-pill"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(inventoryTabsData, (tab, index2) => {
                                          return createVNode(VTab, {
                                            key: index2,
                                            value: tab.value
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: tab.icon,
                                                class: "me-2"
                                              }, null, 8, ["icon"]),
                                              createVNode("span", null, toDisplayString(tab.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["class"]),
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: _ctx.$vuetify.display.mdAndDown ? "pt-6" : ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindow, {
                                    modelValue: activeTab.value,
                                    "onUpdate:modelValue": ($event) => activeTab.value = $event,
                                    class: "w-100",
                                    touch: false
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, { value: "Restock" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-column gap-y-4 ps-md-3" }, [
                                            createVNode("div", { class: "text-body-1 font-weight-medium" }, " Options "),
                                            createVNode("div", { class: "d-flex gap-x-4 align-center" }, [
                                              createVNode(VTextField, {
                                                label: "Add to stock",
                                                placeholder: "100",
                                                density: "compact"
                                              }),
                                              createVNode(VBtn, { "prepend-icon": "ri-check-line" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Confirm ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("div", { class: "d-flex flex-column gap-2 text-high-emphasis" }, [
                                              createVNode("div", null, [
                                                createTextVNode(" Product in stock now: "),
                                                createVNode("span", { class: "font-weight-medium" }, "54")
                                              ]),
                                              createVNode("div", null, [
                                                createTextVNode(" Product in transit: "),
                                                createVNode("span", { class: "font-weight-medium" }, "390")
                                              ]),
                                              createVNode("div", null, [
                                                createTextVNode(" Last time restocked: "),
                                                createVNode("span", { class: "font-weight-medium" }, "24th June, 2022")
                                              ]),
                                              createVNode("div", null, [
                                                createTextVNode(" Total stock over lifetime: "),
                                                createVNode("span", { class: "font-weight-medium" }, "2,430")
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: "Shipping" }, {
                                        default: withCtx(() => [
                                          createVNode(VRadioGroup, {
                                            modelValue: shippingType.value,
                                            "onUpdate:modelValue": ($event) => shippingType.value = $event,
                                            class: "ps-md-3"
                                          }, {
                                            label: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium mb-1" }, "Shipping Type")
                                            ]),
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(shippingList, (item) => {
                                                return createVNode(VRadio, {
                                                  key: item.value,
                                                  value: item.value,
                                                  class: "mb-4",
                                                  inline: ""
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                                      createVNode("div", { class: "text-sm" }, toDisplayString(item.desc), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: "Global Delivery" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-md-3" }, [
                                            createVNode(VRadioGroup, {
                                              modelValue: deliveryType.value,
                                              "onUpdate:modelValue": ($event) => deliveryType.value = $event
                                            }, {
                                              label: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium mb-1" }, "Global Delivery")
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VRadio, {
                                                  value: "Worldwide delivery",
                                                  class: "mb-4"
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Worldwide delivery "),
                                                      createVNode("div", { class: "text-sm" }, [
                                                        createTextVNode(" Only available with Shipping method: "),
                                                        createVNode("span", { class: "text-primary" }, " Fulfilled by Company name ")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRadio, {
                                                  value: "Selected Countries",
                                                  class: "mb-4"
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Selected Countries "),
                                                      createVNode(VTextField, {
                                                        placeholder: "USA",
                                                        density: "compact",
                                                        style: { "min-inline-size": "200px" }
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRadio, null, {
                                                  label: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "text-high-emphasis font-weight-medium mb-1" }, " Local delivery "),
                                                      createVNode("div", { class: "text-sm" }, [
                                                        createTextVNode(" Deliver to your country of residence "),
                                                        createVNode("span", { class: "text-primary" }, " Change profile address ")
                                                      ])
                                                    ])
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
                                      createVNode(VWindowItem, { value: "Attributes" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-md-3" }, [
                                            createVNode("div", { class: "mb-2 text-base font-weight-medium" }, " Attributes "),
                                            createVNode("div", null, [
                                              createVNode(VCheckbox, {
                                                modelValue: selectedAttrs.value,
                                                "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                label: "Fragile Product",
                                                value: "Fragile Product",
                                                class: "ps-3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VCheckbox, {
                                                modelValue: selectedAttrs.value,
                                                "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                value: "Biodegradable",
                                                label: "Biodegradable",
                                                class: "ps-3 mb-1"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VCheckbox, {
                                                modelValue: selectedAttrs.value,
                                                "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                value: "Frozen Product",
                                                class: "ps-3 mb-1"
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                    createVNode("div", null, "Frozen Product"),
                                                    createVNode(VTextField, {
                                                      placeholder: "40 C",
                                                      type: "number",
                                                      density: "compact",
                                                      style: { "max-inline-size": "250px" }
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VCheckbox, {
                                                modelValue: selectedAttrs.value,
                                                "onUpdate:modelValue": ($event) => selectedAttrs.value = $event,
                                                value: "Expiry Date",
                                                class: "ps-3"
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-column mb-1" }, [
                                                    createVNode("div", null, "Expiry Date of Product"),
                                                    createVNode(_component_AppDateTimePicker, {
                                                      "model-value": "2025-06-14",
                                                      density: "compact",
                                                      placeholder: "Select a Date"
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: "Advanced" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-md-3" }, [
                                            createVNode("div", { class: "mb-3 text-base font-weight-medium" }, " Advanced "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "7"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      style: { "min-inline-size": "200px" },
                                                      label: "Product ID Type",
                                                      placeholder: "Select Product Type",
                                                      items: ["ISBN", "UPC", "EAN", "JAN"],
                                                      density: "compact"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "Product Id",
                                                      placeholder: "100023",
                                                      type: "number",
                                                      density: "compact"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }, 8, ["class"])
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
                md: "4",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    title: "Pricing",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Base Price",
                            placeholder: "iPhone 14",
                            class: "mb-6"
                          }),
                          createVNode(VTextField, {
                            label: "Discounted Price",
                            placeholder: "$499",
                            class: "mb-6"
                          }),
                          createVNode(VCheckbox, {
                            modelValue: isTaxable.value,
                            "onUpdate:modelValue": ($event) => isTaxable.value = $event,
                            label: "Charge Tax on this product"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode("div", { class: "d-flex flex-raw align-center justify-space-between" }, [
                            createVNode("span", null, "In stock"),
                            createVNode(VSwitch, {
                              modelValue: inStock.value,
                              "onUpdate:modelValue": ($event) => inStock.value = $event,
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { title: "Organize" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column gap-y-5" }, [
                            createVNode(VSelect, {
                              placeholder: "Select Vendor",
                              label: "Vendor",
                              items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                            }),
                            createVNode(VSelect, {
                              placeholder: "Select Category",
                              label: "Category",
                              items: ["Household", "Office", "Electronics", "Management", "Automotive"]
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_IconBtn, {
                                  size: "large",
                                  variant: "outlined",
                                  color: "primary",
                                  rounded: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "28",
                                      icon: "ri-add-line"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              placeholder: "Select Collection",
                              label: "Collection",
                              items: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"]
                            }),
                            createVNode(VSelect, {
                              placeholder: "Select Status",
                              label: "Status",
                              items: ["Published", "Inactive", "Scheduled"]
                            }),
                            createVNode(VTextField, {
                              label: "Tags",
                              placeholder: "Fashion, Trending, Summer"
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/product/add/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a981e1a4"]]);
export {
  index as default
};
