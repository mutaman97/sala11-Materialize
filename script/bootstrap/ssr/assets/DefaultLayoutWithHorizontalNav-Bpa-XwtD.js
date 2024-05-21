import { _ as _sfc_main$3, a as _sfc_main$9 } from "./I18n-DkmWF50e.js";
import { _ as _sfc_main$8 } from "./AppLoadingIndicator-Bc3ISVzy.js";
import { ref, watch, resolveComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, Suspense, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc, bw as _sfc_main$1, z as VNodeRenderer, B as themeConfig } from "../ssr.js";
import Footer from "./Footer-Bm0PFmJf.js";
import _sfc_main$6 from "./NavBarNotifications-DVoLnBud.js";
import _sfc_main$2 from "./NavSearchBar-ksXpPAA6.js";
import _sfc_main$5 from "./NavbarShortcuts-BtBww4vs.js";
import _sfc_main$4 from "./NavbarThemeSwitcher-CmYbn-Kr.js";
import _sfc_main$7 from "./UserProfile-BlVHQIKW.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import "./CustomRadiosWithImage-RAmFAl8j.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VRow-DasIRXDq.js";
/* empty css               */
import "./VDivider-o5iRKh3w.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "@vueuse/core";
import "vue3-perfect-scrollbar";
import "./useGenerateImageVariant-CZ9PNjKS.js";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VBadge-DPwmmvxp.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VList-Bay5Fixr.js";
import "./VSlider-DJW38cpe.js";
import "./VSliderTrack-3ICpqYF9.js";
import "./VSheet-BoIzvRsi.js";
import "./VSwitch-nG7fxOCQ.js";
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
import "@floating-ui/dom";
import "@antfu/utils";
import "./formatters-DpL1jrjT.js";
import "./helpers-DX2i3Kdq.js";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VTooltip-CVKEAyhs.js";
import "shepherd.js";
import "ufo";
import "./useApi-Cd0G3DOd.js";
import "./useAbility-DSKxrArL.js";
const apps = [
  {
    title: "Apps",
    icon: { icon: "ri-mail-open-line" },
    children: [
      {
        title: "eCommerce",
        icon: { icon: "ri-shopping-cart-2-line" },
        children: [
          {
            title: "Dashboard",
            to: "apps-ecommerce-dashboard"
          },
          {
            title: "Product",
            children: [
              { title: "List", to: "apps-ecommerce-product-list" },
              { title: "Add", to: "apps-ecommerce-product-add" },
              { title: "Category", to: "apps-ecommerce-product-category-list" }
            ]
          },
          {
            title: "Order",
            children: [
              { title: "List", to: "apps-ecommerce-order-list" },
              { title: "Details", to: { name: "apps-ecommerce-order-details-id", params: { id: "9042" } } }
            ]
          },
          {
            title: "Customer",
            children: [
              { title: "List", to: "apps-ecommerce-customer-list" },
              { title: "Details", to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } } }
            ]
          },
          {
            title: "Manage Review",
            to: "apps-ecommerce-manage-review"
          },
          {
            title: "Referrals",
            to: "apps-ecommerce-referrals"
          },
          {
            title: "Settings",
            to: "apps-ecommerce-settings"
          }
        ]
      },
      {
        title: "Academy",
        icon: { icon: "ri-book-open-line" },
        children: [
          { title: "Dashboard", to: "apps-academy-dashboard" },
          { title: "My Course", to: "apps-academy-my-course" },
          { title: "Course Details", to: "apps-academy-course-details" }
        ]
      },
      {
        title: "Logistics",
        icon: { icon: "ri-truck-line" },
        children: [
          { title: "Dashboard", to: "apps-logistics-dashboard" },
          { title: "Fleet", to: "apps-logistics-fleet" }
        ]
      },
      {
        title: "Email",
        icon: { icon: "ri-mail-line" },
        to: "apps-email"
      },
      {
        title: "Chat",
        icon: { icon: "ri-message-line" },
        to: "apps-chat"
      },
      {
        title: "Calendar",
        to: "apps-calendar",
        icon: { icon: "ri-calendar-line" }
      },
      {
        title: "Kanban",
        icon: { icon: "ri-drag-drop-line" },
        to: "apps-kanban"
      },
      {
        title: "Invoice",
        icon: { icon: "ri-article-line" },
        children: [
          { title: "List", to: "apps-invoice-list" },
          { title: "Preview", to: { name: "apps-invoice-preview-id", params: { id: "5036" } } },
          { title: "Edit", to: { name: "apps-invoice-edit-id", params: { id: "5036" } } },
          { title: "Add", to: "apps-invoice-add" }
        ]
      },
      {
        title: "User",
        icon: { icon: "ri-user-line" },
        children: [
          { title: "List", to: "apps-user-list" },
          { title: "View", to: { name: "apps-user-view-id", params: { id: 21 } } }
        ]
      },
      {
        title: "Roles & Permissions",
        icon: { icon: "ri-shield-user-line" },
        children: [
          { title: "Roles", to: "apps-roles" },
          { title: "Permissions", to: "apps-permissions" }
        ]
      }
    ]
  }
];
const charts = [
  {
    title: "Charts",
    icon: { icon: "ri-bar-chart-2-line" },
    children: [
      { title: "Apex Chart", to: "charts-apex-chart", icon: { icon: "ri-bar-chart-grouped-line" } },
      { title: "Chartjs", to: "charts-chartjs", icon: { icon: "ri-line-chart-line" } }
    ]
  }
];
const dashboard = [
  {
    title: "Dashboards",
    icon: { icon: "ri-home-smile-line" },
    children: [
      {
        title: "CRM",
        to: "dashboards-crm",
        icon: { icon: "ri-computer-line" }
      },
      {
        title: "Analytics",
        to: "dashboards-analytics",
        icon: { icon: "ri-bar-chart-line" }
      },
      {
        title: "eCommerce",
        to: "dashboards-ecommerce",
        icon: { icon: "ri-shopping-cart-2-line" }
      },
      {
        title: "Academy",
        to: "dashboards-academy",
        icon: { icon: "ri-book-open-line" }
      },
      {
        title: "Logistics",
        to: "dashboards-logistics",
        icon: { icon: "ri-truck-line" }
      }
    ]
  }
];
const forms = [
  {
    title: "Forms",
    icon: { icon: "ri-pages-line" },
    children: [
      {
        title: "Form Elements",
        icon: { icon: "ri-file-copy-line" },
        children: [
          {
            title: "Autocomplete",
            to: "forms-autocomplete"
          },
          {
            title: "Checkbox",
            to: "forms-checkbox"
          },
          {
            title: "Combobox",
            to: "forms-combobox"
          },
          {
            title: "Date Time Picker",
            to: "forms-date-time-picker"
          },
          {
            title: "Editors",
            to: "forms-editors"
          },
          {
            title: "File Input",
            to: "forms-file-input"
          },
          {
            title: "Radio",
            to: "forms-radio"
          },
          {
            title: "Custom Input",
            to: "forms-custom-input"
          },
          {
            title: "Range Slider",
            to: "forms-range-slider"
          },
          {
            title: "Rating",
            to: "forms-rating"
          },
          {
            title: "Select",
            to: "forms-select"
          },
          { title: "Slider", to: "forms-slider" },
          {
            title: "Switch",
            to: "forms-switch"
          },
          {
            title: "Textarea",
            to: "forms-textarea"
          },
          {
            title: "Textfield",
            to: "forms-textfield"
          }
        ]
      },
      {
        title: "Form Layouts",
        icon: { icon: "ri-checkbox-circle-line" },
        to: "forms-form-layouts"
      },
      {
        title: "Form Wizard",
        icon: { icon: "ri-align-vertically" },
        children: [
          { title: "Numbered", to: "forms-form-wizard-numbered" },
          { title: "Icons", to: "forms-form-wizard-icons" }
        ]
      },
      {
        title: "Form Validation",
        icon: { icon: "ri-checkbox-circle-line" },
        to: "forms-form-validation"
      }
    ]
  }
];
const others = [
  {
    title: "Others",
    icon: { icon: "ri-more-line" },
    children: [
      {
        title: "Access Control",
        icon: { icon: "ri-shield-line" },
        to: "access-control",
        action: "read",
        subject: "AclDemo"
      },
      {
        title: "Nav Levels",
        icon: { icon: "ri-menu-line" },
        children: [
          {
            title: "Level 2.1",
            to: null
          },
          {
            title: "Level 2.2",
            children: [
              {
                title: "Level 3.1",
                to: null
              },
              {
                title: "Level 3.2",
                to: null
              }
            ]
          }
        ]
      },
      {
        title: "Disabled Menu",
        to: null,
        icon: { icon: "ri-eye-off-line" },
        disable: true
      },
      {
        title: "Raise Support",
        href: "https://pixinvent.ticksy.com/",
        icon: { icon: "ri-lifebuoy-line" },
        target: "_blank"
      },
      {
        title: "Documentation",
        href: "https://demos.pixinvent.com/materialize-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html",
        icon: { icon: "ri-article-line" },
        target: "_blank"
      }
    ]
  }
];
const pages = [
  {
    title: "Pages",
    icon: { icon: "ri-file-list-2-line" },
    children: [
      {
        title: "User Profile",
        icon: { icon: "ri-account-circle-line" },
        to: { name: "pages-user-profile-tab", params: { tab: "profile" } }
      },
      {
        title: "Account Settings",
        icon: { icon: "ri-settings-2-line" },
        to: { name: "pages-account-settings-tab", params: { tab: "account" } }
      },
      { title: "Pricing", icon: { icon: "ri-money-dollar-circle-line" }, to: "pages-pricing" },
      { title: "FAQ", icon: { icon: "ri-question-line" }, to: "pages-faq" },
      {
        title: "Misc",
        icon: { icon: "ri-file-line" },
        children: [
          { title: "Coming Soon", to: "pages-misc-coming-soon" },
          { title: "Under Maintenance", to: "pages-misc-under-maintenance", target: "_blank" },
          { title: "Page Not Found - 404", to: { path: "/pages/misc/not-found" }, target: "_blank" },
          { title: "Not Authorized - 401", to: { path: "/pages/misc/not-authorized" }, target: "_blank" }
        ]
      },
      {
        title: "Authentication",
        icon: { icon: "ri-lock-line" },
        children: [
          {
            title: "Login",
            children: [
              { title: "Login v1", to: "pages-authentication-login-v1", target: "_blank" },
              { title: "Login v2", to: "pages-authentication-login-v2", target: "_blank" }
            ]
          },
          {
            title: "Register",
            children: [
              { title: "Register v1", to: "pages-authentication-register-v1", target: "_blank" },
              { title: "Register v2", to: "pages-authentication-register-v2", target: "_blank" },
              { title: "Register Multi-Steps", to: "pages-authentication-register-multi-steps", target: "_blank" }
            ]
          },
          {
            title: "Verify Email",
            children: [
              { title: "Verify Email v1", to: "pages-authentication-verify-email-v1", target: "_blank" },
              { title: "Verify Email v2", to: "pages-authentication-verify-email-v2", target: "_blank" }
            ]
          },
          {
            title: "Forgot Password",
            children: [
              { title: "Forgot Password v1", to: "pages-authentication-forgot-password-v1", target: "_blank" },
              { title: "Forgot Password v2", to: "pages-authentication-forgot-password-v2", target: "_blank" }
            ]
          },
          {
            title: "Reset Password",
            children: [
              { title: "Reset Password v1", to: "pages-authentication-reset-password-v1", target: "_blank" },
              { title: "Reset Password v2", to: "pages-authentication-reset-password-v2", target: "_blank" }
            ]
          },
          {
            title: "Two Steps",
            children: [
              { title: "Two Steps v1", to: "pages-authentication-two-steps-v1", target: "_blank" },
              { title: "Two Steps v2", to: "pages-authentication-two-steps-v2", target: "_blank" }
            ]
          }
        ]
      },
      {
        title: "Wizard Pages",
        icon: { icon: "ri-more-fill" },
        children: [
          { title: "Checkout", to: { name: "wizard-examples-checkout" } },
          { title: "Property Listing", to: { name: "wizard-examples-property-listing" } },
          { title: "Create Deal", to: { name: "wizard-examples-create-deal" } }
        ]
      },
      { title: "Dialog Examples", icon: { icon: "ri-file-copy-line" }, to: "pages-dialog-examples" },
      {
        title: "Front Pages",
        icon: { icon: "ri-checkbox-multiple-blank-line" },
        children: [
          {
            title: "Landing",
            to: "front-pages-landing-page",
            target: "_blank"
          },
          {
            title: "Pricing",
            to: "front-pages-pricing",
            target: "_blank"
          },
          {
            title: "Payment",
            to: "front-pages-payment",
            target: "_blank"
          },
          {
            title: "Checkout",
            to: "front-pages-checkout",
            target: "_blank"
          },
          {
            title: "Help Center",
            to: "front-pages-help-center",
            target: "_blank"
          }
        ]
      }
    ]
  }
];
const tables = [
  {
    title: "Tables",
    icon: { icon: "ri-table-line" },
    children: [
      { title: "Simple Table", icon: { icon: "ri-layout-grid-line" }, to: "tables-simple-table" },
      { title: "Data Table", icon: { icon: "ri-grid-line" }, to: "tables-data-table" }
    ]
  }
];
const uiElements = [
  {
    title: "User Interface",
    icon: { icon: "ri-pantone-line" },
    children: [
      {
        title: "Icons",
        icon: { icon: "ri-eye-line" },
        to: "pages-icons"
      },
      {
        title: "Typography",
        icon: { icon: "ri-font-size-2" },
        to: "pages-typography"
      },
      {
        title: "Cards",
        icon: { icon: "ri-bank-card-line" },
        children: [
          { title: "Basic", to: "pages-cards-card-basic" },
          { title: "Advance", to: "pages-cards-card-advance" },
          { title: "Widgets", to: "pages-cards-card-widgets" },
          { title: "Statistics", to: "pages-cards-card-statistics" },
          { title: "Gamification", to: "pages-cards-card-gamification" },
          { title: "Actions", to: "pages-cards-card-actions" }
        ]
      },
      {
        title: "Components",
        icon: { icon: "ri-archive-line" },
        children: [
          { title: "Alert", to: "components-alert" },
          { title: "Avatar", to: "components-avatar" },
          { title: "Badge", to: "components-badge" },
          { title: "Button", to: "components-button" },
          { title: "Chip", to: "components-chip" },
          { title: "Dialog", to: "components-dialog" },
          { title: "Expansion Panel", to: "components-expansion-panel" },
          { title: "List", to: "components-list" },
          { title: "Menu", to: "components-menu" },
          { title: "Pagination", to: "components-pagination" },
          { title: "Progress Circular", to: "components-progress-circular" },
          { title: "Progress Linear", to: "components-progress-linear" },
          { title: "Snackbar", to: "components-snackbar" },
          { title: "Tabs", to: "components-tabs" },
          { title: "Timeline", to: "components-timeline" },
          { title: "Tooltip", to: "components-tooltip" }
        ]
      },
      {
        title: "Extensions",
        icon: { icon: "ri-box-3-line" },
        children: [
          { title: "Tour", to: "extensions-tour" },
          { title: "Swiper", to: "extensions-swiper" }
        ]
      }
    ]
  }
];
const navItems = [...dashboard, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...charts, ...others];
const _sfc_main = {
  __name: "DefaultLayoutWithHorizontalNav",
  __ssrInlineRender: true,
  setup(__props) {
    const isFallbackStateActive = ref(false);
    const refLoadingIndicator = ref(null);
    watch([
      isFallbackStateActive,
      refLoadingIndicator
    ], () => {
      if (isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.fallbackHandle();
      if (!isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.resolveHandle();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AppLoadingIndicator = _sfc_main$8;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_TheCustomizer = _sfc_main$9;
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ "nav-items": unref(navItems) }, _attrs), {
        navbar: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              class: "app-logo"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VNodeRenderer), {
                    nodes: unref(themeConfig).app.logo
                  }, null, _parent3, _scopeId2));
                  _push3(`<h1 class="app-logo-title leading-normal" data-v-a49cd7fa${_scopeId2}>${ssrInterpolate(unref(themeConfig).app.title)}</h1>`);
                } else {
                  return [
                    createVNode(unref(VNodeRenderer), {
                      nodes: unref(themeConfig).app.logo
                    }, null, 8, ["nodes"]),
                    createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(themeConfig).app.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            if (unref(themeConfig).app.i18n.enable && ((_a = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _a.length)) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { class: "me-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouterLink, {
                to: "/",
                class: "app-logo"
              }, {
                default: withCtx(() => [
                  createVNode(unref(VNodeRenderer), {
                    nodes: unref(themeConfig).app.logo
                  }, null, 8, ["nodes"]),
                  createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(themeConfig).app.title), 1)
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              createVNode(_sfc_main$2),
              unref(themeConfig).app.i18n.enable && ((_b = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, 8, ["languages"])) : createCommentVNode("", true),
              createVNode(_sfc_main$4),
              createVNode(_sfc_main$5),
              createVNode(_sfc_main$6, { class: "me-2" }),
              createVNode(_sfc_main$7)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLoadingIndicator, {
              ref_key: "refLoadingIndicator",
              ref: refLoadingIndicator
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterView, null, {
              default: withCtx(({ Component }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSuspense(_push3, {
                    default: () => {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(Component), null, null), _parent3, _scopeId2);
                    },
                    _: 2
                  });
                } else {
                  return [
                    (openBlock(), createBlock(Suspense, {
                      timeout: 0,
                      onFallback: ($event) => isFallbackStateActive.value = true,
                      onResolve: ($event) => isFallbackStateActive.value = false
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(Component)))
                      ]),
                      _: 2
                    }, 1032, ["onFallback", "onResolve"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TheCustomizer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppLoadingIndicator, {
                ref_key: "refLoadingIndicator",
                ref: refLoadingIndicator
              }, null, 512),
              createVNode(_component_RouterView, null, {
                default: withCtx(({ Component }) => [
                  (openBlock(), createBlock(Suspense, {
                    timeout: 0,
                    onFallback: ($event) => isFallbackStateActive.value = true,
                    onResolve: ($event) => isFallbackStateActive.value = false
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component)))
                    ]),
                    _: 2
                  }, 1032, ["onFallback", "onResolve"]))
                ]),
                _: 1
              }),
              createVNode(_component_TheCustomizer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/components/DefaultLayoutWithHorizontalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DefaultLayoutWithHorizontalNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a49cd7fa"]]);
export {
  DefaultLayoutWithHorizontalNav as default
};
