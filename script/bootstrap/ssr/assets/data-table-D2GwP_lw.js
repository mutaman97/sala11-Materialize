import { useSSRContext, withAsyncContext, ref, resolveComponent, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, onMounted, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, d as avatar2, H as avatar8, i as avatar7, f as avatar4, j as avatar6, c as avatar1, h as avatar5, e as avatar3, V as VBtn } from "../ssr.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { V as VPagination } from "./VPagination-BH_qhohv.js";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard, c as VCardTitle, b as VCardActions } from "./VCard-BPXR3fWJ.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { _ as _sfc_main$b } from "./AppCardCode-DkpMhnYF.js";
import "@vueuse/core";
import "destr";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VDivider-o5iRKh3w.js";
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
import "./VSlideGroup-Bvz86g7R.js";
import "./helpers-DX2i3Kdq.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VMenu-KUYgjPyD.js";
import "prismjs";
import "vue-prism-component";
const _sfc_main$a = {
  __name: "DemoDataTableKitchenSink",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: productList } = ([__temp, __restore] = withAsyncContext(() => useApi("pages/datatable")), __temp = await __temp, __restore(), __temp);
    const search = ref("");
    const headers = [
      {
        title: "PRODUCT",
        key: "product.name"
      },
      {
        title: "DATE",
        key: "date"
      },
      {
        title: "CATEGORY",
        key: "product.category"
      },
      {
        title: "BUYERS",
        key: "buyer.name"
      },
      {
        title: "PAYMENT",
        key: "payment",
        sortable: false
      },
      {
        title: "STATUS",
        key: "status",
        sortable: false
      },
      {
        title: "DELETE",
        key: "delete",
        sortable: false
      }
    ];
    const deleteItem = (itemId) => {
      if (!productList.value)
        return;
      const index = productList.value.findIndex((item) => item.product.id === itemId);
      productList.value.splice(index, 1);
    };
    const categoryIcons = [
      {
        name: "Mouse",
        icon: "ri-mouse-fill",
        color: "warning"
      },
      {
        name: "Glass",
        icon: "ri-glasses-line",
        color: "primary"
      },
      {
        name: "Smart Watch",
        icon: "ri-time-line",
        color: "success"
      },
      {
        name: "Bag",
        icon: "ri-shopping-bag-line",
        color: "info"
      },
      {
        name: "Storage Device",
        icon: "ri-tape-line",
        color: "warning"
      },
      {
        name: "Bluetooth",
        icon: "ri-bluetooth-line",
        color: "error"
      },
      {
        name: "Gaming",
        icon: "ri-gamepad-line",
        color: "warning"
      },
      {
        name: "Home",
        icon: "ri-home-line",
        color: "error"
      },
      {
        name: "VR",
        icon: "ri-goggles-line",
        color: "primary"
      },
      {
        name: "Shoes",
        icon: "ri-omega",
        color: "success"
      },
      {
        name: "Electronics",
        icon: "ri-flashlight-fill",
        color: "info"
      },
      {
        name: "Projector",
        icon: "ri-projector-line",
        color: "warning"
      },
      {
        name: "iPod",
        icon: "ri-music-line",
        color: "error"
      },
      {
        name: "Keyboard",
        icon: "ri-keyboard-box-line",
        color: "primary"
      },
      {
        name: "Smart Phone",
        icon: "ri-smartphone-line",
        color: "success"
      },
      {
        name: "Smart TV",
        icon: "ri-tv-line",
        color: "info"
      },
      {
        name: "Google Home",
        icon: "ri-google-line",
        color: "warning"
      },
      {
        name: "Mac",
        icon: "ri-apple-line",
        color: "error"
      },
      {
        name: "Headphone",
        icon: "ri-headphone-line",
        color: "primary"
      },
      {
        name: "iMac",
        icon: "ri-computer-line",
        color: "success"
      },
      {
        name: "iPhone",
        icon: "ri-apple-line",
        color: "warning"
      }
    ];
    const resolveStatusColor = (status) => {
      if (status === "Confirmed")
        return "primary";
      if (status === "Completed")
        return "success";
      if (status === "Cancelled")
        return "error";
    };
    const categoryIconFilter = (categoryName) => {
      const index = categoryIcons.findIndex((category) => category.name === categoryName);
      if (index !== -1)
        return [{
          icon: categoryIcons[index].icon,
          color: categoryIcons[index].color
        }];
      return [{
        icon: "ri-question-line",
        color: "primary"
      }];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCardText, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    "offset-md": "8",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          label: "Search",
                          placeholder: "Search ...",
                          "append-inner-icon": "ri-search-line",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            label: "Search",
                            placeholder: "Search ...",
                            "append-inner-icon": "ri-search-line",
                            "single-line": "",
                            "hide-details": "",
                            dense: "",
                            outlined: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      "offset-md": "8",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          label: "Search",
                          placeholder: "Search ...",
                          "append-inner-icon": "ri-search-line",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    "offset-md": "8",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        label: "Search",
                        placeholder: "Search ...",
                        "append-inner-icon": "ri-search-line",
                        "single-line": "",
                        "hide-details": "",
                        dense: "",
                        outlined: ""
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
      }, _parent));
      _push(ssrRenderComponent(VDataTable, {
        headers,
        items: unref(productList) || [],
        search: unref(search),
        "items-per-page": 5,
        class: "text-no-wrap"
      }, {
        "item.product.name": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: item.product.image,
              height: "40",
              width: "40"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-truncate text-high-emphasis"${_scopeId}>${ssrInterpolate(item.product.name)}</span><span class="text-xs"${_scopeId}>${ssrInterpolate(item.product.brand)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode("div", null, [
                  createVNode(VImg, {
                    src: item.product.image,
                    height: "40",
                    width: "40"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-truncate text-high-emphasis" }, toDisplayString(item.product.name), 1),
                  createVNode("span", { class: "text-xs" }, toDisplayString(item.product.brand), 1)
                ])
              ])
            ];
          }
        }),
        "item.product.category": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}><!--[-->`);
            ssrRenderList(categoryIconFilter(item.product.category), (category, index) => {
              _push2(ssrRenderComponent(VAvatar, {
                key: index,
                size: "26",
                color: category.color,
                variant: "tonal"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "18",
                      color: category.color,
                      class: "rounded-0"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(category.icon)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(category.icon), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "18",
                        color: category.color,
                        class: "rounded-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(category.icon), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><span class="ms-1 text-no-wrap"${_scopeId}>${ssrInterpolate(item.product.category)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(categoryIconFilter(item.product.category), (category, index) => {
                  return openBlock(), createBlock(VAvatar, {
                    key: index,
                    size: "26",
                    color: category.color,
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "18",
                        color: category.color,
                        class: "rounded-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(category.icon), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128)),
                createVNode("span", { class: "ms-1 text-no-wrap" }, toDisplayString(item.product.category), 1)
              ])
            ];
          }
        }),
        "item.buyer.name": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "1.875rem",
              color: !item.buyer.avatar ? "primary" : void 0,
              variant: !item.buyer.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.buyer.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.buyer.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(item.buyer.name.slice(0, 2).toUpperCase())}</span>`);
                  }
                } else {
                  return [
                    item.buyer.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.buyer.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(item.buyer.name.slice(0, 2).toUpperCase()), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span class="text-no-wrap font-weight-medium text-high-emphasis ms-2"${_scopeId}>${ssrInterpolate(item.buyer.name)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "1.875rem",
                  color: !item.buyer.avatar ? "primary" : void 0,
                  variant: !item.buyer.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.buyer.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.buyer.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(item.buyer.name.slice(0, 2).toUpperCase()), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "variant"]),
                createVNode("span", { class: "text-no-wrap font-weight-medium text-high-emphasis ms-2" }, toDisplayString(item.buyer.name), 1)
              ])
            ];
          }
        }),
        "item.payment": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column"${_scopeId}><div class="d-flex align-center text-high-emphasis"${_scopeId}><span${_scopeId}>$${ssrInterpolate(item.payment.paidAmount)}</span>`);
            if (item.payment.paidAmount !== item.payment.total) {
              _push2(`<span${_scopeId}>/${ssrInterpolate(item.payment.total)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><span class="text-xs text-no-wrap"${_scopeId}>${ssrInterpolate(item.payment.receivedPaymentStatus)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column" }, [
                createVNode("div", { class: "d-flex align-center text-high-emphasis" }, [
                  createVNode("span", null, "$" + toDisplayString(item.payment.paidAmount), 1),
                  item.payment.paidAmount !== item.payment.total ? (openBlock(), createBlock("span", { key: 0 }, "/" + toDisplayString(item.payment.total), 1)) : createCommentVNode("", true)
                ]),
                createVNode("span", { class: "text-xs text-no-wrap" }, toDisplayString(item.payment.receivedPaymentStatus), 1)
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusColor(item.payment.status),
              class: [`text-${resolveStatusColor(item.payment.status)}`, "font-weight-medium"],
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.payment.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.payment.status), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusColor(item.payment.status),
                class: [`text-${resolveStatusColor(item.payment.status)}`, "font-weight-medium"],
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.payment.status), 1)
                ]),
                _: 2
              }, 1032, ["color", "class"])
            ];
          }
        }),
        "item.delete": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconBtn, {
              size: "small",
              onClick: ($event) => deleteItem(item.product.id)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-delete-bin-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconBtn, {
                size: "small",
                onClick: ($event) => deleteItem(item.product.id)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: "ri-delete-bin-line" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableKitchenSink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const data = [
  {
    responsiveId: "",
    id: 95,
    avatar: avatar2,
    fullName: "Edwina Ebsworth",
    post: "Human Resources Assistant",
    email: "eebsworth2m@sbwire.com",
    city: "Puzi",
    startDate: "09/27/2018",
    salary: 19586.23,
    age: "27",
    experience: "2 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 1,
    avatar: avatar8,
    fullName: "Korrie O'Crevy",
    post: "Nuclear Power Engineer",
    email: "kocrevy0@thetimes.co.uk",
    city: "Krasnosilka",
    startDate: "09/23/2016",
    salary: 23896.35,
    age: "61",
    experience: "1 Year",
    status: 2
  },
  {
    responsiveId: "",
    id: 7,
    avatar: "",
    fullName: "Eileen Diehn",
    post: "Environmental Specialist",
    email: "ediehn6@163.com",
    city: "Lampuyang",
    startDate: "10/15/2017",
    salary: 18991.67,
    age: "59",
    experience: "9 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 11,
    avatar: "",
    fullName: "De Falloon",
    post: "Sales Representative",
    email: "dfalloona@ifeng.com",
    city: "Colima",
    startDate: "06/12/2018",
    salary: 19252.12,
    age: "30",
    experience: "0 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 3,
    avatar: avatar7,
    fullName: "Stella Ganderton",
    post: "Operator",
    email: "sganderton2@tuttocitta.it",
    city: "Golcowa",
    startDate: "03/24/2018",
    salary: 13076.28,
    age: "66",
    experience: "6 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 5,
    avatar: "",
    fullName: "Harmonia Nisius",
    post: "Senior Cost Accountant",
    email: "hnisius4@gnu.org",
    city: "Lucan",
    startDate: "08/25/2017",
    salary: 10909.52,
    age: "33",
    experience: "3 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 6,
    avatar: "",
    fullName: "Genevra Honeywood",
    post: "Geologist",
    email: "ghoneywood5@narod.ru",
    city: "Maofan",
    startDate: "06/01/2017",
    salary: 17803.8,
    age: "61",
    experience: "1 Year",
    status: 1
  },
  {
    responsiveId: "",
    id: 4,
    avatar: avatar8,
    fullName: "Dorolice Crossman",
    post: "Cost Accountant",
    email: "dcrossman3@google.co.jp",
    city: "Paquera",
    startDate: "12/03/2017",
    salary: 12336.17,
    age: "22",
    experience: "2 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 8,
    avatar: avatar7,
    fullName: "Richardo Aldren",
    post: "Senior Sales Associate",
    email: "raldren7@mtv.com",
    city: "Skoghall",
    startDate: "11/05/2016",
    salary: 19230.13,
    age: "55",
    experience: "5 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 9,
    avatar: avatar2,
    fullName: "Allyson Moakler",
    post: "Safety Technician",
    email: "amoakler8@shareasale.com",
    city: "Mogilany",
    startDate: "12/29/2018",
    salary: 11677.32,
    age: "39",
    experience: "9 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 10,
    avatar: avatar7,
    fullName: "Merline Penhalewick",
    post: "Junior Executive",
    email: "mpenhalewick9@php.net",
    city: "Kanuma",
    startDate: "04/19/2019",
    salary: 15939.52,
    age: "23",
    experience: "3 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 12,
    avatar: "",
    fullName: "Cyrus Gornal",
    post: "Senior Sales Associate",
    email: "cgornalb@fda.gov",
    city: "Boro Utara",
    startDate: "12/09/2017",
    salary: 16745.47,
    age: "22",
    experience: "2 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 13,
    avatar: "",
    fullName: "Tallou Balf",
    post: "Staff Accountant",
    email: "tbalfc@sina.com.cn",
    city: "Siliana",
    startDate: "01/21/2016",
    salary: 15488.53,
    age: "36",
    experience: "6 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 14,
    avatar: "",
    fullName: "Othilia Extill",
    post: "Associate Professor",
    email: "oextilld@theatlantic.com",
    city: "Brzyska",
    startDate: "02/01/2016",
    salary: 18442.34,
    age: "43",
    experience: "3 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 15,
    avatar: "",
    fullName: "Wilmar Bourton",
    post: "Administrative Assistant",
    email: "wbourtone@sakura.ne.jp",
    city: "Bích Động",
    startDate: "04/25/2018",
    salary: 13304.45,
    age: "19",
    experience: "9 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 16,
    avatar: avatar4,
    fullName: "Robinson Brazenor",
    post: "General Manager",
    email: "rbrazenorf@symantec.com",
    city: "Gendiwu",
    startDate: "12/23/2017",
    salary: 11953.08,
    age: "66",
    experience: "6 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 17,
    avatar: "",
    fullName: "Nadia Bettenson",
    post: "Environmental Tech",
    email: "nbettensong@joomla.org",
    city: "Chabařovice",
    startDate: "07/11/2018",
    salary: 20484.44,
    age: "64",
    experience: "4 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 18,
    avatar: "",
    fullName: "Titus Hayne",
    post: "Web Designer",
    email: "thayneh@kickstarter.com",
    city: "Yangon",
    startDate: "05/25/2019",
    salary: 16871.48,
    age: "59",
    experience: "9 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 19,
    avatar: avatar4,
    fullName: "Roxie Huck",
    post: "Administrative Assistant",
    email: "rhucki@ed.gov",
    city: "Polýkastro",
    startDate: "04/04/2019",
    salary: 19653.56,
    age: "41",
    experience: "1 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 20,
    avatar: avatar7,
    fullName: "Latashia Lewtey",
    post: "Actuary",
    email: "llewteyj@sun.com",
    city: "Hougong",
    startDate: "08/03/2017",
    salary: 18303.87,
    age: "35",
    experience: "5 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 21,
    avatar: "",
    fullName: "Natalina Tyne",
    post: "Software Engineer",
    email: "ntynek@merriam-webster.com",
    city: "Yanguan",
    startDate: "03/16/2019",
    salary: 15256.4,
    age: "30",
    experience: "0 Year",
    status: 2
  },
  {
    responsiveId: "",
    id: 22,
    avatar: "",
    fullName: "Faun Josefsen",
    post: "Analog Circuit Design manager",
    email: "fjosefsenl@samsung.com",
    city: "Wengyang",
    startDate: "07/08/2017",
    salary: 11209.16,
    age: "40",
    experience: "0 Year",
    status: 3
  },
  {
    responsiveId: "",
    id: 23,
    avatar: avatar7,
    fullName: "Rosmunda Steed",
    post: "Assistant Media Planner",
    email: "rsteedm@xing.com",
    city: "Manzanares",
    startDate: "12/23/2017",
    salary: 13778.34,
    age: "21",
    experience: "1 Year",
    status: 5
  },
  {
    responsiveId: "",
    id: 24,
    avatar: "",
    fullName: "Scott Jiran",
    post: "Graphic Designer",
    email: "sjirann@simplemachines.org",
    city: "Pinglin",
    startDate: "05/26/2016",
    salary: 23081.71,
    age: "23",
    experience: "3 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 25,
    avatar: "",
    fullName: "Carmita Medling",
    post: "Accountant",
    email: "cmedlingo@hp.com",
    city: "Bourges",
    startDate: "07/31/2019",
    salary: 13602.24,
    age: "47",
    experience: "7 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 26,
    avatar: avatar2,
    fullName: "Morgen Benes",
    post: "Senior Sales Associate",
    email: "mbenesp@ted.com",
    city: "Cà Mau",
    startDate: "04/10/2016",
    salary: 16969.63,
    age: "42",
    experience: "2 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 27,
    avatar: "",
    fullName: "Onfroi Doughton",
    post: "Civil Engineer",
    email: "odoughtonq@aboutads.info",
    city: "Utrecht (stad)",
    startDate: "09/29/2018",
    salary: 23796.62,
    age: "28",
    experience: "8 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 28,
    avatar: "",
    fullName: "Kliment McGinney",
    post: "Chief Design Engineer",
    email: "kmcginneyr@paginegialle.it",
    city: "Xiaocheng",
    startDate: "07/09/2018",
    salary: 24027.81,
    age: "28",
    experience: "8 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 29,
    avatar: "",
    fullName: "Devin Bridgland",
    post: "Tax Accountant",
    email: "dbridglands@odnoklassniki.ru",
    city: "Baoli",
    startDate: "07/17/2016",
    salary: 13508.15,
    age: "48",
    experience: "8 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 30,
    avatar: avatar6,
    fullName: "Gilbert McFade",
    post: "Biostatistician",
    email: "gmcfadet@irs.gov",
    city: "Deje",
    startDate: "08/28/2018",
    salary: 21632.3,
    age: "20",
    experience: "0 Year",
    status: 2
  },
  {
    responsiveId: "",
    id: 31,
    avatar: "",
    fullName: "Teressa Bleakman",
    post: "Senior Editor",
    email: "tbleakmanu@phpbb.com",
    city: "Žebrák",
    startDate: "09/03/2016",
    salary: 24875.41,
    age: "37",
    experience: "7 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 32,
    avatar: "",
    fullName: "Marcelia Alleburton",
    post: "Safety Technician",
    email: "malleburtonv@amazon.com",
    city: "Basail",
    startDate: "06/02/2016",
    salary: 23888.98,
    age: "53",
    experience: "3 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 33,
    avatar: avatar7,
    fullName: "Aili De Coursey",
    post: "Environmental Specialist",
    email: "adew@etsy.com",
    city: "Łazy",
    startDate: "09/30/2016",
    salary: 14082.44,
    age: "27",
    experience: "7 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 34,
    avatar: avatar6,
    fullName: "Charlton Chatres",
    post: "Analyst Programmer",
    email: "cchatresx@goo.gl",
    city: "Reguengos de Monsaraz",
    startDate: "04/07/2016",
    salary: 21386.52,
    age: "22",
    experience: "2 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 35,
    avatar: avatar1,
    fullName: "Nat Hugonnet",
    post: "Financial Advisor",
    email: "nhugonnety@wufoo.com",
    city: "Pimentel",
    startDate: "09/11/2019",
    salary: 13835.97,
    age: "46",
    experience: "6 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 36,
    avatar: "",
    fullName: "Lorine Hearsum",
    post: "Payment Adjustment Coordinator",
    email: "lhearsumz@google.co.uk",
    city: "Shuiying",
    startDate: "03/05/2019",
    salary: 22093.91,
    age: "47",
    experience: "7 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 37,
    avatar: avatar5,
    fullName: "Sheila-kathryn Haborn",
    post: "Environmental Specialist",
    email: "shaborn10@about.com",
    city: "Lewolang",
    startDate: "11/10/2018",
    salary: 24624.23,
    age: "51",
    experience: "1 Year",
    status: 3
  },
  {
    responsiveId: "",
    id: 38,
    avatar: avatar3,
    fullName: "Alma Harvatt",
    post: "Administrative Assistant",
    email: "aharvatt11@addtoany.com",
    city: "Ulundi",
    startDate: "11/04/2016",
    salary: 21782.82,
    age: "41",
    experience: "1 Year",
    status: 1
  },
  {
    responsiveId: "",
    id: 39,
    avatar: avatar2,
    fullName: "Beatrix Longland",
    post: "VP Quality Control",
    email: "blongland12@gizmodo.com",
    city: "Damu",
    startDate: "07/18/2016",
    salary: 22794.6,
    age: "62",
    experience: "2 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 40,
    avatar: avatar4,
    fullName: "Hammad Condell",
    post: "Project Manager",
    email: "hcondell13@tiny.cc",
    city: "Bulung'ur",
    startDate: "11/04/2018",
    salary: 10872.83,
    age: "37",
    experience: "7 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 41,
    avatar: "",
    fullName: "Parker Bice",
    post: "Technical Writer",
    email: "pbice14@ameblo.jp",
    city: "Shanlian",
    startDate: "03/02/2016",
    salary: 17471.92,
    age: "65",
    experience: "5 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 42,
    avatar: "",
    fullName: "Lowrance Orsi",
    post: "Biostatistician",
    email: "lorsi15@wp.com",
    city: "Dengteke",
    startDate: "12/10/2018",
    salary: 24719.51,
    age: "64",
    experience: "4 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 43,
    avatar: avatar8,
    fullName: "Ddene Chaplyn",
    post: "Environmental Tech",
    email: "dchaplyn16@nymag.com",
    city: "Lattes",
    startDate: "01/23/2019",
    salary: 11958.33,
    age: "38",
    experience: "8 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 44,
    avatar: "",
    fullName: "Washington Bygraves",
    post: "Human Resources Manager",
    email: "wbygraves17@howstuffworks.com",
    city: "Zlaté Hory",
    startDate: "09/07/2016",
    salary: 10552.43,
    age: "37",
    experience: "7 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 45,
    avatar: avatar7,
    fullName: "Meghann Bodechon",
    post: "Operator",
    email: "mbodechon18@1und1.de",
    city: "Itō",
    startDate: "07/23/2018",
    salary: 23024.28,
    age: "61",
    experience: "1 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 46,
    avatar: avatar1,
    fullName: "Moshe De Ambrosis",
    post: "Recruiting Manager",
    email: "mde19@purevolume.com",
    city: "San Diego",
    startDate: "02/10/2018",
    salary: 10409.9,
    age: "47",
    experience: "7 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 47,
    avatar: avatar4,
    fullName: "Had Chatelot",
    post: "Cost Accountant",
    email: "hchatelot1a@usatoday.com",
    city: "Mercedes",
    startDate: "11/23/2016",
    salary: 11446.3,
    age: "64",
    experience: "4 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 48,
    avatar: "",
    fullName: "Georgia McCrum",
    post: "Registered Nurse",
    email: "gmccrum1b@icio.us",
    city: "Nggalak",
    startDate: "04/19/2018",
    salary: 14002.31,
    age: "63",
    experience: "3 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 49,
    avatar: avatar5,
    fullName: "Krishnah Stilldale",
    post: "VP Accounting",
    email: "kstilldale1c@chronoengine.com",
    city: "Slavs'ke",
    startDate: "03/18/2017",
    salary: 10704.29,
    age: "56",
    experience: "6 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 50,
    avatar: avatar4,
    fullName: "Mario Umbert",
    post: "Research Assistant",
    email: "mumbert1d@digg.com",
    city: "Chorotis",
    startDate: "05/13/2019",
    salary: 21813.54,
    age: "43",
    experience: "3 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 51,
    avatar: "",
    fullName: "Edvard Dixsee",
    post: "Graphic Designer",
    email: "edixsee1e@unblog.fr",
    city: "Rancharia",
    startDate: "04/23/2019",
    salary: 18053.11,
    age: "46",
    experience: "6 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 52,
    avatar: avatar7,
    fullName: "Tammie Davydoch",
    post: "VP Quality Control",
    email: "tdavydoch1f@examiner.com",
    city: "Mamedkala",
    startDate: "04/19/2016",
    salary: 17617.08,
    age: "47",
    experience: "7 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 53,
    avatar: "",
    fullName: "Benito Rodolico",
    post: "Safety Technician",
    email: "brodolico1g@sciencedirect.com",
    city: "Wonosobo",
    startDate: "10/06/2018",
    salary: 18866.55,
    age: "21",
    experience: "1 Year",
    status: 5
  },
  {
    responsiveId: "",
    id: 54,
    avatar: "",
    fullName: "Marco Pennings",
    post: "Compensation Analyst",
    email: "mpennings1h@bizjournals.com",
    city: "Umag",
    startDate: "06/15/2017",
    salary: 13722.18,
    age: "30",
    experience: "0 Year",
    status: 3
  },
  {
    responsiveId: "",
    id: 55,
    avatar: "",
    fullName: "Tommie O'Corr",
    post: "Quality Engineer",
    email: "tocorr1i@nyu.edu",
    city: "Olhos de Água",
    startDate: "09/26/2018",
    salary: 15228.8,
    age: "51",
    experience: "1 Year",
    status: 1
  },
  {
    responsiveId: "",
    id: 56,
    avatar: avatar1,
    fullName: "Cybill Poyle",
    post: "Cost Accountant",
    email: "cpoyle1j@amazon.com",
    city: "Hamm",
    startDate: "01/03/2016",
    salary: 13951.96,
    age: "29",
    experience: "9 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 57,
    avatar: avatar6,
    fullName: "Norry Stoller",
    post: "Human Resources Manager",
    email: "nstoller1k@noaa.gov",
    city: "Ruukki",
    startDate: "02/04/2018",
    salary: 15100,
    age: "27",
    experience: "7 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 58,
    avatar: "",
    fullName: "Wendi Somerlie",
    post: "Systems Administrator",
    email: "wsomerlie1l@accuweather.com",
    city: "Meicheng",
    startDate: "04/22/2016",
    salary: 20023.52,
    age: "28",
    experience: "9 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 59,
    avatar: "",
    fullName: "Ferdie Georgeon",
    post: "Geologist",
    email: "fgeorgeon1m@nhs.uk",
    city: "Tanahbeureum",
    startDate: "04/08/2019",
    salary: 12630.26,
    age: "28",
    experience: "1 Year",
    status: 2
  },
  {
    responsiveId: "",
    id: 60,
    avatar: "",
    fullName: "Jules Auten",
    post: "Desktop Support Technician",
    email: "jauten1n@foxnews.com",
    city: "Mojo",
    startDate: "08/13/2019",
    salary: 13870.62,
    age: "48",
    experience: "5 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 61,
    avatar: avatar3,
    fullName: "Nichole Dacres",
    post: "Mechanical Systems Engineer",
    email: "ndacres1o@apache.org",
    city: "Kimanuit",
    startDate: "11/06/2017",
    salary: 18220.51,
    age: "20",
    experience: "0 Year",
    status: 3
  },
  {
    responsiveId: "",
    id: 62,
    avatar: avatar1,
    fullName: "Holly Edgworth",
    post: "Junior Executive",
    email: "hedgworth1p@craigslist.org",
    city: "Pedreira",
    startDate: "08/05/2017",
    salary: 13999.88,
    age: "37",
    experience: "0 Year",
    status: 5
  },
  {
    responsiveId: "",
    id: 63,
    avatar: avatar7,
    fullName: "Henriette Croft",
    post: "Food Chemist",
    email: "hcroft1q@desdev.cn",
    city: "Taizhou",
    startDate: "09/12/2019",
    salary: 11049.79,
    age: "53",
    experience: "1 Year",
    status: 5
  },
  {
    responsiveId: "",
    id: 64,
    avatar: "",
    fullName: "Annetta Glozman",
    post: "Staff Accountant",
    email: "aglozman1r@storify.com",
    city: "Pendawanbaru",
    startDate: "08/25/2017",
    salary: 10745.32,
    age: "27",
    experience: "3 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 65,
    avatar: "",
    fullName: "Cletis Cervantes",
    post: "Health Coach",
    email: "ccervantes1s@de.vu",
    city: "Solnechnyy",
    startDate: "05/24/2018",
    salary: 24769.08,
    age: "22",
    experience: "7 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 66,
    avatar: avatar7,
    fullName: "Christos Kiley",
    post: "Geologist",
    email: "ckiley1t@buzzfeed.com",
    city: "El Bolsón",
    startDate: "02/27/2019",
    salary: 16053.15,
    age: "46",
    experience: "2 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 67,
    avatar: avatar7,
    fullName: "Silvain Siebert",
    post: "VP Sales",
    email: "ssiebert1u@domainmarket.com",
    city: "Cadiz",
    startDate: "09/23/2017",
    salary: 23347.17,
    age: "47",
    experience: "8 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 68,
    avatar: "",
    fullName: "Sharla Ibberson",
    post: "Payment Adjustment Coordinator",
    email: "sibberson1v@virginia.edu",
    city: "Lamam",
    startDate: "11/01/2016",
    salary: 15658.4,
    age: "51",
    experience: "8 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 69,
    avatar: avatar7,
    fullName: "Ripley Rentcome",
    post: "Physical Therapy Assistant",
    email: "rrentcome1w@youtu.be",
    city: "Dashkawka",
    startDate: "07/15/2018",
    salary: 15396.66,
    age: "41",
    experience: "8 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 70,
    avatar: "",
    fullName: "Chrisse Birrane",
    post: "Chemical Engineer",
    email: "cbirrane1x@google.com.br",
    city: "Las Toscas",
    startDate: "05/22/2016",
    salary: 15823.4,
    age: "62",
    experience: "0 Year",
    status: 5
  },
  {
    responsiveId: "",
    id: 71,
    avatar: "",
    fullName: "Georges Tesyro",
    post: "Human Resources Manager",
    email: "gtesyro1y@last.fm",
    city: "Gabao",
    startDate: "01/27/2019",
    salary: 19051.25,
    age: "37",
    experience: "7 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 72,
    avatar: "",
    fullName: "Bondon Hazard",
    post: "Geological Engineer",
    email: "bhazard1z@over-blog.com",
    city: "Llano de Piedra",
    startDate: "01/17/2019",
    salary: 11632.84,
    age: "65",
    experience: "3 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 73,
    avatar: avatar4,
    fullName: "Aliza MacElholm",
    post: "VP Sales",
    email: "amacelholm20@printfriendly.com",
    city: "Sosnovyy Bor",
    startDate: "11/17/2017",
    salary: 16741.31,
    age: "64",
    experience: "7 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 74,
    avatar: avatar2,
    fullName: "Lucas Witherdon",
    post: "Senior Quality Engineer",
    email: "lwitherdon21@storify.com",
    city: "Staré Křečany",
    startDate: "09/26/2016",
    salary: 19387.76,
    age: "38",
    experience: "2 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 75,
    avatar: "",
    fullName: "Pegeen Peasegod",
    post: "Web Designer",
    email: "ppeasegod22@slideshare.net",
    city: "Keda",
    startDate: "05/21/2016",
    salary: 24014.04,
    age: "59",
    experience: "6 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 76,
    avatar: "",
    fullName: "Elyn Watkinson",
    post: "Structural Analysis Engineer",
    email: "ewatkinson23@blogspot.com",
    city: "Osan",
    startDate: "09/30/2016",
    salary: 14493.51,
    age: "55",
    experience: "7 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 77,
    avatar: avatar8,
    fullName: "Babb Skirving",
    post: "Analyst Programmer",
    email: "bskirving24@cbsnews.com",
    city: "Balky",
    startDate: "09/27/2016",
    salary: 24733.28,
    age: "39",
    experience: "1 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 78,
    avatar: "",
    fullName: "Shelli Ondracek",
    post: "Financial Advisor",
    email: "sondracek25@plala.or.jp",
    city: "Aoluguya Ewenke Minzu",
    startDate: "03/28/2016",
    salary: 21922.17,
    age: "23",
    experience: "1 Year",
    status: 3
  },
  {
    responsiveId: "",
    id: 79,
    avatar: avatar7,
    fullName: "Stanislaw Melloy",
    post: "Sales Associate",
    email: "smelloy26@fastcompany.com",
    city: "Funafuti",
    startDate: "04/13/2017",
    salary: 16944.42,
    age: "30",
    experience: "2 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 80,
    avatar: "",
    fullName: "Seamus Eisikovitsh",
    post: "Legal Assistant",
    email: "seisikovitsh27@usgs.gov",
    city: "Cangkringan",
    startDate: "05/28/2018",
    salary: 21963.69,
    age: "22",
    experience: "7 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 81,
    avatar: avatar2,
    fullName: "Tammie Wattins",
    post: "Web Designer",
    email: "twattins28@statcounter.com",
    city: "Xilin",
    startDate: "08/07/2018",
    salary: 16049.93,
    age: "36",
    experience: "5 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 82,
    avatar: avatar5,
    fullName: "Aila Quailadis",
    post: "Technical Writer",
    email: "aquail29@prlog.org",
    city: "Shuangchahe",
    startDate: "02/11/2018",
    salary: 24137.29,
    age: "43",
    experience: "4 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 83,
    avatar: "",
    fullName: "Myrvyn Gilogly",
    post: "Research Associate",
    email: "mgilogly2a@elpais.com",
    city: "Prince Rupert",
    startDate: "05/13/2018",
    salary: 10089.96,
    age: "19",
    experience: "8 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 84,
    avatar: avatar4,
    fullName: "Hanna Langthorne",
    post: "Analyst Programmer",
    email: "hlangthorne2b@stumbleupon.com",
    city: "Guaynabo",
    startDate: "11/11/2018",
    salary: 14227.1,
    age: "21",
    experience: "7 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 85,
    avatar: "",
    fullName: "Ruby Gimblet",
    post: "Registered Nurse",
    email: "rgimblet2c@1688.com",
    city: "Nanyulinxi",
    startDate: "03/28/2016",
    salary: 19562.59,
    age: "30",
    experience: "1 Year",
    status: 2
  },
  {
    responsiveId: "",
    id: 86,
    avatar: avatar4,
    fullName: "Louis Paszak",
    post: "Programmer",
    email: "lpaszak2d@behance.net",
    city: "Chiscas",
    startDate: "04/25/2016",
    salary: 17178.86,
    age: "51",
    experience: "7 Years",
    status: 5
  },
  {
    responsiveId: "",
    id: 87,
    avatar: "",
    fullName: "Glennie Riolfi",
    post: "Computer Systems Analyst",
    email: "griolfi2e@drupal.org",
    city: "Taung",
    startDate: "06/18/2018",
    salary: 15089.83,
    age: "29",
    experience: "4 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 88,
    avatar: "",
    fullName: "Jemimah Morgan",
    post: "Staff Accountant",
    email: "jmorgan2f@nifty.com",
    city: "La Esperanza",
    startDate: "01/17/2016",
    salary: 18330.72,
    age: "27",
    experience: "3 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 89,
    avatar: avatar8,
    fullName: "Talya Brandon",
    post: "Food Chemist",
    email: "tbrandon2g@ucoz.com",
    city: "Zaječar",
    startDate: "10/08/2018",
    salary: 16284.64,
    age: "28",
    experience: "6 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 90,
    avatar: avatar6,
    fullName: "Renate Shay",
    post: "Recruiter",
    email: "rshay2h@tumblr.com",
    city: "Pueblo Viejo",
    startDate: "03/15/2017",
    salary: 18523.75,
    age: "28",
    experience: "3 Years",
    status: 1
  },
  {
    responsiveId: "",
    id: 91,
    avatar: "",
    fullName: "Julianne Bartosik",
    post: "Senior Cost Accountant",
    email: "jbartosik2i@state.gov",
    city: "Botlhapatlou",
    startDate: "02/06/2017",
    salary: 17607.66,
    age: "48",
    experience: "6 Years",
    status: 3
  },
  {
    responsiveId: "",
    id: 92,
    avatar: avatar3,
    fullName: "Yvonne Emberton",
    post: "Recruiter",
    email: "yemberton2j@blog.com",
    city: "Nagcarlan",
    startDate: "02/13/2017",
    salary: 17550.18,
    age: "20",
    experience: "1 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 93,
    avatar: avatar5,
    fullName: "Danya Faichnie",
    post: "Social Worker",
    email: "dfaichnie2k@weather.com",
    city: "Taling",
    startDate: "07/29/2019",
    salary: 18469.35,
    age: "37",
    experience: "3 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 94,
    avatar: "",
    fullName: "Ronica Hasted",
    post: "Software Consultant",
    email: "rhasted2l@hexun.com",
    city: "Gangkou",
    startDate: "07/04/2019",
    salary: 24866.66,
    age: "53",
    experience: "7 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 96,
    avatar: "",
    fullName: "Alaric Beslier",
    post: "Tax Accountant",
    email: "abeslier2n@zimbio.com",
    city: "Ocucaje",
    startDate: "04/16/2017",
    salary: 19366.53,
    age: "22",
    experience: "8 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 2,
    avatar: avatar1,
    fullName: "Bailie Coulman",
    post: "VP Quality Control",
    email: "bcoulman1@yolasite.com",
    city: "Hinigaran",
    startDate: "05/20/2018",
    salary: 13633.69,
    age: "63",
    experience: "3 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 97,
    avatar: "",
    fullName: "Reina Peckett",
    post: "Quality Control Specialist",
    email: "rpeckett2o@timesonline.co.uk",
    city: "Anyang",
    startDate: "05/20/2018",
    salary: 16619.4,
    age: "46",
    experience: "8 Years",
    status: 4
  },
  {
    responsiveId: "",
    id: 98,
    avatar: avatar7,
    fullName: "Olivette Gudgin",
    post: "Paralegal",
    email: "ogudgin2p@gizmodo.com",
    city: "Fujinomiya",
    startDate: "04/09/2019",
    salary: 15211.6,
    age: "47",
    experience: "8 Years",
    status: 2
  },
  {
    responsiveId: "",
    id: 99,
    avatar: avatar8,
    fullName: "Evangelina Carnock",
    post: "Cost Accountant",
    email: "ecarnock2q@washington.edu",
    city: "Doushaguan",
    startDate: "01/26/2017",
    salary: 23704.82,
    age: "51",
    experience: "0 Year",
    status: 4
  },
  {
    responsiveId: "",
    id: 100,
    avatar: "",
    fullName: "Glyn Giacoppo",
    post: "Software Test Engineer",
    email: "ggiacoppo2r@apache.org",
    city: "Butha-Buthe",
    startDate: "04/15/2017",
    salary: 24973.48,
    age: "41",
    experience: "7 Years",
    status: 2
  }
];
const _sfc_main$9 = {
  __name: "DemoDataTableExternalPagination",
  __ssrInlineRender: true,
  setup(__props) {
    const userList = ref([]);
    const options = ref({
      page: 1,
      itemsPerPage: 5,
      sortBy: [""],
      sortDesc: [false]
    });
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    onMounted(() => {
      userList.value = JSON.parse(JSON.stringify(data));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(userList),
        "items-per-page": unref(options).itemsPerPage,
        page: unref(options).page,
        options: unref(options),
        class: "text-no-wrap"
      }, _attrs), {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              class: "font-weight-medium",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                class: "font-weight-medium",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "pt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(options).itemsPerPage,
                    "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = $event,
                    label: "Rows per page:",
                    type: "number",
                    min: "1",
                    max: "15",
                    "hide-details": "",
                    variant: "underlined",
                    style: { "max-inline-size": "8rem", "min-inline-size": "5rem" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VPagination, {
                    modelValue: unref(options).page,
                    "onUpdate:modelValue": ($event) => unref(options).page = $event,
                    "total-visible": _ctx.$vuetify.display.smAndDown ? 2 : 3,
                    length: Math.ceil(unref(userList).length / unref(options).itemsPerPage)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                      createVNode(VTextField, {
                        modelValue: unref(options).itemsPerPage,
                        "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = $event,
                        label: "Rows per page:",
                        type: "number",
                        min: "1",
                        max: "15",
                        "hide-details": "",
                        variant: "underlined",
                        style: { "max-inline-size": "8rem", "min-inline-size": "5rem" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VPagination, {
                        modelValue: unref(options).page,
                        "onUpdate:modelValue": ($event) => unref(options).page = $event,
                        "total-visible": _ctx.$vuetify.display.smAndDown ? 2 : 3,
                        length: Math.ceil(unref(userList).length / unref(options).itemsPerPage)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "pt-2" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                    createVNode(VTextField, {
                      modelValue: unref(options).itemsPerPage,
                      "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = $event,
                      label: "Rows per page:",
                      type: "number",
                      min: "1",
                      max: "15",
                      "hide-details": "",
                      variant: "underlined",
                      style: { "max-inline-size": "8rem", "min-inline-size": "5rem" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VPagination, {
                      modelValue: unref(options).page,
                      "onUpdate:modelValue": ($event) => unref(options).page = $event,
                      "total-visible": _ctx.$vuetify.display.smAndDown ? 2 : 3,
                      length: Math.ceil(unref(userList).length / unref(options).itemsPerPage)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableExternalPagination.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoDataTableRowEditingViaDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const editDialog = ref(false);
    const deleteDialog = ref(false);
    const defaultItem = ref({
      responsiveId: "",
      id: -1,
      avatar: "",
      fullName: "",
      post: "",
      email: "",
      city: "",
      startDate: "",
      salary: -1,
      age: "",
      experience: "",
      status: -1
    });
    const editedItem = ref(defaultItem.value);
    const editedIndex = ref(-1);
    const userList = ref([]);
    const selectedOptions = [
      {
        text: "Current",
        value: 1
      },
      {
        text: "Professional",
        value: 2
      },
      {
        text: "Rejected",
        value: 3
      },
      {
        text: "Resigned",
        value: 4
      },
      {
        text: "Applied",
        value: 5
      }
    ];
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      },
      {
        title: "ACTIONS",
        key: "actions"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    const editItem = (item) => {
      editedIndex.value = userList.value.indexOf(item);
      editedItem.value = { ...item };
      editDialog.value = true;
    };
    const deleteItem = (item) => {
      editedIndex.value = userList.value.indexOf(item);
      editedItem.value = { ...item };
      deleteDialog.value = true;
    };
    const close = () => {
      editDialog.value = false;
      editedIndex.value = -1;
      editedItem.value = { ...defaultItem.value };
    };
    const closeDelete = () => {
      deleteDialog.value = false;
      editedIndex.value = -1;
      editedItem.value = { ...defaultItem.value };
    };
    const save = () => {
      if (editedIndex.value > -1)
        Object.assign(userList.value[editedIndex.value], editedItem.value);
      else
        userList.value.push(editedItem.value);
      close();
    };
    const deleteItemConfirm = () => {
      userList.value.splice(editedIndex.value, 1);
      closeDelete();
    };
    onMounted(() => {
      userList.value = JSON.parse(JSON.stringify(data));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VDataTable, {
        headers,
        items: unref(userList),
        "items-per-page": 5,
        class: "text-no-wrap"
      }, {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              density: "comfortable"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                density: "comfortable"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, {
              size: "small",
              onClick: ($event) => editItem(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-pencil-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-pencil-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              size: "small",
              onClick: ($event) => deleteItem(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-delete-bin-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex gap-1" }, [
                createVNode(_component_IconBtn, {
                  size: "small",
                  onClick: ($event) => editItem(item)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-pencil-line" })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_component_IconBtn, {
                  size: "small",
                  onClick: ($event) => deleteItem(item)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-delete-bin-line" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(editDialog),
        "onUpdate:modelValue": ($event) => isRef(editDialog) ? editDialog.value = $event : null,
        "max-width": "600px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="headline"${_scopeId3}>Edit Item</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "headline" }, "Edit Item")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(editedItem).fullName,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                            label: "User name"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).fullName,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                              label: "User name"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(editedItem).email,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                            label: "Email"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).email,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                              label: "Email"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(editedItem).salary,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                            label: "Salary",
                                            prefix: "$",
                                            type: "number"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).salary,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                              label: "Salary",
                                              prefix: "$",
                                              type: "number"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(editedItem).age,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                            label: "Age",
                                            type: "number"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).age,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                              label: "Age",
                                              type: "number"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(editedItem).startDate,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                            label: "Date"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).startDate,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                              label: "Date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(editedItem).status,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                            items: selectedOptions,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Status",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(editedItem).status,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                              items: selectedOptions,
                                              "item-title": "text",
                                              "item-value": "value",
                                              label: "Status",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).fullName,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                            label: "User name"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).email,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                            label: "Email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).salary,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                            label: "Salary",
                                            prefix: "$",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).age,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                            label: "Age",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).startDate,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                            label: "Date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(editedItem).status,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                            items: selectedOptions,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Status",
                                            variant: "outlined"
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
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).fullName,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                          label: "User name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).email,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                          label: "Email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).salary,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                          label: "Salary",
                                          prefix: "$",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).age,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                          label: "Age",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).startDate,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                          label: "Date"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(editedItem).status,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                          items: selectedOptions,
                                          "item-title": "text",
                                          "item-value": "value",
                                          label: "Status",
                                          variant: "outlined"
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
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).fullName,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                        label: "User name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).email,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                        label: "Email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).salary,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                        label: "Salary",
                                        prefix: "$",
                                        type: "number"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).age,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                        label: "Age",
                                        type: "number"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).startDate,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                        label: "Date"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(editedItem).status,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                        items: selectedOptions,
                                        "item-title": "text",
                                        "item-value": "value",
                                        label: "Status",
                                        variant: "outlined"
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
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: close
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          variant: "elevated",
                          onClick: save
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save `);
                            } else {
                              return [
                                createTextVNode(" Save ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "error",
                            variant: "outlined",
                            onClick: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "success",
                            variant: "elevated",
                            onClick: save
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "headline" }, "Edit Item")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(editedItem).fullName,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                      label: "User name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(editedItem).email,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                      label: "Email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(editedItem).salary,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                      label: "Salary",
                                      prefix: "$",
                                      type: "number"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(editedItem).age,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                      label: "Age",
                                      type: "number"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(editedItem).startDate,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                      label: "Date"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(editedItem).status,
                                      "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                      items: selectedOptions,
                                      "item-title": "text",
                                      "item-value": "value",
                                      label: "Status",
                                      variant: "outlined"
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
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "success",
                          variant: "elevated",
                          onClick: save
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "headline" }, "Edit Item")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(editedItem).fullName,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).fullName = $event,
                                    label: "User name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(editedItem).email,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).email = $event,
                                    label: "Email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(editedItem).salary,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).salary = $event,
                                    label: "Salary",
                                    prefix: "$",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(editedItem).age,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).age = $event,
                                    label: "Age",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(editedItem).startDate,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).startDate = $event,
                                    label: "Date"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(editedItem).status,
                                    "onUpdate:modelValue": ($event) => unref(editedItem).status = $event,
                                    items: selectedOptions,
                                    "item-title": "text",
                                    "item-value": "value",
                                    label: "Status",
                                    variant: "outlined"
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
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "error",
                        variant: "outlined",
                        onClick: close
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "success",
                        variant: "elevated",
                        onClick: save
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(deleteDialog),
        "onUpdate:modelValue": ($event) => isRef(deleteDialog) ? deleteDialog.value = $event : null,
        "max-width": "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Are you sure you want to delete this item? `);
                      } else {
                        return [
                          createTextVNode(" Are you sure you want to delete this item? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: closeDelete
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          variant: "elevated",
                          onClick: deleteItemConfirm
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` OK `);
                            } else {
                              return [
                                createTextVNode(" OK ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "error",
                            variant: "outlined",
                            onClick: closeDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "success",
                            variant: "elevated",
                            onClick: deleteItemConfirm
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" OK ")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" Are you sure you want to delete this item? ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: closeDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "success",
                          variant: "elevated",
                          onClick: deleteItemConfirm
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" OK ")
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer)
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Are you sure you want to delete this item? ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "error",
                        variant: "outlined",
                        onClick: closeDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "success",
                        variant: "elevated",
                        onClick: deleteItemConfirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" OK ")
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer)
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableRowEditingViaDialog.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoDataTableGroupingRows",
  __ssrInlineRender: true,
  setup(__props) {
    const userList = [
      {
        responsiveId: "",
        id: 1,
        avatar: avatar8,
        fullName: "Korrie O'Crevy",
        post: "Nuclear Power Engineer",
        email: "kocrevy0@thetimes.co.uk",
        city: "Krasnosilka",
        startDate: "09/23/2016",
        salary: 23896.35,
        age: "61",
        experience: "1 Year",
        status: "Professional"
      },
      {
        responsiveId: "",
        id: 2,
        avatar: avatar1,
        fullName: "Bailie Coulman",
        post: "VP Quality Control",
        email: "bcoulman1@yolasite.com",
        city: "Hinigaran",
        startDate: "05/20/2018",
        salary: 13633.69,
        age: "63",
        experience: "3 Years",
        status: "Professional"
      },
      {
        responsiveId: "",
        id: 3,
        avatar: avatar7,
        fullName: "Stella Ganderton",
        post: "Operator",
        email: "sganderton2@tuttocitta.it",
        city: "Golcowa",
        startDate: "03/24/2018",
        salary: 13076.28,
        age: "66",
        experience: "6 Years",
        status: "Applied"
      },
      {
        responsiveId: "",
        id: 4,
        avatar: avatar8,
        fullName: "Dorolice Crossman",
        post: "Cost Accountant",
        email: "dcrossman3@google.co.jp",
        city: "Paquera",
        startDate: "12/03/2017",
        salary: 12336.17,
        age: "22",
        experience: "2 Years",
        status: "Professional"
      },
      {
        responsiveId: "",
        id: 6,
        avatar: "",
        fullName: "Genevra Honeywood",
        post: "Geologist",
        email: "ghoneywood5@narod.ru",
        city: "Maofan",
        startDate: "06/01/2017",
        salary: 17803.8,
        age: "61",
        experience: "1 Year",
        status: "Current"
      },
      {
        responsiveId: "",
        id: 7,
        avatar: "",
        fullName: "Eileen Diehn",
        post: "Environmental Specialist",
        email: "ediehn6@163.com",
        city: "Lampuyang",
        startDate: "10/15/2017",
        salary: 18991.67,
        age: "59",
        experience: "9 Years",
        status: "Rejected"
      },
      {
        responsiveId: "",
        id: 8,
        avatar: avatar7,
        fullName: "Richardo Aldren",
        post: "Senior Sales Associate",
        email: "raldren7@mtv.com",
        city: "Skoghall",
        startDate: "11/05/2016",
        salary: 19230.13,
        age: "55",
        experience: "5 Years",
        status: "Rejected"
      },
      {
        responsiveId: "",
        id: 9,
        avatar: avatar2,
        fullName: "Allyson Moakler",
        post: "Safety Technician",
        email: "amoakler8@shareasale.com",
        city: "Mogilany",
        startDate: "12/29/2018",
        salary: 11677.32,
        age: "39",
        experience: "9 Years",
        status: "Applied"
      },
      {
        responsiveId: "",
        id: 11,
        avatar: "",
        fullName: "De Falloon",
        post: "Sales Representative",
        email: "dfalloona@ifeng.com",
        city: "Colima",
        startDate: "06/12/2018",
        salary: 19252.12,
        age: "30",
        experience: "0 Year",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 12,
        avatar: "",
        fullName: "Cyrus Gornal",
        post: "Senior Sales Associate",
        email: "cgornalb@fda.gov",
        city: "Boro Utara",
        startDate: "12/09/2017",
        salary: 16745.47,
        age: "22",
        experience: "2 Years",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 13,
        avatar: "",
        fullName: "Tallou Balf",
        post: "Staff Accountant",
        email: "tbalfc@sina.com.cn",
        city: "Siliana",
        startDate: "01/21/2016",
        salary: 15488.53,
        age: "36",
        experience: "6 Years",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 15,
        avatar: "",
        fullName: "Wilmar Bourton",
        post: "Administrative Assistant",
        email: "wbourtone@sakura.ne.jp",
        city: "Bích Động",
        startDate: "04/25/2018",
        salary: 13304.45,
        age: "19",
        experience: "9 Years",
        status: "Applied"
      },
      {
        responsiveId: "",
        id: 16,
        avatar: avatar4,
        fullName: "Robinson Brazenor",
        post: "General Manager",
        email: "rbrazenorf@symantec.com",
        city: "Gendiwu",
        startDate: "12/23/2017",
        salary: 11953.08,
        age: "66",
        experience: "6 Years",
        status: "Applied"
      },
      {
        responsiveId: "",
        id: 17,
        avatar: "",
        fullName: "Nadia Bettenson",
        post: "Environmental Tech",
        email: "nbettensong@joomla.org",
        city: "Chabařovice",
        startDate: "07/11/2018",
        salary: 20484.44,
        age: "64",
        experience: "4 Years",
        status: "Current"
      },
      {
        responsiveId: "",
        id: 18,
        avatar: "",
        fullName: "Titus Hayne",
        post: "Web Designer",
        email: "thayneh@kickstarter.com",
        city: "Yangon",
        startDate: "05/25/2019",
        salary: 16871.48,
        age: "59",
        experience: "9 Years",
        status: "Current"
      },
      {
        responsiveId: "",
        id: 19,
        avatar: avatar4,
        fullName: "Roxie Huck",
        post: "Administrative Assistant",
        email: "rhucki@ed.gov",
        city: "Polýkastro",
        startDate: "04/04/2019",
        salary: 19653.56,
        age: "41",
        experience: "1 Year",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 23,
        avatar: avatar7,
        fullName: "Rosmunda Steed",
        post: "Assistant Media Planner",
        email: "rsteedm@xing.com",
        city: "Manzanares",
        startDate: "12/23/2017",
        salary: 13778.34,
        age: "21",
        experience: "1 Year",
        status: "Applied"
      },
      {
        responsiveId: "",
        id: 26,
        avatar: avatar2,
        fullName: "Morgen Benes",
        post: "Senior Sales Associate",
        email: "mbenesp@ted.com",
        city: "Cà Mau",
        startDate: "04/10/2016",
        salary: 16969.63,
        age: "42",
        experience: "2 Years",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 28,
        avatar: "",
        fullName: "Kliment McGinney",
        post: "Chief Design Engineer",
        email: "kmcginneyr@paginegialle.it",
        city: "Xiaocheng",
        startDate: "07/09/2018",
        salary: 24027.81,
        age: "28",
        experience: "8 Years",
        status: "Resigned"
      },
      {
        responsiveId: "",
        id: 31,
        avatar: "",
        fullName: "Teressa Bleakman",
        post: "Senior Editor",
        email: "tbleakmanu@phpbb.com",
        city: "Žebrák",
        startDate: "09/03/2016",
        salary: 24875.41,
        age: "37",
        experience: "7 Years",
        status: "Applied"
      }
    ];
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const groupBy = [{ key: "status" }];
    const resolveStatusVariant = (status) => {
      if (status === "Current")
        return { color: "primary" };
      else if (status === "Professional")
        return { color: "success" };
      else if (status === "Rejected")
        return { color: "error" };
      else if (status === "Resigned")
        return { color: "warning" };
      else
        return { color: "info" };
    };
    const getIcon = (props) => props.icon;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: userList,
        "items-per-page": 10,
        "group-by": groupBy,
        class: "text-no-wrap"
      }, _attrs), {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              size: "small",
              class: "font-weight-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.status), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                size: "small",
                class: "font-weight-medium"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.status), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "data-table-group": withCtx(({ props, item, count }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<td${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, mergeProps(props, {
              variant: "text",
              density: "comfortable"
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    class: "flip-in-rtl",
                    icon: getIcon(props)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      class: "flip-in-rtl",
                      icon: getIcon(props)
                    }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(item.value)}</span><span${_scopeId}>(${ssrInterpolate(count)})</span></td>`);
          } else {
            return [
              createVNode("td", null, [
                createVNode(VBtn, mergeProps(props, {
                  variant: "text",
                  density: "comfortable"
                }), {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      class: "flip-in-rtl",
                      icon: getIcon(props)
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1040),
                createVNode("span", null, toDisplayString(item.value), 1),
                createVNode("span", null, "(" + toDisplayString(count) + ")", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableGroupingRows.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoDataTableExpandableRows",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "",
        key: "data-table-expand"
      },
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        "items-per-page": 5,
        class: "text-no-wrap",
        "expand-on-click": ""
      }, _attrs), {
        "expanded-row": withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<tr class="v-data-table__tr"${_scopeId}><td${ssrRenderAttr("colspan", headers.length)}${_scopeId}><p class="my-1"${_scopeId}> City: ${ssrInterpolate(slotProps.item.city)}</p><p class="my-1"${_scopeId}> Experience: ${ssrInterpolate(slotProps.item.experience)}</p><p${_scopeId}>Post: ${ssrInterpolate(slotProps.item.post)}</p></td></tr>`);
          } else {
            return [
              createVNode("tr", { class: "v-data-table__tr" }, [
                createVNode("td", {
                  colspan: headers.length
                }, [
                  createVNode("p", { class: "my-1" }, " City: " + toDisplayString(slotProps.item.city), 1),
                  createVNode("p", { class: "my-1" }, " Experience: " + toDisplayString(slotProps.item.experience), 1),
                  createVNode("p", null, "Post: " + toDisplayString(slotProps.item.post), 1)
                ], 8, ["colspan"])
              ])
            ];
          }
        }),
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              class: "font-weight-medium",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                class: "font-weight-medium",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableExpandableRows.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoDataTableFixedHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        "items-per-page": 10,
        height: "300",
        class: "text-no-wrap",
        "fixed-header": ""
      }, _attrs), {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              class: "font-weight-medium",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                class: "font-weight-medium",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableFixedHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoDataTableRowSelection",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        "items-per-page": 5,
        "show-select": "",
        class: "text-no-wrap"
      }, _attrs), {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              class: "font-weight-medium",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                class: "font-weight-medium",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableRowSelection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoDataTableCellSlot",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "SALARY",
        key: "salary"
      },
      {
        title: "AGE",
        key: "age"
      },
      {
        title: "STATUS",
        key: "status"
      }
    ];
    const resolveStatusVariant = (status) => {
      if (status === 1)
        return {
          color: "primary",
          text: "Current"
        };
      else if (status === 2)
        return {
          color: "success",
          text: "Professional"
        };
      else if (status === 3)
        return {
          color: "error",
          text: "Rejected"
        };
      else if (status === 4)
        return {
          color: "warning",
          text: "Resigned"
        };
      else
        return {
          color: "info",
          text: "Applied"
        };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        "items-per-page": 5,
        class: "text-no-wrap"
      }, _attrs), {
        "item.fullName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "32",
              color: item.avatar ? "" : "primary",
              class: item.avatar ? "" : "v-avatar-light-bg primary--text",
              variant: !item.avatar ? "tonal" : void 0
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: item.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName))}</span>`);
                  }
                } else {
                  return [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column ms-3"${_scopeId}><span class="d-block font-weight-medium text-high-emphasis text-truncate"${_scopeId}>${ssrInterpolate(item.fullName)}</span><small${_scopeId}>${ssrInterpolate(item.post)}</small></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VAvatar, {
                  size: "32",
                  color: item.avatar ? "" : "primary",
                  class: item.avatar ? "" : "v-avatar-light-bg primary--text",
                  variant: !item.avatar ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: item.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.fullName)), 1))
                  ]),
                  _: 2
                }, 1032, ["color", "class", "variant"]),
                createVNode("div", { class: "d-flex flex-column ms-3" }, [
                  createVNode("span", { class: "d-block font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(item.fullName), 1),
                  createVNode("small", null, toDisplayString(item.post), 1)
                ])
              ])
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: resolveStatusVariant(item.status).color,
              class: "font-weight-medium",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(resolveStatusVariant(item.status).text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                color: resolveStatusVariant(item.status).color,
                class: "font-weight-medium",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(resolveStatusVariant(item.status).text), 1)
                ]),
                _: 2
              }, 1032, ["color"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableCellSlot.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoDataTableDense",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "ID",
        key: "id"
      },
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "EXPERIENCE",
        key: "experience"
      },
      {
        title: "AGE",
        key: "age"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        density: "compact",
        "items-per-page": 5,
        class: "text-no-wrap"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableDense.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoDataTableBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "ID",
        key: "id"
      },
      {
        title: "NAME",
        key: "fullName"
      },
      {
        title: "EMAIL",
        key: "email"
      },
      {
        title: "DATE",
        key: "startDate"
      },
      {
        title: "EXPERIENCE",
        key: "experience"
      },
      {
        title: "AGE",
        key: "age"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers,
        items: unref(data),
        "items-per-page": 5,
        class: "text-no-wrap"
      }, _attrs), {
        "item.id": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-h6"${_scopeId}>${ssrInterpolate(item.id)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-h6" }, toDisplayString(item.id), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/data-table/DemoDataTableBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <template #item.id="{ item }">
      <span class="text-h6">{{ item.id }}</span>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <template #item.id="{ item }">
      <span class="text-h6">{{ item.id }}</span>
    </template>
  </VDataTable>
</template>
` };
const cellSlot = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
` };
const dense = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
    class="text-no-wrap"
  />
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
    class="text-no-wrap"
  />
</template>
` };
const expandableRows = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  {
    title: '',
    key: 'data-table-expand',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
` };
const externalPagination = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const userList = ref<Data[]>([])
const options = ref({ page: 1, itemsPerPage: 5, sortBy: [''], sortDesc: [false] })

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VTextField
            v-model="options.itemsPerPage"
            label="Rows per page:"
            type="number"
            min="1"
            max="15"
            hide-details
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 2 : 3"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const userList = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false],
})

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VTextField
            v-model="options.itemsPerPage"
            label="Rows per page:"
            type="number"
            min="1"
            max="15"
            hide-details
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 2 : 3"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
` };
const fixedHeader = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    class="text-no-wrap"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    class="text-no-wrap"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
` };
const groupingRows = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = (status: string) => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = (props: Record<string, unknown>) => props.icon as any
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = status => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = props => props.icon
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
` };
const kitchenSink = { ts: `<script setup lang="ts">
import type { SalesDetails } from '@db/pages/datatable/types'

const { data: productList } = await useApi<SalesDetails[]>('pages/datatable')

const search = ref('')

// headers
const headers = [
  { title: 'PRODUCT', key: 'product.name' },
  { title: 'DATE', key: 'date' },
  { title: 'CATEGORY', key: 'product.category' },
  { title: 'BUYERS', key: 'buyer.name' },
  { title: 'PAYMENT', key: 'payment', sortable: false },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'DELETE', key: 'delete', sortable: false },
]

// 👉 methods
const deleteItem = (itemId: number) => {
  if (!productList.value)
    return

  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  { name: 'Mouse', icon: 'ri-mouse-fill', color: 'warning' },
  { name: 'Glass', icon: 'ri-glasses-line', color: 'primary' },
  { name: 'Smart Watch', icon: 'ri-time-line', color: 'success' },
  { name: 'Bag', icon: 'ri-shopping-bag-line', color: 'info' },
  { name: 'Storage Device', icon: 'ri-tape-line', color: 'warning' },
  { name: 'Bluetooth', icon: 'ri-bluetooth-line', color: 'error' },
  { name: 'Gaming', icon: 'ri-gamepad-line', color: 'warning' },
  { name: 'Home', icon: 'ri-home-line', color: 'error' },
  { name: 'VR', icon: 'ri-goggles-line', color: 'primary' },
  { name: 'Shoes', icon: 'ri-omega', color: 'success' },
  { name: 'Electronics', icon: 'ri-flashlight-fill', color: 'info' },
  { name: 'Projector', icon: 'ri-projector-line', color: 'warning' },
  { name: 'iPod', icon: 'ri-music-line', color: 'error' },
  { name: 'Keyboard', icon: 'ri-keyboard-box-line', color: 'primary' },
  { name: 'Smart Phone', icon: 'ri-smartphone-line', color: 'success' },
  { name: 'Smart TV', icon: 'ri-tv-line', color: 'info' },
  { name: 'Google Home', icon: 'ri-google-line', color: 'warning' },
  { name: 'Mac', icon: 'ri-apple-line', color: 'error' },
  { name: 'Headphone', icon: 'ri-headphone-line', color: 'primary' },
  { name: 'iMac', icon: 'ri-computer-line', color: 'success' },
  { name: 'iPhone', icon: 'ri-apple-line', color: 'warning' },
]

const resolveStatusColor = (status: string) => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = (categoryName: string): {
  icon: string
  color: string }[] => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)

  if (index !== -1)
    return [{ icon: categoryIcons[index].icon, color: categoryIcons[index].color }]

  return [{ icon: 'ri-question-line', color: 'primary' }]
}
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            label="Search"
            placeholder="Search ..."
            append-inner-icon="ri-search-line"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="18"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center text-high-emphasis">
            <span>\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn
          size="small"
          @click="deleteItem(item.product.id)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`, js: `<script setup>
const { data: productList } = await useApi('pages/datatable')
const search = ref('')

// headers
const headers = [
  {
    title: 'PRODUCT',
    key: 'product.name',
  },
  {
    title: 'DATE',
    key: 'date',
  },
  {
    title: 'CATEGORY',
    key: 'product.category',
  },
  {
    title: 'BUYERS',
    key: 'buyer.name',
  },
  {
    title: 'PAYMENT',
    key: 'payment',
    sortable: false,
  },
  {
    title: 'STATUS',
    key: 'status',
    sortable: false,
  },
  {
    title: 'DELETE',
    key: 'delete',
    sortable: false,
  },
]

const deleteItem = itemId => {
  if (!productList.value)
    return
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  {
    name: 'Mouse',
    icon: 'ri-mouse-fill',
    color: 'warning',
  },
  {
    name: 'Glass',
    icon: 'ri-glasses-line',
    color: 'primary',
  },
  {
    name: 'Smart Watch',
    icon: 'ri-time-line',
    color: 'success',
  },
  {
    name: 'Bag',
    icon: 'ri-shopping-bag-line',
    color: 'info',
  },
  {
    name: 'Storage Device',
    icon: 'ri-tape-line',
    color: 'warning',
  },
  {
    name: 'Bluetooth',
    icon: 'ri-bluetooth-line',
    color: 'error',
  },
  {
    name: 'Gaming',
    icon: 'ri-gamepad-line',
    color: 'warning',
  },
  {
    name: 'Home',
    icon: 'ri-home-line',
    color: 'error',
  },
  {
    name: 'VR',
    icon: 'ri-goggles-line',
    color: 'primary',
  },
  {
    name: 'Shoes',
    icon: 'ri-omega',
    color: 'success',
  },
  {
    name: 'Electronics',
    icon: 'ri-flashlight-fill',
    color: 'info',
  },
  {
    name: 'Projector',
    icon: 'ri-projector-line',
    color: 'warning',
  },
  {
    name: 'iPod',
    icon: 'ri-music-line',
    color: 'error',
  },
  {
    name: 'Keyboard',
    icon: 'ri-keyboard-box-line',
    color: 'primary',
  },
  {
    name: 'Smart Phone',
    icon: 'ri-smartphone-line',
    color: 'success',
  },
  {
    name: 'Smart TV',
    icon: 'ri-tv-line',
    color: 'info',
  },
  {
    name: 'Google Home',
    icon: 'ri-google-line',
    color: 'warning',
  },
  {
    name: 'Mac',
    icon: 'ri-apple-line',
    color: 'error',
  },
  {
    name: 'Headphone',
    icon: 'ri-headphone-line',
    color: 'primary',
  },
  {
    name: 'iMac',
    icon: 'ri-computer-line',
    color: 'success',
  },
  {
    name: 'iPhone',
    icon: 'ri-apple-line',
    color: 'warning',
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]
  
  return [{
    icon: 'ri-question-line',
    color: 'primary',
  }]
}
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            label="Search"
            placeholder="Search ..."
            append-inner-icon="ri-search-line"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="18"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center text-high-emphasis">
            <span>\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn
          size="small"
          @click="deleteItem(item.product.id)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
` };
const rowEditingViaDialog = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref<Data>({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref<Data>(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref<Data[]>([])

// status options
const selectedOptions = [
  { text: 'Current', value: 1 },
  { text: 'Professional', value: 2 },
  { text: 'Rejected', value: 3 },
  { text: 'Resigned', value: 4 },
  { text: 'Applied', value: 5 },
]

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
  { title: 'ACTIONS', key: 'actions' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

// 👉 methods
const editItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)

  else
    userList.value.push(editedItem.value)

  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        density="comfortable"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn
          size="small"
          @click="editItem(item)"
        >
          <VIcon icon="ri-pencil-line" />
        </IconBtn>
        <IconBtn
          size="small"
          @click="deleteItem(item)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard>
      <VCardTitle>
        <span class="headline">Edit Item</span>
      </VCardTitle>

      <VCardText>
        <VContainer>
          <VRow>
            <!-- fullName -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.fullName"
                label="User name"
              />
            </VCol>

            <!-- email -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.email"
                label="Email"
              />
            </VCol>

            <!-- salary -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.salary"
                label="Salary"
                prefix="$"
                type="number"
              />
            </VCol>

            <!-- age -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.age"
                label="Age"
                type="number"
              />
            </VCol>

            <!-- start date -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.startDate"
                label="Date"
              />
            </VCol>

            <!-- status -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VSelect
                v-model="editedItem.status"
                :items="selectedOptions"
                item-title="text"
                item-value="value"
                label="Status"
                variant="outlined"
              />
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="close"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="save"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard>
      <VCardTitle>
        Are you sure you want to delete this item?
      </VCardTitle>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="closeDelete"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="deleteItemConfirm"
        >
          OK
        </VBtn>

        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref([])

// status options
const selectedOptions = [
  {
    text: 'Current',
    value: 1,
  },
  {
    text: 'Professional',
    value: 2,
  },
  {
    text: 'Rejected',
    value: 3,
  },
  {
    text: 'Resigned',
    value: 4,
  },
  {
    text: 'Applied',
    value: 5,
  },
]

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
  {
    title: 'ACTIONS',
    key: 'actions',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

const editItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)
  else
    userList.value.push(editedItem.value)
  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        density="comfortable"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn
          size="small"
          @click="editItem(item)"
        >
          <VIcon icon="ri-pencil-line" />
        </IconBtn>
        <IconBtn
          size="small"
          @click="deleteItem(item)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard>
      <VCardTitle>
        <span class="headline">Edit Item</span>
      </VCardTitle>

      <VCardText>
        <VContainer>
          <VRow>
            <!-- fullName -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.fullName"
                label="User name"
              />
            </VCol>

            <!-- email -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.email"
                label="Email"
              />
            </VCol>

            <!-- salary -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.salary"
                label="Salary"
                prefix="$"
                type="number"
              />
            </VCol>

            <!-- age -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.age"
                label="Age"
                type="number"
              />
            </VCol>

            <!-- start date -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.startDate"
                label="Date"
              />
            </VCol>

            <!-- status -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VSelect
                v-model="editedItem.status"
                :items="selectedOptions"
                item-title="text"
                item-value="value"
                label="Status"
                variant="outlined"
              />
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="close"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="save"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard>
      <VCardTitle>
        Are you sure you want to delete this item?
      </VCardTitle>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="closeDelete"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="deleteItemConfirm"
        >
          OK
        </VBtn>

        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
` };
const rowSelection = { ts: `<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`, js: `<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
` };
const _sfc_main = {
  __name: "data-table",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$b;
      const _component_DemoDataTableBasic = _sfc_main$1;
      const _component_DemoDataTableDense = _sfc_main$2;
      const _component_DemoDataTableCellSlot = _sfc_main$3;
      const _component_DemoDataTableRowSelection = _sfc_main$4;
      const _component_DemoDataTableFixedHeader = _sfc_main$5;
      const _component_DemoDataTableExpandableRows = _sfc_main$6;
      const _component_DemoDataTableGroupingRows = _sfc_main$7;
      const _component_DemoDataTableRowEditingViaDialog = _sfc_main$8;
      const _component_DemoDataTableExternalPagination = _sfc_main$9;
      const _component_DemoDataTableKitchenSink = _sfc_main$a;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableBasic)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Dense",
                    code: dense,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableDense, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableDense)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Dense",
                      code: dense,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableDense)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Cell Slot",
                    code: cellSlot,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableCellSlot, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableCellSlot)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Cell Slot",
                      code: cellSlot,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableCellSlot)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Row Selection",
                    code: rowSelection,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableRowSelection, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableRowSelection)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Row Selection",
                      code: rowSelection,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableRowSelection)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Fixed Header",
                    code: fixedHeader,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableFixedHeader, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableFixedHeader)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Fixed Header",
                      code: fixedHeader,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableFixedHeader)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Expandable Rows",
                    code: expandableRows,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableExpandableRows, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableExpandableRows)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Expandable Rows",
                      code: expandableRows,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableExpandableRows)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Grouping Rows",
                    code: groupingRows,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableGroupingRows, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableGroupingRows)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Grouping Rows",
                      code: groupingRows,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableGroupingRows)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Row Editing via Dialog",
                    code: rowEditingViaDialog,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableRowEditingViaDialog, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableRowEditingViaDialog)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Row Editing via Dialog",
                      code: rowEditingViaDialog,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableRowEditingViaDialog)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "External Pagination",
                    code: externalPagination,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableExternalPagination, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableExternalPagination)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "External Pagination",
                      code: externalPagination,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableExternalPagination)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Kitchen Sink",
                    code: kitchenSink,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoDataTableKitchenSink, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoDataTableKitchenSink)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Kitchen Sink",
                      code: kitchenSink,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoDataTableKitchenSink)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    code: basic,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Dense",
                    code: dense,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableDense)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Cell Slot",
                    code: cellSlot,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableCellSlot)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Row Selection",
                    code: rowSelection,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableRowSelection)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Fixed Header",
                    code: fixedHeader,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableFixedHeader)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Expandable Rows",
                    code: expandableRows,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableExpandableRows)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Grouping Rows",
                    code: groupingRows,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableGroupingRows)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Row Editing via Dialog",
                    code: rowEditingViaDialog,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableRowEditingViaDialog)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "External Pagination",
                    code: externalPagination,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableExternalPagination)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Kitchen Sink",
                    code: kitchenSink,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoDataTableKitchenSink)
                    ]),
                    _: 1
                  }, 8, ["code"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/tables/data-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
