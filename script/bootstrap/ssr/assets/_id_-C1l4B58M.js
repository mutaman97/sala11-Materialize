import { ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { _ as _sfc_main$1 } from "./InvoiceAddPaymentDrawer-B1RPBrm1.js";
import { _ as _sfc_main$2 } from "./InvoiceSendInvoiceDrawer-DOI4IWPX.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
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
import "vue3-perfect-scrollbar";
import "@antfu/utils";
import "./AppDateTimePicker-B0c_dYDs.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "./AppDrawerHeaderSection-isEKlId-.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VForm-J0SV9LXx.js";
import "./forwardRefs-IZGbB77j.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VSelect-5lJOBAar.js";
import "./VList-Bay5Fixr.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VTextarea-Bsz3jSWy.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute("apps-invoice-preview-id");
    const isAddPaymentSidebarVisible = ref(false);
    const isSendPaymentSidebarVisible = ref(false);
    const { data: invoiceData } = ([__temp, __restore] = withAsyncContext(() => useApi(`/apps/invoice/${Number(route.params.id)}`)), __temp = await __temp, __restore(), __temp);
    const invoice = ref();
    const paymentDetails = ref();
    if (invoiceData.value) {
      invoice.value = invoiceData.value.invoice;
      paymentDetails.value = invoiceData.value.paymentDetails;
    }
    const purchasedProducts = [
      {
        name: "Premium Branding Package",
        description: "Branding & Promotion",
        qty: 1,
        hours: 15,
        price: 32
      },
      {
        name: "SMM",
        description: "Social media templates",
        qty: 1,
        hours: 14,
        price: 28
      },
      {
        name: "Web Design",
        description: "Web designing package",
        qty: 1,
        hours: 12,
        price: 24
      },
      {
        name: "SEO",
        description: "Search engine optimization",
        qty: 1,
        hours: 5,
        price: 22
      }
    ];
    const printInvoice = () => {
      window.print();
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(invoice) && unref(paymentDetails)) {
        _push(`<section${ssrRenderAttrs(_attrs)} data-v-2014be45>`);
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "invoice-preview-wrapper pa-sm-12 pa-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="invoice-header-preview d-flex flex-wrap justify-space-between align-sm-center flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6" data-v-2014be45${_scopeId3}><div data-v-2014be45${_scopeId3}><div class="app-logo mb-6" data-v-2014be45${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(VNodeRenderer), {
                            nodes: unref(themeConfig).app.logo
                          }, null, _parent4, _scopeId3));
                          _push4(`<h1 class="app-logo-title" data-v-2014be45${_scopeId3}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div><h6 class="text-h6 font-weight-regular" data-v-2014be45${_scopeId3}> Office 149, 450 South Brand Brooklyn </h6><h6 class="text-h6 font-weight-regular" data-v-2014be45${_scopeId3}> San Diego County, CA 91905, USA </h6><h6 class="text-h6 font-weight-regular" data-v-2014be45${_scopeId3}> +1 (123) 456 7891, +44 (876) 543 2198 </h6></div><div data-v-2014be45${_scopeId3}><h5 class="text-h5 mb-6" data-v-2014be45${_scopeId3}> Invoice #${ssrInterpolate(unref(invoice).id)}</h5><h6 class="text-h6 font-weight-regular mb-1" data-v-2014be45${_scopeId3}><span data-v-2014be45${_scopeId3}>Date Issued: </span><span data-v-2014be45${_scopeId3}>${ssrInterpolate(new Date(unref(invoice).issuedDate).toLocaleDateString("en-GB"))}</span></h6><h6 class="text-h6 font-weight-regular" data-v-2014be45${_scopeId3}><span data-v-2014be45${_scopeId3}>Due Date: </span><span data-v-2014be45${_scopeId3}>${ssrInterpolate(new Date(unref(invoice).dueDate).toLocaleDateString("en-GB"))}</span></h6></div></div>`);
                          _push4(ssrRenderComponent(VRow, { class: "print-row mb-3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, { class: "text-no-wrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-h6 mb-4" data-v-2014be45${_scopeId5}> Invoice To: </h6><p class="mb-0 text-body-1" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(invoice).client.name)}</p><p class="mb-0 text-body-1" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(invoice).client.company)}</p><p class="mb-0 text-body-1" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(invoice).client.address)}, ${ssrInterpolate(unref(invoice).client.country)}</p><p class="mb-0 text-body-1" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(invoice).client.contact)}</p><p class="mb-0 text-body-1" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(invoice).client.companyEmail)}</p>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1),
                                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                                        createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, { class: "text-no-wrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-h6 mb-4" data-v-2014be45${_scopeId5}> Bill To: </h6><table class="text-body-1" data-v-2014be45${_scopeId5}><tbody data-v-2014be45${_scopeId5}><tr data-v-2014be45${_scopeId5}><td class="pe-6" data-v-2014be45${_scopeId5}> Total Due: </td><td data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(paymentDetails).totalDue)}</td></tr><tr data-v-2014be45${_scopeId5}><td class="pe-6" data-v-2014be45${_scopeId5}> Bank Name: </td><td data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(paymentDetails).bankName)}</td></tr><tr data-v-2014be45${_scopeId5}><td class="pe-6" data-v-2014be45${_scopeId5}> Country: </td><td data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(paymentDetails).country)}</td></tr><tr data-v-2014be45${_scopeId5}><td class="pe-6" data-v-2014be45${_scopeId5}> IBAN: </td><td class="text-wrap" data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(paymentDetails).iban)}</td></tr><tr data-v-2014be45${_scopeId5}><td class="pe-6" data-v-2014be45${_scopeId5}> SWIFT Code: </td><td data-v-2014be45${_scopeId5}>${ssrInterpolate(unref(paymentDetails).swiftCode)}</td></tr></tbody></table>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                                        createVNode("table", { class: "text-body-1" }, [
                                          createVNode("tbody", null, [
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "pe-6" }, " Total Due: "),
                                              createVNode("td", null, toDisplayString(unref(paymentDetails).totalDue), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                              createVNode("td", null, toDisplayString(unref(paymentDetails).bankName), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "pe-6" }, " Country: "),
                                              createVNode("td", null, toDisplayString(unref(paymentDetails).country), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "pe-6" }, " IBAN: "),
                                              createVNode("td", { class: "text-wrap" }, toDisplayString(unref(paymentDetails).iban), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                              createVNode("td", null, toDisplayString(unref(paymentDetails).swiftCode), 1)
                                            ])
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, { class: "text-no-wrap" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1),
                                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                                      createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "text-no-wrap" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                                      createVNode("table", { class: "text-body-1" }, [
                                        createVNode("tbody", null, [
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "pe-6" }, " Total Due: "),
                                            createVNode("td", null, toDisplayString(unref(paymentDetails).totalDue), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                            createVNode("td", null, toDisplayString(unref(paymentDetails).bankName), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "pe-6" }, " Country: "),
                                            createVNode("td", null, toDisplayString(unref(paymentDetails).country), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "pe-6" }, " IBAN: "),
                                            createVNode("td", { class: "text-wrap" }, toDisplayString(unref(paymentDetails).iban), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                            createVNode("td", null, toDisplayString(unref(paymentDetails).swiftCode), 1)
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VTable, { class: "invoice-preview-table border text-high-emphasis overflow-hidden mb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<thead data-v-2014be45${_scopeId4}><tr data-v-2014be45${_scopeId4}><th scope="col" data-v-2014be45${_scopeId4}> ITEM </th><th scope="col" data-v-2014be45${_scopeId4}> DESCRIPTION </th><th scope="col" class="text-center" data-v-2014be45${_scopeId4}> HOURS </th><th scope="col" class="text-center" data-v-2014be45${_scopeId4}> QTY </th><th scope="col" class="text-center" data-v-2014be45${_scopeId4}> TOTAL </th></tr></thead><tbody data-v-2014be45${_scopeId4}><!--[-->`);
                                ssrRenderList(purchasedProducts, (item) => {
                                  _push5(`<tr data-v-2014be45${_scopeId4}><td class="text-no-wrap" data-v-2014be45${_scopeId4}>${ssrInterpolate(item.name)}</td><td class="text-no-wrap" data-v-2014be45${_scopeId4}>${ssrInterpolate(item.description)}</td><td class="text-center" data-v-2014be45${_scopeId4}>${ssrInterpolate(item.hours)}</td><td class="text-center" data-v-2014be45${_scopeId4}>${ssrInterpolate(item.qty)}</td><td class="text-center" data-v-2014be45${_scopeId4}> $${ssrInterpolate(item.price)}</td></tr>`);
                                });
                                _push5(`<!--]--></tbody>`);
                              } else {
                                return [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { scope: "col" }, " ITEM "),
                                      createVNode("th", { scope: "col" }, " DESCRIPTION "),
                                      createVNode("th", {
                                        scope: "col",
                                        class: "text-center"
                                      }, " HOURS "),
                                      createVNode("th", {
                                        scope: "col",
                                        class: "text-center"
                                      }, " QTY "),
                                      createVNode("th", {
                                        scope: "col",
                                        class: "text-center"
                                      }, " TOTAL ")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(), createBlock(Fragment, null, renderList(purchasedProducts, (item) => {
                                      return createVNode("tr", {
                                        key: item.name
                                      }, [
                                        createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.name), 1),
                                        createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.description), 1),
                                        createVNode("td", { class: "text-center" }, toDisplayString(item.hours), 1),
                                        createVNode("td", { class: "text-center" }, toDisplayString(item.qty), 1),
                                        createVNode("td", { class: "text-center" }, " $" + toDisplayString(item.price), 1)
                                      ]);
                                    }), 64))
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="d-flex justify-space-between flex-column flex-sm-row print-row" data-v-2014be45${_scopeId3}><div class="mb-2" data-v-2014be45${_scopeId3}><div class="d-flex align-center mb-1" data-v-2014be45${_scopeId3}><h6 class="text-h6 me-2" data-v-2014be45${_scopeId3}> Salesperson: </h6><span class="text-body-1" data-v-2014be45${_scopeId3}>Jenny Parker</span></div><p class="text-body-1" data-v-2014be45${_scopeId3}> Thanks for your business </p></div><div data-v-2014be45${_scopeId3}><table class="w-100 text-body-1" data-v-2014be45${_scopeId3}><tbody data-v-2014be45${_scopeId3}><tr data-v-2014be45${_scopeId3}><td class="pe-16" data-v-2014be45${_scopeId3}> Subtotal: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-2014be45${_scopeId3}><h6 class="text-h6" data-v-2014be45${_scopeId3}> $1800 </h6></td></tr><tr data-v-2014be45${_scopeId3}><td class="pe-16" data-v-2014be45${_scopeId3}> Discount: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-2014be45${_scopeId3}><h6 class="text-h6" data-v-2014be45${_scopeId3}> $28 </h6></td></tr><tr data-v-2014be45${_scopeId3}><td class="pe-16" data-v-2014be45${_scopeId3}> Tax: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-2014be45${_scopeId3}><h6 class="text-h6" data-v-2014be45${_scopeId3}> 21% </h6></td></tr></tbody></table>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<table class="w-100" data-v-2014be45${_scopeId3}><tbody data-v-2014be45${_scopeId3}><tr data-v-2014be45${_scopeId3}><td class="pe-16" data-v-2014be45${_scopeId3}> Total: </td><td class="${ssrRenderClass(_ctx.$vuetify.locale.isRtl ? "text-start" : "text-end")}" data-v-2014be45${_scopeId3}><h6 class="text-h6" data-v-2014be45${_scopeId3}> $1690 </h6></td></tr></tbody></table></div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-6 border-dashed" }, null, _parent4, _scopeId3));
                          _push4(`<p class="mb-0 text-body-1" data-v-2014be45${_scopeId3}><span class="text-high-emphasis font-weight-medium me-1" data-v-2014be45${_scopeId3}> Note: </span><span data-v-2014be45${_scopeId3}>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span></p>`);
                        } else {
                          return [
                            createVNode("div", { class: "invoice-header-preview d-flex flex-wrap justify-space-between align-sm-center flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "app-logo mb-6" }, [
                                  createVNode(unref(VNodeRenderer), {
                                    nodes: unref(themeConfig).app.logo
                                  }, null, 8, ["nodes"]),
                                  createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                                ]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, " Office 149, 450 South Brand Brooklyn "),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, " San Diego County, CA 91905, USA "),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, " +1 (123) 456 7891, +44 (876) 543 2198 ")
                              ]),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 mb-6" }, " Invoice #" + toDisplayString(unref(invoice).id), 1),
                                createVNode("h6", { class: "text-h6 font-weight-regular mb-1" }, [
                                  createVNode("span", null, "Date Issued: "),
                                  createVNode("span", null, toDisplayString(new Date(unref(invoice).issuedDate).toLocaleDateString("en-GB")), 1)
                                ]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, [
                                  createVNode("span", null, "Due Date: "),
                                  createVNode("span", null, toDisplayString(new Date(unref(invoice).dueDate).toLocaleDateString("en-GB")), 1)
                                ])
                              ])
                            ]),
                            createVNode(VRow, { class: "print-row mb-3" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { class: "text-no-wrap" }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                                    createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                                    createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                                    createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1),
                                    createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                                    createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "text-no-wrap" }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                                    createVNode("table", { class: "text-body-1" }, [
                                      createVNode("tbody", null, [
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "pe-6" }, " Total Due: "),
                                          createVNode("td", null, toDisplayString(unref(paymentDetails).totalDue), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                          createVNode("td", null, toDisplayString(unref(paymentDetails).bankName), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "pe-6" }, " Country: "),
                                          createVNode("td", null, toDisplayString(unref(paymentDetails).country), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "pe-6" }, " IBAN: "),
                                          createVNode("td", { class: "text-wrap" }, toDisplayString(unref(paymentDetails).iban), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                          createVNode("td", null, toDisplayString(unref(paymentDetails).swiftCode), 1)
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VTable, { class: "invoice-preview-table border text-high-emphasis overflow-hidden mb-6" }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { scope: "col" }, " ITEM "),
                                    createVNode("th", { scope: "col" }, " DESCRIPTION "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "text-center"
                                    }, " HOURS "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "text-center"
                                    }, " QTY "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "text-center"
                                    }, " TOTAL ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(), createBlock(Fragment, null, renderList(purchasedProducts, (item) => {
                                    return createVNode("tr", {
                                      key: item.name
                                    }, [
                                      createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.name), 1),
                                      createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.description), 1),
                                      createVNode("td", { class: "text-center" }, toDisplayString(item.hours), 1),
                                      createVNode("td", { class: "text-center" }, toDisplayString(item.qty), 1),
                                      createVNode("td", { class: "text-center" }, " $" + toDisplayString(item.price), 1)
                                    ]);
                                  }), 64))
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row print-row" }, [
                              createVNode("div", { class: "mb-2" }, [
                                createVNode("div", { class: "d-flex align-center mb-1" }, [
                                  createVNode("h6", { class: "text-h6 me-2" }, " Salesperson: "),
                                  createVNode("span", { class: "text-body-1" }, "Jenny Parker")
                                ]),
                                createVNode("p", { class: "text-body-1" }, " Thanks for your business ")
                              ]),
                              createVNode("div", null, [
                                createVNode("table", { class: "w-100 text-body-1" }, [
                                  createVNode("tbody", null, [
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-16" }, " Subtotal: "),
                                      createVNode("td", {
                                        class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                      }, [
                                        createVNode("h6", { class: "text-h6" }, " $1800 ")
                                      ], 2)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-16" }, " Discount: "),
                                      createVNode("td", {
                                        class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                      }, [
                                        createVNode("h6", { class: "text-h6" }, " $28 ")
                                      ], 2)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-16" }, " Tax: "),
                                      createVNode("td", {
                                        class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                      }, [
                                        createVNode("h6", { class: "text-h6" }, " 21% ")
                                      ], 2)
                                    ])
                                  ])
                                ]),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode("table", { class: "w-100" }, [
                                  createVNode("tbody", null, [
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-16" }, " Total: "),
                                      createVNode("td", {
                                        class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                      }, [
                                        createVNode("h6", { class: "text-h6" }, " $1690 ")
                                      ], 2)
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode(VDivider, { class: "my-6 border-dashed" }),
                            createVNode("p", { class: "mb-0 text-body-1" }, [
                              createVNode("span", { class: "text-high-emphasis font-weight-medium me-1" }, " Note: "),
                              createVNode("span", null, "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, { class: "invoice-preview-wrapper pa-sm-12 pa-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "invoice-header-preview d-flex flex-wrap justify-space-between align-sm-center flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "app-logo mb-6" }, [
                                createVNode(unref(VNodeRenderer), {
                                  nodes: unref(themeConfig).app.logo
                                }, null, 8, ["nodes"]),
                                createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                              ]),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, " Office 149, 450 South Brand Brooklyn "),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, " San Diego County, CA 91905, USA "),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, " +1 (123) 456 7891, +44 (876) 543 2198 ")
                            ]),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 mb-6" }, " Invoice #" + toDisplayString(unref(invoice).id), 1),
                              createVNode("h6", { class: "text-h6 font-weight-regular mb-1" }, [
                                createVNode("span", null, "Date Issued: "),
                                createVNode("span", null, toDisplayString(new Date(unref(invoice).issuedDate).toLocaleDateString("en-GB")), 1)
                              ]),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, [
                                createVNode("span", null, "Due Date: "),
                                createVNode("span", null, toDisplayString(new Date(unref(invoice).dueDate).toLocaleDateString("en-GB")), 1)
                              ])
                            ])
                          ]),
                          createVNode(VRow, { class: "print-row mb-3" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { class: "text-no-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "text-no-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                                  createVNode("table", { class: "text-body-1" }, [
                                    createVNode("tbody", null, [
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "pe-6" }, " Total Due: "),
                                        createVNode("td", null, toDisplayString(unref(paymentDetails).totalDue), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                        createVNode("td", null, toDisplayString(unref(paymentDetails).bankName), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "pe-6" }, " Country: "),
                                        createVNode("td", null, toDisplayString(unref(paymentDetails).country), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "pe-6" }, " IBAN: "),
                                        createVNode("td", { class: "text-wrap" }, toDisplayString(unref(paymentDetails).iban), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                        createVNode("td", null, toDisplayString(unref(paymentDetails).swiftCode), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VTable, { class: "invoice-preview-table border text-high-emphasis overflow-hidden mb-6" }, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", { scope: "col" }, " ITEM "),
                                  createVNode("th", { scope: "col" }, " DESCRIPTION "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "text-center"
                                  }, " HOURS "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "text-center"
                                  }, " QTY "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "text-center"
                                  }, " TOTAL ")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(), createBlock(Fragment, null, renderList(purchasedProducts, (item) => {
                                  return createVNode("tr", {
                                    key: item.name
                                  }, [
                                    createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.name), 1),
                                    createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.description), 1),
                                    createVNode("td", { class: "text-center" }, toDisplayString(item.hours), 1),
                                    createVNode("td", { class: "text-center" }, toDisplayString(item.qty), 1),
                                    createVNode("td", { class: "text-center" }, " $" + toDisplayString(item.price), 1)
                                  ]);
                                }), 64))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row print-row" }, [
                            createVNode("div", { class: "mb-2" }, [
                              createVNode("div", { class: "d-flex align-center mb-1" }, [
                                createVNode("h6", { class: "text-h6 me-2" }, " Salesperson: "),
                                createVNode("span", { class: "text-body-1" }, "Jenny Parker")
                              ]),
                              createVNode("p", { class: "text-body-1" }, " Thanks for your business ")
                            ]),
                            createVNode("div", null, [
                              createVNode("table", { class: "w-100 text-body-1" }, [
                                createVNode("tbody", null, [
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "pe-16" }, " Subtotal: "),
                                    createVNode("td", {
                                      class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                    }, [
                                      createVNode("h6", { class: "text-h6" }, " $1800 ")
                                    ], 2)
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "pe-16" }, " Discount: "),
                                    createVNode("td", {
                                      class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                    }, [
                                      createVNode("h6", { class: "text-h6" }, " $28 ")
                                    ], 2)
                                  ]),
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "pe-16" }, " Tax: "),
                                    createVNode("td", {
                                      class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                    }, [
                                      createVNode("h6", { class: "text-h6" }, " 21% ")
                                    ], 2)
                                  ])
                                ])
                              ]),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode("table", { class: "w-100" }, [
                                createVNode("tbody", null, [
                                  createVNode("tr", null, [
                                    createVNode("td", { class: "pe-16" }, " Total: "),
                                    createVNode("td", {
                                      class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                    }, [
                                      createVNode("h6", { class: "text-h6" }, " $1690 ")
                                    ], 2)
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-6 border-dashed" }),
                          createVNode("p", { class: "mb-0 text-body-1" }, [
                            createVNode("span", { class: "text-high-emphasis font-weight-medium me-1" }, " Note: "),
                            createVNode("span", null, "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")
                          ])
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
                md: "3",
                class: "d-print-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  "prepend-icon": "ri-send-plane-line",
                                  class: "mb-4",
                                  onClick: ($event) => isSendPaymentSidebarVisible.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Send Invoice `);
                                    } else {
                                      return [
                                        createTextVNode(" Send Invoice ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Download `);
                                    } else {
                                      return [
                                        createTextVNode(" Download ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-wrap gap-4" data-v-2014be45${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "outlined",
                                  color: "secondary",
                                  class: "flex-grow-1",
                                  onClick: printInvoice
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Print `);
                                    } else {
                                      return [
                                        createTextVNode(" Print ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4 flex-grow-1",
                                  to: { name: "apps-invoice-edit-id", params: { id: unref(route).params.id } }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Edit `);
                                    } else {
                                      return [
                                        createTextVNode(" Edit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  "prepend-icon": "ri-money-dollar-circle-line",
                                  color: "success",
                                  onClick: ($event) => isAddPaymentSidebarVisible.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Add Payment `);
                                    } else {
                                      return [
                                        createTextVNode(" Add Payment ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    "prepend-icon": "ri-send-plane-line",
                                    class: "mb-4",
                                    onClick: ($event) => isSendPaymentSidebarVisible.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send Invoice ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    block: "",
                                    color: "secondary",
                                    variant: "outlined",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Download ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "secondary",
                                      class: "flex-grow-1",
                                      onClick: printInvoice
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Print ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      class: "mb-4 flex-grow-1",
                                      to: { name: "apps-invoice-edit-id", params: { id: unref(route).params.id } }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 1
                                    }, 8, ["to"])
                                  ]),
                                  createVNode(VBtn, {
                                    block: "",
                                    "prepend-icon": "ri-money-dollar-circle-line",
                                    color: "success",
                                    onClick: ($event) => isAddPaymentSidebarVisible.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add Payment ")
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
                                createVNode(VBtn, {
                                  block: "",
                                  "prepend-icon": "ri-send-plane-line",
                                  class: "mb-4",
                                  onClick: ($event) => isSendPaymentSidebarVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Send Invoice ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Download ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "secondary",
                                    class: "flex-grow-1",
                                    onClick: printInvoice
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Print ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    class: "mb-4 flex-grow-1",
                                    to: { name: "apps-invoice-edit-id", params: { id: unref(route).params.id } }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  "prepend-icon": "ri-money-dollar-circle-line",
                                  color: "success",
                                  onClick: ($event) => isAddPaymentSidebarVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add Payment ")
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
                  } else {
                    return [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                "prepend-icon": "ri-send-plane-line",
                                class: "mb-4",
                                onClick: ($event) => isSendPaymentSidebarVisible.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Send Invoice ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                variant: "outlined",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Download ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "secondary",
                                  class: "flex-grow-1",
                                  onClick: printInvoice
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Print ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4 flex-grow-1",
                                  to: { name: "apps-invoice-edit-id", params: { id: unref(route).params.id } }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                "prepend-icon": "ri-money-dollar-circle-line",
                                color: "success",
                                onClick: ($event) => isAddPaymentSidebarVisible.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Payment ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                  md: "9"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "invoice-preview-wrapper pa-sm-12 pa-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "invoice-header-preview d-flex flex-wrap justify-space-between align-sm-center flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "app-logo mb-6" }, [
                              createVNode(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, 8, ["nodes"]),
                              createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                            ]),
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, " Office 149, 450 South Brand Brooklyn "),
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, " San Diego County, CA 91905, USA "),
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, " +1 (123) 456 7891, +44 (876) 543 2198 ")
                          ]),
                          createVNode("div", null, [
                            createVNode("h5", { class: "text-h5 mb-6" }, " Invoice #" + toDisplayString(unref(invoice).id), 1),
                            createVNode("h6", { class: "text-h6 font-weight-regular mb-1" }, [
                              createVNode("span", null, "Date Issued: "),
                              createVNode("span", null, toDisplayString(new Date(unref(invoice).issuedDate).toLocaleDateString("en-GB")), 1)
                            ]),
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, [
                              createVNode("span", null, "Due Date: "),
                              createVNode("span", null, toDisplayString(new Date(unref(invoice).dueDate).toLocaleDateString("en-GB")), 1)
                            ])
                          ])
                        ]),
                        createVNode(VRow, { class: "print-row mb-3" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { class: "text-no-wrap" }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Invoice To: "),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.name), 1),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.company), 1),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.address) + ", " + toDisplayString(unref(invoice).client.country), 1),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.contact), 1),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(unref(invoice).client.companyEmail), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "text-no-wrap" }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 mb-4" }, " Bill To: "),
                                createVNode("table", { class: "text-body-1" }, [
                                  createVNode("tbody", null, [
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-6" }, " Total Due: "),
                                      createVNode("td", null, toDisplayString(unref(paymentDetails).totalDue), 1)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-6" }, " Bank Name: "),
                                      createVNode("td", null, toDisplayString(unref(paymentDetails).bankName), 1)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-6" }, " Country: "),
                                      createVNode("td", null, toDisplayString(unref(paymentDetails).country), 1)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-6" }, " IBAN: "),
                                      createVNode("td", { class: "text-wrap" }, toDisplayString(unref(paymentDetails).iban), 1)
                                    ]),
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "pe-6" }, " SWIFT Code: "),
                                      createVNode("td", null, toDisplayString(unref(paymentDetails).swiftCode), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VTable, { class: "invoice-preview-table border text-high-emphasis overflow-hidden mb-6" }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { scope: "col" }, " ITEM "),
                                createVNode("th", { scope: "col" }, " DESCRIPTION "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "text-center"
                                }, " HOURS "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "text-center"
                                }, " QTY "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "text-center"
                                }, " TOTAL ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(purchasedProducts, (item) => {
                                return createVNode("tr", {
                                  key: item.name
                                }, [
                                  createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.name), 1),
                                  createVNode("td", { class: "text-no-wrap" }, toDisplayString(item.description), 1),
                                  createVNode("td", { class: "text-center" }, toDisplayString(item.hours), 1),
                                  createVNode("td", { class: "text-center" }, toDisplayString(item.qty), 1),
                                  createVNode("td", { class: "text-center" }, " $" + toDisplayString(item.price), 1)
                                ]);
                              }), 64))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row print-row" }, [
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("div", { class: "d-flex align-center mb-1" }, [
                              createVNode("h6", { class: "text-h6 me-2" }, " Salesperson: "),
                              createVNode("span", { class: "text-body-1" }, "Jenny Parker")
                            ]),
                            createVNode("p", { class: "text-body-1" }, " Thanks for your business ")
                          ]),
                          createVNode("div", null, [
                            createVNode("table", { class: "w-100 text-body-1" }, [
                              createVNode("tbody", null, [
                                createVNode("tr", null, [
                                  createVNode("td", { class: "pe-16" }, " Subtotal: "),
                                  createVNode("td", {
                                    class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                  }, [
                                    createVNode("h6", { class: "text-h6" }, " $1800 ")
                                  ], 2)
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", { class: "pe-16" }, " Discount: "),
                                  createVNode("td", {
                                    class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                  }, [
                                    createVNode("h6", { class: "text-h6" }, " $28 ")
                                  ], 2)
                                ]),
                                createVNode("tr", null, [
                                  createVNode("td", { class: "pe-16" }, " Tax: "),
                                  createVNode("td", {
                                    class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                  }, [
                                    createVNode("h6", { class: "text-h6" }, " 21% ")
                                  ], 2)
                                ])
                              ])
                            ]),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode("table", { class: "w-100" }, [
                              createVNode("tbody", null, [
                                createVNode("tr", null, [
                                  createVNode("td", { class: "pe-16" }, " Total: "),
                                  createVNode("td", {
                                    class: _ctx.$vuetify.locale.isRtl ? "text-start" : "text-end"
                                  }, [
                                    createVNode("h6", { class: "text-h6" }, " $1690 ")
                                  ], 2)
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-6 border-dashed" }),
                        createVNode("p", { class: "mb-0 text-body-1" }, [
                          createVNode("span", { class: "text-high-emphasis font-weight-medium me-1" }, " Note: "),
                          createVNode("span", null, "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "3",
                  class: "d-print-none"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              "prepend-icon": "ri-send-plane-line",
                              class: "mb-4",
                              onClick: ($event) => isSendPaymentSidebarVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Send Invoice ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              variant: "outlined",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Download ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                              createVNode(VBtn, {
                                variant: "outlined",
                                color: "secondary",
                                class: "flex-grow-1",
                                onClick: printInvoice
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Print ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                class: "mb-4 flex-grow-1",
                                to: { name: "apps-invoice-edit-id", params: { id: unref(route).params.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit ")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode(VBtn, {
                              block: "",
                              "prepend-icon": "ri-money-dollar-circle-line",
                              color: "success",
                              onClick: ($event) => isAddPaymentSidebarVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add Payment ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
        _push(ssrRenderComponent(_sfc_main$1, {
          isDrawerOpen: unref(isAddPaymentSidebarVisible),
          "onUpdate:isDrawerOpen": ($event) => isRef(isAddPaymentSidebarVisible) ? isAddPaymentSidebarVisible.value = $event : null
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          isDrawerOpen: unref(isSendPaymentSidebarVisible),
          "onUpdate:isDrawerOpen": ($event) => isRef(isSendPaymentSidebarVisible) ? isSendPaymentSidebarVisible.value = $event : null
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<section${ssrRenderAttrs(_attrs)} data-v-2014be45>`);
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Invoice with ID ${ssrInterpolate(unref(route).params.id)} not found! `);
            } else {
              return [
                createTextVNode(" Invoice with ID " + toDisplayString(unref(route).params.id) + " not found! ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/invoice/preview/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2014be45"]]);
export {
  _id_ as default
};
