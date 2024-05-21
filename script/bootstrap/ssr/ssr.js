var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _executor, _decorate, decorate_fn, _a;
import { watch, onScopeDispose, effectScope, Fragment, reactive, computed, watchEffect, toRefs, capitalize, isVNode, Comment, unref, warn as warn$2, ref, provide, inject as inject$1, shallowRef, defineComponent as defineComponent$1, getCurrentInstance as getCurrentInstance$1, toRaw, h as h$1, createVNode, mergeProps, onBeforeUnmount, readonly, nextTick, isRef, toRef, Text, openBlock, createElementBlock, createElementVNode, useSSRContext, defineAsyncComponent, resolveDynamicComponent, withCtx, createBlock, renderList, createTextVNode, toDisplayString, onMounted, withDirectives, renderSlot, vShow, Transition, resolveComponent, TransitionGroup, createCommentVNode, resolveDirective, createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { _mergeRouteRecord } from "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { ssrRenderVNode, ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { defineStore, storeToRefs, createPinia } from "pinia";
import { breakpointsVuetifyV3, useMediaQuery, useWindowScroll, usePreferredColorScheme, until as until$2, useEventListener, useElementHover, useMounted, useWindowSize, useToggle, syncRef, usePreferredDark } from "@vueuse/core";
import { parse, serialize } from "cookie-es";
import destr$1, { destr } from "destr";
import { createRouter as createRouter$1, useRoute as useRoute$1, createWebHistory, useRouter as useRouter$1 } from "vue-router";
import { useAbility, abilitiesPlugin } from "@casl/vue";
import { createMongoAbility } from "@casl/ability";
import { format as format$2, invariant as invariant$1 } from "outvariant";
import { until as until$1 } from "@open-draft/until";
import { store as store$1 } from "@mswjs/cookies";
import { Emitter as Emitter$1 } from "strict-event-emitter";
import is from "@sindresorhus/is";
import statuses from "@bundled-es-modules/statuses";
import { match } from "path-to-regexp";
import { getCleanUrl } from "@mswjs/interceptors";
import cookieUtils from "@bundled-es-modules/cookie";
import { Headers as Headers$1 } from "headers-polyfill";
import { createI18n, useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { computePosition, offset, flip, shift } from "@floating-ui/dom";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { deepMerge } from "@antfu/utils";
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const _definePage_default_0 = {
  alias: "/pages/misc/not-found/:error(.*)",
  meta: {
    layout: "blank",
    public: true
  }
};
const _definePage_default_2 = {
  meta: {
    action: "read",
    subject: "AclDemo"
  }
};
const _definePage_default_3 = { meta: { layoutWrapperClasses: "layout-content-height-fixed" } };
const _definePage_default_4 = { meta: { layoutWrapperClasses: "layout-content-height-fixed" } };
const _definePage_default_5 = { meta: { layoutWrapperClasses: "layout-content-height-fixed" } };
const _definePage_default_6 = {
  meta: {
    layout: "blank",
    unauthenticatedOnly: true
  }
};
const _definePage_default_7 = { meta: { layout: "blank" } };
const _definePage_default_8 = { meta: { layout: "blank" } };
const _definePage_default_9 = { meta: { layout: "blank" } };
const _definePage_default_10 = { meta: { layout: "blank" } };
const _definePage_default_11 = { meta: { layout: "blank" } };
const _definePage_default_12 = { meta: { layout: "blank" } };
const _definePage_default_13 = {
  meta: {
    layout: "blank",
    unauthenticatedOnly: true
  }
};
const _definePage_default_14 = {
  alias: "/pages/misc/not-authorized",
  meta: {
    layout: "blank",
    public: true
  }
};
const _definePage_default_15 = { meta: { navActiveLink: "pages-account-settings-tab" } };
const _definePage_default_16 = { meta: { layout: "blank" } };
const _definePage_default_17 = { meta: { layout: "blank" } };
const _definePage_default_18 = { meta: { layout: "blank" } };
const _definePage_default_19 = { meta: { layout: "blank" } };
const _definePage_default_20 = { meta: { layout: "blank" } };
const _definePage_default_21 = { meta: { layout: "blank" } };
const _definePage_default_22 = { meta: { layout: "blank" } };
const _definePage_default_23 = { meta: { layout: "blank" } };
const _definePage_default_24 = { meta: { layout: "blank" } };
const _definePage_default_25 = { meta: { layout: "blank" } };
const _definePage_default_26 = { meta: { layout: "blank" } };
const _definePage_default_27 = { meta: { layout: "blank" } };
const _definePage_default_28 = { meta: { layout: "blank" } };
const _definePage_default_29 = { meta: { layout: "blank" } };
const _definePage_default_30 = {
  meta: {
    layout: "blank",
    public: false
  }
};
const _definePage_default_31 = {
  meta: {
    navActiveLink: "pages-user-profile-tab",
    key: "tab"
  }
};
const _definePage_default_32 = {
  meta: {
    layout: "blank",
    unauthenticatedOnly: true
  }
};
const routes$1 = [
  _mergeRouteRecord(
    {
      path: "/:error(.*)",
      name: "$error",
      component: () => import("./assets/_...error_-BmsGZn3y.js")
      /* no children */
    },
    _definePage_default_0
  ),
  _mergeRouteRecord(
    {
      path: "/access-control",
      name: "access-control",
      component: () => import("./assets/access-control-Darg8t9_.js")
      /* no children */
    },
    _definePage_default_2
  ),
  {
    path: "/App",
    name: "app",
    component: () => import("./assets/App-CCnfXOvA.js")
    /* no children */
  },
  {
    path: "/apps",
    /* internal name: 'apps' */
    /* no component */
    children: [
      {
        path: "academy",
        /* internal name: 'apps-academy' */
        /* no component */
        children: [
          {
            path: "course-details",
            name: "apps-academy-course-details",
            component: () => import("./assets/course-details-B4m0rAiN.js")
            /* no children */
          },
          {
            path: "dashboard",
            name: "apps-academy-dashboard",
            component: () => import("./assets/dashboard-BQmfxZD7.js")
            /* no children */
          },
          {
            path: "my-course",
            name: "apps-academy-my-course",
            component: () => import("./assets/my-course-DoI2ouy6.js")
            /* no children */
          }
        ]
      },
      {
        path: "calendar",
        name: "apps-calendar",
        component: () => import("./assets/calendar-0QADYWJB.js")
        /* no children */
      },
      _mergeRouteRecord(
        {
          path: "chat",
          name: "apps-chat",
          component: () => import("./assets/chat-B-uSDUqH.js")
          /* no children */
        },
        _definePage_default_3
      ),
      {
        path: "ecommerce",
        /* internal name: 'apps-ecommerce' */
        /* no component */
        children: [
          {
            path: "customer",
            /* internal name: 'apps-ecommerce-customer' */
            /* no component */
            children: [
              {
                path: "details",
                /* internal name: 'apps-ecommerce-customer-details' */
                /* no component */
                children: [
                  {
                    path: ":id",
                    name: "apps-ecommerce-customer-details-id",
                    component: () => import("./assets/_id_-CF4kg3sO.js")
                    /* no children */
                  }
                ]
              },
              {
                path: "list",
                /* internal name: 'apps-ecommerce-customer-list' */
                /* no component */
                children: [
                  {
                    path: "",
                    name: "apps-ecommerce-customer-list",
                    component: () => import("./assets/index-CSKBK6Nj.js")
                    /* no children */
                  }
                ]
              }
            ]
          },
          {
            path: "manage-review",
            name: "apps-ecommerce-manage-review",
            component: () => import("./assets/manage-review-22lgJzMf.js")
            /* no children */
          },
          {
            path: "order",
            /* internal name: 'apps-ecommerce-order' */
            /* no component */
            children: [
              {
                path: "details",
                /* internal name: 'apps-ecommerce-order-details' */
                /* no component */
                children: [
                  {
                    path: ":id",
                    name: "apps-ecommerce-order-details-id",
                    component: () => import("./assets/_id_-Cozrmvoa.js")
                    /* no children */
                  }
                ]
              },
              {
                path: "list",
                /* internal name: 'apps-ecommerce-order-list' */
                /* no component */
                children: [
                  {
                    path: "",
                    name: "apps-ecommerce-order-list",
                    component: () => import("./assets/index-CH7Uwa81.js")
                    /* no children */
                  }
                ]
              }
            ]
          },
          {
            path: "product",
            /* internal name: 'apps-ecommerce-product' */
            /* no component */
            children: [
              {
                path: "add",
                /* internal name: 'apps-ecommerce-product-add' */
                /* no component */
                children: [
                  {
                    path: "",
                    name: "apps-ecommerce-product-add",
                    component: () => import("./assets/index-DAjwLYjl.js")
                    /* no children */
                  }
                ]
              },
              {
                path: "category-list",
                name: "apps-ecommerce-product-category-list",
                component: () => import("./assets/category-list-C19KSFoo.js")
                /* no children */
              },
              {
                path: "list",
                /* internal name: 'apps-ecommerce-product-list' */
                /* no component */
                children: [
                  {
                    path: "",
                    name: "apps-ecommerce-product-list",
                    component: () => import("./assets/index-DxMpeSzh.js")
                    /* no children */
                  }
                ]
              }
            ]
          },
          {
            path: "referrals",
            name: "apps-ecommerce-referrals",
            component: () => import("./assets/referrals-DtzJkaHi.js")
            /* no children */
          },
          {
            path: "settings",
            name: "apps-ecommerce-settings",
            component: () => import("./assets/settings-wO2I33HD.js")
            /* no children */
          }
        ]
      },
      {
        path: "email",
        /* internal name: 'apps-email' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: "",
              name: "apps-email",
              component: () => import("./assets/index-3xvjJWz0.js")
              /* no children */
            },
            _definePage_default_4
          )
        ]
      },
      {
        path: "invoice",
        /* internal name: 'apps-invoice' */
        /* no component */
        children: [
          {
            path: "add",
            /* internal name: 'apps-invoice-add' */
            /* no component */
            children: [
              {
                path: "",
                name: "apps-invoice-add",
                component: () => import("./assets/index-BC9ZxJDh.js")
                /* no children */
              }
            ]
          },
          {
            path: "edit",
            /* internal name: 'apps-invoice-edit' */
            /* no component */
            children: [
              {
                path: ":id",
                name: "apps-invoice-edit-id",
                component: () => import("./assets/_id_-BeP8XqMg.js")
                /* no children */
              }
            ]
          },
          {
            path: "list",
            /* internal name: 'apps-invoice-list' */
            /* no component */
            children: [
              {
                path: "",
                name: "apps-invoice-list",
                component: () => import("./assets/index-WJolgWHO.js")
                /* no children */
              }
            ]
          },
          {
            path: "preview",
            /* internal name: 'apps-invoice-preview' */
            /* no component */
            children: [
              {
                path: ":id",
                name: "apps-invoice-preview-id",
                component: () => import("./assets/_id_-C1l4B58M.js")
                /* no children */
              }
            ]
          }
        ]
      },
      {
        path: "kanban",
        /* internal name: 'apps-kanban' */
        /* no component */
        children: [
          {
            path: "",
            name: "apps-kanban",
            component: () => import("./assets/index-0kinG0Bd.js")
            /* no children */
          }
        ]
      },
      {
        path: "logistics",
        /* internal name: 'apps-logistics' */
        /* no component */
        children: [
          {
            path: "dashboard",
            name: "apps-logistics-dashboard",
            component: () => import("./assets/dashboard-BxmfJPc5.js")
            /* no children */
          },
          _mergeRouteRecord(
            {
              path: "fleet",
              name: "apps-logistics-fleet",
              component: () => import("./assets/fleet-B6qWJkTU.js")
              /* no children */
            },
            _definePage_default_5
          )
        ]
      },
      {
        path: "permissions",
        /* internal name: 'apps-permissions' */
        /* no component */
        children: [
          {
            path: "",
            name: "apps-permissions",
            component: () => import("./assets/index-DTfjuvA3.js")
            /* no children */
          }
        ]
      },
      {
        path: "roles",
        /* internal name: 'apps-roles' */
        /* no component */
        children: [
          {
            path: "",
            name: "apps-roles",
            component: () => import("./assets/index-P2ZBckFt.js")
            /* no children */
          }
        ]
      },
      {
        path: "user",
        /* internal name: 'apps-user' */
        /* no component */
        children: [
          {
            path: "list",
            /* internal name: 'apps-user-list' */
            /* no component */
            children: [
              {
                path: "",
                name: "apps-user-list",
                component: () => import("./assets/index-BzhR788M.js")
                /* no children */
              }
            ]
          },
          {
            path: "view",
            /* internal name: 'apps-user-view' */
            /* no component */
            children: [
              {
                path: ":id",
                name: "apps-user-view-id",
                component: () => import("./assets/_id_-Ce2n2zd_.js")
                /* no children */
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/apps/email/:filter",
    name: "apps-email-filter",
    component: () => import("./assets/index-3xvjJWz0.js")
    /* no children */
  },
  {
    path: "/apps/email/:label",
    name: "apps-email-label",
    component: () => import("./assets/index-3xvjJWz0.js")
    /* no children */
  },
  {
    path: "/charts",
    /* internal name: 'charts' */
    /* no component */
    children: [
      {
        path: "apex-chart",
        name: "charts-apex-chart",
        component: () => import("./assets/apex-chart-CbMfkvp8.js")
        /* no children */
      },
      {
        path: "chartjs",
        name: "charts-chartjs",
        component: () => import("./assets/chartjs-BsImyKbE.js")
        /* no children */
      }
    ]
  },
  {
    path: "/components",
    /* internal name: 'components' */
    /* no component */
    children: [
      {
        path: "alert",
        name: "components-alert",
        component: () => import("./assets/alert-6RCzg_ny.js")
        /* no children */
      },
      {
        path: "avatar",
        name: "components-avatar",
        component: () => import("./assets/avatar-Ct1x_OQh.js")
        /* no children */
      },
      {
        path: "badge",
        name: "components-badge",
        component: () => import("./assets/badge-Bv1rJTvo.js")
        /* no children */
      },
      {
        path: "button",
        name: "components-button",
        component: () => import("./assets/button-CNXKl3pF.js")
        /* no children */
      },
      {
        path: "chip",
        name: "components-chip",
        component: () => import("./assets/chip-BBnqCAIZ.js")
        /* no children */
      },
      {
        path: "dialog",
        name: "components-dialog",
        component: () => import("./assets/dialog-z40ZnUkC.js")
        /* no children */
      },
      {
        path: "expansion-panel",
        name: "components-expansion-panel",
        component: () => import("./assets/expansion-panel-DYlETZCI.js")
        /* no children */
      },
      {
        path: "list",
        name: "components-list",
        component: () => import("./assets/list-DWWmZ4rt.js")
        /* no children */
      },
      {
        path: "menu",
        name: "components-menu",
        component: () => import("./assets/menu-B-3TD52G.js")
        /* no children */
      },
      {
        path: "pagination",
        name: "components-pagination",
        component: () => import("./assets/pagination-DEuY7ge3.js")
        /* no children */
      },
      {
        path: "progress-circular",
        name: "components-progress-circular",
        component: () => import("./assets/progress-circular-D9Mkz0GG.js")
        /* no children */
      },
      {
        path: "progress-linear",
        name: "components-progress-linear",
        component: () => import("./assets/progress-linear-BxfAWGjP.js")
        /* no children */
      },
      {
        path: "snackbar",
        name: "components-snackbar",
        component: () => import("./assets/snackbar-BEqUIDoB.js")
        /* no children */
      },
      {
        path: "tabs",
        name: "components-tabs",
        component: () => import("./assets/tabs-DK5aIJED.js")
        /* no children */
      },
      {
        path: "timeline",
        name: "components-timeline",
        component: () => import("./assets/timeline-9xBf77XT.js")
        /* no children */
      },
      {
        path: "tooltip",
        name: "components-tooltip",
        component: () => import("./assets/tooltip-BbpPQBME.js")
        /* no children */
      }
    ]
  },
  {
    path: "/dashboards",
    /* internal name: 'dashboards' */
    /* no component */
    children: [
      {
        path: "analytics",
        name: "dashboards-analytics",
        component: () => import("./assets/analytics-DCn4nzTA.js")
        /* no children */
      },
      {
        path: "crm",
        name: "dashboards-crm",
        component: () => import("./assets/crm-ByGx7ITW.js")
        /* no children */
      },
      {
        path: "ecommerce",
        name: "dashboards-ecommerce",
        component: () => import("./assets/ecommerce-BeZ__1q5.js")
        /* no children */
      }
    ]
  },
  {
    path: "/extensions",
    /* internal name: 'extensions' */
    /* no component */
    children: [
      {
        path: "swiper",
        name: "extensions-swiper",
        component: () => import("./assets/swiper-B9RD07YW.js")
        /* no children */
      },
      {
        path: "tour",
        name: "extensions-tour",
        component: () => import("./assets/tour-CaLJ5QiU.js")
        /* no children */
      }
    ]
  },
  _mergeRouteRecord(
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("./assets/forgot-password-CS23RTwu.js")
      /* no children */
    },
    _definePage_default_6
  ),
  {
    path: "/forms",
    /* internal name: 'forms' */
    /* no component */
    children: [
      {
        path: "autocomplete",
        name: "forms-autocomplete",
        component: () => import("./assets/autocomplete-eAciEy_n.js")
        /* no children */
      },
      {
        path: "checkbox",
        name: "forms-checkbox",
        component: () => import("./assets/checkbox-DeVJF71j.js")
        /* no children */
      },
      {
        path: "combobox",
        name: "forms-combobox",
        component: () => import("./assets/combobox-CcGEFSIE.js")
        /* no children */
      },
      {
        path: "custom-input",
        name: "forms-custom-input",
        component: () => import("./assets/custom-input-CRYoIxk3.js")
        /* no children */
      },
      {
        path: "date-time-picker",
        name: "forms-date-time-picker",
        component: () => import("./assets/date-time-picker-CE0zot_G.js")
        /* no children */
      },
      {
        path: "editors",
        name: "forms-editors",
        component: () => import("./assets/editors-CXt_NhDh.js")
        /* no children */
      },
      {
        path: "file-input",
        name: "forms-file-input",
        component: () => import("./assets/file-input-CnoD57r0.js")
        /* no children */
      },
      {
        path: "form-layouts",
        name: "forms-form-layouts",
        component: () => import("./assets/form-layouts-CagbeStQ.js")
        /* no children */
      },
      {
        path: "form-validation",
        name: "forms-form-validation",
        component: () => import("./assets/form-validation-DQVJdMaF.js")
        /* no children */
      },
      {
        path: "form-wizard-icons",
        name: "forms-form-wizard-icons",
        component: () => import("./assets/form-wizard-icons-DijkFSrt.js")
        /* no children */
      },
      {
        path: "form-wizard-numbered",
        name: "forms-form-wizard-numbered",
        component: () => import("./assets/form-wizard-numbered-DSbA1jBW.js")
        /* no children */
      },
      {
        path: "radio",
        name: "forms-radio",
        component: () => import("./assets/radio-Db48H7Rq.js")
        /* no children */
      },
      {
        path: "range-slider",
        name: "forms-range-slider",
        component: () => import("./assets/range-slider-DWwt0ghN.js")
        /* no children */
      },
      {
        path: "rating",
        name: "forms-rating",
        component: () => import("./assets/rating-BQtftD3B.js")
        /* no children */
      },
      {
        path: "select",
        name: "forms-select",
        component: () => import("./assets/select-uweJmPw9.js")
        /* no children */
      },
      {
        path: "slider",
        name: "forms-slider",
        component: () => import("./assets/slider-DQ8kfJBn.js")
        /* no children */
      },
      {
        path: "switch",
        name: "forms-switch",
        component: () => import("./assets/switch-B-fL5gyw.js")
        /* no children */
      },
      {
        path: "textarea",
        name: "forms-textarea",
        component: () => import("./assets/textarea-CbjvENlU.js")
        /* no children */
      },
      {
        path: "textfield",
        name: "forms-textfield",
        component: () => import("./assets/textfield-MGdmYYh2.js")
        /* no children */
      }
    ]
  },
  {
    path: "/front-pages",
    /* internal name: 'front-pages' */
    /* no component */
    children: [
      _mergeRouteRecord(
        {
          path: "checkout",
          name: "front-pages-checkout",
          component: () => import("./assets/checkout-CxOiEVd7.js")
          /* no children */
        },
        _definePage_default_7
      ),
      {
        path: "help-center",
        /* internal name: 'front-pages-help-center' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: "",
              name: "front-pages-help-center",
              component: () => import("./assets/index-BeC5dk9N.js")
              /* no children */
            },
            _definePage_default_8
          ),
          {
            path: "article",
            /* internal name: 'front-pages-help-center-article' */
            /* no component */
            children: [
              _mergeRouteRecord(
                {
                  path: ":title",
                  name: "front-pages-help-center-article-title",
                  component: () => import("./assets/_title_-kgOwlSyG.js")
                  /* no children */
                },
                _definePage_default_9
              )
            ]
          }
        ]
      },
      {
        path: "landing-page",
        /* internal name: 'front-pages-landing-page' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: "",
              name: "front-pages-landing-page",
              component: () => import("./assets/index-C7KLFzoO.js")
              /* no children */
            },
            _definePage_default_10
          )
        ]
      },
      _mergeRouteRecord(
        {
          path: "payment",
          name: "front-pages-payment",
          component: () => import("./assets/payment-DJjXgXFO.js")
          /* no children */
        },
        _definePage_default_11
      ),
      _mergeRouteRecord(
        {
          path: "pricing",
          name: "front-pages-pricing",
          component: () => import("./assets/pricing-BK25qmFh.js")
          /* no children */
        },
        _definePage_default_12
      )
    ]
  },
  _mergeRouteRecord(
    {
      path: "/login",
      name: "login",
      component: () => import("./assets/login-BqJYm8ON.js")
      /* no children */
    },
    _definePage_default_13
  ),
  _mergeRouteRecord(
    {
      path: "/not-authorized",
      name: "not-authorized",
      component: () => import("./assets/not-authorized-D1QC3FrX.js")
      /* no children */
    },
    _definePage_default_14
  ),
  {
    path: "/pages",
    /* internal name: 'pages' */
    /* no component */
    children: [
      {
        path: "account-settings",
        /* internal name: 'pages-account-settings' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: ":tab",
              name: "pages-account-settings-tab",
              component: () => import("./assets/_tab_-uJzUM9Oc.js")
              /* no children */
            },
            _definePage_default_15
          )
        ]
      },
      {
        path: "authentication",
        /* internal name: 'pages-authentication' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: "forgot-password-v1",
              name: "pages-authentication-forgot-password-v1",
              component: () => import("./assets/forgot-password-v1-DTnDlwdz.js")
              /* no children */
            },
            _definePage_default_16
          ),
          _mergeRouteRecord(
            {
              path: "forgot-password-v2",
              name: "pages-authentication-forgot-password-v2",
              component: () => import("./assets/forgot-password-v2-UAf-LkKy.js")
              /* no children */
            },
            _definePage_default_17
          ),
          _mergeRouteRecord(
            {
              path: "login-v1",
              name: "pages-authentication-login-v1",
              component: () => import("./assets/login-v1-D8mVm3SL.js")
              /* no children */
            },
            _definePage_default_18
          ),
          _mergeRouteRecord(
            {
              path: "login-v2",
              name: "pages-authentication-login-v2",
              component: () => import("./assets/login-v2-beSUSUnm.js")
              /* no children */
            },
            _definePage_default_19
          ),
          _mergeRouteRecord(
            {
              path: "register-multi-steps",
              name: "pages-authentication-register-multi-steps",
              component: () => import("./assets/register-multi-steps-DSy8ULu8.js")
              /* no children */
            },
            _definePage_default_20
          ),
          _mergeRouteRecord(
            {
              path: "register-v1",
              name: "pages-authentication-register-v1",
              component: () => import("./assets/register-v1-BoNDib73.js")
              /* no children */
            },
            _definePage_default_21
          ),
          _mergeRouteRecord(
            {
              path: "register-v2",
              name: "pages-authentication-register-v2",
              component: () => import("./assets/register-v2-CecXWU14.js")
              /* no children */
            },
            _definePage_default_22
          ),
          _mergeRouteRecord(
            {
              path: "reset-password-v1",
              name: "pages-authentication-reset-password-v1",
              component: () => import("./assets/reset-password-v1-CWEgjVw4.js")
              /* no children */
            },
            _definePage_default_23
          ),
          _mergeRouteRecord(
            {
              path: "reset-password-v2",
              name: "pages-authentication-reset-password-v2",
              component: () => import("./assets/reset-password-v2-DmuMovM4.js")
              /* no children */
            },
            _definePage_default_24
          ),
          _mergeRouteRecord(
            {
              path: "two-steps-v1",
              name: "pages-authentication-two-steps-v1",
              component: () => import("./assets/two-steps-v1-yaxfNaBb.js")
              /* no children */
            },
            _definePage_default_25
          ),
          _mergeRouteRecord(
            {
              path: "two-steps-v2",
              name: "pages-authentication-two-steps-v2",
              component: () => import("./assets/two-steps-v2-Cxwmyxs4.js")
              /* no children */
            },
            _definePage_default_26
          ),
          _mergeRouteRecord(
            {
              path: "verify-email-v1",
              name: "pages-authentication-verify-email-v1",
              component: () => import("./assets/verify-email-v1-BiJNd3f-.js")
              /* no children */
            },
            _definePage_default_27
          ),
          _mergeRouteRecord(
            {
              path: "verify-email-v2",
              name: "pages-authentication-verify-email-v2",
              component: () => import("./assets/verify-email-v2-DwwX-2IG.js")
              /* no children */
            },
            _definePage_default_28
          )
        ]
      },
      {
        path: "cards",
        /* internal name: 'pages-cards' */
        /* no component */
        children: [
          {
            path: "card-actions",
            name: "pages-cards-card-actions",
            component: () => import("./assets/card-actions-B2maObQy.js")
            /* no children */
          },
          {
            path: "card-advance",
            name: "pages-cards-card-advance",
            component: () => import("./assets/card-advance-CsmKMHvU.js")
            /* no children */
          },
          {
            path: "card-basic",
            name: "pages-cards-card-basic",
            component: () => import("./assets/card-basic-DPDAMjVE.js")
            /* no children */
          },
          {
            path: "card-gamification",
            name: "pages-cards-card-gamification",
            component: () => import("./assets/card-gamification-use2dPh0.js")
            /* no children */
          },
          {
            path: "card-statistics",
            name: "pages-cards-card-statistics",
            component: () => import("./assets/card-statistics-CT_8t9yu.js")
            /* no children */
          },
          {
            path: "card-widgets",
            name: "pages-cards-card-widgets",
            component: () => import("./assets/card-widgets-Cy6-Z2m5.js")
            /* no children */
          }
        ]
      },
      {
        path: "dialog-examples",
        /* internal name: 'pages-dialog-examples' */
        /* no component */
        children: [
          {
            path: "",
            name: "pages-dialog-examples",
            component: () => import("./assets/index-ChSoUVb_.js")
            /* no children */
          }
        ]
      },
      {
        path: "faq",
        name: "pages-faq",
        component: () => import("./assets/faq-qIFSS9Ty.js")
        /* no children */
      },
      {
        path: "icons",
        name: "pages-icons",
        component: () => import("./assets/icons-D4w4eMOW.js")
        /* no children */
      },
      {
        path: "misc",
        /* internal name: 'pages-misc' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: "coming-soon",
              name: "pages-misc-coming-soon",
              component: () => import("./assets/coming-soon-BEEXK3KP.js")
              /* no children */
            },
            _definePage_default_29
          ),
          _mergeRouteRecord(
            {
              path: "under-maintenance",
              name: "pages-misc-under-maintenance",
              component: () => import("./assets/under-maintenance-Bqh_uQSm.js")
              /* no children */
            },
            _definePage_default_30
          )
        ]
      },
      {
        path: "pricing",
        name: "pages-pricing",
        component: () => import("./assets/pricing-Dp_hza24.js")
        /* no children */
      },
      {
        path: "typography",
        name: "pages-typography",
        component: () => import("./assets/typography-CDGSYwyf.js")
        /* no children */
      },
      {
        path: "user-profile",
        /* internal name: 'pages-user-profile' */
        /* no component */
        children: [
          _mergeRouteRecord(
            {
              path: ":tab",
              name: "pages-user-profile-tab",
              component: () => import("./assets/_tab_-B1QhFacy.js")
              /* no children */
            },
            _definePage_default_31
          )
        ]
      }
    ]
  },
  _mergeRouteRecord(
    {
      path: "/register",
      name: "register",
      component: () => import("./assets/register-Da-v4Wwu.js")
      /* no children */
    },
    _definePage_default_32
  ),
  {
    path: "/tables",
    /* internal name: 'tables' */
    /* no component */
    children: [
      {
        path: "data-table",
        name: "tables-data-table",
        component: () => import("./assets/data-table-D2GwP_lw.js")
        /* no children */
      },
      {
        path: "simple-table",
        name: "tables-simple-table",
        component: () => import("./assets/simple-table-Cv57HZn8.js")
        /* no children */
      }
    ]
  },
  {
    path: "/wizard-examples",
    /* internal name: 'wizard-examples' */
    /* no component */
    children: [
      {
        path: "checkout",
        name: "wizard-examples-checkout",
        component: () => import("./assets/checkout-DCxmwyt8.js")
        /* no children */
      },
      {
        path: "create-deal",
        name: "wizard-examples-create-deal",
        component: () => import("./assets/create-deal-CyJLRcdM.js")
        /* no children */
      },
      {
        path: "property-listing",
        name: "wizard-examples-property-listing",
        component: () => import("./assets/property-listing-B2PpEyaU.js")
        /* no children */
      }
    ]
  }
];
function createRouter(options) {
  const { extendRoutes } = options;
  const router2 = createRouter$1(Object.assign(
    options,
    { routes: typeof extendRoutes === "function" ? extendRoutes(routes$1) : routes$1 }
  ));
  return router2;
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2)
    t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2)
    void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2)
    for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
      var f2 = a2[s2], c2 = i2[f2];
      "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3)
          void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length)
    return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2)
    return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1)
      r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2)
    return e2;
  if ("object" != typeof r2) {
    if (u(e2))
      e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2)
        return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2)
    return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else
      e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2)
      return u2 && !g2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], v.encoder, m2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2)
    return x2;
  if ("comma" === n2 && p(w2))
    R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2))
    R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k2 = R2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes)
        return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes)
        return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4)
    return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel)
      for (r3 = 0; r3 < o3.length; ++r3)
        0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3)
      if (r3 !== i3) {
        var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
          return e3.decoder(t6, $.decoder, u3, "value");
        })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
      }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups)
        o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2]))
        throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : ""))
        throw new Error(`Ziggy error: '${r2}' parameter does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(`${this.origin}//`, `${this.origin}/`).replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2])
        throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5)
          return v;
        if (null != t5.encoder && "function" != typeof t5.encoder)
          throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format))
            throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2)
        return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2)
      return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4))
      return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2))
        return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
function useToggleScope(source, fn) {
  let scope;
  function start() {
    scope = effectScope();
    scope.run(() => fn.length ? fn(() => {
      scope == null ? void 0 : scope.stop();
      start();
    }) : fn());
  }
  watch(source, (active) => {
    if (active && !scope) {
      start();
    } else if (!active) {
      scope == null ? void 0 : scope.stop();
      scope = void 0;
    }
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
}
const IN_BROWSER = typeof window !== "undefined";
const SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
const SUPPORTS_TOUCH = IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
const SUPPORTS_EYE_DROPPER = IN_BROWSER && "EyeDropper" in window;
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0)
    return obj === void 0 ? fallback : obj;
  for (let i2 = 0; i2 < last; i2++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i2]];
  }
  if (obj == null)
    return fallback;
  return obj[path[last]] === void 0 ? fallback : obj[path[last]];
}
function deepEqual(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 instanceof Date && b2 instanceof Date && a2.getTime() !== b2.getTime()) {
    return false;
  }
  if (a2 !== Object(a2) || b2 !== Object(b2)) {
    return false;
  }
  const props = Object.keys(a2);
  if (props.length !== Object.keys(b2).length) {
    return false;
  }
  return props.every((p2) => deepEqual(a2[p2], b2[p2]));
}
function getObjectValueByPath(obj, path, fallback) {
  if (obj == null || !path || typeof path !== "string")
    return fallback;
  if (obj[path] !== void 0)
    return obj[path];
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  return getNestedValue(obj, path.split("."), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property === true)
    return item === void 0 ? fallback : item;
  if (property == null || typeof property === "boolean")
    return fallback;
  if (item !== Object(item)) {
    if (typeof property !== "function")
      return fallback;
    const value2 = property(item, fallback);
    return typeof value2 === "undefined" ? fallback : value2;
  }
  if (typeof property === "string")
    return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property))
    return getNestedValue(item, property, fallback);
  if (typeof property !== "function")
    return fallback;
  const value = property(item, fallback);
  return typeof value === "undefined" ? fallback : value;
}
function createRange(length) {
  let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length
  }, (v2, k2) => start + k2);
}
function convertToUnit(str) {
  let unit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else if (!isFinite(+str)) {
    return void 0;
  } else {
    return `${Number(str)}${unit}`;
  }
}
function isObject$1(obj) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function refElement(obj) {
  if (obj && "$el" in obj) {
    const el = obj.$el;
    if ((el == null ? void 0 : el.nodeType) === Node.TEXT_NODE) {
      return el.nextElementSibling;
    }
    return el;
  }
  return obj;
}
const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
const keyValues = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function keys(o2) {
  return Object.keys(o2);
}
function has(obj, key) {
  return key.every((k2) => obj.hasOwnProperty(k2));
}
function pick(obj, paths) {
  const found = {};
  const keys2 = new Set(Object.keys(obj));
  for (const path of paths) {
    if (keys2.has(path)) {
      found[path] = obj[path];
    }
  }
  return found;
}
function pickWithRest(obj, paths, exclude) {
  const found = /* @__PURE__ */ Object.create(null);
  const rest = /* @__PURE__ */ Object.create(null);
  for (const key in obj) {
    if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key) && !(exclude == null ? void 0 : exclude.some((path) => path === key))) {
      found[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  return [found, rest];
}
function omit(obj, exclude) {
  const clone = {
    ...obj
  };
  exclude.forEach((prop) => delete clone[prop]);
  return clone;
}
function only(obj, include) {
  const clone = {};
  include.forEach((prop) => clone[prop] = obj[prop]);
  return clone;
}
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const bubblingEvents = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
const compositionIgnoreKeys = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function isComposingIgnoreKey(e2) {
  return e2.isComposing && compositionIgnoreKeys.includes(e2.key);
}
function filterInputAttrs(attrs) {
  const [events, props] = pickWithRest(attrs, [onRE]);
  const inputEvents = omit(events, bubblingEvents);
  const [rootAttrs, inputAttrs] = pickWithRest(props, ["class", "style", "id", /^data-/]);
  Object.assign(rootAttrs, events);
  Object.assign(inputAttrs, inputEvents);
  return [rootAttrs, inputAttrs];
}
function wrapInArray(v2) {
  return v2 == null ? [] : Array.isArray(v2) ? v2 : [v2];
}
function debounce(fn, delay) {
  let timeoutId = 0;
  const wrap = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), unref(delay));
  };
  wrap.clear = () => {
    clearTimeout(timeoutId);
  };
  wrap.immediate = fn;
  return wrap;
}
function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
function getDecimals(value) {
  const trimmedStr = value.toString().trim();
  return trimmedStr.includes(".") ? trimmedStr.length - trimmedStr.indexOf(".") - 1 : 0;
}
function padEnd(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return str + char.repeat(Math.max(0, length - str.length));
}
function padStart(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return char.repeat(Math.max(0, length - str.length)) + str;
}
function chunk(str) {
  let size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const chunked = [];
  let index2 = 0;
  while (index2 < str.length) {
    chunked.push(str.substr(index2, size));
    index2 += size;
  }
  return chunked;
}
function humanReadableFileSize(bytes) {
  let base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (bytes < base) {
    return `${bytes} B`;
  }
  const prefix = base === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let unit = -1;
  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }
  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function mergeDeep() {
  let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let arrayFn = arguments.length > 2 ? arguments[2] : void 0;
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];
    if (isObject$1(sourceProperty) && isObject$1(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
      continue;
    }
    if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
      out[key] = arrayFn(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
function flattenFragments(nodes) {
  return nodes.map((node) => {
    if (node.type === Fragment) {
      return flattenFragments(node.children);
    } else {
      return node;
    }
  }).flat();
}
function toKebabCase() {
  let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (toKebabCase.cache.has(str))
    return toKebabCase.cache.get(str);
  const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(key, vnode) {
  if (!vnode || typeof vnode !== "object")
    return [];
  if (Array.isArray(vnode)) {
    return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (Array.isArray(vnode.children)) {
    return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.component) {
    if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
      return [vnode.component];
    } else if (vnode.component.subTree) {
      return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
    }
  }
  return [];
}
var _arr = /* @__PURE__ */ new WeakMap();
var _pointer = /* @__PURE__ */ new WeakMap();
class CircularBuffer {
  constructor(size) {
    _classPrivateFieldInitSpec(this, _arr, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _pointer, {
      writable: true,
      value: 0
    });
    this.size = size;
  }
  push(val) {
    _classPrivateFieldGet(this, _arr)[_classPrivateFieldGet(this, _pointer)] = val;
    _classPrivateFieldSet(this, _pointer, (_classPrivateFieldGet(this, _pointer) + 1) % this.size);
  }
  values() {
    return _classPrivateFieldGet(this, _arr).slice(_classPrivateFieldGet(this, _pointer)).concat(_classPrivateFieldGet(this, _arr).slice(0, _classPrivateFieldGet(this, _pointer)));
  }
}
function getEventCoordinates(e2) {
  if ("touches" in e2) {
    return {
      clientX: e2.touches[0].clientX,
      clientY: e2.touches[0].clientY
    };
  }
  return {
    clientX: e2.clientX,
    clientY: e2.clientY
  };
}
function destructComputed(getter) {
  const refs = reactive({});
  const base = computed(getter);
  watchEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  }, {
    flush: "sync"
  });
  return toRefs(refs);
}
function includes(arr, val) {
  return arr.includes(val);
}
function eventName(propName) {
  return propName[2].toLowerCase() + propName.slice(3);
}
const EventProp = () => [Function, Array];
function hasEvent(props, name) {
  name = "on" + capitalize(name);
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
function callEvent(handler) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (Array.isArray(handler)) {
    for (const h2 of handler) {
      h2(...args);
    }
  } else if (typeof handler === "function") {
    handler(...args);
  }
}
function focusableChildren(el) {
  let filterByTabIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const targets = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((s2) => `${s2}${filterByTabIndex ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...el.querySelectorAll(targets)];
}
function getNextElement(elements, location2, condition) {
  let _el;
  let idx = elements.indexOf(document.activeElement);
  const inc = location2 === "next" ? 1 : -1;
  do {
    idx += inc;
    _el = elements[idx];
  } while ((!_el || _el.offsetParent == null || !((condition == null ? void 0 : condition(_el)) ?? true)) && idx < elements.length && idx >= 0);
  return _el;
}
function focusChild(el, location2) {
  var _a2, _b, _c, _d;
  const focusable = focusableChildren(el);
  if (!location2) {
    if (el === document.activeElement || !el.contains(document.activeElement)) {
      (_a2 = focusable[0]) == null ? void 0 : _a2.focus();
    }
  } else if (location2 === "first") {
    (_b = focusable[0]) == null ? void 0 : _b.focus();
  } else if (location2 === "last") {
    (_c = focusable.at(-1)) == null ? void 0 : _c.focus();
  } else if (typeof location2 === "number") {
    (_d = focusable[location2]) == null ? void 0 : _d.focus();
  } else {
    const _el = getNextElement(focusable, location2);
    if (_el)
      _el.focus();
    else
      focusChild(el, location2 === "next" ? "first" : "last");
  }
}
function isEmpty(val) {
  return val === null || val === void 0 || typeof val === "string" && val.trim() === "";
}
function noop$1() {
}
function matchesSelector(el, selector) {
  const supportsSelector = IN_BROWSER && typeof CSS !== "undefined" && typeof CSS.supports !== "undefined" && CSS.supports(`selector(${selector})`);
  if (!supportsSelector)
    return null;
  try {
    return !!el && el.matches(selector);
  } catch (err) {
    return null;
  }
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    return child.type !== Fragment || ensureValidVNode(child.children);
  }) ? vnodes : null;
}
function defer(timeout, cb) {
  if (!IN_BROWSER || timeout === 0) {
    cb();
    return () => {
    };
  }
  const timeoutId = window.setTimeout(cb, timeout);
  return () => window.clearTimeout(timeoutId);
}
function isClickInsideElement(event, targetDiv) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const divRect = targetDiv.getBoundingClientRect();
  const divLeft = divRect.left;
  const divTop = divRect.top;
  const divRight = divRect.right;
  const divBottom = divRect.bottom;
  return mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom;
}
const block = ["top", "bottom"];
const inline = ["start", "end", "left", "right"];
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(" ");
  if (!align) {
    align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === "start")
    return isRtl ? "right" : "left";
  if (str === "end")
    return isRtl ? "left" : "right";
  return str;
}
function flipSide(anchor) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.side],
    align: anchor.align
  };
}
function flipAlign(anchor) {
  return {
    side: anchor.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.align]
  };
}
function flipCorner(anchor) {
  return {
    side: anchor.align,
    align: anchor.side
  };
}
function getAxis(anchor) {
  return includes(block, anchor.side) ? "y" : "x";
}
const mainTRC = 2.4;
const Rco = 0.2126729;
const Gco = 0.7151522;
const Bco = 0.072175;
const normBG = 0.55;
const normTXT = 0.58;
const revTXT = 0.57;
const revBG = 0.62;
const blkThrs = 0.03;
const blkClmp = 1.45;
const deltaYmin = 5e-4;
const scaleBoW = 1.25;
const scaleWoB = 1.25;
const loConThresh = 0.078;
const loConFactor = 12.82051282051282;
const loConOffset = 0.06;
const loClip = 1e-3;
function APCAcontrast(text, background) {
  const Rtxt = (text.r / 255) ** mainTRC;
  const Gtxt = (text.g / 255) ** mainTRC;
  const Btxt = (text.b / 255) ** mainTRC;
  const Rbg = (background.r / 255) ** mainTRC;
  const Gbg = (background.g / 255) ** mainTRC;
  const Bbg = (background.b / 255) ** mainTRC;
  let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
  let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
  if (Ytxt <= blkThrs)
    Ytxt += (blkThrs - Ytxt) ** blkClmp;
  if (Ybg <= blkThrs)
    Ybg += (blkThrs - Ybg) ** blkClmp;
  if (Math.abs(Ybg - Ytxt) < deltaYmin)
    return 0;
  let outputContrast;
  if (Ybg > Ytxt) {
    const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
    outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
  } else {
    const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
    outputContrast = SAPC > -loClip ? 0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
  }
  return outputContrast * 100;
}
function consoleWarn(message2) {
  warn$2(`Vuetify: ${message2}`);
}
function consoleError(message2) {
  warn$2(`Vuetify error: ${message2}`);
}
function deprecate(original, replacement) {
  replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map((s2) => `'${s2}'`).join(", ") + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
  warn$2(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
}
const delta = 0.20689655172413793;
const cielabForwardTransform = (t4) => t4 > delta ** 3 ? Math.cbrt(t4) : t4 / (3 * delta ** 2) + 4 / 29;
const cielabReverseTransform = (t4) => t4 > delta ? t4 ** 3 : 3 * delta ** 2 * (t4 - 4 / 29);
function fromXYZ$1(xyz) {
  const transform2 = cielabForwardTransform;
  const transformedY = transform2(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform2(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform2(xyz[2] / 1.08883))];
}
function toXYZ$1(lab) {
  const transform2 = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform2(Ln + lab[1] / 500) * 0.95047, transform2(Ln), transform2(Ln - lab[2] / 200) * 1.08883];
}
const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
const srgbForwardTransform = (C) => C <= 31308e-7 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055;
const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
const srgbReverseTransform = (C) => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform2 = srgbForwardTransform;
  const matrix = srgbForwardMatrix;
  for (let i2 = 0; i2 < 3; ++i2) {
    rgb[i2] = Math.round(clamp(transform2(matrix[i2][0] * xyz[0] + matrix[i2][1] * xyz[1] + matrix[i2][2] * xyz[2])) * 255);
  }
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
function toXYZ(_ref) {
  let {
    r: r2,
    g: g2,
    b: b2
  } = _ref;
  const xyz = [0, 0, 0];
  const transform2 = srgbReverseTransform;
  const matrix = srgbReverseMatrix;
  r2 = transform2(r2 / 255);
  g2 = transform2(g2 / 255);
  b2 = transform2(b2 / 255);
  for (let i2 = 0; i2 < 3; ++i2) {
    xyz[i2] = matrix[i2][0] * r2 + matrix[i2][1] * g2 + matrix[i2][2] * b2;
  }
  return xyz;
}
function isCssColor(color) {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
function isParsableColor(color) {
  return isCssColor(color) && !/^((rgb|hsl)a?\()?var\(--/.test(color);
}
const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
const mappers = {
  rgb: (r2, g2, b2, a2) => ({
    r: r2,
    g: g2,
    b: b2,
    a: a2
  }),
  rgba: (r2, g2, b2, a2) => ({
    r: r2,
    g: g2,
    b: b2,
    a: a2
  }),
  hsl: (h2, s2, l2, a2) => HSLtoRGB({
    h: h2,
    s: s2,
    l: l2,
    a: a2
  }),
  hsla: (h2, s2, l2, a2) => HSLtoRGB({
    h: h2,
    s: s2,
    l: l2,
    a: a2
  }),
  hsv: (h2, s2, v2, a2) => HSVtoRGB({
    h: h2,
    s: s2,
    v: v2,
    a: a2
  }),
  hsva: (h2, s2, v2, a2) => HSVtoRGB({
    h: h2,
    s: s2,
    v: v2,
    a: a2
  })
};
function parseColor(color) {
  if (typeof color === "number") {
    if (isNaN(color) || color < 0 || color > 16777215) {
      consoleWarn(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 16711680) >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  } else if (typeof color === "string" && cssColorRe.test(color)) {
    const {
      groups
    } = color.match(cssColorRe);
    const {
      fn,
      values
    } = groups;
    const realValues = values.split(/,\s*/).map((v2) => {
      if (v2.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(fn)) {
        return parseFloat(v2) / 100;
      } else {
        return parseFloat(v2);
      }
    });
    return mappers[fn](...realValues);
  } else if (typeof color === "string") {
    let hex = color.startsWith("#") ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex.split("").map((char) => char + char).join("");
    } else if (![6, 8].includes(hex.length)) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 4294967295) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else if (typeof color === "object") {
    if (has(color, ["r", "g", "b"])) {
      return color;
    } else if (has(color, ["h", "s", "l"])) {
      return HSVtoRGB(HSLtoHSV(color));
    } else if (has(color, ["h", "s", "v"])) {
      return HSVtoRGB(color);
    }
  }
  throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function HSVtoRGB(hsva) {
  const {
    h: h2,
    s: s2,
    v: v2,
    a: a2
  } = hsva;
  const f2 = (n2) => {
    const k2 = (n2 + h2 / 60) % 6;
    return v2 - v2 * s2 * Math.max(Math.min(k2, 4 - k2, 1), 0);
  };
  const rgb = [f2(5), f2(3), f2(1)].map((v3) => Math.round(v3 * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a: a2
  };
}
function HSLtoRGB(hsla) {
  return HSVtoRGB(HSLtoHSV(hsla));
}
function RGBtoHSV(rgba) {
  if (!rgba)
    return {
      h: 0,
      s: 1,
      v: 1,
      a: 1
    };
  const r2 = rgba.r / 255;
  const g2 = rgba.g / 255;
  const b2 = rgba.b / 255;
  const max = Math.max(r2, g2, b2);
  const min = Math.min(r2, g2, b2);
  let h2 = 0;
  if (max !== min) {
    if (max === r2) {
      h2 = 60 * (0 + (g2 - b2) / (max - min));
    } else if (max === g2) {
      h2 = 60 * (2 + (b2 - r2) / (max - min));
    } else if (max === b2) {
      h2 = 60 * (4 + (r2 - g2) / (max - min));
    }
  }
  if (h2 < 0)
    h2 = h2 + 360;
  const s2 = max === 0 ? 0 : (max - min) / max;
  const hsv = [h2, s2, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVtoHSL(hsva) {
  const {
    h: h2,
    s: s2,
    v: v2,
    a: a2
  } = hsva;
  const l2 = v2 - v2 * s2 / 2;
  const sprime = l2 === 1 || l2 === 0 ? 0 : (v2 - l2) / Math.min(l2, 1 - l2);
  return {
    h: h2,
    s: sprime,
    l: l2,
    a: a2
  };
}
function HSLtoHSV(hsl) {
  const {
    h: h2,
    s: s2,
    l: l2,
    a: a2
  } = hsl;
  const v2 = l2 + s2 * Math.min(l2, 1 - l2);
  const sprime = v2 === 0 ? 0 : 2 - 2 * l2 / v2;
  return {
    h: h2,
    s: sprime,
    v: v2,
    a: a2
  };
}
function RGBtoCSS(_ref) {
  let {
    r: r2,
    g: g2,
    b: b2,
    a: a2
  } = _ref;
  return a2 === void 0 ? `rgb(${r2}, ${g2}, ${b2})` : `rgba(${r2}, ${g2}, ${b2}, ${a2})`;
}
function HSVtoCSS(hsva) {
  return RGBtoCSS(HSVtoRGB(hsva));
}
function toHex(v2) {
  const h2 = Math.round(v2).toString(16);
  return ("00".substr(0, 2 - h2.length) + h2).toUpperCase();
}
function RGBtoHex(_ref2) {
  let {
    r: r2,
    g: g2,
    b: b2,
    a: a2
  } = _ref2;
  return `#${[toHex(r2), toHex(g2), toHex(b2), a2 !== void 0 ? toHex(Math.round(a2 * 255)) : ""].join("")}`;
}
function HexToRGB(hex) {
  hex = parseHex(hex);
  let [r2, g2, b2, a2] = chunk(hex, 2).map((c2) => parseInt(c2, 16));
  a2 = a2 === void 0 ? a2 : a2 / 255;
  return {
    r: r2,
    g: g2,
    b: b2,
    a: a2
  };
}
function HexToHSV(hex) {
  const rgb = HexToRGB(hex);
  return RGBtoHSV(rgb);
}
function HSVtoHex(hsva) {
  return RGBtoHex(HSVtoRGB(hsva));
}
function parseHex(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, "F");
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split("").map((x2) => x2 + x2).join("");
  }
  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, "F");
  }
  return hex;
}
function lighten(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] + amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function darken(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] - amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function getLuma(color) {
  const rgb = parseColor(color);
  return toXYZ(rgb)[1];
}
function getContrast(first, second) {
  const l1 = getLuma(first);
  const l2 = getLuma(second);
  const light = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (light + 0.05) / (dark + 0.05);
}
function getForeground(color) {
  const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
  const whiteContrast = Math.abs(APCAcontrast(parseColor(16777215), parseColor(color)));
  return whiteContrast > Math.min(blackContrast, 50) ? "#fff" : "#000";
}
function propsFactory(props, source) {
  return (defaults2) => {
    return Object.keys(props).reduce((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
      const definition = isObjectDefinition ? props[prop] : {
        type: props[prop]
      };
      if (defaults2 && prop in defaults2) {
        obj[prop] = {
          ...definition,
          default: defaults2[prop]
        };
      } else {
        obj[prop] = definition;
      }
      if (source && !obj[prop].source) {
        obj[prop].source = source;
      }
      return obj;
    }, {});
  };
}
const makeComponentProps = propsFactory({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
const DefaultsSymbol = Symbol.for("vuetify:defaults");
function createDefaults(options) {
  return ref(options);
}
function injectDefaults() {
  const defaults2 = inject$1(DefaultsSymbol);
  if (!defaults2)
    throw new Error("[Vuetify] Could not find defaults instance");
  return defaults2;
}
function provideDefaults(defaults2, options) {
  const injectedDefaults = injectDefaults();
  const providedDefaults = ref(defaults2);
  const newDefaults = computed(() => {
    const disabled = unref(options == null ? void 0 : options.disabled);
    if (disabled)
      return injectedDefaults.value;
    const scoped = unref(options == null ? void 0 : options.scoped);
    const reset = unref(options == null ? void 0 : options.reset);
    const root = unref(options == null ? void 0 : options.root);
    if (providedDefaults.value == null && !(scoped || reset || root))
      return injectedDefaults.value;
    let properties = mergeDeep(providedDefaults.value, {
      prev: injectedDefaults.value
    });
    if (scoped)
      return properties;
    if (reset || root) {
      const len = Number(reset || Infinity);
      for (let i2 = 0; i2 <= len; i2++) {
        if (!properties || !("prev" in properties)) {
          break;
        }
        properties = properties.prev;
      }
      if (properties && typeof root === "string" && root in properties) {
        properties = mergeDeep(mergeDeep(properties, {
          prev: properties
        }), properties[root]);
      }
      return properties;
    }
    return properties.prev ? mergeDeep(properties.prev, properties) : properties;
  });
  provide(DefaultsSymbol, newDefaults);
  return newDefaults;
}
function propIsDefined(vnode, prop) {
  var _a2, _b;
  return typeof ((_a2 = vnode.props) == null ? void 0 : _a2[prop]) !== "undefined" || typeof ((_b = vnode.props) == null ? void 0 : _b[toKebabCase(prop)]) !== "undefined";
}
function internalUseDefaults() {
  let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let name = arguments.length > 1 ? arguments[1] : void 0;
  let defaults2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : injectDefaults();
  const vm = getCurrentInstance("useDefaults");
  name = name ?? vm.type.name ?? vm.type.__name;
  if (!name) {
    throw new Error("[Vuetify] Could not determine component name");
  }
  const componentDefaults = computed(() => {
    var _a2;
    return (_a2 = defaults2.value) == null ? void 0 : _a2[props._as ?? name];
  });
  const _props = new Proxy(props, {
    get(target, prop) {
      var _a2, _b, _c, _d;
      const propValue = Reflect.get(target, prop);
      if (prop === "class" || prop === "style") {
        return [(_a2 = componentDefaults.value) == null ? void 0 : _a2[prop], propValue].filter((v2) => v2 != null);
      } else if (typeof prop === "string" && !propIsDefined(vm.vnode, prop)) {
        return ((_b = componentDefaults.value) == null ? void 0 : _b[prop]) ?? ((_d = (_c = defaults2.value) == null ? void 0 : _c.global) == null ? void 0 : _d[prop]) ?? propValue;
      }
      return propValue;
    }
  });
  const _subcomponentDefaults = shallowRef();
  watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter((_ref) => {
        let [key] = _ref;
        return key.startsWith(key[0].toUpperCase());
      });
      _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
    } else {
      _subcomponentDefaults.value = void 0;
    }
  });
  function provideSubDefaults() {
    const injected = injectSelf(DefaultsSymbol, vm);
    provide(DefaultsSymbol, computed(() => {
      return _subcomponentDefaults.value ? mergeDeep((injected == null ? void 0 : injected.value) ?? {}, _subcomponentDefaults.value) : injected == null ? void 0 : injected.value;
    }));
  }
  return {
    props: _props,
    provideSubDefaults
  };
}
function defineComponent(options) {
  options._setup = options._setup ?? options.setup;
  if (!options.name) {
    consoleWarn("The component is missing an explicit name, unable to generate default prop value");
    return options;
  }
  if (options._setup) {
    options.props = propsFactory(options.props ?? {}, options.name)();
    const propKeys = Object.keys(options.props).filter((key) => key !== "class" && key !== "style");
    options.filterProps = function filterProps(props) {
      return pick(props, propKeys);
    };
    options.props._as = String;
    options.setup = function setup(props, ctx) {
      const defaults2 = injectDefaults();
      if (!defaults2.value)
        return options._setup(props, ctx);
      const {
        props: _props,
        provideSubDefaults
      } = internalUseDefaults(props, props._as ?? options.name, defaults2);
      const setupBindings = options._setup(_props, ctx);
      provideSubDefaults();
      return setupBindings;
    };
  }
  return options;
}
function genericComponent() {
  let exposeDefaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (options) => (exposeDefaults ? defineComponent : defineComponent$1)(options);
}
function defineFunctionalComponent(props, render2) {
  render2.props = props;
  return render2;
}
function getCurrentInstance(name, message2) {
  const vm = getCurrentInstance$1();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${"must be called from inside a setup function"}`);
  }
  return vm;
}
function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const vm = getCurrentInstance(name).type;
  return toKebabCase((vm == null ? void 0 : vm.aliasName) || (vm == null ? void 0 : vm.name));
}
let _uid = 0;
let _map = /* @__PURE__ */ new WeakMap();
function getUid() {
  const vm = getCurrentInstance("getUid");
  if (_map.has(vm))
    return _map.get(vm);
  else {
    const uid = _uid++;
    _map.set(vm, uid);
    return uid;
  }
}
getUid.reset = () => {
  _uid = 0;
  _map = /* @__PURE__ */ new WeakMap();
};
function injectSelf(key) {
  let vm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance("injectSelf");
  const {
    provides
  } = vm;
  if (provides && key in provides) {
    return provides[key];
  }
  return void 0;
}
function useRender(render2) {
  const vm = getCurrentInstance("useRender");
  vm.render = render2;
}
function useProxiedModel(props, prop, defaultValue) {
  let transformIn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v2) => v2;
  let transformOut = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v2) => v2;
  const vm = getCurrentInstance("useProxiedModel");
  const internal = ref(props[prop] !== void 0 ? props[prop] : defaultValue);
  const kebabProp = toKebabCase(prop);
  const checkKebab = kebabProp !== prop;
  const isControlled = checkKebab ? computed(() => {
    var _a2, _b, _c, _d;
    void props[prop];
    return !!((((_a2 = vm.vnode.props) == null ? void 0 : _a2.hasOwnProperty(prop)) || ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(kebabProp))) && (((_c = vm.vnode.props) == null ? void 0 : _c.hasOwnProperty(`onUpdate:${prop}`)) || ((_d = vm.vnode.props) == null ? void 0 : _d.hasOwnProperty(`onUpdate:${kebabProp}`))));
  }) : computed(() => {
    var _a2, _b;
    void props[prop];
    return !!(((_a2 = vm.vnode.props) == null ? void 0 : _a2.hasOwnProperty(prop)) && ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(`onUpdate:${prop}`)));
  });
  useToggleScope(() => !isControlled.value, () => {
    watch(() => props[prop], (val) => {
      internal.value = val;
    });
  });
  const model = computed({
    get() {
      const externalValue = props[prop];
      return transformIn(isControlled.value ? externalValue : internal.value);
    },
    set(internalValue) {
      const newValue = transformOut(internalValue);
      const value = toRaw(isControlled.value ? props[prop] : internal.value);
      if (value === newValue || transformIn(value) === internalValue) {
        return;
      }
      internal.value = newValue;
      vm == null ? void 0 : vm.emit(`update:${prop}`, newValue);
    }
  });
  Object.defineProperty(model, "externalValue", {
    get: () => isControlled.value ? props[prop] : internal.value
  });
  return model;
}
const en = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
};
const LANG_PREFIX = "$vuetify.";
const replace = (str, params) => {
  return str.replace(/\{(\d+)\}/g, (match2, index2) => {
    return String(params[+index2]);
  });
};
const createTranslateFunction = (current, fallback, messages2) => {
  return function(key) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    if (!key.startsWith(LANG_PREFIX)) {
      return replace(key, params);
    }
    const shortKey = key.replace(LANG_PREFIX, "");
    const currentLocale = current.value && messages2.value[current.value];
    const fallbackLocale = fallback.value && messages2.value[fallback.value];
    let str = getObjectValueByPath(currentLocale, shortKey, null);
    if (!str) {
      consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
      str = getObjectValueByPath(fallbackLocale, shortKey, null);
    }
    if (!str) {
      consoleError(`Translation key "${key}" not found in fallback`);
      str = key;
    }
    if (typeof str !== "string") {
      consoleError(`Translation key "${key}" has a non-string value`);
      str = key;
    }
    return replace(str, params);
  };
};
function createNumberFunction(current, fallback) {
  return (value, options) => {
    const numberFormat = new Intl.NumberFormat([current.value, fallback.value], options);
    return numberFormat.format(value);
  };
}
function useProvided$1(props, prop, provided) {
  const internal = useProxiedModel(props, prop, props[prop] ?? provided.value);
  internal.value = props[prop] ?? provided.value;
  watch(provided, (v2) => {
    if (props[prop] == null) {
      internal.value = provided.value;
    }
  });
  return internal;
}
function createProvideFunction$1(state) {
  return (props) => {
    const current = useProvided$1(props, "locale", state.current);
    const fallback = useProvided$1(props, "fallback", state.fallback);
    const messages2 = useProvided$1(props, "messages", state.messages);
    return {
      name: "vuetify",
      current,
      fallback,
      messages: messages2,
      t: createTranslateFunction(current, fallback, messages2),
      n: createNumberFunction(current, fallback),
      provide: createProvideFunction$1({
        current,
        fallback,
        messages: messages2
      })
    };
  };
}
function createVuetifyAdapter(options) {
  const current = shallowRef((options == null ? void 0 : options.locale) ?? "en");
  const fallback = shallowRef((options == null ? void 0 : options.fallback) ?? "en");
  const messages2 = ref({
    en,
    ...options == null ? void 0 : options.messages
  });
  return {
    name: "vuetify",
    current,
    fallback,
    messages: messages2,
    t: createTranslateFunction(current, fallback, messages2),
    n: createNumberFunction(current, fallback),
    provide: createProvideFunction$1({
      current,
      fallback,
      messages: messages2
    })
  };
}
const LocaleSymbol = Symbol.for("vuetify:locale");
function isLocaleInstance(obj) {
  return obj.name != null;
}
function createLocale(options) {
  const i18n = (options == null ? void 0 : options.adapter) && isLocaleInstance(options == null ? void 0 : options.adapter) ? options == null ? void 0 : options.adapter : createVuetifyAdapter(options);
  const rtl = createRtl(i18n, options);
  return {
    ...i18n,
    ...rtl
  };
}
function useLocale() {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return locale;
}
function genDefaults$3() {
  return {
    af: false,
    ar: true,
    bg: false,
    ca: false,
    ckb: false,
    cs: false,
    de: false,
    el: false,
    en: false,
    es: false,
    et: false,
    fa: true,
    fi: false,
    fr: false,
    hr: false,
    hu: false,
    he: true,
    id: false,
    it: false,
    ja: false,
    km: false,
    ko: false,
    lv: false,
    lt: false,
    nl: false,
    no: false,
    pl: false,
    pt: false,
    ro: false,
    ru: false,
    sk: false,
    sl: false,
    srCyrl: false,
    srLatn: false,
    sv: false,
    th: false,
    tr: false,
    az: false,
    uk: false,
    vi: false,
    zhHans: false,
    zhHant: false
  };
}
function createRtl(i18n, options) {
  const rtl = ref((options == null ? void 0 : options.rtl) ?? genDefaults$3());
  const isRtl = computed(() => rtl.value[i18n.current.value] ?? false);
  return {
    isRtl,
    rtl,
    rtlClasses: computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
  };
}
function useRtl() {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}
const firstDay = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function getWeekArray(date2, locale) {
  const weeks = [];
  let currentWeek = [];
  const firstDayOfMonth = startOfMonth(date2);
  const lastDayOfMonth = endOfMonth(date2);
  const firstDayWeekIndex = (firstDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
  const lastDayWeekIndex = (lastDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
  for (let i2 = 0; i2 < firstDayWeekIndex; i2++) {
    const adjacentDay = new Date(firstDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i2));
    currentWeek.push(adjacentDay);
  }
  for (let i2 = 1; i2 <= lastDayOfMonth.getDate(); i2++) {
    const day = new Date(date2.getFullYear(), date2.getMonth(), i2);
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  for (let i2 = 1; i2 < 7 - lastDayWeekIndex; i2++) {
    const adjacentDay = new Date(lastDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() + i2);
    currentWeek.push(adjacentDay);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
}
function startOfWeek(date2) {
  const d2 = new Date(date2);
  while (d2.getDay() !== 0) {
    d2.setDate(d2.getDate() - 1);
  }
  return d2;
}
function endOfWeek(date2) {
  const d2 = new Date(date2);
  while (d2.getDay() !== 6) {
    d2.setDate(d2.getDate() + 1);
  }
  return d2;
}
function startOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), 1);
}
function endOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
}
function parseLocalDate(value) {
  const parts = value.split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
const _YYYMMDD = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function date$1(value) {
  if (value == null)
    return /* @__PURE__ */ new Date();
  if (value instanceof Date)
    return value;
  if (typeof value === "string") {
    let parsed;
    if (_YYYMMDD.test(value)) {
      return parseLocalDate(value);
    } else {
      parsed = Date.parse(value);
    }
    if (!isNaN(parsed))
      return new Date(parsed);
  }
  return null;
}
const sundayJanuarySecond2000 = new Date(2e3, 0, 2);
function getWeekdays(locale) {
  const daysFromSunday = firstDay[locale.slice(-2).toUpperCase()];
  return createRange(7).map((i2) => {
    const weekday = new Date(sundayJanuarySecond2000);
    weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i2);
    return new Intl.DateTimeFormat(locale, {
      weekday: "narrow"
    }).format(weekday);
  });
}
function format$1(value, formatString, locale, formats) {
  const newDate = date$1(value) ?? /* @__PURE__ */ new Date();
  const customFormat = formats == null ? void 0 : formats[formatString];
  if (typeof customFormat === "function") {
    return customFormat(newDate, formatString, locale);
  }
  let options = {};
  switch (formatString) {
    case "fullDateWithWeekday":
      options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      break;
    case "hours12h":
      options = {
        hour: "numeric",
        hour12: true
      };
      break;
    case "normalDateWithWeekday":
      options = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "keyboardDate":
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      options = {
        month: "long",
        day: "numeric"
      };
      break;
    case "monthAndYear":
      options = {
        month: "long",
        year: "numeric"
      };
      break;
    case "month":
      options = {
        month: "long"
      };
      break;
    case "monthShort":
      options = {
        month: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(locale).format(newDate.getDate());
    case "shortDate":
      options = {
        year: "2-digit",
        month: "numeric",
        day: "numeric"
      };
      break;
    case "weekdayShort":
      options = {
        weekday: "short"
      };
      break;
    case "year":
      options = {
        year: "numeric"
      };
      break;
    default:
      options = customFormat ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(locale, options).format(newDate);
}
function toISO(adapter, value) {
  const date2 = adapter.toJsDate(value);
  const year = date2.getFullYear();
  const month = padStart(String(date2.getMonth() + 1), 2, "0");
  const day = padStart(String(date2.getDate()), 2, "0");
  return `${year}-${month}-${day}`;
}
function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function addMinutes(date2, amount) {
  const d2 = new Date(date2);
  d2.setMinutes(d2.getMinutes() + amount);
  return d2;
}
function addHours(date2, amount) {
  const d2 = new Date(date2);
  d2.setHours(d2.getHours() + amount);
  return d2;
}
function addDays(date2, amount) {
  const d2 = new Date(date2);
  d2.setDate(d2.getDate() + amount);
  return d2;
}
function addWeeks(date2, amount) {
  const d2 = new Date(date2);
  d2.setDate(d2.getDate() + amount * 7);
  return d2;
}
function addMonths(date2, amount) {
  const d2 = new Date(date2);
  d2.setMonth(d2.getMonth() + amount);
  return d2;
}
function getYear(date2) {
  return date2.getFullYear();
}
function getMonth(date2) {
  return date2.getMonth();
}
function getDate(date2) {
  return date2.getDate();
}
function getNextMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 1);
}
function getHours(date2) {
  return date2.getHours();
}
function getMinutes(date2) {
  return date2.getMinutes();
}
function startOfYear(date2) {
  return new Date(date2.getFullYear(), 0, 1);
}
function endOfYear(date2) {
  return new Date(date2.getFullYear(), 11, 31);
}
function isWithinRange(date2, range) {
  return isAfter(date2, range[0]) && isBefore(date2, range[1]);
}
function isValid(date2) {
  const d2 = new Date(date2);
  return d2 instanceof Date && !isNaN(d2.getTime());
}
function isAfter(date2, comparing) {
  return date2.getTime() > comparing.getTime();
}
function isBefore(date2, comparing) {
  return date2.getTime() < comparing.getTime();
}
function isEqual(date2, comparing) {
  return date2.getTime() === comparing.getTime();
}
function isSameDay(date2, comparing) {
  return date2.getDate() === comparing.getDate() && date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function isSameMonth(date2, comparing) {
  return date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function getDiff(date2, comparing, unit) {
  const d2 = new Date(date2);
  const c2 = new Date(comparing);
  switch (unit) {
    case "years":
      return d2.getFullYear() - c2.getFullYear();
    case "quarters":
      return Math.floor((d2.getMonth() - c2.getMonth() + (d2.getFullYear() - c2.getFullYear()) * 12) / 4);
    case "months":
      return d2.getMonth() - c2.getMonth() + (d2.getFullYear() - c2.getFullYear()) * 12;
    case "weeks":
      return Math.floor((d2.getTime() - c2.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((d2.getTime() - c2.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((d2.getTime() - c2.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((d2.getTime() - c2.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((d2.getTime() - c2.getTime()) / 1e3);
    default: {
      return d2.getTime() - c2.getTime();
    }
  }
}
function setHours(date2, count) {
  const d2 = new Date(date2);
  d2.setHours(count);
  return d2;
}
function setMinutes(date2, count) {
  const d2 = new Date(date2);
  d2.setMinutes(count);
  return d2;
}
function setMonth(date2, count) {
  const d2 = new Date(date2);
  d2.setMonth(count);
  return d2;
}
function setDate(date2, day) {
  const d2 = new Date(date2);
  d2.setDate(day);
  return d2;
}
function setYear(date2, year) {
  const d2 = new Date(date2);
  d2.setFullYear(year);
  return d2;
}
function startOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0, 0);
}
function endOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 23, 59, 59, 999);
}
class VuetifyDateAdapter {
  constructor(options) {
    this.locale = options.locale;
    this.formats = options.formats;
  }
  date(value) {
    return date$1(value);
  }
  toJsDate(date2) {
    return date2;
  }
  toISO(date2) {
    return toISO(this, date2);
  }
  parseISO(date2) {
    return parseISO(date2);
  }
  addMinutes(date2, amount) {
    return addMinutes(date2, amount);
  }
  addHours(date2, amount) {
    return addHours(date2, amount);
  }
  addDays(date2, amount) {
    return addDays(date2, amount);
  }
  addWeeks(date2, amount) {
    return addWeeks(date2, amount);
  }
  addMonths(date2, amount) {
    return addMonths(date2, amount);
  }
  getWeekArray(date2) {
    return getWeekArray(date2, this.locale);
  }
  startOfWeek(date2) {
    return startOfWeek(date2);
  }
  endOfWeek(date2) {
    return endOfWeek(date2);
  }
  startOfMonth(date2) {
    return startOfMonth(date2);
  }
  endOfMonth(date2) {
    return endOfMonth(date2);
  }
  format(date2, formatString) {
    return format$1(date2, formatString, this.locale, this.formats);
  }
  isEqual(date2, comparing) {
    return isEqual(date2, comparing);
  }
  isValid(date2) {
    return isValid(date2);
  }
  isWithinRange(date2, range) {
    return isWithinRange(date2, range);
  }
  isAfter(date2, comparing) {
    return isAfter(date2, comparing);
  }
  isBefore(date2, comparing) {
    return !isAfter(date2, comparing) && !isEqual(date2, comparing);
  }
  isSameDay(date2, comparing) {
    return isSameDay(date2, comparing);
  }
  isSameMonth(date2, comparing) {
    return isSameMonth(date2, comparing);
  }
  setMinutes(date2, count) {
    return setMinutes(date2, count);
  }
  setHours(date2, count) {
    return setHours(date2, count);
  }
  setMonth(date2, count) {
    return setMonth(date2, count);
  }
  setDate(date2, day) {
    return setDate(date2, day);
  }
  setYear(date2, year) {
    return setYear(date2, year);
  }
  getDiff(date2, comparing, unit) {
    return getDiff(date2, comparing, unit);
  }
  getWeekdays() {
    return getWeekdays(this.locale);
  }
  getYear(date2) {
    return getYear(date2);
  }
  getMonth(date2) {
    return getMonth(date2);
  }
  getDate(date2) {
    return getDate(date2);
  }
  getNextMonth(date2) {
    return getNextMonth(date2);
  }
  getHours(date2) {
    return getHours(date2);
  }
  getMinutes(date2) {
    return getMinutes(date2);
  }
  startOfDay(date2) {
    return startOfDay(date2);
  }
  endOfDay(date2) {
    return endOfDay(date2);
  }
  startOfYear(date2) {
    return startOfYear(date2);
  }
  endOfYear(date2) {
    return endOfYear(date2);
  }
}
const DateOptionsSymbol = Symbol.for("vuetify:date-options");
const DateAdapterSymbol = Symbol.for("vuetify:date-adapter");
function createDate(options, locale) {
  const _options = mergeDeep({
    adapter: VuetifyDateAdapter,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, options);
  return {
    options: _options,
    instance: createInstance(_options, locale)
  };
}
function createInstance(options, locale) {
  const instance = reactive(typeof options.adapter === "function" ? new options.adapter({
    locale: options.locale[locale.current.value] ?? locale.current.value,
    formats: options.formats
  }) : options.adapter);
  watch(locale.current, (value) => {
    instance.locale = options.locale[value] ?? value ?? instance.locale;
  });
  return instance;
}
const breakpoints = ["sm", "md", "lg", "xl", "xxl"];
const DisplaySymbol = Symbol.for("vuetify:display");
const defaultDisplayOptions = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
};
const parseDisplayOptions = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDisplayOptions;
  return mergeDeep(defaultDisplayOptions, options);
};
function getClientWidth(ssr) {
  return IN_BROWSER && !ssr ? window.innerWidth : typeof ssr === "object" && ssr.clientWidth || 0;
}
function getClientHeight(ssr) {
  return IN_BROWSER && !ssr ? window.innerHeight : typeof ssr === "object" && ssr.clientHeight || 0;
}
function getPlatform(ssr) {
  const userAgent = IN_BROWSER && !ssr ? window.navigator.userAgent : "ssr";
  function match2(regexp) {
    return Boolean(userAgent.match(regexp));
  }
  const android = match2(/android/i);
  const ios = match2(/iphone|ipad|ipod/i);
  const cordova = match2(/cordova/i);
  const electron = match2(/electron/i);
  const chrome = match2(/chrome/i);
  const edge = match2(/edge/i);
  const firefox = match2(/firefox/i);
  const opera = match2(/opera/i);
  const win = match2(/win/i);
  const mac = match2(/mac/i);
  const linux = match2(/linux/i);
  return {
    android,
    ios,
    cordova,
    electron,
    chrome,
    edge,
    firefox,
    opera,
    win,
    mac,
    linux,
    touch: SUPPORTS_TOUCH,
    ssr: userAgent === "ssr"
  };
}
function createDisplay(options, ssr) {
  const {
    thresholds,
    mobileBreakpoint
  } = parseDisplayOptions(options);
  const height = shallowRef(getClientHeight(ssr));
  const platform = shallowRef(getPlatform(ssr));
  const state = reactive({});
  const width = shallowRef(getClientWidth(ssr));
  function updateSize() {
    height.value = getClientHeight();
    width.value = getClientWidth();
  }
  function update() {
    updateSize();
    platform.value = getPlatform();
  }
  watchEffect(() => {
    const xs = width.value < thresholds.sm;
    const sm = width.value < thresholds.md && !xs;
    const md = width.value < thresholds.lg && !(sm || xs);
    const lg = width.value < thresholds.xl && !(md || sm || xs);
    const xl = width.value < thresholds.xxl && !(lg || md || sm || xs);
    const xxl = width.value >= thresholds.xxl;
    const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
    const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
    const mobile = width.value < breakpointValue;
    state.xs = xs;
    state.sm = sm;
    state.md = md;
    state.lg = lg;
    state.xl = xl;
    state.xxl = xxl;
    state.smAndUp = !xs;
    state.mdAndUp = !(xs || sm);
    state.lgAndUp = !(xs || sm || md);
    state.xlAndUp = !(xs || sm || md || lg);
    state.smAndDown = !(md || lg || xl || xxl);
    state.mdAndDown = !(lg || xl || xxl);
    state.lgAndDown = !(xl || xxl);
    state.xlAndDown = !xxl;
    state.name = name;
    state.height = height.value;
    state.width = width.value;
    state.mobile = mobile;
    state.mobileBreakpoint = mobileBreakpoint;
    state.platform = platform.value;
    state.thresholds = thresholds;
  });
  if (IN_BROWSER) {
    window.addEventListener("resize", updateSize, {
      passive: true
    });
  }
  return {
    ...toRefs(state),
    update,
    ssr: !!ssr
  };
}
const makeDisplayProps = propsFactory({
  mobileBreakpoint: [Number, String]
}, "display");
function useDisplay() {
  let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const display = inject$1(DisplaySymbol);
  if (!display)
    throw new Error("Could not find Vuetify display injection");
  const mobile = computed(() => {
    if (!props.mobileBreakpoint)
      return display.mobile.value;
    const breakpointValue = typeof props.mobileBreakpoint === "number" ? props.mobileBreakpoint : display.thresholds.value[props.mobileBreakpoint];
    return display.width.value < breakpointValue;
  });
  const displayClasses = computed(() => {
    if (!name)
      return {};
    return {
      [`${name}--mobile`]: mobile.value
    };
  });
  return {
    ...display,
    displayClasses,
    mobile
  };
}
const GoToSymbol = Symbol.for("vuetify:goto");
function genDefaults$2() {
  return {
    container: void 0,
    duration: 300,
    layout: false,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (t4) => t4,
      easeInQuad: (t4) => t4 ** 2,
      easeOutQuad: (t4) => t4 * (2 - t4),
      easeInOutQuad: (t4) => t4 < 0.5 ? 2 * t4 ** 2 : -1 + (4 - 2 * t4) * t4,
      easeInCubic: (t4) => t4 ** 3,
      easeOutCubic: (t4) => --t4 ** 3 + 1,
      easeInOutCubic: (t4) => t4 < 0.5 ? 4 * t4 ** 3 : (t4 - 1) * (2 * t4 - 2) * (2 * t4 - 2) + 1,
      easeInQuart: (t4) => t4 ** 4,
      easeOutQuart: (t4) => 1 - --t4 ** 4,
      easeInOutQuart: (t4) => t4 < 0.5 ? 8 * t4 ** 4 : 1 - 8 * --t4 ** 4,
      easeInQuint: (t4) => t4 ** 5,
      easeOutQuint: (t4) => 1 + --t4 ** 5,
      easeInOutQuint: (t4) => t4 < 0.5 ? 16 * t4 ** 5 : 1 + 16 * --t4 ** 5
    }
  };
}
function createGoTo(options, locale) {
  return {
    rtl: locale.isRtl,
    options: mergeDeep(genDefaults$2(), options)
  };
}
const aliases$1 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
};
const mdi = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (props) => h$1(VClassIcon, {
    ...props,
    class: "mdi"
  })
};
const IconValue = [String, Function, Object, Array];
const IconSymbol = Symbol.for("vuetify:icons");
const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: true
  }
}, "icon");
const VComponentIcon = genericComponent()({
  name: "VComponentIcon",
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      const Icon = props.icon;
      return createVNode(props.tag, null, {
        default: () => {
          var _a2;
          return [props.icon ? createVNode(Icon, null, null) : (_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
        }
      });
    };
  }
});
const VSvgIcon = defineComponent({
  name: "VSvgIcon",
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return createVNode(props.tag, mergeProps(attrs, {
        "style": null
      }), {
        default: () => [createVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [Array.isArray(props.icon) ? props.icon.map((path) => Array.isArray(path) ? createVNode("path", {
          "d": path[0],
          "fill-opacity": path[1]
        }, null) : createVNode("path", {
          "d": path
        }, null)) : createVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
defineComponent({
  name: "VLigatureIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
const VClassIcon = defineComponent({
  name: "VClassIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, {
        "class": props.icon
      }, null);
    };
  }
});
function genDefaults$1() {
  return {
    svg: {
      component: VSvgIcon
    },
    class: {
      component: VClassIcon
    }
  };
}
function createIcons(options) {
  const sets = genDefaults$1();
  const defaultSet = (options == null ? void 0 : options.defaultSet) ?? "mdi";
  if (defaultSet === "mdi" && !sets.mdi) {
    sets.mdi = mdi;
  }
  return mergeDeep({
    defaultSet,
    sets,
    aliases: {
      ...aliases$1,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"
      /* eslint-enable max-len */
    }
  }, options);
}
const useIcon = (props) => {
  const icons2 = inject$1(IconSymbol);
  if (!icons2)
    throw new Error("Missing Vuetify Icons provide!");
  const iconData = computed(() => {
    var _a2;
    const iconAlias = unref(props);
    if (!iconAlias)
      return {
        component: VComponentIcon
      };
    let icon = iconAlias;
    if (typeof icon === "string") {
      icon = icon.trim();
      if (icon.startsWith("$")) {
        icon = (_a2 = icons2.aliases) == null ? void 0 : _a2[icon.slice(1)];
      }
    }
    if (!icon)
      throw new Error(`Could not find aliased icon "${iconAlias}"`);
    if (Array.isArray(icon)) {
      return {
        component: VSvgIcon,
        icon
      };
    } else if (typeof icon !== "string") {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons2.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons2.sets[iconSetName ?? icons2.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};
const ThemeSymbol = Symbol.for("vuetify:theme");
const makeThemeProps = propsFactory({
  theme: String
}, "theme");
function genDefaults() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function parseThemeOptions() {
  var _a2, _b;
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : genDefaults();
  const defaults2 = genDefaults();
  if (!options)
    return {
      ...defaults2,
      isDisabled: true
    };
  const themes2 = {};
  for (const [key, theme] of Object.entries(options.themes ?? {})) {
    const defaultTheme = theme.dark || key === "dark" ? (_a2 = defaults2.themes) == null ? void 0 : _a2.dark : (_b = defaults2.themes) == null ? void 0 : _b.light;
    themes2[key] = mergeDeep(defaultTheme, theme);
  }
  return mergeDeep(defaults2, {
    ...options,
    themes: themes2
  });
}
function createTheme(options) {
  const parsedOptions = parseThemeOptions(options);
  const name = ref(parsedOptions.defaultTheme);
  const themes2 = ref(parsedOptions.themes);
  const computedThemes = computed(() => {
    const acc = {};
    for (const [name2, original] of Object.entries(themes2.value)) {
      const theme = acc[name2] = {
        ...original,
        colors: {
          ...original.colors
        }
      };
      if (parsedOptions.variations) {
        for (const name3 of parsedOptions.variations.colors) {
          const color = theme.colors[name3];
          if (!color)
            continue;
          for (const variation of ["lighten", "darken"]) {
            const fn = variation === "lighten" ? lighten : darken;
            for (const amount of createRange(parsedOptions.variations[variation], 1)) {
              theme.colors[`${name3}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
            }
          }
        }
      }
      for (const color of Object.keys(theme.colors)) {
        if (/^on-[a-z]/.test(color) || theme.colors[`on-${color}`])
          continue;
        const onColor = `on-${color}`;
        const colorVal = parseColor(theme.colors[color]);
        theme.colors[onColor] = getForeground(colorVal);
      }
    }
    return acc;
  });
  const current = computed(() => computedThemes.value[name.value]);
  const styles = computed(() => {
    var _a2;
    const lines = [];
    if ((_a2 = current.value) == null ? void 0 : _a2.dark) {
      createCssClass(lines, ":root", ["color-scheme: dark"]);
    }
    createCssClass(lines, ":root", genCssVariables(current.value));
    for (const [themeName, theme] of Object.entries(computedThemes.value)) {
      createCssClass(lines, `.v-theme--${themeName}`, [`color-scheme: ${theme.dark ? "dark" : "normal"}`, ...genCssVariables(theme)]);
    }
    const bgLines = [];
    const fgLines = [];
    const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
    for (const key of colors) {
      if (/^on-[a-z]/.test(key)) {
        createCssClass(fgLines, `.${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
      } else {
        createCssClass(bgLines, `.bg-${key}`, [`--v-theme-overlay-multiplier: var(--v-theme-${key}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${key})) !important`, `color: rgb(var(--v-theme-on-${key})) !important`]);
        createCssClass(fgLines, `.text-${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
        createCssClass(fgLines, `.border-${key}`, [`--v-border-color: var(--v-theme-${key})`]);
      }
    }
    lines.push(...bgLines, ...fgLines);
    return lines.map((str, i2) => i2 === 0 ? str : `    ${str}`).join("");
  });
  function getHead() {
    return {
      style: [{
        children: styles.value,
        id: "vuetify-theme-stylesheet",
        nonce: parsedOptions.cspNonce || false
      }]
    };
  }
  function install(app) {
    if (parsedOptions.isDisabled)
      return;
    const head = app._context.provides.usehead;
    if (head) {
      if (head.push) {
        const entry = head.push(getHead);
        if (IN_BROWSER) {
          watch(styles, () => {
            entry.patch(getHead);
          });
        }
      } else {
        if (IN_BROWSER) {
          head.addHeadObjs(computed(getHead));
          watchEffect(() => head.updateDOM());
        } else {
          head.addHeadObjs(getHead());
        }
      }
    } else {
      let updateStyles = function() {
        if (typeof document !== "undefined" && !styleEl) {
          const el = document.createElement("style");
          el.type = "text/css";
          el.id = "vuetify-theme-stylesheet";
          if (parsedOptions.cspNonce)
            el.setAttribute("nonce", parsedOptions.cspNonce);
          styleEl = el;
          document.head.appendChild(styleEl);
        }
        if (styleEl)
          styleEl.innerHTML = styles.value;
      };
      let styleEl = IN_BROWSER ? document.getElementById("vuetify-theme-stylesheet") : null;
      if (IN_BROWSER) {
        watch(styles, updateStyles, {
          immediate: true
        });
      } else {
        updateStyles();
      }
    }
  }
  const themeClasses = computed(() => parsedOptions.isDisabled ? void 0 : `v-theme--${name.value}`);
  return {
    install,
    isDisabled: parsedOptions.isDisabled,
    name,
    themes: themes2,
    current,
    computedThemes,
    themeClasses,
    styles,
    global: {
      name,
      current
    }
  };
}
function provideTheme(props) {
  getCurrentInstance("provideTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme)
    throw new Error("Could not find Vuetify theme injection");
  const name = computed(() => {
    return props.theme ?? theme.name.value;
  });
  const current = computed(() => theme.themes.value[name.value]);
  const themeClasses = computed(() => theme.isDisabled ? void 0 : `v-theme--${name.value}`);
  const newTheme = {
    ...theme,
    name,
    current,
    themeClasses
  };
  provide(ThemeSymbol, newTheme);
  return newTheme;
}
function useTheme() {
  getCurrentInstance("useTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme)
    throw new Error("Could not find Vuetify theme injection");
  return theme;
}
function createCssClass(lines, selector, content) {
  lines.push(`${selector} {
`, ...content.map((line) => `  ${line};
`), "}\n");
}
function genCssVariables(theme) {
  const lightOverlay = theme.dark ? 2 : 1;
  const darkOverlay = theme.dark ? 1 : 2;
  const variables = [];
  for (const [key, value] of Object.entries(theme.colors)) {
    const rgb = parseColor(value);
    variables.push(`--v-theme-${key}: ${rgb.r},${rgb.g},${rgb.b}`);
    if (!key.startsWith("on-")) {
      variables.push(`--v-theme-${key}-overlay-multiplier: ${getLuma(value) > 0.18 ? lightOverlay : darkOverlay}`);
    }
  }
  for (const [key, value] of Object.entries(theme.variables)) {
    const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
    const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
    variables.push(`--v-${key}: ${rgb ?? value}`);
  }
  return variables;
}
function useResizeObserver(callback) {
  let box = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const resizeRef = ref();
  const contentRect = ref();
  if (IN_BROWSER) {
    const observer = new ResizeObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      if (!entries.length)
        return;
      if (box === "content") {
        contentRect.value = entries[0].contentRect;
      } else {
        contentRect.value = entries[0].target.getBoundingClientRect();
      }
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(resizeRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(refElement(oldValue));
        contentRect.value = void 0;
      }
      if (newValue)
        observer.observe(refElement(newValue));
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
function createVuetify() {
  let vuetify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint,
    ...rest
  } = vuetify;
  const options = mergeDeep(blueprint, rest);
  const {
    aliases: aliases2 = {},
    components = {},
    directives = {}
  } = options;
  const defaults2 = createDefaults(options.defaults);
  const display = createDisplay(options.display, options.ssr);
  const theme = createTheme(options.theme);
  const icons2 = createIcons(options.icons);
  const locale = createLocale(options.locale);
  const date2 = createDate(options.date, locale);
  const goTo = createGoTo(options.goTo, locale);
  const install = (app) => {
    for (const key in directives) {
      app.directive(key, directives[key]);
    }
    for (const key in components) {
      app.component(key, components[key]);
    }
    for (const key in aliases2) {
      app.component(key, defineComponent({
        ...aliases2[key],
        name: key,
        aliasName: aliases2[key].name
      }));
    }
    theme.install(app);
    app.provide(DefaultsSymbol, defaults2);
    app.provide(DisplaySymbol, display);
    app.provide(ThemeSymbol, theme);
    app.provide(IconSymbol, icons2);
    app.provide(LocaleSymbol, locale);
    app.provide(DateOptionsSymbol, date2.options);
    app.provide(DateAdapterSymbol, date2.instance);
    app.provide(GoToSymbol, goTo);
    if (IN_BROWSER && options.ssr) {
      if (app.$nuxt) {
        app.$nuxt.hook("app:suspense:resolve", () => {
          display.update();
        });
      } else {
        const {
          mount
        } = app;
        app.mount = function() {
          const vm = mount(...arguments);
          nextTick(() => display.update());
          app.mount = mount;
          return vm;
        };
      }
    }
    getUid.reset();
    {
      app.mixin({
        computed: {
          $vuetify() {
            return reactive({
              defaults: inject.call(this, DefaultsSymbol),
              display: inject.call(this, DisplaySymbol),
              theme: inject.call(this, ThemeSymbol),
              icons: inject.call(this, IconSymbol),
              locale: inject.call(this, LocaleSymbol),
              date: inject.call(this, DateAdapterSymbol)
            });
          }
        }
      });
    }
  };
  return {
    install,
    defaults: defaults2,
    display,
    theme,
    icons: icons2,
    locale,
    date: date2,
    goTo
  };
}
const version = "3.5.15";
createVuetify.version = version;
function inject(key) {
  var _a2, _b;
  const vm = this.$;
  const provides = ((_a2 = vm.parent) == null ? void 0 : _a2.provides) ?? ((_b = vm.vnode.appContext) == null ? void 0 : _b.provides);
  if (provides && key in provides) {
    return provides[key];
  }
}
const ContentWidth = {
  Fluid: "fluid",
  Boxed: "boxed"
};
const NavbarType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const FooterType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const AppContentLayoutNav = {
  Vertical: "vertical",
  Horizontal: "horizontal"
};
const HorizontalNavType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const injectionKeyIsVerticalNavHovered = Symbol("isVerticalNavHovered");
const layoutConfig$1 = {
  app: {
    title: "my-layout",
    logo: h$1("img", { src: "/src/assets/logo.svg" }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: 1279,
    // isRTL: false,
    i18n: {
      enable: true
    },
    iconRenderer: h$1("div")
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true
  },
  footer: {
    type: FooterType.Static
  },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: "ri-circle-line" }
  },
  horizontalNav: {
    type: HorizontalNavType.Sticky,
    transition: "none",
    popoverOffset: 0
  },
  icons: {
    chevronDown: { icon: "ri-arrow-down-line" },
    chevronRight: { icon: "ri-arrow-right-line" },
    close: { icon: "ri-close-line" },
    verticalNavPinned: { icon: "ri-record-circle-line" },
    verticalNavUnPinned: { icon: "ri-circle-line" },
    sectionTitlePlaceholder: { icon: "ri-subtract-line" }
  }
};
const openGroups = ref([]);
const getComputedNavLinkToProp = computed(() => (link) => {
  const props = {
    target: link.target,
    rel: link.rel
  };
  if (link.to)
    props.to = typeof link.to === "string" ? { name: link.to } : link.to;
  else
    props.href = link.href;
  return props;
});
const resolveNavLinkRouteName = (link, router2) => {
  if (!link.to)
    return null;
  if (typeof link.to === "string")
    return link.to;
  return router2.resolve(link.to).name;
};
const isNavLinkActive = (link, router2) => {
  const matchedRoutes = router2.currentRoute.value.matched;
  const resolveRoutedName = resolveNavLinkRouteName(link, router2);
  if (!resolveRoutedName)
    return false;
  return matchedRoutes.some((route) => {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};
const isNavGroupActive = (children, router2) => children.some((child) => {
  if ("children" in child)
    return isNavGroupActive(child.children, router2);
  return isNavLinkActive(child, router2);
});
const _setDirAttr = (dir) => {
  if (typeof document !== "undefined")
    document.documentElement.setAttribute("dir", dir);
};
const getDynamicI18nProps = (key, tag = "span") => {
  if (!layoutConfig$1.app.i18n.enable)
    return {};
  return {
    keypath: key,
    tag,
    scope: "global"
  };
};
const switchToVerticalNavOnLtOverlayNavBreakpoint = () => {
  const configStore = useLayoutConfigStore();
  const lgAndUpNav = ref(configStore.appContentLayoutNav);
  watch(() => configStore.appContentLayoutNav, (value) => {
    if (!configStore.isLessThanOverlayNavBreakpoint)
      lgAndUpNav.value = value;
  });
  watch(() => configStore.isLessThanOverlayNavBreakpoint, (val) => {
    configStore.appContentLayoutNav = val ? AppContentLayoutNav.Vertical : lgAndUpNav.value;
  }, { immediate: true });
};
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m2, r2, g2, b2) => {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}` : null;
};
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
        if (!colors.value.text && isParsableColor(colors.value.background)) {
          const backgroundColor = parseColor(colors.value.background);
          if (backgroundColor.a == null || backgroundColor.a === 1) {
            const textColor = getForeground(backgroundColor);
            styles.color = textColor;
            styles.caretColor = textColor;
          }
        }
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(props, name) {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}
const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
const makeVIconProps = propsFactory({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "VIcon");
const VIcon = genericComponent()({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(computed(() => slotIcon.value || props.icon));
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      var _a2, _b;
      const slotValue = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (slotValue) {
        slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
      }
      const hasClick = !!(attrs.onClick || attrs.onClickOnce);
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": hasClick,
          "v-icon--disabled": props.disabled,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }, props.class],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value, props.style],
        "role": hasClick ? "button" : void 0,
        "aria-hidden": !hasClick,
        "tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});
const defineThemeConfig = (userConfig) => {
  return {
    themeConfig: userConfig,
    layoutConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: userConfig.app.contentWidth,
        contentLayoutNav: userConfig.app.contentLayoutNav,
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        i18n: {
          enable: userConfig.app.i18n.enable
        },
        iconRenderer: userConfig.app.iconRenderer
      },
      navbar: {
        type: userConfig.navbar.type,
        navbarBlur: userConfig.navbar.navbarBlur
      },
      footer: { type: userConfig.footer.type },
      verticalNav: {
        isVerticalNavCollapsed: userConfig.verticalNav.isVerticalNavCollapsed,
        defaultNavItemIconProps: userConfig.verticalNav.defaultNavItemIconProps
      },
      horizontalNav: {
        type: userConfig.horizontalNav.type,
        transition: userConfig.horizontalNav.transition,
        popoverOffset: userConfig.horizontalNav.popoverOffset
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder
      }
    }
  };
};
const Skins = {
  Default: "default",
  Bordered: "bordered"
};
const Theme = {
  Light: "light",
  Dark: "dark",
  System: "system"
};
const Layout = {
  Vertical: "vertical",
  Horizontal: "horizontal",
  Collapsed: "collapsed"
};
const Direction = {
  Ltr: "ltr",
  Rtl: "rtl"
};
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-opacity": ".9",
  d: "M8.474 11.718a.913.913 0 0 0 0 1.292l3.597 3.597a1 1 0 1 1-1.414 1.414L5.83 13.194a1.174 1.174 0 0 1 0-1.66l4.827-4.827a1 1 0 1 1 1.414 1.414z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-opacity": ".4",
  d: "M14.358 11.834a.75.75 0 0 0 0 1.06l3.713 3.713a1 1 0 1 1-1.414 1.414l-4.975-4.975a.964.964 0 0 1 0-1.364l4.975-4.975a1 1 0 1 1 1.414 1.414z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$5,
  _hoisted_3$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._hoisted_4$2]);
}
const VerticalNavHeaderArrow = { render: render$5 };
const logo = '<svg xmlns="http://www.w3.org/2000/svg" width="39" height="22" viewBox="0 0 39 22" fill="none">\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(-0.865206 0.501417 0.498585 0.866841 27.425 0)" fill="currentColor"/>\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(-0.865206 0.501417 0.498585 0.866841 27.5004 0)" fill="url(#paint0_linear_1041_5978)" fill-opacity="0.4"/>\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(0.865206 0.501417 -0.498585 0.866841 24.6698 0)" fill="currentColor"/>\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(-0.865206 0.501417 0.498585 0.866841 13.3428 0)" fill="currentColor"/>\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(-0.865206 0.501417 0.498585 0.866841 13.3815 0)" fill="url(#paint1_linear_1041_5978)" fill-opacity="0.4"/>\n<rect width="7.37565" height="21.1131" rx="3.68783" transform="matrix(0.865206 0.501417 -0.498585 0.866841 10.5267 0)" fill="currentColor"/>\n<defs>\n<linearGradient id="paint0_linear_1041_5978" x1="3.68783" y1="0" x2="3.68783" y2="21.1131" gradientUnits="userSpaceOnUse">\n<stop/>\n<stop offset="1" stop-opacity="0"/>\n</linearGradient>\n<linearGradient id="paint1_linear_1041_5978" x1="3.68783" y1="0" x2="3.68783" y2="21.1131" gradientUnits="userSpaceOnUse">\n<stop/>\n<stop offset="1" stop-opacity="0"/>\n</linearGradient>\n</defs>\n</svg>\n';
const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: "materialize",
    // ❗ if you have SVG logo and want it to adapt according to theme color, you have to apply color as `color: rgb(var(--v-global-theme-primary))`
    logo: h$1("div", { innerHTML: logo, style: "line-height:0; color: rgb(var(--v-global-theme-primary))" }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetifyV3.lg - 1,
    // 1 for matching with vuetify breakpoint. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
    i18n: {
      enable: true,
      defaultLocale: "en",
      langConfig: [
        {
          label: "English",
          i18nLang: "en",
          isRTL: false
        },
        {
          label: "French",
          i18nLang: "fr",
          isRTL: false
        },
        {
          label: "Arabic",
          i18nLang: "ar",
          isRTL: true
        }
      ]
    },
    theme: "system",
    skin: Skins.Default,
    iconRenderer: VIcon
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: "ri-circle-fill" },
    isVerticalNavSemiDark: false
  },
  horizontalNav: {
    type: "sticky",
    transition: "slide-y-reverse-transition",
    popoverOffset: 4
  },
  /*
    // ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
    // Such as: chevronDown: { icon: 'ri-arrow-down-s-line', color:'primary', size: '24' },
    */
  icons: {
    chevronDown: { icon: "ri-arrow-down-s-line" },
    chevronRight: { icon: "ri-arrow-right-s-line" },
    close: { icon: "ri-close-line" },
    verticalNavPinned: { icon: h$1(VerticalNavHeaderArrow) },
    verticalNavUnPinned: { icon: h$1(VerticalNavHeaderArrow) },
    sectionTitlePlaceholder: { icon: "ri-subtract-line" }
  }
});
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
const useCookie = (name, _opts) => {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts || {} };
  const cookies = parse(document.cookie, opts);
  const cookie = ref(cookies[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  watch(cookie, () => {
    document.cookie = serializeCookie(name, cookie.value, opts);
  });
  return cookie;
};
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0)
    return serialize(name, value, { ...opts, maxAge: -1 });
  return serialize(name, value, opts);
}
const namespaceConfig = (str) => `${layoutConfig.app.title}-${str}`;
const cookieRef = (key, defaultValue) => {
  return useCookie(namespaceConfig(key), { default: () => defaultValue });
};
const useLayoutConfigStore = defineStore("layoutConfig", () => {
  const route = useRoute$1();
  const navbarType = ref(layoutConfig.navbar.type);
  const isNavbarBlurEnabled = cookieRef("isNavbarBlurEnabled", layoutConfig.navbar.navbarBlur);
  const isVerticalNavCollapsed = cookieRef("isVerticalNavCollapsed", layoutConfig.verticalNav.isVerticalNavCollapsed);
  const appContentWidth = cookieRef("appContentWidth", layoutConfig.app.contentWidth);
  const appContentLayoutNav = ref(layoutConfig.app.contentLayoutNav);
  watch(appContentLayoutNav, (val) => {
    if (val === AppContentLayoutNav.Horizontal) {
      if (navbarType.value === NavbarType.Hidden)
        navbarType.value = NavbarType.Sticky;
      isVerticalNavCollapsed.value = false;
    }
  });
  const horizontalNavType = ref(layoutConfig.horizontalNav.type);
  const horizontalNavPopoverOffset = ref(layoutConfig.horizontalNav.popoverOffset);
  const footerType = ref(layoutConfig.footer.type);
  const isLessThanOverlayNavBreakpoint = computed(() => useMediaQuery(`(max-width: ${layoutConfig.app.overlayNavFromBreakpoint}px)`).value);
  const _layoutClasses = computed(() => {
    const { y: windowScrollY } = useWindowScroll();
    return [
      `layout-nav-type-${appContentLayoutNav.value}`,
      `layout-navbar-${navbarType.value}`,
      `layout-footer-${footerType.value}`,
      {
        "layout-vertical-nav-collapsed": isVerticalNavCollapsed.value && appContentLayoutNav.value === "vertical" && !isLessThanOverlayNavBreakpoint.value
      },
      { [`horizontal-nav-${horizontalNavType.value}`]: appContentLayoutNav.value === "horizontal" },
      `layout-content-width-${appContentWidth.value}`,
      { "layout-overlay-nav": isLessThanOverlayNavBreakpoint.value },
      { "window-scrolled": unref(windowScrollY) },
      route.meta.layoutWrapperClasses ? route.meta.layoutWrapperClasses : null
    ];
  });
  const isAppRTL = ref(false);
  watch(isAppRTL, (val) => {
    _setDirAttr(val ? "rtl" : "ltr");
  });
  const isVerticalNavMini = (isVerticalNavHovered = null) => {
    const isVerticalNavHoveredLocal = isVerticalNavHovered || inject$1(injectionKeyIsVerticalNavHovered) || ref(false);
    return computed(() => isVerticalNavCollapsed.value && !isVerticalNavHoveredLocal.value && !isLessThanOverlayNavBreakpoint.value);
  };
  return {
    appContentWidth,
    appContentLayoutNav,
    navbarType,
    isNavbarBlurEnabled,
    isVerticalNavCollapsed,
    horizontalNavType,
    horizontalNavPopoverOffset,
    footerType,
    isLessThanOverlayNavBreakpoint,
    isAppRTL,
    _layoutClasses,
    isVerticalNavMini
  };
});
const useConfigStore = defineStore("config", () => {
  const userPreferredColorScheme = usePreferredColorScheme();
  const cookieColorScheme = cookieRef("color-scheme", "light");
  watch(userPreferredColorScheme, (val) => {
    if (val !== "no-preference")
      cookieColorScheme.value = val;
  }, { immediate: true });
  const theme = cookieRef("theme", themeConfig.app.theme);
  const isVerticalNavSemiDark = cookieRef("isVerticalNavSemiDark", themeConfig.verticalNav.isVerticalNavSemiDark);
  const skin = cookieRef("skin", themeConfig.app.skin);
  const { isLessThanOverlayNavBreakpoint, appContentWidth, navbarType, isNavbarBlurEnabled, appContentLayoutNav, isVerticalNavCollapsed, footerType, isAppRTL } = storeToRefs(useLayoutConfigStore());
  return {
    theme,
    isVerticalNavSemiDark,
    skin,
    // @layouts exports
    isLessThanOverlayNavBreakpoint,
    appContentWidth,
    navbarType,
    isNavbarBlurEnabled,
    appContentLayoutNav,
    isVerticalNavCollapsed,
    footerType,
    isAppRTL
  };
});
const makeVThemeProviderProps = propsFactory({
  withBackground: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps(),
  ...makeTagProps()
}, "VThemeProvider");
const VThemeProvider = genericComponent()({
  name: "VThemeProvider",
  props: makeVThemeProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    return () => {
      var _a2;
      if (!props.withBackground)
        return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      return createVNode(props.tag, {
        "class": ["v-theme-provider", themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => {
          var _a3;
          return [(_a3 = slots.default) == null ? void 0 : _a3.call(slots)];
        }
      });
    };
  }
});
const useSkins = () => {
  const configStore = useConfigStore();
  const layoutAttrs = computed(() => ({
    verticalNavAttrs: {
      wrapper: h$1(VThemeProvider, { tag: "aside" }),
      wrapperProps: {
        withBackground: true,
        theme: configStore.isVerticalNavSemiDark && configStore.appContentLayoutNav === AppContentLayoutNav.Vertical ? "dark" : void 0
      }
    }
  }));
  const injectSkinClasses = () => {
    if (typeof document !== "undefined") {
      const bodyClasses = document.body.classList;
      const genSkinClass = (_skin) => `skin--${_skin}`;
      watch(() => configStore.skin, (val, oldVal) => {
        bodyClasses.remove(genSkinClass(oldVal));
        bodyClasses.add(genSkinClass(val));
      }, { immediate: true });
    }
  };
  return {
    injectSkinClasses,
    layoutAttrs
  };
};
const _sfc_main$b = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const DefaultLayoutWithHorizontalNav = defineAsyncComponent(() => import("./assets/DefaultLayoutWithHorizontalNav-Bpa-XwtD.js"));
    const DefaultLayoutWithVerticalNav = defineAsyncComponent(() => import("./assets/DefaultLayoutWithVerticalNav-77fMOhmk.js"));
    const configStore = useConfigStore();
    switchToVerticalNavOnLtOverlayNavBreakpoint();
    const { layoutAttrs, injectSkinClasses } = useSkins();
    injectSkinClasses();
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? unref(DefaultLayoutWithVerticalNav) : unref(DefaultLayoutWithHorizontalNav)), mergeProps(unref(layoutAttrs), _attrs), null), _parent);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const layouts$1 = {
  "blank": () => import("./assets/blank-DUYMuXLD.js"),
  "default": _sfc_main$b,
  "components/DefaultLayoutWithHorizontalNav": () => import("./assets/DefaultLayoutWithHorizontalNav-Bpa-XwtD.js"),
  "components/DefaultLayoutWithVerticalNav": () => import("./assets/DefaultLayoutWithVerticalNav-77fMOhmk.js"),
  "components/Footer": () => import("./assets/Footer-Bm0PFmJf.js"),
  "components/NavBarNotifications": () => import("./assets/NavBarNotifications-DVoLnBud.js"),
  "components/NavbarShortcuts": () => import("./assets/NavbarShortcuts-BtBww4vs.js"),
  "components/NavbarThemeSwitcher": () => import("./assets/NavbarThemeSwitcher-CmYbn-Kr.js"),
  "components/NavSearchBar": () => import("./assets/NavSearchBar-ksXpPAA6.js"),
  "components/UserProfile": () => import("./assets/UserProfile-BlVHQIKW.js")
};
function setupLayouts(routes2) {
  function deepSetupLayout(routes3, top = true) {
    return routes3.map((route) => {
      var _a2, _b, _c, _d, _e, _f;
      if (((_a2 = route.children) == null ? void 0 : _a2.length) > 0) {
        route.children = deepSetupLayout(route.children, false);
      }
      if (top) {
        const skipLayout = !route.component && ((_b = route.children) == null ? void 0 : _b.find((r2) => {
          var _a3;
          return (r2.path === "" || r2.path === "/") && ((_a3 = r2.meta) == null ? void 0 : _a3.isLayout);
        }));
        if (skipLayout) {
          return route;
        }
        if (((_c = route.meta) == null ? void 0 : _c.layout) !== false) {
          return {
            path: route.path,
            component: layouts$1[((_d = route.meta) == null ? void 0 : _d.layout) || "default"],
            children: route.path === "/" ? [route] : [{ ...route, path: "" }],
            meta: {
              isLayout: true
            }
          };
        }
      }
      if ((_e = route.meta) == null ? void 0 : _e.layout) {
        return {
          path: route.path,
          component: layouts$1[(_f = route.meta) == null ? void 0 : _f.layout],
          children: [{ ...route, path: "" }],
          meta: {
            isLayout: true
          }
        };
      }
      return route;
    });
  }
  return deepSetupLayout(routes2);
}
const emailRouteComponent = () => import("./assets/index-3xvjJWz0.js");
const redirects = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: "/",
    name: "index",
    redirect: (to) => {
      var _a2;
      const userData = useCookie("userData");
      const userRole = (_a2 = userData.value) == null ? void 0 : _a2.role;
      if (userRole === "admin")
        return { name: "dashboards-crm" };
      if (userRole === "client")
        return { name: "access-control" };
      return { name: "login", query: to.query };
    }
  },
  {
    path: "/pages/user-profile",
    name: "pages-user-profile",
    redirect: () => ({ name: "pages-user-profile-tab", params: { tab: "profile" } })
  },
  {
    path: "/pages/account-settings",
    name: "pages-account-settings",
    redirect: () => ({ name: "pages-account-settings-tab", params: { tab: "account" } })
  }
];
const routes = [
  // Email filter
  {
    path: "/apps/email/filter/:filter",
    name: "apps-email-filter",
    component: emailRouteComponent,
    meta: {
      navActiveLink: "apps-email",
      layoutWrapperClasses: "layout-content-height-fixed"
    }
  },
  // Email label
  {
    path: "/apps/email/label/:label",
    name: "apps-email-label",
    component: emailRouteComponent,
    meta: {
      // contentClass: 'email-application',
      navActiveLink: "apps-email",
      layoutWrapperClasses: "layout-content-height-fixed"
    }
  },
  {
    path: "/dashboards/logistics",
    name: "dashboards-logistics",
    component: () => import("./assets/dashboard-BxmfJPc5.js")
  },
  {
    path: "/dashboards/academy",
    name: "dashboards-academy",
    component: () => import("./assets/dashboard-BQmfxZD7.js")
  },
  {
    path: "/apps/ecommerce/dashboard",
    name: "apps-ecommerce-dashboard",
    component: () => import("./assets/ecommerce-BeZ__1q5.js")
  }
];
const can = (action, subject) => {
  var _a2;
  const vm = getCurrentInstance$1();
  if (!vm)
    return false;
  const localCan = vm.proxy && "$can" in vm.proxy;
  return localCan ? (_a2 = vm.proxy) == null ? void 0 : _a2.$can(action, subject) : true;
};
const canViewNavMenuGroup = (item) => {
  const hasAnyVisibleChild = item.children.some((i2) => can(i2.action, i2.subject));
  if (!(item.action && item.subject))
    return hasAnyVisibleChild;
  return can(item.action, item.subject) && hasAnyVisibleChild;
};
const canNavigate = (to) => {
  const ability = useAbility();
  return to.matched.some((route) => ability.can(route.meta.action, route.meta.subject));
};
const setupGuards = (router2) => {
  router2.beforeEach((to) => {
    if (to.meta.public)
      return;
    const isLoggedIn = !!(useCookie("userData").value && useCookie("accessToken").value);
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return "/";
      else
        return void 0;
    }
    if (!canNavigate(to) && to.matched.length) {
      return isLoggedIn ? { name: "not-authorized" } : {
        name: "login",
        query: {
          ...to.query,
          to: to.fullPath !== "/" ? to.path : void 0
        }
      };
    }
  });
};
function recursiveLayouts(route) {
  if (route.children) {
    for (let i2 = 0; i2 < route.children.length; i2++)
      route.children[i2] = recursiveLayouts(route.children[i2]);
    return route;
  }
  return setupLayouts([route])[0];
}
const router = createRouter({
  history: createWebHistory("/build/"),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: "smooth", top: 60 };
    return { top: 0 };
  },
  extendRoutes: (pages) => [
    ...redirects,
    ...[
      ...pages,
      ...routes
    ].map((route) => recursiveLayouts(route))
  ]
});
setupGuards(router);
function index$5(app) {
  app.use(router);
}
const __vite_glob_0_0$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$5,
  router
}, Symbol.toStringTag, { value: "Module" }));
const store = createPinia();
function _2_pinia(app) {
  app.use(store);
}
const __vite_glob_0_1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _2_pinia,
  store
}, Symbol.toStringTag, { value: "Module" }));
function index$4(app) {
  const userAbilityRules = useCookie("userAbilityRules");
  const initialAbility = createMongoAbility(userAbilityRules.value ?? []);
  app.use(abilitiesPlugin, initialAbility, {
    useGlobalProperties: true
  });
}
const __vite_glob_0_2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_PREFIX = "[MSW]";
function formatMessage(message2, ...positionals) {
  const interpolatedMessage = format$2(message2, ...positionals);
  return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
}
function warn$1(message2, ...positionals) {
  console.warn(formatMessage(message2, ...positionals));
}
function error$1(message2, ...positionals) {
  console.error(formatMessage(message2, ...positionals));
}
const devUtils = {
  formatMessage,
  warn: warn$1,
  error: error$1
};
class InternalError extends Error {
  constructor(message2) {
    super(message2);
    this.name = "InternalError";
  }
}
const SOURCE_FRAME = /[\/\\]msw[\/\\]src[\/\\](.+)/;
const BUILD_FRAME = /(node_modules)?[\/\\]lib[\/\\](core|browser|node|native|iife)[\/\\]|^[^\/\\]*$/;
function getCallFrame(error2) {
  const stack = error2.stack;
  if (!stack) {
    return;
  }
  const frames = stack.split("\n").slice(1);
  const declarationFrame = frames.find((frame) => {
    return !(SOURCE_FRAME.test(frame) || BUILD_FRAME.test(frame));
  });
  if (!declarationFrame) {
    return;
  }
  const declarationPath = declarationFrame.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "");
  return declarationPath;
}
function isIterable(fn) {
  if (!fn) {
    return false;
  }
  return typeof fn[Symbol.iterator] == "function";
}
const _RequestHandler = class _RequestHandler {
  constructor(args) {
    __publicField(this, "info");
    /**
     * Indicates whether this request handler has been used
     * (its resolver has successfully executed).
     */
    __publicField(this, "isUsed");
    __publicField(this, "resolver");
    __publicField(this, "resolverGenerator");
    __publicField(this, "resolverGeneratorResult");
    __publicField(this, "options");
    this.resolver = args.resolver;
    this.options = args.options;
    const callFrame = getCallFrame(new Error());
    this.info = {
      ...args.info,
      callFrame
    };
    this.isUsed = false;
  }
  /**
   * Parse the intercepted request to extract additional information from it.
   * Parsed result is then exposed to other methods of this request handler.
   */
  async parse(_args) {
    return {};
  }
  /**
   * Test if this handler matches the given request.
   *
   * This method is not used internally but is exposed
   * as a convenience method for consumers writing custom
   * handlers.
   */
  async test(args) {
    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext
    });
    return this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext
    });
  }
  extendResolverArgs(_args) {
    return {};
  }
  // Clone the request instance before it's passed to the handler phases
  // and the response resolver so we can always read it for logging.
  // We only clone it once per request to avoid unnecessary overhead.
  cloneRequestOrGetFromCache(request) {
    const existingClone = _RequestHandler.cache.get(request);
    if (typeof existingClone !== "undefined") {
      return existingClone;
    }
    const clonedRequest = request.clone();
    _RequestHandler.cache.set(request, clonedRequest);
    return clonedRequest;
  }
  /**
   * Execute this request handler and produce a mocked response
   * using the given resolver function.
   */
  async run(args) {
    var _a2, _b;
    if (this.isUsed && ((_a2 = this.options) == null ? void 0 : _a2.once)) {
      return null;
    }
    const requestClone = this.cloneRequestOrGetFromCache(args.request);
    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext
    });
    const shouldInterceptRequest = this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext
    });
    if (!shouldInterceptRequest) {
      return null;
    }
    if (this.isUsed && ((_b = this.options) == null ? void 0 : _b.once)) {
      return null;
    }
    this.isUsed = true;
    const executeResolver = this.wrapResolver(this.resolver);
    const resolverExtras = this.extendResolverArgs({
      request: args.request,
      parsedResult
    });
    const mockedResponsePromise = executeResolver({
      ...resolverExtras,
      requestId: args.requestId,
      request: args.request
    }).catch((errorOrResponse) => {
      if (errorOrResponse instanceof Response) {
        return errorOrResponse;
      }
      throw errorOrResponse;
    });
    const mockedResponse = await mockedResponsePromise;
    const executionResult = this.createExecutionResult({
      // Pass the cloned request to the result so that logging
      // and other consumers could read its body once more.
      request: requestClone,
      requestId: args.requestId,
      response: mockedResponse,
      parsedResult
    });
    return executionResult;
  }
  wrapResolver(resolver) {
    return async (info) => {
      const result = this.resolverGenerator || await resolver(info);
      if (isIterable(result)) {
        this.isUsed = false;
        const { value, done } = result[Symbol.iterator]().next();
        const nextResponse = await value;
        if (done) {
          this.isUsed = true;
        }
        if (!nextResponse && done) {
          invariant$1(
            this.resolverGeneratorResult,
            "Failed to returned a previously stored generator response: the value is not a valid Response."
          );
          return this.resolverGeneratorResult.clone();
        }
        if (!this.resolverGenerator) {
          this.resolverGenerator = result;
        }
        if (nextResponse) {
          this.resolverGeneratorResult = nextResponse == null ? void 0 : nextResponse.clone();
        }
        return nextResponse;
      }
      return result;
    };
  }
  createExecutionResult(args) {
    return {
      handler: this,
      request: args.request,
      requestId: args.requestId,
      response: args.response,
      parsedResult: args.parsedResult
    };
  }
};
__publicField(_RequestHandler, "cache", /* @__PURE__ */ new WeakMap());
let RequestHandler = _RequestHandler;
const executeHandlers = async ({
  request,
  requestId,
  handlers,
  resolutionContext
}) => {
  let matchingHandler = null;
  let result = null;
  for (const handler of handlers) {
    result = await handler.run({ request, requestId, resolutionContext });
    if (result !== null) {
      matchingHandler = handler;
    }
    if (result == null ? void 0 : result.response) {
      break;
    }
  }
  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result == null ? void 0 : result.parsedResult,
      response: result == null ? void 0 : result.response
    };
  }
  return null;
};
function toPublicUrl(url) {
  if (typeof location === "undefined") {
    return url.toString();
  }
  const urlInstance = url instanceof URL ? url : new URL(url);
  return urlInstance.origin === location.origin ? urlInstance.pathname : urlInstance.origin + urlInstance.pathname;
}
async function onUnhandledRequest(request, strategy = "warn") {
  const url = new URL(request.url);
  const publicUrl = toPublicUrl(url) + url.search;
  const unhandledRequestMessage = `intercepted a request without a matching request handler:

  • ${request.method} ${publicUrl}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
  function applyStrategy(strategy2) {
    switch (strategy2) {
      case "error": {
        devUtils.error("Error: %s", unhandledRequestMessage);
        throw new InternalError(
          devUtils.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      }
      case "warn": {
        devUtils.warn("Warning: %s", unhandledRequestMessage);
        break;
      }
      case "bypass":
        break;
      default:
        throw new InternalError(
          devUtils.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            strategy2
          )
        );
    }
  }
  if (typeof strategy === "function") {
    strategy(request, {
      warning: applyStrategy.bind(null, "warn"),
      error: applyStrategy.bind(null, "error")
    });
    return;
  }
  if (url.protocol === "file:") {
    return;
  }
  applyStrategy(strategy);
}
function readResponseCookies(request, response) {
  store$1.add({ ...request, url: request.url.toString() }, response);
  store$1.persist();
}
async function handleRequest(request, requestId, handlers, options, emitter, handleRequestOptions) {
  var _a2, _b, _c, _d, _e, _f;
  emitter.emit("request:start", { request, requestId });
  if (request.headers.get("x-msw-intention") === "bypass") {
    emitter.emit("request:end", { request, requestId });
    (_a2 = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _a2.call(handleRequestOptions, request);
    return;
  }
  const lookupResult = await until$1(() => {
    return executeHandlers({
      request,
      requestId,
      handlers,
      resolutionContext: handleRequestOptions == null ? void 0 : handleRequestOptions.resolutionContext
    });
  });
  if (lookupResult.error) {
    emitter.emit("unhandledException", {
      error: lookupResult.error,
      request,
      requestId
    });
    throw lookupResult.error;
  }
  if (!lookupResult.data) {
    await onUnhandledRequest(request, options.onUnhandledRequest);
    emitter.emit("request:unhandled", { request, requestId });
    emitter.emit("request:end", { request, requestId });
    (_b = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _b.call(handleRequestOptions, request);
    return;
  }
  const { response } = lookupResult.data;
  if (!response) {
    emitter.emit("request:end", { request, requestId });
    (_c = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _c.call(handleRequestOptions, request);
    return;
  }
  if (response.status === 302 && response.headers.get("x-msw-intention") === "passthrough") {
    emitter.emit("request:end", { request, requestId });
    (_d = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _d.call(handleRequestOptions, request);
    return;
  }
  readResponseCookies(request, response);
  emitter.emit("request:match", { request, requestId });
  const requiredLookupResult = lookupResult.data;
  const transformedResponse = ((_e = handleRequestOptions == null ? void 0 : handleRequestOptions.transformResponse) == null ? void 0 : _e.call(handleRequestOptions, response)) || response;
  (_f = handleRequestOptions == null ? void 0 : handleRequestOptions.onMockedResponse) == null ? void 0 : _f.call(
    handleRequestOptions,
    transformedResponse,
    requiredLookupResult
  );
  emitter.emit("request:end", { request, requestId });
  return transformedResponse;
}
function toResponseInit(response) {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  };
}
function isObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
function mergeRight(left, right) {
  return Object.entries(right).reduce(
    (result, [key, rightValue]) => {
      const leftValue = result[key];
      if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
        result[key] = leftValue.concat(rightValue);
        return result;
      }
      if (isObject(leftValue) && isObject(rightValue)) {
        result[key] = mergeRight(leftValue, rightValue);
        return result;
      }
      result[key] = rightValue;
      return result;
    },
    Object.assign({}, left)
  );
}
function pipeEvents(source, destination) {
  const rawEmit = source.emit;
  if (rawEmit._isPiped) {
    return;
  }
  const sourceEmit = function sourceEmit2(event, ...data) {
    destination.emit(event, ...data);
    return rawEmit.call(this, event, ...data);
  };
  sourceEmit._isPiped = true;
  source.emit = sourceEmit;
}
function toReadonlyArray(source) {
  const clone = [...source];
  Object.freeze(clone);
  return clone;
}
class Disposable {
  constructor() {
    __publicField(this, "subscriptions", []);
  }
  dispose() {
    let subscription;
    while (subscription = this.subscriptions.shift()) {
      subscription();
    }
  }
}
class InMemoryHandlersController {
  constructor(initialHandlers) {
    __publicField(this, "handlers");
    this.initialHandlers = initialHandlers;
    this.handlers = [...initialHandlers];
  }
  prepend(runtimeHandles) {
    this.handlers.unshift(...runtimeHandles);
  }
  reset(nextHandlers) {
    this.handlers = nextHandlers.length > 0 ? [...nextHandlers] : [...this.initialHandlers];
  }
  currentHandlers() {
    return this.handlers;
  }
}
class SetupApi extends Disposable {
  constructor(...initialHandlers) {
    super();
    __publicField(this, "handlersController");
    __publicField(this, "emitter");
    __publicField(this, "publicEmitter");
    __publicField(this, "events");
    invariant$1(
      this.validateHandlers(initialHandlers),
      devUtils.formatMessage(
        `Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?`
      )
    );
    this.handlersController = new InMemoryHandlersController(initialHandlers);
    this.emitter = new Emitter$1();
    this.publicEmitter = new Emitter$1();
    pipeEvents(this.emitter, this.publicEmitter);
    this.events = this.createLifeCycleEvents();
    this.subscriptions.push(() => {
      this.emitter.removeAllListeners();
      this.publicEmitter.removeAllListeners();
    });
  }
  validateHandlers(handlers) {
    return handlers.every((handler) => !Array.isArray(handler));
  }
  use(...runtimeHandlers) {
    invariant$1(
      this.validateHandlers(runtimeHandlers),
      devUtils.formatMessage(
        `Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?`
      )
    );
    this.handlersController.prepend(runtimeHandlers);
  }
  restoreHandlers() {
    this.handlersController.currentHandlers().forEach((handler) => {
      handler.isUsed = false;
    });
  }
  resetHandlers(...nextHandlers) {
    this.handlersController.reset(nextHandlers);
  }
  listHandlers() {
    return toReadonlyArray(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...args) => {
        return this.publicEmitter.on(...args);
      },
      removeListener: (...args) => {
        return this.publicEmitter.removeListener(...args);
      },
      removeAllListeners: (...args) => {
        return this.publicEmitter.removeAllListeners(...args);
      }
    };
  }
}
var define_process_env_default = {};
var POSITIONALS_EXP = /(%?)(%([sdijo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message2, ...positionals) {
  if (positionals.length === 0) {
    return message2;
  }
  let positionalIndex = 0;
  let formattedMessage = message2.replace(
    POSITIONALS_EXP,
    (match2, isEscaped, _, flag) => {
      const positional = positionals[positionalIndex];
      const value = serializePositional(positional, flag);
      if (!isEscaped) {
        positionalIndex++;
        return value;
      }
      return match2;
    }
  );
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error2) {
  if (!error2.stack) {
    return;
  }
  const nextStack = error2.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error2.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message2, ...positionals) {
    super(message2);
    this.message = message2;
    this.name = "Invariant Violation";
    this.message = format(message2, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant = (predicate, message2, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message2, ...positionals);
  }
};
invariant.as = (ErrorConstructor, predicate, message2, ...positionals) => {
  if (!predicate) {
    const formatMessage2 = positionals.length === 0 ? message2 : format(message2, positionals);
    let error2;
    try {
      error2 = Reflect.construct(ErrorConstructor, [formatMessage2]);
    } catch (err) {
      error2 = ErrorConstructor(formatMessage2);
    }
    throw error2;
  }
};
function isNodeProcess() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}
var until = async (promise) => {
  try {
    const data = await promise().catch((error2) => {
      throw error2;
    });
    return { error: null, data };
  } catch (error2) {
    return { error: error2, data: null };
  }
};
function getAbsoluteWorkerUrl(workerUrl) {
  return new URL(workerUrl, location.href).href;
}
function getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker) {
  const allStates = [
    registration.active,
    registration.installing,
    registration.waiting
  ];
  const relevantStates = allStates.filter((state) => {
    return state != null;
  });
  const worker2 = relevantStates.find((worker22) => {
    return findWorker(worker22.scriptURL, absoluteWorkerUrl);
  });
  return worker2 || null;
}
var getWorkerInstance = async (url, options = {}, findWorker) => {
  const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
  const mockRegistrations = await navigator.serviceWorker.getRegistrations().then(
    (registrations) => registrations.filter(
      (registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)
    )
  );
  if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
    location.reload();
  }
  const [existingRegistration] = mockRegistrations;
  if (existingRegistration) {
    return existingRegistration.update().then(() => {
      return [
        getWorkerByRegistration(
          existingRegistration,
          absoluteWorkerUrl,
          findWorker
        ),
        existingRegistration
      ];
    });
  }
  const registrationResult = await until(
    async () => {
      const registration = await navigator.serviceWorker.register(url, options);
      return [
        // Compare existing worker registration by its worker URL,
        // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
        getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
        registration
      ];
    }
  );
  if (registrationResult.error) {
    const isWorkerMissing = registrationResult.error.message.includes("(404)");
    if (isWorkerMissing) {
      const scopeUrl = new URL((options == null ? void 0 : options.scope) || "/", location.href);
      throw new Error(
        devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      devUtils.formatMessage(
        "Failed to register the Service Worker:\n\n%s",
        registrationResult.error.message
      )
    );
  }
  return registrationResult.data;
};
function printStartMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  const message2 = args.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${devUtils.formatMessage(message2)}`,
    "color:orangered;font-weight:bold;"
  );
  console.log(
    "%cDocumentation: %chttps://mswjs.io/docs",
    "font-weight:bold",
    "font-weight:normal"
  );
  console.log("Found an issue? https://github.com/mswjs/msw/issues");
  if (args.workerUrl) {
    console.log("Worker script URL:", args.workerUrl);
  }
  if (args.workerScope) {
    console.log("Worker scope:", args.workerScope);
  }
  console.groupEnd();
}
async function enableMocking(context, options) {
  var _a2, _b;
  context.workerChannel.send("MOCK_ACTIVATE");
  await context.events.once("MOCKING_ENABLED");
  if (context.isMockingEnabled) {
    devUtils.warn(
      `Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.`
    );
    return;
  }
  context.isMockingEnabled = true;
  printStartMessage({
    quiet: options.quiet,
    workerScope: (_a2 = context.registration) == null ? void 0 : _a2.scope,
    workerUrl: (_b = context.worker) == null ? void 0 : _b.scriptURL
  });
}
var WorkerChannel = class {
  constructor(port) {
    this.port = port;
  }
  postMessage(event, ...rest) {
    const [data, transfer] = rest;
    this.port.postMessage({ type: event, data }, { transfer });
  }
};
function pruneGetRequestBody(request) {
  if (["HEAD", "GET"].includes(request.method)) {
    return void 0;
  }
  return request.body;
}
function parseWorkerRequest(incomingRequest) {
  return new Request(incomingRequest.url, {
    ...incomingRequest,
    body: pruneGetRequestBody(incomingRequest)
  });
}
var createRequestListener = (context, options) => {
  return async (event, message2) => {
    const messageChannel = new WorkerChannel(event.ports[0]);
    const requestId = message2.payload.id;
    const request = parseWorkerRequest(message2.payload);
    const requestCloneForLogs = request.clone();
    const requestClone = request.clone();
    RequestHandler.cache.set(request, requestClone);
    context.requests.set(requestId, requestClone);
    try {
      await handleRequest(
        request,
        requestId,
        context.getRequestHandlers(),
        options,
        context.emitter,
        {
          onPassthroughResponse() {
            messageChannel.postMessage("PASSTHROUGH");
          },
          async onMockedResponse(response, { handler, parsedResult }) {
            const responseClone = response.clone();
            const responseCloneForLogs = response.clone();
            const responseInit = toResponseInit(response);
            if (context.supports.readableStreamTransfer) {
              const responseStreamOrNull = response.body;
              messageChannel.postMessage(
                "MOCK_RESPONSE",
                {
                  ...responseInit,
                  body: responseStreamOrNull
                },
                responseStreamOrNull ? [responseStreamOrNull] : void 0
              );
            } else {
              const responseBufferOrNull = response.body === null ? null : await responseClone.arrayBuffer();
              messageChannel.postMessage("MOCK_RESPONSE", {
                ...responseInit,
                body: responseBufferOrNull
              });
            }
            if (!options.quiet) {
              context.emitter.once("response:mocked", () => {
                handler.log({
                  request: requestCloneForLogs,
                  response: responseCloneForLogs,
                  parsedResult
                });
              });
            }
          }
        }
      );
    } catch (error2) {
      if (error2 instanceof Error) {
        devUtils.error(
          `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
          request.method,
          request.url,
          error2.stack ?? error2
        );
        messageChannel.postMessage("MOCK_RESPONSE", {
          status: 500,
          statusText: "Request Handler Error",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: error2.name,
            message: error2.message,
            stack: error2.stack
          })
        });
      }
    }
  };
};
async function checkWorkerIntegrity(context) {
  context.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload } = await context.events.once("INTEGRITY_CHECK_RESPONSE");
  if (payload.checksum !== "26357c79639bfa20d64c0efca2a87423") {
    devUtils.warn(
      `The currently registered Service Worker has been generated by a different version of MSW (${payload.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`
    );
  }
}
var encoder = new TextEncoder();
function encodeBuffer(text) {
  return encoder.encode(text);
}
function decodeBuffer(buffer, encoding) {
  const decoder = new TextDecoder(encoding);
  return decoder.decode(buffer);
}
function toArrayBuffer(array) {
  return array.buffer.slice(
    array.byteOffset,
    array.byteOffset + array.byteLength
  );
}
var IS_PATCHED_MODULE = Symbol("isPatchedModule");
function isPropertyAccessible(obj, key) {
  try {
    obj[key];
    return true;
  } catch (e2) {
    return false;
  }
}
var RESPONSE_STATUS_CODES_WITHOUT_BODY = /* @__PURE__ */ new Set([
  101,
  103,
  204,
  205,
  304
]);
function isResponseWithoutBody(status) {
  return RESPONSE_STATUS_CODES_WITHOUT_BODY.has(status);
}
function createServerErrorResponse(body) {
  return new Response(
    JSON.stringify(
      body instanceof Error ? {
        name: body.name,
        message: body.message,
        stack: body.stack
      } : body
    ),
    {
      status: 500,
      statusText: "Unhandled Exception",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
function isResponseError(response) {
  return isPropertyAccessible(response, "type") && response.type === "error";
}
var __defProp2 = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var colors_exports = {};
__export(colors_exports, {
  blue: () => blue,
  gray: () => gray,
  green: () => green,
  red: () => red,
  yellow: () => yellow
});
function yellow(text) {
  return `\x1B[33m${text}\x1B[0m`;
}
function blue(text) {
  return `\x1B[34m${text}\x1B[0m`;
}
function gray(text) {
  return `\x1B[90m${text}\x1B[0m`;
}
function red(text) {
  return `\x1B[31m${text}\x1B[0m`;
}
function green(text) {
  return `\x1B[32m${text}\x1B[0m`;
}
var IS_NODE = isNodeProcess();
var Logger = class {
  constructor(name) {
    __publicField(this, "prefix");
    this.name = name;
    this.prefix = `[${this.name}]`;
    const LOGGER_NAME = getVariable("DEBUG");
    const LOGGER_LEVEL = getVariable("LOG_LEVEL");
    const isLoggingEnabled = LOGGER_NAME === "1" || LOGGER_NAME === "true" || typeof LOGGER_NAME !== "undefined" && this.name.startsWith(LOGGER_NAME);
    if (isLoggingEnabled) {
      this.debug = isDefinedAndNotEquals(LOGGER_LEVEL, "debug") ? noop : this.debug;
      this.info = isDefinedAndNotEquals(LOGGER_LEVEL, "info") ? noop : this.info;
      this.success = isDefinedAndNotEquals(LOGGER_LEVEL, "success") ? noop : this.success;
      this.warning = isDefinedAndNotEquals(LOGGER_LEVEL, "warning") ? noop : this.warning;
      this.error = isDefinedAndNotEquals(LOGGER_LEVEL, "error") ? noop : this.error;
    } else {
      this.info = noop;
      this.success = noop;
      this.warning = noop;
      this.error = noop;
      this.only = noop;
    }
  }
  extend(domain) {
    return new Logger(`${this.name}:${domain}`);
  }
  /**
   * Print a debug message.
   * @example
   * logger.debug('no duplicates found, creating a document...')
   */
  debug(message2, ...positionals) {
    this.logEntry({
      level: "debug",
      message: gray(message2),
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "gray"
      }
    });
  }
  /**
   * Print an info message.
   * @example
   * logger.info('start parsing...')
   */
  info(message2, ...positionals) {
    this.logEntry({
      level: "info",
      message: message2,
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "blue"
      }
    });
    const performance2 = new PerformanceEntry();
    return (message22, ...positionals2) => {
      performance2.measure();
      this.logEntry({
        level: "info",
        message: `${message22} ${gray(`${performance2.deltaTime}ms`)}`,
        positionals: positionals2,
        prefix: this.prefix,
        colors: {
          prefix: "blue"
        }
      });
    };
  }
  /**
   * Print a success message.
   * @example
   * logger.success('successfully created document')
   */
  success(message2, ...positionals) {
    this.logEntry({
      level: "info",
      message: message2,
      positionals,
      prefix: `✔ ${this.prefix}`,
      colors: {
        timestamp: "green",
        prefix: "green"
      }
    });
  }
  /**
   * Print a warning.
   * @example
   * logger.warning('found legacy document format')
   */
  warning(message2, ...positionals) {
    this.logEntry({
      level: "warning",
      message: message2,
      positionals,
      prefix: `⚠ ${this.prefix}`,
      colors: {
        timestamp: "yellow",
        prefix: "yellow"
      }
    });
  }
  /**
   * Print an error message.
   * @example
   * logger.error('something went wrong')
   */
  error(message2, ...positionals) {
    this.logEntry({
      level: "error",
      message: message2,
      positionals,
      prefix: `✖ ${this.prefix}`,
      colors: {
        timestamp: "red",
        prefix: "red"
      }
    });
  }
  /**
   * Execute the given callback only when the logging is enabled.
   * This is skipped in its entirety and has no runtime cost otherwise.
   * This executes regardless of the log level.
   * @example
   * logger.only(() => {
   *   logger.info('additional info')
   * })
   */
  only(callback) {
    callback();
  }
  createEntry(level, message2) {
    return {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message: message2
    };
  }
  logEntry(args) {
    const {
      level,
      message: message2,
      prefix,
      colors: customColors,
      positionals = []
    } = args;
    const entry = this.createEntry(level, message2);
    const timestampColor = (customColors == null ? void 0 : customColors.timestamp) || "gray";
    const prefixColor = (customColors == null ? void 0 : customColors.prefix) || "gray";
    const colorize = {
      timestamp: colors_exports[timestampColor],
      prefix: colors_exports[prefixColor]
    };
    const write = this.getWriter(level);
    write(
      [colorize.timestamp(this.formatTimestamp(entry.timestamp))].concat(prefix != null ? colorize.prefix(prefix) : []).concat(serializeInput(message2)).join(" "),
      ...positionals.map(serializeInput)
    );
  }
  formatTimestamp(timestamp) {
    return `${timestamp.toLocaleTimeString(
      "en-GB"
    )}:${timestamp.getMilliseconds()}`;
  }
  getWriter(level) {
    switch (level) {
      case "debug":
      case "success":
      case "info": {
        return log;
      }
      case "warning": {
        return warn;
      }
      case "error": {
        return error;
      }
    }
  }
};
var PerformanceEntry = class {
  constructor() {
    __publicField(this, "startTime");
    __publicField(this, "endTime");
    __publicField(this, "deltaTime");
    this.startTime = performance.now();
  }
  measure() {
    this.endTime = performance.now();
    const deltaTime = this.endTime - this.startTime;
    this.deltaTime = deltaTime.toFixed(2);
  }
};
var noop = () => void 0;
function log(message2, ...positionals) {
  if (IS_NODE) {
    process.stdout.write(format(message2, ...positionals) + "\n");
    return;
  }
  console.log(message2, ...positionals);
}
function warn(message2, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message2, ...positionals) + "\n");
    return;
  }
  console.warn(message2, ...positionals);
}
function error(message2, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message2, ...positionals) + "\n");
    return;
  }
  console.error(message2, ...positionals);
}
function getVariable(variableName) {
  var _a2;
  if (IS_NODE) {
    return define_process_env_default[variableName];
  }
  return (_a2 = globalThis[variableName]) == null ? void 0 : _a2.toString();
}
function isDefinedAndNotEquals(value, expected) {
  return value !== void 0 && value !== expected;
}
function serializeInput(message2) {
  if (typeof message2 === "undefined") {
    return "undefined";
  }
  if (message2 === null) {
    return "null";
  }
  if (typeof message2 === "string") {
    return message2;
  }
  if (typeof message2 === "object") {
    return JSON.stringify(message2);
  }
  return message2.toString();
}
var MemoryLeakError = class extends Error {
  constructor(emitter, type, count) {
    super(
      `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    this.emitter = emitter;
    this.type = type;
    this.count = count;
    this.name = "MaxListenersExceededWarning";
  }
};
var _Emitter = class {
  static listenerCount(emitter, eventName2) {
    return emitter.listenerCount(eventName2);
  }
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.maxListeners = _Emitter.defaultMaxListeners;
    this.hasWarnedAboutPotentialMemoryLeak = false;
  }
  _emitInternalEvent(internalEventName, eventName2, listener) {
    this.emit(
      internalEventName,
      ...[eventName2, listener]
    );
  }
  _getListeners(eventName2) {
    return Array.prototype.concat.apply([], this.events.get(eventName2)) || [];
  }
  _removeListener(listeners, listener) {
    const index2 = listeners.indexOf(listener);
    if (index2 > -1) {
      listeners.splice(index2, 1);
    }
    return [];
  }
  _wrapOnceListener(eventName2, listener) {
    const onceListener = (...data) => {
      this.removeListener(eventName2, onceListener);
      return listener.apply(this, data);
    };
    Object.defineProperty(onceListener, "name", { value: listener.name });
    return onceListener;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(eventName2, ...data) {
    const listeners = this._getListeners(eventName2);
    listeners.forEach((listener) => {
      listener.apply(this, data);
    });
    return listeners.length > 0;
  }
  addListener(eventName2, listener) {
    this._emitInternalEvent("newListener", eventName2, listener);
    const nextListeners = this._getListeners(eventName2).concat(listener);
    this.events.set(eventName2, nextListeners);
    if (this.maxListeners > 0 && this.listenerCount(eventName2) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = true;
      const memoryLeakWarning = new MemoryLeakError(
        this,
        eventName2,
        this.listenerCount(eventName2)
      );
      console.warn(memoryLeakWarning);
    }
    return this;
  }
  on(eventName2, listener) {
    return this.addListener(eventName2, listener);
  }
  once(eventName2, listener) {
    return this.addListener(
      eventName2,
      this._wrapOnceListener(eventName2, listener)
    );
  }
  prependListener(eventName2, listener) {
    const listeners = this._getListeners(eventName2);
    if (listeners.length > 0) {
      const nextListeners = [listener].concat(listeners);
      this.events.set(eventName2, nextListeners);
    } else {
      this.events.set(eventName2, listeners.concat(listener));
    }
    return this;
  }
  prependOnceListener(eventName2, listener) {
    return this.prependListener(
      eventName2,
      this._wrapOnceListener(eventName2, listener)
    );
  }
  removeListener(eventName2, listener) {
    const listeners = this._getListeners(eventName2);
    if (listeners.length > 0) {
      this._removeListener(listeners, listener);
      this.events.set(eventName2, listeners);
      this._emitInternalEvent("removeListener", eventName2, listener);
    }
    return this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(eventName2, listener) {
    return this.removeListener(eventName2, listener);
  }
  removeAllListeners(eventName2) {
    if (eventName2) {
      this.events.delete(eventName2);
    } else {
      this.events.clear();
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(eventName2) {
    return Array.from(this._getListeners(eventName2));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(eventName2) {
    return this._getListeners(eventName2).length;
  }
  rawListeners(eventName2) {
    return this.listeners(eventName2);
  }
};
var Emitter = _Emitter;
Emitter.defaultMaxListeners = 10;
var INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
function getGlobalSymbol(symbol) {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || void 0
  );
}
function setGlobalSymbol(symbol, value) {
  globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
  delete globalThis[symbol];
}
var Interceptor = class {
  constructor(symbol) {
    this.symbol = symbol;
    this.readyState = "INACTIVE";
    this.emitter = new Emitter();
    this.subscriptions = [];
    this.logger = new Logger(symbol.description);
    this.emitter.setMaxListeners(0);
    this.logger.info("constructing the interceptor...");
  }
  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  checkEnvironment() {
    return true;
  }
  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  apply() {
    const logger = this.logger.extend("apply");
    logger.info("applying the interceptor...");
    if (this.readyState === "APPLIED") {
      logger.info("intercepted already applied!");
      return;
    }
    const shouldApply = this.checkEnvironment();
    if (!shouldApply) {
      logger.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const runningInstance = this.getInstance();
    if (runningInstance) {
      logger.info("found a running instance, reusing...");
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event);
        runningInstance.emitter.addListener(event, listener);
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener);
          logger.info('removed proxied "%s" listener!', event);
        });
        return this;
      };
      this.readyState = "APPLIED";
      return;
    }
    logger.info("no running instance found, setting up a new instance...");
    this.setup();
    this.setInstance();
    this.readyState = "APPLIED";
  }
  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  setup() {
  }
  /**
   * Listen to the interceptor's public events.
   */
  on(event, listener) {
    const logger = this.logger.extend("on");
    if (this.readyState === "DISPOSING" || this.readyState === "DISPOSED") {
      logger.info("cannot listen to events, already disposed!");
      return this;
    }
    logger.info('adding "%s" event listener:', event, listener);
    this.emitter.on(event, listener);
    return this;
  }
  once(event, listener) {
    this.emitter.once(event, listener);
    return this;
  }
  off(event, listener) {
    this.emitter.off(event, listener);
    return this;
  }
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  dispose() {
    const logger = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      logger.info("cannot dispose, already disposed!");
      return;
    }
    logger.info("disposing the interceptor...");
    this.readyState = "DISPOSING";
    if (!this.getInstance()) {
      logger.info("no interceptors running, skipping dispose...");
      return;
    }
    this.clearInstance();
    logger.info("global symbol deleted:", getGlobalSymbol(this.symbol));
    if (this.subscriptions.length > 0) {
      logger.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const dispose of this.subscriptions) {
        dispose();
      }
      this.subscriptions = [];
      logger.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners();
    logger.info("destroyed the listener!");
    this.readyState = "DISPOSED";
  }
  getInstance() {
    var _a2;
    const instance = getGlobalSymbol(this.symbol);
    this.logger.info("retrieved global instance:", (_a2 = instance == null ? void 0 : instance.constructor) == null ? void 0 : _a2.name);
    return instance;
  }
  setInstance() {
    setGlobalSymbol(this.symbol, this);
    this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    deleteGlobalSymbol(this.symbol);
    this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function createRequestId() {
  return Math.random().toString(16).slice(2);
}
var BatchInterceptor = class extends Interceptor {
  constructor(options) {
    BatchInterceptor.symbol = Symbol(options.name);
    super(BatchInterceptor.symbol);
    this.interceptors = options.interceptors;
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info("applying all %d interceptors...", this.interceptors.length);
    for (const interceptor of this.interceptors) {
      logger.info('applying "%s" interceptor...', interceptor.constructor.name);
      interceptor.apply();
      logger.info("adding interceptor dispose subscription");
      this.subscriptions.push(() => interceptor.dispose());
    }
  }
  on(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.on(event, listener);
    }
    return this;
  }
  once(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.once(event, listener);
    }
    return this;
  }
  off(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.off(event, listener);
    }
    return this;
  }
  removeAllListeners(event) {
    for (const interceptors of this.interceptors) {
      interceptors.removeAllListeners(event);
    }
    return this;
  }
};
function createResponseListener(context) {
  return (_, message2) => {
    var _a2;
    const { payload: responseJson } = message2;
    const { requestId } = responseJson;
    const request = context.requests.get(requestId);
    context.requests.delete(requestId);
    if ((_a2 = responseJson.type) == null ? void 0 : _a2.includes("opaque")) {
      return;
    }
    const response = responseJson.status === 0 ? Response.error() : new Response(
      /**
       * Responses may be streams here, but when we create a response object
       * with null-body status codes, like 204, 205, 304 Response will
       * throw when passed a non-null body, so ensure it's null here
       * for those codes
       */
      isResponseWithoutBody(responseJson.status) ? null : responseJson.body,
      responseJson
    );
    if (!response.url) {
      Object.defineProperty(response, "url", {
        value: request.url,
        enumerable: true,
        writable: false
      });
    }
    context.emitter.emit(
      responseJson.isMockedResponse ? "response:mocked" : "response:bypass",
      {
        response,
        request,
        requestId: responseJson.requestId
      }
    );
  };
}
function validateWorkerScope(registration, options) {
  if (!(options == null ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
    devUtils.warn(
      `Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
    );
  }
}
var createStartHandler = (context) => {
  return function start(options, customOptions) {
    const startWorkerInstance = async () => {
      context.events.removeAllListeners();
      context.workerChannel.on(
        "REQUEST",
        createRequestListener(context, options)
      );
      context.workerChannel.on("RESPONSE", createResponseListener(context));
      const instance = await getWorkerInstance(
        options.serviceWorker.url,
        options.serviceWorker.options,
        options.findWorker
      );
      const [worker2, registration] = instance;
      if (!worker2) {
        const missingWorkerMessage = (customOptions == null ? void 0 : customOptions.findWorker) ? devUtils.formatMessage(
          `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
          options.serviceWorker.url
        ) : devUtils.formatMessage(
          `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
          options.serviceWorker.url,
          location.host
        );
        throw new Error(missingWorkerMessage);
      }
      context.worker = worker2;
      context.registration = registration;
      context.events.addListener(window, "beforeunload", () => {
        if (worker2.state !== "redundant") {
          context.workerChannel.send("CLIENT_CLOSED");
        }
        window.clearInterval(context.keepAliveInterval);
      });
      await checkWorkerIntegrity(context).catch((error2) => {
        devUtils.error(
          "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
        );
        console.error(error2);
      });
      context.keepAliveInterval = window.setInterval(
        () => context.workerChannel.send("KEEPALIVE_REQUEST"),
        5e3
      );
      validateWorkerScope(registration, context.startOptions);
      return registration;
    };
    const workerRegistration = startWorkerInstance().then(
      async (registration) => {
        const pendingInstance = registration.installing || registration.waiting;
        if (pendingInstance) {
          await new Promise((resolve) => {
            pendingInstance.addEventListener("statechange", () => {
              if (pendingInstance.state === "activated") {
                return resolve();
              }
            });
          });
        }
        await enableMocking(context, options).catch((error2) => {
          throw new Error(`Failed to enable mocking: ${error2 == null ? void 0 : error2.message}`);
        });
        return registration;
      }
    );
    return workerRegistration;
  };
};
function printStopMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  console.log(
    `%c${devUtils.formatMessage("Mocking disabled.")}`,
    "color:orangered;font-weight:bold;"
  );
}
var createStop = (context) => {
  return function stop() {
    var _a2;
    if (!context.isMockingEnabled) {
      devUtils.warn(
        'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
      );
      return;
    }
    context.workerChannel.send("MOCK_DEACTIVATE");
    context.isMockingEnabled = false;
    window.clearInterval(context.keepAliveInterval);
    printStopMessage({ quiet: (_a2 = context.startOptions) == null ? void 0 : _a2.quiet });
  };
};
var DEFAULT_START_OPTIONS = {
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: null
  },
  quiet: false,
  waitUntilReady: true,
  onUnhandledRequest: "warn",
  findWorker(scriptURL, mockServiceWorkerUrl) {
    return scriptURL === mockServiceWorkerUrl;
  }
};
function createDeferredExecutor() {
  const executor = (resolve, reject) => {
    executor.state = "pending";
    executor.resolve = (data) => {
      if (executor.state !== "pending") {
        return;
      }
      executor.result = data;
      const onFulfilled = (value) => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(
        data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled)
      );
    };
    executor.reject = (reason) => {
      if (executor.state !== "pending") {
        return;
      }
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject(executor.rejectionReason = reason);
    };
  };
  return executor;
}
var DeferredPromise = (_a = class extends Promise {
  constructor(executor = null) {
    const deferredExecutor = createDeferredExecutor();
    super((originalResolve, originalReject) => {
      deferredExecutor(originalResolve, originalReject);
      executor == null ? void 0 : executor(deferredExecutor.resolve, deferredExecutor.reject);
    });
    __privateAdd(this, _decorate);
    __privateAdd(this, _executor, void 0);
    __publicField(this, "resolve");
    __publicField(this, "reject");
    __privateSet(this, _executor, deferredExecutor);
    this.resolve = __privateGet(this, _executor).resolve;
    this.reject = __privateGet(this, _executor).reject;
  }
  get state() {
    return __privateGet(this, _executor).state;
  }
  get rejectionReason() {
    return __privateGet(this, _executor).rejectionReason;
  }
  then(onFulfilled, onRejected) {
    return __privateMethod(this, _decorate, decorate_fn).call(this, super.then(onFulfilled, onRejected));
  }
  catch(onRejected) {
    return __privateMethod(this, _decorate, decorate_fn).call(this, super.catch(onRejected));
  }
  finally(onfinally) {
    return __privateMethod(this, _decorate, decorate_fn).call(this, super.finally(onfinally));
  }
}, _executor = new WeakMap(), _decorate = new WeakSet(), decorate_fn = function(promise) {
  return Object.defineProperties(promise, {
    resolve: { configurable: true, value: this.resolve },
    reject: { configurable: true, value: this.reject }
  });
}, _a);
var RequestController = class {
  constructor(request) {
    this.request = request;
    this.responsePromise = new DeferredPromise();
  }
  respondWith(response) {
    invariant(
      this.responsePromise.state === "pending",
      'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
      this.request.method,
      this.request.url
    );
    this.responsePromise.resolve(response);
  }
};
function toInteractiveRequest(request) {
  const requestController = new RequestController(request);
  Reflect.set(
    request,
    "respondWith",
    requestController.respondWith.bind(requestController)
  );
  return {
    interactiveRequest: request,
    requestController
  };
}
async function emitAsync(emitter, eventName2, ...data) {
  const listners = emitter.listeners(eventName2);
  if (listners.length === 0) {
    return;
  }
  for (const listener of listners) {
    await listener.apply(emitter, data);
  }
}
function canParseUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
}
var _FetchInterceptor = class extends Interceptor {
  constructor() {
    super(_FetchInterceptor.symbol);
  }
  checkEnvironment() {
    return typeof globalThis !== "undefined" && typeof globalThis.fetch !== "undefined";
  }
  async setup() {
    const pureFetch = globalThis.fetch;
    invariant(
      !pureFetch[IS_PATCHED_MODULE],
      'Failed to patch the "fetch" module: already patched.'
    );
    globalThis.fetch = async (input, init) => {
      var _a2;
      const requestId = createRequestId();
      const resolvedInput = typeof input === "string" && typeof location !== "undefined" && !canParseUrl(input) ? new URL(input, location.origin) : input;
      const request = new Request(resolvedInput, init);
      this.logger.info("[%s] %s", request.method, request.url);
      const { interactiveRequest, requestController } = toInteractiveRequest(request);
      this.logger.info(
        'emitting the "request" event for %d listener(s)...',
        this.emitter.listenerCount("request")
      );
      this.emitter.once("request", ({ requestId: pendingRequestId }) => {
        if (pendingRequestId !== requestId) {
          return;
        }
        if (requestController.responsePromise.state === "pending") {
          requestController.responsePromise.resolve(void 0);
        }
      });
      this.logger.info("awaiting for the mocked response...");
      const signal = interactiveRequest.signal;
      const requestAborted = new DeferredPromise();
      if (signal) {
        signal.addEventListener(
          "abort",
          () => {
            requestAborted.reject(signal.reason);
          },
          { once: true }
        );
      }
      const responsePromise = new DeferredPromise();
      const respondWith = (response) => {
        this.logger.info("responding with a mock response:", response);
        if (this.emitter.listenerCount("response") > 0) {
          this.logger.info('emitting the "response" event...');
          const responseClone = response.clone();
          this.emitter.emit("response", {
            response: responseClone,
            isMockedResponse: true,
            request: interactiveRequest,
            requestId
          });
        }
        Object.defineProperty(response, "url", {
          writable: false,
          enumerable: true,
          configurable: false,
          value: request.url
        });
        responsePromise.resolve(response);
      };
      const errorWith = (reason) => {
        responsePromise.reject(reason);
      };
      const resolverResult = await until(
        async () => {
          const listenersFinished = emitAsync(this.emitter, "request", {
            request: interactiveRequest,
            requestId
          });
          await Promise.race([
            requestAborted,
            // Put the listeners invocation Promise in the same race condition
            // with the request abort Promise because otherwise awaiting the listeners
            // would always yield some response (or undefined).
            listenersFinished,
            requestController.responsePromise
          ]);
          this.logger.info("all request listeners have been resolved!");
          const mockedResponse2 = await requestController.responsePromise;
          this.logger.info("event.respondWith called with:", mockedResponse2);
          return mockedResponse2;
        }
      );
      if (requestAborted.state === "rejected") {
        this.logger.info(
          "request has been aborted:",
          requestAborted.rejectionReason
        );
        responsePromise.reject(requestAborted.rejectionReason);
        return responsePromise;
      }
      if (resolverResult.error) {
        this.logger.info(
          "request listerner threw an error:",
          resolverResult.error
        );
        if (resolverResult.error instanceof Response) {
          if (isResponseError(resolverResult.error)) {
            errorWith(createNetworkError(resolverResult.error));
          } else {
            respondWith(resolverResult.error);
          }
        }
        if (this.emitter.listenerCount("unhandledException") > 0) {
          await emitAsync(this.emitter, "unhandledException", {
            error: resolverResult.error,
            request,
            requestId,
            controller: {
              respondWith,
              errorWith
            }
          });
          if (responsePromise.state !== "pending") {
            return responsePromise;
          }
        }
        respondWith(createServerErrorResponse(resolverResult.error));
        return responsePromise;
      }
      const mockedResponse = resolverResult.data;
      if (mockedResponse && !((_a2 = request.signal) == null ? void 0 : _a2.aborted)) {
        this.logger.info("received mocked response:", mockedResponse);
        if (isResponseError(mockedResponse)) {
          this.logger.info(
            "received a network error response, rejecting the request promise..."
          );
          errorWith(createNetworkError(mockedResponse));
        } else {
          respondWith(mockedResponse);
        }
        return responsePromise;
      }
      this.logger.info("no mocked response received!");
      return pureFetch(request).then((response) => {
        this.logger.info("original fetch performed", response);
        if (this.emitter.listenerCount("response") > 0) {
          this.logger.info('emitting the "response" event...');
          const responseClone = response.clone();
          this.emitter.emit("response", {
            response: responseClone,
            isMockedResponse: false,
            request: interactiveRequest,
            requestId
          });
        }
        return response;
      });
    };
    Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
        value: void 0
      });
      globalThis.fetch = pureFetch;
      this.logger.info(
        'restored native "globalThis.fetch"!',
        globalThis.fetch.name
      );
    });
  }
};
var FetchInterceptor = _FetchInterceptor;
FetchInterceptor.symbol = Symbol("fetch");
function createNetworkError(cause) {
  return Object.assign(new TypeError("Failed to fetch"), {
    cause
  });
}
function concatArrayBuffer(left, right) {
  const result = new Uint8Array(left.byteLength + right.byteLength);
  result.set(left, 0);
  result.set(right, left.byteLength);
  return result;
}
var EventPolyfill = class {
  constructor(type, options) {
    this.AT_TARGET = 0;
    this.BUBBLING_PHASE = 0;
    this.CAPTURING_PHASE = 0;
    this.NONE = 0;
    this.type = "";
    this.srcElement = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.isTrusted = true;
    this.composed = false;
    this.cancelable = true;
    this.defaultPrevented = false;
    this.bubbles = true;
    this.lengthComputable = true;
    this.loaded = 0;
    this.total = 0;
    this.cancelBubble = false;
    this.returnValue = true;
    this.type = type;
    this.target = (options == null ? void 0 : options.target) || null;
    this.currentTarget = (options == null ? void 0 : options.currentTarget) || null;
    this.timeStamp = Date.now();
  }
  composedPath() {
    return [];
  }
  initEvent(type, bubbles, cancelable) {
    this.type = type;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
  }
  stopImmediatePropagation() {
  }
};
var ProgressEventPolyfill = class extends EventPolyfill {
  constructor(type, init) {
    super(type);
    this.lengthComputable = (init == null ? void 0 : init.lengthComputable) || false;
    this.composed = (init == null ? void 0 : init.composed) || false;
    this.loaded = (init == null ? void 0 : init.loaded) || 0;
    this.total = (init == null ? void 0 : init.total) || 0;
  }
};
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
function createEvent(target, type, init) {
  const progressEvents = [
    "error",
    "progress",
    "loadstart",
    "loadend",
    "load",
    "timeout",
    "abort"
  ];
  const ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill;
  const event = progressEvents.includes(type) ? new ProgressEventClass(type, {
    lengthComputable: true,
    loaded: (init == null ? void 0 : init.loaded) || 0,
    total: (init == null ? void 0 : init.total) || 0
  }) : new EventPolyfill(type, {
    target,
    currentTarget: target
  });
  return event;
}
function findPropertySource(target, propertyName) {
  if (!(propertyName in target)) {
    return null;
  }
  const hasProperty = Object.prototype.hasOwnProperty.call(target, propertyName);
  if (hasProperty) {
    return target;
  }
  const prototype = Reflect.getPrototypeOf(target);
  return prototype ? findPropertySource(prototype, propertyName) : null;
}
function createProxy(target, options) {
  const proxy = new Proxy(target, optionsToProxyHandler(options));
  return proxy;
}
function optionsToProxyHandler(options) {
  const { constructorCall, methodCall, getProperty, setProperty } = options;
  const handler = {};
  if (typeof constructorCall !== "undefined") {
    handler.construct = function(target, args, newTarget) {
      const next = Reflect.construct.bind(null, target, args, newTarget);
      return constructorCall.call(newTarget, args, next);
    };
  }
  handler.set = function(target, propertyName, nextValue) {
    const next = () => {
      const propertySource = findPropertySource(target, propertyName) || target;
      const ownDescriptors = Reflect.getOwnPropertyDescriptor(
        propertySource,
        propertyName
      );
      if (typeof (ownDescriptors == null ? void 0 : ownDescriptors.set) !== "undefined") {
        ownDescriptors.set.apply(target, [nextValue]);
        return true;
      }
      return Reflect.defineProperty(propertySource, propertyName, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: nextValue
      });
    };
    if (typeof setProperty !== "undefined") {
      return setProperty.call(target, [propertyName, nextValue], next);
    }
    return next();
  };
  handler.get = function(target, propertyName, receiver) {
    const next = () => target[propertyName];
    const value = typeof getProperty !== "undefined" ? getProperty.call(target, [propertyName, receiver], next) : next();
    if (typeof value === "function") {
      return (...args) => {
        const next2 = value.bind(target, ...args);
        if (typeof methodCall !== "undefined") {
          return methodCall.call(target, [propertyName, args], next2);
        }
        return next2();
      };
    }
    return value;
  };
  return handler;
}
function isDomParserSupportedType(type) {
  const supportedTypes = [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml"
  ];
  return supportedTypes.some((supportedType) => {
    return type.startsWith(supportedType);
  });
}
function parseJson(data) {
  try {
    const json = JSON.parse(data);
    return json;
  } catch (_) {
    return null;
  }
}
function createResponse(request, body) {
  const responseBodyOrNull = isResponseWithoutBody(request.status) ? null : body;
  return new Response(responseBodyOrNull, {
    status: request.status,
    statusText: request.statusText,
    headers: createHeadersFromXMLHttpReqestHeaders(
      request.getAllResponseHeaders()
    )
  });
}
function createHeadersFromXMLHttpReqestHeaders(headersString) {
  const headers = new Headers();
  const lines = headersString.split(/[\r\n]+/);
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    const [name, ...parts] = line.split(": ");
    const value = parts.join(": ");
    headers.append(name, value);
  }
  return headers;
}
var IS_MOCKED_RESPONSE = Symbol("isMockedResponse");
var IS_NODE2 = isNodeProcess();
var XMLHttpRequestController = class {
  constructor(initialRequest, logger) {
    this.initialRequest = initialRequest;
    this.logger = logger;
    this.method = "GET";
    this.url = null;
    this.events = /* @__PURE__ */ new Map();
    this.requestId = createRequestId();
    this.requestHeaders = new Headers();
    this.responseBuffer = new Uint8Array();
    this.request = createProxy(initialRequest, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "ontimeout": {
            const eventName2 = propertyName.slice(
              2
            );
            this.request.addEventListener(eventName2, nextValue);
            return invoke();
          }
          default: {
            return invoke();
          }
        }
      },
      methodCall: ([methodName, args], invoke) => {
        var _a2;
        switch (methodName) {
          case "open": {
            const [method, url] = args;
            if (typeof url === "undefined") {
              this.method = "GET";
              this.url = toAbsoluteUrl(method);
            } else {
              this.method = method;
              this.url = toAbsoluteUrl(url);
            }
            this.logger = this.logger.extend(`${this.method} ${this.url.href}`);
            this.logger.info("open", this.method, this.url.href);
            return invoke();
          }
          case "addEventListener": {
            const [eventName2, listener] = args;
            this.registerEvent(eventName2, listener);
            this.logger.info("addEventListener", eventName2, listener);
            return invoke();
          }
          case "setRequestHeader": {
            const [name, value] = args;
            this.requestHeaders.set(name, value);
            this.logger.info("setRequestHeader", name, value);
            return invoke();
          }
          case "send": {
            const [body] = args;
            if (body != null) {
              this.requestBody = typeof body === "string" ? encodeBuffer(body) : body;
            }
            this.request.addEventListener("load", () => {
              if (typeof this.onResponse !== "undefined") {
                const fetchResponse = createResponse(
                  this.request,
                  /**
                   * The `response` property is the right way to read
                   * the ambiguous response body, as the request's "responseType" may differ.
                   * @see https://xhr.spec.whatwg.org/#the-response-attribute
                   */
                  this.request.response
                );
                this.onResponse.call(this, {
                  response: fetchResponse,
                  isMockedResponse: IS_MOCKED_RESPONSE in this.request,
                  request: fetchRequest,
                  requestId: this.requestId
                });
              }
            });
            const fetchRequest = this.toFetchApiRequest();
            const onceRequestSettled = ((_a2 = this.onRequest) == null ? void 0 : _a2.call(this, {
              request: fetchRequest,
              requestId: this.requestId
            })) || Promise.resolve();
            onceRequestSettled.finally(() => {
              if (this.request.readyState < this.request.LOADING) {
                this.logger.info(
                  "request callback settled but request has not been handled (readystate %d), performing as-is...",
                  this.request.readyState
                );
                if (IS_NODE2) {
                  this.request.setRequestHeader(
                    INTERNAL_REQUEST_ID_HEADER_NAME,
                    this.requestId
                  );
                }
                return invoke();
              }
            });
            break;
          }
          default: {
            return invoke();
          }
        }
      }
    });
  }
  registerEvent(eventName2, listener) {
    const prevEvents = this.events.get(eventName2) || [];
    const nextEvents = prevEvents.concat(listener);
    this.events.set(eventName2, nextEvents);
    this.logger.info('registered event "%s"', eventName2, listener);
  }
  /**
   * Responds to the current request with the given
   * Fetch API `Response` instance.
   */
  respondWith(response) {
    this.logger.info(
      "responding with a mocked response: %d %s",
      response.status,
      response.statusText
    );
    define(this.request, IS_MOCKED_RESPONSE, true);
    define(this.request, "status", response.status);
    define(this.request, "statusText", response.statusText);
    define(this.request, "responseURL", this.url.href);
    this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, {
      apply: (_, __, args) => {
        this.logger.info("getResponseHeader", args[0]);
        if (this.request.readyState < this.request.HEADERS_RECEIVED) {
          this.logger.info("headers not received yet, returning null");
          return null;
        }
        const headerValue = response.headers.get(args[0]);
        this.logger.info(
          'resolved response header "%s" to',
          args[0],
          headerValue
        );
        return headerValue;
      }
    });
    this.request.getAllResponseHeaders = new Proxy(
      this.request.getAllResponseHeaders,
      {
        apply: () => {
          this.logger.info("getAllResponseHeaders");
          if (this.request.readyState < this.request.HEADERS_RECEIVED) {
            this.logger.info("headers not received yet, returning empty string");
            return "";
          }
          const headersList = Array.from(response.headers.entries());
          const allHeaders = headersList.map(([headerName, headerValue]) => {
            return `${headerName}: ${headerValue}`;
          }).join("\r\n");
          this.logger.info("resolved all response headers to", allHeaders);
          return allHeaders;
        }
      }
    );
    Object.defineProperties(this.request, {
      response: {
        enumerable: true,
        configurable: false,
        get: () => this.response
      },
      responseText: {
        enumerable: true,
        configurable: false,
        get: () => this.responseText
      },
      responseXML: {
        enumerable: true,
        configurable: false,
        get: () => this.responseXML
      }
    });
    const totalResponseBodyLength = response.headers.has("Content-Length") ? Number(response.headers.get("Content-Length")) : (
      /**
       * @todo Infer the response body length from the response body.
       */
      void 0
    );
    this.logger.info("calculated response body length", totalResponseBodyLength);
    this.trigger("loadstart", {
      loaded: 0,
      total: totalResponseBodyLength
    });
    this.setReadyState(this.request.HEADERS_RECEIVED);
    this.setReadyState(this.request.LOADING);
    const finalizeResponse = () => {
      this.logger.info("finalizing the mocked response...");
      this.setReadyState(this.request.DONE);
      this.trigger("load", {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
      this.trigger("loadend", {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
    };
    if (response.body) {
      this.logger.info("mocked response has body, streaming...");
      const reader = response.body.getReader();
      const readNextResponseBodyChunk = async () => {
        const { value, done } = await reader.read();
        if (done) {
          this.logger.info("response body stream done!");
          finalizeResponse();
          return;
        }
        if (value) {
          this.logger.info("read response body chunk:", value);
          this.responseBuffer = concatArrayBuffer(this.responseBuffer, value);
          this.trigger("progress", {
            loaded: this.responseBuffer.byteLength,
            total: totalResponseBodyLength
          });
        }
        readNextResponseBodyChunk();
      };
      readNextResponseBodyChunk();
    } else {
      finalizeResponse();
    }
  }
  responseBufferToText() {
    return decodeBuffer(this.responseBuffer);
  }
  get response() {
    this.logger.info(
      "getResponse (responseType: %s)",
      this.request.responseType
    );
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    switch (this.request.responseType) {
      case "json": {
        const responseJson = parseJson(this.responseBufferToText());
        this.logger.info("resolved response JSON", responseJson);
        return responseJson;
      }
      case "arraybuffer": {
        const arrayBuffer = toArrayBuffer(this.responseBuffer);
        this.logger.info("resolved response ArrayBuffer", arrayBuffer);
        return arrayBuffer;
      }
      case "blob": {
        const mimeType = this.request.getResponseHeader("Content-Type") || "text/plain";
        const responseBlob = new Blob([this.responseBufferToText()], {
          type: mimeType
        });
        this.logger.info(
          "resolved response Blob (mime type: %s)",
          responseBlob,
          mimeType
        );
        return responseBlob;
      }
      default: {
        const responseText = this.responseBufferToText();
        this.logger.info(
          'resolving "%s" response type as text',
          this.request.responseType,
          responseText
        );
        return responseText;
      }
    }
  }
  get responseText() {
    invariant(
      this.request.responseType === "" || this.request.responseType === "text",
      "InvalidStateError: The object is in invalid state."
    );
    if (this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) {
      return "";
    }
    const responseText = this.responseBufferToText();
    this.logger.info('getResponseText: "%s"', responseText);
    return responseText;
  }
  get responseXML() {
    invariant(
      this.request.responseType === "" || this.request.responseType === "document",
      "InvalidStateError: The object is in invalid state."
    );
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    const contentType = this.request.getResponseHeader("Content-Type") || "";
    if (typeof DOMParser === "undefined") {
      console.warn(
        "Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."
      );
      return null;
    }
    if (isDomParserSupportedType(contentType)) {
      return new DOMParser().parseFromString(
        this.responseBufferToText(),
        contentType
      );
    }
    return null;
  }
  errorWith(error2) {
    this.logger.info("responding with an error");
    this.setReadyState(this.request.DONE);
    this.trigger("error");
    this.trigger("loadend");
  }
  /**
   * Transitions this request's `readyState` to the given one.
   */
  setReadyState(nextReadyState) {
    this.logger.info(
      "setReadyState: %d -> %d",
      this.request.readyState,
      nextReadyState
    );
    if (this.request.readyState === nextReadyState) {
      this.logger.info("ready state identical, skipping transition...");
      return;
    }
    define(this.request, "readyState", nextReadyState);
    this.logger.info("set readyState to: %d", nextReadyState);
    if (nextReadyState !== this.request.UNSENT) {
      this.logger.info('triggerring "readystatechange" event...');
      this.trigger("readystatechange");
    }
  }
  /**
   * Triggers given event on the `XMLHttpRequest` instance.
   */
  trigger(eventName2, options) {
    const callback = this.request[`on${eventName2}`];
    const event = createEvent(this.request, eventName2, options);
    this.logger.info('trigger "%s"', eventName2, options || "");
    if (typeof callback === "function") {
      this.logger.info('found a direct "%s" callback, calling...', eventName2);
      callback.call(this.request, event);
    }
    for (const [registeredEventName, listeners] of this.events) {
      if (registeredEventName === eventName2) {
        this.logger.info(
          'found %d listener(s) for "%s" event, calling...',
          listeners.length,
          eventName2
        );
        listeners.forEach((listener) => listener.call(this.request, event));
      }
    }
  }
  /**
   * Converts this `XMLHttpRequest` instance into a Fetch API `Request` instance.
   */
  toFetchApiRequest() {
    this.logger.info("converting request to a Fetch API Request...");
    const fetchRequest = new Request(this.url.href, {
      method: this.method,
      headers: this.requestHeaders,
      /**
       * @see https://xhr.spec.whatwg.org/#cross-origin-credentials
       */
      credentials: this.request.withCredentials ? "include" : "same-origin",
      body: ["GET", "HEAD"].includes(this.method) ? null : this.requestBody
    });
    const proxyHeaders = createProxy(fetchRequest.headers, {
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "append":
          case "set": {
            const [headerName, headerValue] = args;
            this.request.setRequestHeader(headerName, headerValue);
            break;
          }
          case "delete": {
            const [headerName] = args;
            console.warn(
              `XMLHttpRequest: Cannot remove a "${headerName}" header from the Fetch API representation of the "${fetchRequest.method} ${fetchRequest.url}" request. XMLHttpRequest headers cannot be removed.`
            );
            break;
          }
        }
        return invoke();
      }
    });
    define(fetchRequest, "headers", proxyHeaders);
    this.logger.info("converted request to a Fetch API Request!", fetchRequest);
    return fetchRequest;
  }
};
function toAbsoluteUrl(url) {
  if (typeof location === "undefined") {
    return new URL(url);
  }
  return new URL(url.toString(), location.href);
}
function define(target, property, value) {
  Reflect.defineProperty(target, property, {
    // Ensure writable properties to allow redefining readonly properties.
    writable: true,
    enumerable: true,
    value
  });
}
function createXMLHttpRequestProxy({
  emitter,
  logger
}) {
  const XMLHttpRequestProxy = new Proxy(globalThis.XMLHttpRequest, {
    construct(target, args, newTarget) {
      logger.info("constructed new XMLHttpRequest");
      const originalRequest = Reflect.construct(
        target,
        args,
        newTarget
      );
      const prototypeDescriptors = Object.getOwnPropertyDescriptors(
        target.prototype
      );
      for (const propertyName in prototypeDescriptors) {
        Reflect.defineProperty(
          originalRequest,
          propertyName,
          prototypeDescriptors[propertyName]
        );
      }
      const xhrRequestController = new XMLHttpRequestController(
        originalRequest,
        logger
      );
      xhrRequestController.onRequest = async function({ request, requestId }) {
        const { interactiveRequest, requestController } = toInteractiveRequest(request);
        this.logger.info("awaiting mocked response...");
        emitter.once("request", ({ requestId: pendingRequestId }) => {
          if (pendingRequestId !== requestId) {
            return;
          }
          if (requestController.responsePromise.state === "pending") {
            requestController.respondWith(void 0);
          }
        });
        const resolverResult = await until(async () => {
          this.logger.info(
            'emitting the "request" event for %s listener(s)...',
            emitter.listenerCount("request")
          );
          await emitAsync(emitter, "request", {
            request: interactiveRequest,
            requestId
          });
          this.logger.info('all "request" listeners settled!');
          const mockedResponse2 = await requestController.responsePromise;
          this.logger.info("event.respondWith called with:", mockedResponse2);
          return mockedResponse2;
        });
        if (resolverResult.error) {
          this.logger.info(
            "request listener threw an exception, aborting request...",
            resolverResult.error
          );
          if (resolverResult.error instanceof Response) {
            if (isResponseError(resolverResult.error)) {
              xhrRequestController.errorWith(new TypeError("Network error"));
            } else {
              this.respondWith(resolverResult.error);
            }
            return;
          }
          if (emitter.listenerCount("unhandledException") > 0) {
            await emitAsync(emitter, "unhandledException", {
              error: resolverResult.error,
              request,
              requestId,
              controller: {
                respondWith: xhrRequestController.respondWith.bind(xhrRequestController),
                errorWith: xhrRequestController.errorWith.bind(xhrRequestController)
              }
            });
            if (originalRequest.readyState > XMLHttpRequest.OPENED) {
              return;
            }
          }
          xhrRequestController.respondWith(
            createServerErrorResponse(resolverResult.error)
          );
          return;
        }
        const mockedResponse = resolverResult.data;
        if (typeof mockedResponse !== "undefined") {
          this.logger.info(
            "received mocked response: %d %s",
            mockedResponse.status,
            mockedResponse.statusText
          );
          if (isResponseError(mockedResponse)) {
            this.logger.info(
              "received a network error response, rejecting the request promise..."
            );
            xhrRequestController.errorWith(new TypeError("Network error"));
            return;
          }
          return xhrRequestController.respondWith(mockedResponse);
        }
        this.logger.info(
          "no mocked response received, performing request as-is..."
        );
      };
      xhrRequestController.onResponse = async function({
        response,
        isMockedResponse,
        request,
        requestId
      }) {
        this.logger.info(
          'emitting the "response" event for %s listener(s)...',
          emitter.listenerCount("response")
        );
        emitter.emit("response", {
          response,
          isMockedResponse,
          request,
          requestId
        });
      };
      return xhrRequestController.request;
    }
  });
  return XMLHttpRequestProxy;
}
var _XMLHttpRequestInterceptor = class extends Interceptor {
  constructor() {
    super(_XMLHttpRequestInterceptor.interceptorSymbol);
  }
  checkEnvironment() {
    return typeof globalThis.XMLHttpRequest !== "undefined";
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info('patching "XMLHttpRequest" module...');
    const PureXMLHttpRequest = globalThis.XMLHttpRequest;
    invariant(
      !PureXMLHttpRequest[IS_PATCHED_MODULE],
      'Failed to patch the "XMLHttpRequest" module: already patched.'
    );
    globalThis.XMLHttpRequest = createXMLHttpRequestProxy({
      emitter: this.emitter,
      logger: this.logger
    });
    logger.info(
      'native "XMLHttpRequest" module patched!',
      globalThis.XMLHttpRequest.name
    );
    Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
        value: void 0
      });
      globalThis.XMLHttpRequest = PureXMLHttpRequest;
      logger.info(
        'native "XMLHttpRequest" module restored!',
        globalThis.XMLHttpRequest.name
      );
    });
  }
};
var XMLHttpRequestInterceptor = _XMLHttpRequestInterceptor;
XMLHttpRequestInterceptor.interceptorSymbol = Symbol("xhr");
function createFallbackRequestListener(context, options) {
  const interceptor = new BatchInterceptor({
    name: "fallback",
    interceptors: [new FetchInterceptor(), new XMLHttpRequestInterceptor()]
  });
  interceptor.on("request", async ({ request, requestId }) => {
    const requestCloneForLogs = request.clone();
    const response = await handleRequest(
      request,
      requestId,
      context.getRequestHandlers(),
      options,
      context.emitter,
      {
        onMockedResponse(_, { handler, parsedResult }) {
          if (!options.quiet) {
            context.emitter.once("response:mocked", ({ response: response2 }) => {
              handler.log({
                request: requestCloneForLogs,
                response: response2,
                parsedResult
              });
            });
          }
        }
      }
    );
    if (response) {
      request.respondWith(response);
    }
  });
  interceptor.on(
    "response",
    ({ response, isMockedResponse, request, requestId }) => {
      context.emitter.emit(
        isMockedResponse ? "response:mocked" : "response:bypass",
        {
          response,
          request,
          requestId
        }
      );
    }
  );
  interceptor.apply();
  return interceptor;
}
function createFallbackStart(context) {
  return async function start(options) {
    context.fallbackInterceptor = createFallbackRequestListener(
      context,
      options
    );
    printStartMessage({
      message: "Mocking enabled (fallback mode).",
      quiet: options.quiet
    });
    return void 0;
  };
}
function createFallbackStop(context) {
  return function stop() {
    var _a2, _b;
    (_a2 = context.fallbackInterceptor) == null ? void 0 : _a2.dispose();
    printStopMessage({ quiet: (_b = context.startOptions) == null ? void 0 : _b.quiet });
  };
}
function supportsReadableStreamTransfer() {
  try {
    const stream = new ReadableStream({
      start: (controller) => controller.close()
    });
    const message2 = new MessageChannel();
    message2.port1.postMessage(stream, [stream]);
    return true;
  } catch (error2) {
    return false;
  }
}
var SetupWorkerApi = class extends SetupApi {
  constructor(...handlers) {
    super(...handlers);
    __publicField(this, "context");
    __publicField(this, "startHandler", null);
    __publicField(this, "stopHandler", null);
    __publicField(this, "listeners");
    invariant(
      !isNodeProcess(),
      devUtils.formatMessage(
        "Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."
      )
    );
    this.listeners = [];
    this.context = this.createWorkerContext();
  }
  createWorkerContext() {
    const context = {
      // Mocking is not considered enabled until the worker
      // signals back the successful activation event.
      isMockingEnabled: false,
      startOptions: null,
      worker: null,
      getRequestHandlers: () => {
        return this.handlersController.currentHandlers();
      },
      registration: null,
      requests: /* @__PURE__ */ new Map(),
      emitter: this.emitter,
      workerChannel: {
        on: (eventType, callback) => {
          this.context.events.addListener(navigator.serviceWorker, "message", (event) => {
            if (event.source !== this.context.worker) {
              return;
            }
            const message2 = event.data;
            if (!message2) {
              return;
            }
            if (message2.type === eventType) {
              callback(event, message2);
            }
          });
        },
        send: (type) => {
          var _a2;
          (_a2 = this.context.worker) == null ? void 0 : _a2.postMessage(type);
        }
      },
      events: {
        addListener: (target, eventType, callback) => {
          target.addEventListener(eventType, callback);
          this.listeners.push({
            eventType,
            target,
            callback
          });
          return () => {
            target.removeEventListener(eventType, callback);
          };
        },
        removeAllListeners: () => {
          for (const { target, eventType, callback } of this.listeners) {
            target.removeEventListener(eventType, callback);
          }
          this.listeners = [];
        },
        once: (eventType) => {
          const bindings = [];
          return new Promise((resolve, reject) => {
            const handleIncomingMessage = (event) => {
              try {
                const message2 = event.data;
                if (message2.type === eventType) {
                  resolve(message2);
                }
              } catch (error2) {
                reject(error2);
              }
            };
            bindings.push(
              this.context.events.addListener(
                navigator.serviceWorker,
                "message",
                handleIncomingMessage
              ),
              this.context.events.addListener(
                navigator.serviceWorker,
                "messageerror",
                reject
              )
            );
          }).finally(() => {
            bindings.forEach((unbind) => unbind());
          });
        }
      },
      supports: {
        serviceWorkerApi: !("serviceWorker" in navigator) || location.protocol === "file:",
        readableStreamTransfer: supportsReadableStreamTransfer()
      }
    };
    this.startHandler = context.supports.serviceWorkerApi ? createFallbackStart(context) : createStartHandler(context);
    this.stopHandler = context.supports.serviceWorkerApi ? createFallbackStop(context) : createStop(context);
    return context;
  }
  async start(options = {}) {
    if (options.waitUntilReady === true) {
      devUtils.warn(
        'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
      );
    }
    this.context.startOptions = mergeRight(
      DEFAULT_START_OPTIONS,
      options
    );
    return await this.startHandler(this.context.startOptions, options);
  }
  stop() {
    super.dispose();
    this.context.events.removeAllListeners();
    this.context.emitter.removeAllListeners();
    this.stopHandler();
  }
};
function setupWorker(...handlers) {
  return new SetupWorkerApi(...handlers);
}
function checkGlobals() {
  invariant$1(
    typeof URL !== "undefined",
    devUtils.formatMessage(
      `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
    )
  );
}
function isStringEqual(actual, expected) {
  return actual.toLowerCase() === expected.toLowerCase();
}
function getStatusCodeColor(status) {
  if (status < 300) {
    return "#69AB32";
  }
  if (status < 400) {
    return "#F0BB4B";
  }
  return "#E95F5D";
}
function getTimestamp() {
  const now2 = /* @__PURE__ */ new Date();
  return [now2.getHours(), now2.getMinutes(), now2.getSeconds()].map(String).map((chunk2) => chunk2.slice(0, 2)).map((chunk2) => chunk2.padStart(2, "0")).join(":");
}
async function serializeRequest(request) {
  const requestClone = request.clone();
  const requestText = await requestClone.text();
  return {
    url: new URL(request.url),
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
    body: requestText
  };
}
const { message: message$1 } = statuses;
async function serializeResponse(response) {
  const responseClone = response.clone();
  const responseText = await responseClone.text();
  const responseStatus = responseClone.status || 200;
  const responseStatusText = responseClone.statusText || message$1[responseStatus] || "OK";
  return {
    status: responseStatus,
    statusText: responseStatusText,
    headers: Object.fromEntries(responseClone.headers.entries()),
    body: responseText
  };
}
const REDUNDANT_CHARACTERS_EXP = /[\?|#].*$/g;
function getSearchParams(path) {
  return new URL(`/${path}`, "http://localhost").searchParams;
}
function cleanUrl(path) {
  return path.replace(REDUNDANT_CHARACTERS_EXP, "");
}
function isAbsoluteUrl(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
function getAbsoluteUrl(path, baseUrl) {
  if (isAbsoluteUrl(path)) {
    return path;
  }
  if (path.startsWith("*")) {
    return path;
  }
  const origin = baseUrl || typeof document !== "undefined" && document.baseURI;
  return origin ? (
    // Encode and decode the path to preserve escaped characters.
    decodeURI(new URL(encodeURI(path), origin).href)
  ) : path;
}
function normalizePath(path, baseUrl) {
  if (path instanceof RegExp) {
    return path;
  }
  const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
  return cleanUrl(maybeAbsoluteUrl);
}
function coercePath(path) {
  return path.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (_, parameterName, wildcard) => {
      const expression = "(.*)";
      if (!parameterName) {
        return expression;
      }
      return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
    }
  ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function matchRequestUrl(url, path, baseUrl) {
  const normalizedPath = normalizePath(path, baseUrl);
  const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
  const cleanUrl2 = getCleanUrl(url);
  const result = match(cleanPath, { decode: decodeURIComponent })(cleanUrl2);
  const params = result && result.params || {};
  return {
    matches: result !== false,
    params
  };
}
function getAllDocumentCookies() {
  return cookieUtils.parse(document.cookie);
}
function getRequestCookies(request) {
  if (typeof document === "undefined" || typeof location === "undefined") {
    return {};
  }
  switch (request.credentials) {
    case "same-origin": {
      const url = new URL(request.url);
      return location.origin === url.origin ? getAllDocumentCookies() : {};
    }
    case "include": {
      return getAllDocumentCookies();
    }
    default: {
      return {};
    }
  }
}
function getAllRequestCookies(request) {
  var _a2;
  const requestCookiesString = request.headers.get("cookie");
  const cookiesFromHeaders = requestCookiesString ? cookieUtils.parse(requestCookiesString) : {};
  store$1.hydrate();
  const cookiesFromStore = Array.from((_a2 = store$1.get(request)) == null ? void 0 : _a2.entries()).reduce((cookies, [name, { value }]) => {
    return Object.assign(cookies, { [name.trim()]: value });
  }, {});
  const cookiesFromDocument = getRequestCookies(request);
  const forwardedCookies = {
    ...cookiesFromDocument,
    ...cookiesFromStore
  };
  for (const [name, value] of Object.entries(forwardedCookies)) {
    request.headers.append("cookie", cookieUtils.serialize(name, value));
  }
  return {
    ...forwardedCookies,
    ...cookiesFromHeaders
  };
}
var HttpMethods = /* @__PURE__ */ ((HttpMethods2) => {
  HttpMethods2["HEAD"] = "HEAD";
  HttpMethods2["GET"] = "GET";
  HttpMethods2["POST"] = "POST";
  HttpMethods2["PUT"] = "PUT";
  HttpMethods2["PATCH"] = "PATCH";
  HttpMethods2["OPTIONS"] = "OPTIONS";
  HttpMethods2["DELETE"] = "DELETE";
  return HttpMethods2;
})(HttpMethods || {});
class HttpHandler extends RequestHandler {
  constructor(method, path, resolver, options) {
    super({
      info: {
        header: `${method} ${path}`,
        path,
        method
      },
      resolver,
      options
    });
    this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method, path } = this.info;
    if (path instanceof RegExp) {
      return;
    }
    const url = cleanUrl(path);
    if (url === path) {
      return;
    }
    const searchParams = getSearchParams(path);
    searchParams.forEach((_, paramName) => {
    });
    devUtils.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`
    );
  }
  async parse(args) {
    var _a2;
    const url = new URL(args.request.url);
    const match2 = matchRequestUrl(
      url,
      this.info.path,
      (_a2 = args.resolutionContext) == null ? void 0 : _a2.baseUrl
    );
    const cookies = getAllRequestCookies(args.request);
    return {
      match: match2,
      cookies
    };
  }
  predicate(args) {
    const hasMatchingMethod = this.matchMethod(args.request.method);
    const hasMatchingUrl = args.parsedResult.match.matches;
    return hasMatchingMethod && hasMatchingUrl;
  }
  matchMethod(actualMethod) {
    return this.info.method instanceof RegExp ? this.info.method.test(actualMethod) : isStringEqual(this.info.method, actualMethod);
  }
  extendResolverArgs(args) {
    var _a2;
    return {
      params: ((_a2 = args.parsedResult.match) == null ? void 0 : _a2.params) || {},
      cookies: args.parsedResult.cookies
    };
  }
  async log(args) {
    const publicUrl = toPublicUrl(args.request.url);
    const loggedRequest = await serializeRequest(args.request);
    const loggedResponse = await serializeResponse(args.response);
    const statusColor = getStatusCodeColor(loggedResponse.status);
    console.groupCollapsed(
      devUtils.formatMessage(
        `${getTimestamp()} ${args.request.method} ${publicUrl} (%c${loggedResponse.status} ${loggedResponse.statusText}%c)`
      ),
      `color:${statusColor}`,
      "color:inherit"
    );
    console.log("Request", loggedRequest);
    console.log("Handler:", this);
    console.log("Response", loggedResponse);
    console.groupEnd();
  }
}
function createHttpHandler(method) {
  return (path, resolver, options = {}) => {
    return new HttpHandler(method, path, resolver, options);
  };
}
const http = {
  all: createHttpHandler(/.+/),
  head: createHttpHandler(HttpMethods.HEAD),
  get: createHttpHandler(HttpMethods.GET),
  post: createHttpHandler(HttpMethods.POST),
  put: createHttpHandler(HttpMethods.PUT),
  delete: createHttpHandler(HttpMethods.DELETE),
  patch: createHttpHandler(HttpMethods.PATCH),
  options: createHttpHandler(HttpMethods.OPTIONS)
};
const { message } = statuses;
function normalizeResponseInit(init = {}) {
  const status = (init == null ? void 0 : init.status) || 200;
  const statusText = (init == null ? void 0 : init.statusText) || message[status] || "";
  const headers = new Headers(init == null ? void 0 : init.headers);
  return {
    ...init,
    headers,
    status,
    statusText
  };
}
function decorateResponse(response, init) {
  if (init.type) {
    Object.defineProperty(response, "type", {
      value: init.type,
      enumerable: true,
      writable: false
    });
  }
  if (typeof document !== "undefined") {
    const responseCookies = Headers$1.prototype.getSetCookie.call(
      init.headers
    );
    for (const cookieString of responseCookies) {
      document.cookie = cookieString;
    }
  }
  return response;
}
class HttpResponse extends Response {
  constructor(body, init) {
    const responseInit = normalizeResponseInit(init);
    super(body, responseInit);
    decorateResponse(this, responseInit);
  }
  /**
   * Create a `Response` with a `Content-Type: "text/plain"` body.
   * @example
   * HttpResponse.text('hello world')
   * HttpResponse.text('Error', { status: 500 })
   */
  static text(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "text/plain");
    }
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set(
        "Content-Length",
        body ? new Blob([body]).size.toString() : "0"
      );
    }
    return new HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with a `Content-Type: "application/json"` body.
   * @example
   * HttpResponse.json({ firstName: 'John' })
   * HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
   */
  static json(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "application/json");
    }
    const responseText = JSON.stringify(body);
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set(
        "Content-Length",
        responseText ? new Blob([responseText]).size.toString() : "0"
      );
    }
    return new HttpResponse(
      responseText,
      responseInit
    );
  }
  /**
   * Create a `Response` with a `Content-Type: "application/xml"` body.
   * @example
   * HttpResponse.xml(`<user name="John" />`)
   * HttpResponse.xml(`<article id="abc-123" />`, { status: 201 })
   */
  static xml(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "text/xml");
    }
    return new HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with an `ArrayBuffer` body.
   * @example
   * const buffer = new ArrayBuffer(3)
   * const view = new Uint8Array(buffer)
   * view.set([1, 2, 3])
   *
   * HttpResponse.arrayBuffer(buffer)
   */
  static arrayBuffer(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (body) {
      responseInit.headers.set("Content-Length", body.byteLength.toString());
    }
    return new HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with a `FormData` body.
   * @example
   * const data = new FormData()
   * data.set('name', 'Alice')
   *
   * HttpResponse.formData(data)
   */
  static formData(body, init) {
    return new HttpResponse(body, normalizeResponseInit(init));
  }
}
checkGlobals();
const db$d = {
  searchItems: [
    {
      title: "Dashboard",
      category: "dashboards",
      children: [
        {
          url: { name: "dashboards-analytics" },
          icon: "ri-line-chart-line",
          title: "Analytics Dashboard"
        },
        {
          url: { name: "dashboards-crm" },
          icon: "ri-computer-line",
          title: "CRM Dashboard"
        },
        {
          url: { name: "dashboards-ecommerce" },
          title: "eCommerce Dashboard",
          icon: "ri-shopping-cart-2-line"
        },
        {
          url: { name: "dashboards-academy" },
          title: "Academy Dashboard",
          icon: "ri-book-open-line"
        },
        {
          url: { name: "dashboards-logistics" },
          title: "Logistics Dashboard",
          icon: "ri-truck-line"
        }
      ]
    },
    {
      title: "Front Pages",
      category: "frontPages",
      children: [
        {
          url: { name: "front-pages-landing-page" },
          icon: "ri-article-line",
          title: "Landing Front"
        },
        {
          url: { name: "front-pages-pricing" },
          icon: "ri-money-dollar-circle-line",
          title: "Pricing Front"
        },
        {
          url: { name: "front-pages-payment" },
          icon: "ri-bank-card-line",
          title: "Payment Front"
        },
        {
          url: { name: "front-pages-checkout" },
          icon: "ri-shopping-cart-2-line",
          title: "Checkout Front"
        },
        {
          url: { name: "front-pages-help-center" },
          icon: "ri-question-line",
          title: "Help Center Front"
        }
      ]
    },
    {
      title: "Apps & Pages",
      category: "appsPages",
      children: [
        {
          url: { name: "apps-email" },
          icon: "ri-mail-line",
          title: "Email"
        },
        {
          url: { name: "apps-chat" },
          icon: "ri-message-line",
          title: "Chat"
        },
        {
          url: { name: "apps-calendar" },
          icon: "ri-calendar-line",
          title: "Calendar"
        },
        {
          title: "Kanban",
          icon: "ri-drag-drop-line",
          url: { name: "apps-kanban" }
        },
        {
          url: { name: "apps-ecommerce-product-list" },
          icon: "ri-file-list-line",
          title: "Ecommerce - Product List"
        },
        {
          url: { name: "apps-ecommerce-product-add" },
          icon: "ri-add-line",
          title: "Ecommerce - Add Product"
        },
        {
          url: { name: "apps-ecommerce-product-category-list" },
          icon: "ri-list-unordered",
          title: "Ecommerce - Category List"
        },
        {
          url: { name: "apps-ecommerce-order-list" },
          icon: "ri-list-unordered",
          title: "Ecommerce - Order List"
        },
        {
          url: { name: "apps-ecommerce-order-details-id", params: { id: "9042" } },
          icon: "ri-play-list-line",
          title: "Ecommerce - Order Details"
        },
        {
          url: { name: "apps-ecommerce-customer-list" },
          icon: "ri-user-line",
          title: "Ecommerce - Customer List"
        },
        {
          url: { name: "apps-ecommerce-customer-details-id", params: { id: "478426", tab: "security" } },
          icon: "ri-list-unordered",
          title: "Ecommerce - Customer Details"
        },
        {
          url: { name: "apps-ecommerce-manage-review" },
          icon: "ri-message-line",
          title: "Ecommerce - Manage Review"
        },
        {
          url: { name: "apps-ecommerce-referrals" },
          icon: "ri-group-line",
          title: "Ecommerce - Referrals"
        },
        {
          url: { name: "apps-ecommerce-settings" },
          icon: "ri-settings-2-line",
          title: "Ecommerce - Settings"
        },
        {
          url: { name: "apps-academy-dashboard" },
          icon: "ri-book-open-line",
          title: "Academy - Overview"
        },
        {
          url: { name: "apps-academy-my-course" },
          icon: "ri-list-unordered",
          title: "Academy - My Courses"
        },
        {
          url: { name: "apps-academy-course-details" },
          icon: "ri-play-circle-line",
          title: "Academy - Course Details"
        },
        {
          url: { name: "apps-logistics-dashboard" },
          icon: "ri-book-open-line",
          title: "Logistics"
        },
        {
          url: { name: "apps-logistics-fleet" },
          icon: "ri-car-line",
          title: "Logistics - fleet"
        },
        {
          url: { name: "apps-invoice-list" },
          icon: "ri-list-ordered-2",
          title: "Invoice List"
        },
        {
          url: { name: "apps-invoice-preview-id", params: { id: "5036" } },
          icon: "ri-article-line",
          title: "Invoice Preview"
        },
        {
          url: { name: "apps-invoice-edit-id", params: { id: "5036" } },
          icon: "ri-file-edit-line",
          title: "Invoice Edit"
        },
        {
          url: { name: "apps-invoice-add" },
          icon: "ri-file-add-line",
          title: "Invoice Add"
        },
        {
          url: { name: "apps-user-list" },
          icon: "ri-group-line",
          title: "User List"
        },
        {
          url: { name: "apps-user-view-id", params: { id: 21 } },
          icon: "ri-eye-line",
          title: "User View"
        },
        {
          url: { name: "pages-user-profile-tab", params: { tab: "profile" } },
          icon: "ri-user-settings-line",
          title: "User Profile - Profile"
        },
        {
          url: { name: "pages-account-settings-tab", params: { tab: "account" } },
          icon: "ri-user-settings-line",
          title: "Account Settings - Account"
        },
        {
          url: { name: "pages-account-settings-tab", params: { tab: "security" } },
          icon: "ri-lock-unlock-line",
          title: "Account Settings - Security"
        },
        {
          url: { name: "pages-account-settings-tab", params: { tab: "billing-plans" } },
          icon: "ri-money-dollar-circle-line",
          title: "Account Settings - Billing"
        },
        {
          url: { name: "pages-account-settings-tab", params: { tab: "notification" } },
          icon: "ri-notification-3-line",
          title: "Account Settings - Notifications"
        },
        {
          url: { name: "pages-account-settings-tab", params: { tab: "connection" } },
          icon: "ri-link",
          title: "Account Settings - Connections"
        },
        {
          url: { name: "pages-pricing" },
          icon: "ri-money-dollar-circle-line",
          title: "Pricing"
        },
        {
          url: { name: "pages-faq" },
          icon: "ri-question-line",
          title: "FAQ"
        },
        {
          url: { name: "pages-misc-coming-soon" },
          icon: "ri-time-line",
          title: "Coming Soon"
        },
        {
          url: { name: "pages-misc-under-maintenance" },
          icon: "ri-settings-2-line",
          title: "Under Maintenance"
        },
        {
          url: { path: "/pages/misc/page-not-found" },
          icon: "ri-error-warning-line",
          title: "Page Not Found - 404"
        },
        {
          url: { name: "pages-misc-not-authorized" },
          icon: "ri-group-line",
          title: "Not Authorized - 401"
        },
        {
          url: { name: "pages-authentication-login-v1" },
          icon: "ri-login-box-line",
          title: "Login V1"
        },
        {
          url: { name: "pages-authentication-login-v2" },
          icon: "ri-login-box-line",
          title: "Login V2"
        },
        {
          url: { name: "pages-authentication-register-v1" },
          icon: "ri-user-add-line",
          title: "Register V1"
        },
        {
          url: { name: "pages-authentication-register-v2" },
          icon: "ri-user-add-line",
          title: "Register V2"
        },
        {
          icon: "ri-mail-check-line",
          title: "Verify Email V1",
          url: { name: "pages-authentication-verify-email-v1" }
        },
        {
          icon: "ri-mail-check-line",
          title: "Verify Email V2",
          url: { name: "pages-authentication-verify-email-v2" }
        },
        {
          url: { name: "pages-authentication-forgot-password-v1" },
          icon: "ri-lock-line",
          title: "Forgot Password V1"
        },
        {
          url: { name: "pages-authentication-forgot-password-v2" },
          icon: "ri-lock-line",
          title: "Forgot Password V2"
        },
        {
          url: { name: "pages-authentication-reset-password-v1" },
          icon: "ri-rotate-lock-line",
          title: "Reset Password V1"
        },
        {
          url: { name: "pages-authentication-reset-password-v2" },
          icon: "ri-rotate-lock-line",
          title: "Reset Password V2"
        },
        {
          icon: "ri-macbook-line",
          title: "Two Steps V1",
          url: { name: "pages-authentication-two-steps-v1" }
        },
        {
          icon: "ri-macbook-line",
          title: "Two Steps V2",
          url: { name: "pages-authentication-two-steps-v2" }
        },
        {
          url: { name: "pages-dialog-examples" },
          icon: "ri-square-line",
          title: "Dialog Examples"
        },
        {
          url: { name: "pages-authentication-register-multi-steps" },
          icon: "ri-user-add-line",
          title: "Register Multi-Steps"
        },
        {
          url: { name: "wizard-examples-checkout" },
          icon: "ri-shopping-cart-2-line",
          title: "Wizard - Checkout"
        },
        {
          url: { name: "wizard-examples-create-deal" },
          icon: "ri-gift-line",
          title: "Wizard - create deal"
        },
        {
          url: { name: "wizard-examples-property-listing" },
          icon: "ri-home-line",
          title: "Wizard - Property Listing"
        },
        {
          url: { name: "apps-roles" },
          icon: "ri-shield-user-line",
          title: "Roles"
        },
        {
          url: { name: "apps-permissions" },
          icon: "ri-shield-user-line",
          title: "Permissions"
        }
      ]
    },
    {
      title: "User Interface",
      category: "userInterface",
      children: [
        {
          url: { name: "pages-typography" },
          icon: "ri-font-size",
          title: "Typography"
        },
        {
          url: { name: "pages-icons" },
          icon: "ri-apps-line",
          title: "Icons"
        },
        {
          url: { name: "pages-cards-card-basic" },
          icon: "ri-square-line",
          title: "Card Basic"
        },
        {
          url: { name: "pages-cards-card-statistics" },
          icon: "ri-bar-chart-box-line",
          title: "Card Statistics"
        },
        {
          url: { name: "pages-cards-card-gamification" },
          icon: "ri-gamepad-line",
          title: "Card Gamification"
        },
        {
          url: { name: "pages-cards-card-actions" },
          icon: "ri-keyboard-line",
          title: "Card Actions"
        },
        {
          url: { name: "pages-cards-card-widgets" },
          icon: "ri-layout-grid-line",
          title: "Card Widgets"
        },
        {
          url: { name: "pages-cards-card-advance" },
          icon: "ri-list-check-2",
          title: "Card Advance"
        },
        {
          url: { name: "components-alert" },
          icon: "ri-alert-line",
          title: "Alerts"
        },
        {
          url: { name: "components-avatar" },
          icon: "ri-user-smile-line",
          title: "Avatars"
        },
        {
          url: { name: "components-badge" },
          icon: "ri-notification-4-line",
          title: "Badges"
        },
        {
          url: { name: "components-button" },
          icon: "ri-square-line",
          title: "Buttons"
        },
        {
          url: { name: "components-chip" },
          icon: "ri-checkbox-blank-line",
          title: "Chips"
        },
        {
          url: { name: "components-dialog" },
          icon: "ri-square-line",
          title: "Dialogs"
        },
        {
          url: { name: "components-list" },
          icon: "ri-list-unordered",
          title: "List"
        },
        {
          url: { name: "components-menu" },
          icon: "ri-menu-line",
          title: "Menu"
        },
        {
          url: { name: "components-pagination" },
          icon: "ri-skip-right-line",
          title: "Pagination"
        },
        {
          url: { name: "components-progress-circular" },
          icon: "ri-donut-chart-line",
          title: "Progress Circular"
        },
        {
          url: { name: "components-progress-linear" },
          icon: "ri-donut-chart-line",
          title: "Progress Linear"
        },
        {
          url: { name: "components-expansion-panel" },
          icon: "ri-align-vertically",
          title: "Expansion Panel"
        },
        {
          url: { name: "components-snackbar" },
          icon: "ri-message-line",
          title: "Snackbar"
        },
        {
          url: { name: "components-tabs" },
          icon: "ri-window-2-line",
          title: "Tabs"
        },
        {
          url: { name: "components-timeline" },
          icon: "ri-git-commit-line",
          title: "Timeline"
        },
        {
          url: { name: "components-tooltip" },
          icon: "ri-chat-quote-line",
          title: "Tooltip"
        },
        {
          url: { name: "extensions-tour" },
          icon: "ri-box-3-line",
          title: "Tour"
        },
        {
          url: { name: "extensions-swiper" },
          icon: "ri-file-image-line",
          title: "Swiper"
        }
      ]
    },
    {
      title: "Forms & Tables",
      category: "formsTables",
      children: [
        {
          url: { name: "forms-textfield" },
          icon: "ri-pencil-line",
          title: "TextField"
        },
        {
          url: { name: "forms-select" },
          icon: "ri-list-check",
          title: "Select"
        },
        {
          url: { name: "forms-checkbox" },
          icon: "ri-checkbox-line",
          title: "Checkbox"
        },
        {
          url: { name: "forms-radio" },
          icon: "ri-radio-button-line",
          title: "Radio"
        },
        {
          url: { name: "forms-combobox" },
          icon: "ri-checkbox-line",
          title: "Combobox"
        },
        {
          url: { name: "forms-date-time-picker" },
          icon: "ri-calendar-todo-line",
          title: "Date Time picker"
        },
        {
          url: { name: "forms-textarea" },
          icon: "ri-file-text-line",
          title: "Textarea"
        },
        {
          url: { name: "forms-switch" },
          icon: "ri-toggle-line",
          title: "Switch"
        },
        {
          url: { name: "forms-file-input" },
          icon: "ri-upload-2-line",
          title: "File Input"
        },
        {
          url: { name: "forms-editors" },
          icon: "ri-file-edit-line",
          title: "Editors"
        },
        {
          url: { name: "forms-rating" },
          icon: "ri-star-fill",
          title: "Form Rating"
        },
        {
          url: { name: "forms-slider" },
          icon: "ri-equalizer-line",
          title: "Slider"
        },
        {
          url: { name: "forms-range-slider" },
          icon: "ri-pencil-line",
          title: "Range Slider"
        },
        {
          url: { name: "forms-form-layouts" },
          icon: "ri-box-3-line",
          title: "Form Layouts"
        },
        {
          url: { name: "forms-form-validation" },
          icon: "ri-check-line",
          title: "Form Validation"
        },
        {
          url: { name: "forms-custom-input" },
          icon: "ri-list-check-3",
          title: "Custom Input"
        },
        {
          url: { name: "forms-autocomplete" },
          icon: "ri-align-left",
          title: "Autocomplete"
        },
        {
          url: { name: "tables-data-table" },
          icon: "ri-window-2-line",
          title: "Data Table"
        },
        {
          url: { name: "tables-simple-table" },
          icon: "ri-window-2-line",
          title: "Simple Table"
        },
        {
          url: { name: "forms-form-wizard-numbered" },
          icon: "ri-align-center",
          title: "Form Wizard Numbered"
        },
        {
          url: { name: "forms-form-wizard-icons" },
          icon: "ri-align-center",
          title: "Form Wizard Icons"
        }
      ]
    },
    {
      title: "Chart & Misc",
      category: "chartsMisc",
      children: [
        {
          url: { name: "charts-apex-chart" },
          icon: "ri-line-chart-line",
          title: "Apex Charts"
        },
        {
          url: { name: "charts-chartjs" },
          icon: "ri-bar-chart-grouped-fill",
          title: "ChartJS"
        },
        {
          url: { name: "access-control" },
          icon: "ri-shield-line",
          title: "Access Control (ACL)"
        }
      ]
    }
  ]
};
const handlerAppBarSearch = [
  // Get Search Items
  http.get("/api/app-bar/search", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
    const searchQuery = is.string(q) ? q : void 0;
    const queryLowered = (searchQuery ?? "").toString().toLowerCase();
    const filteredSearchData = [];
    db$d.searchItems.forEach((item) => {
      if (item.children) {
        const matchingChildren = item.children.filter((child) => child.title.toLowerCase().includes(queryLowered));
        if (matchingChildren.length > 0) {
          const parentCopy = { ...item };
          if (matchingChildren.length > 5)
            parentCopy.children = matchingChildren.slice(0, 5);
          else
            parentCopy.children = matchingChildren;
          filteredSearchData.push(parentCopy);
        }
      }
    });
    if (filteredSearchData.length > 1) {
      filteredSearchData.forEach((item, index2) => {
        if (item.children.length > 3)
          filteredSearchData[index2].children.splice(0, 3);
      });
    }
    return HttpResponse.json([...filteredSearchData], { status: 200 });
  })
];
const avatar1 = "/build/assets/avatar-1-D6-OecY3.png";
const avatar12 = "/build/assets/avatar-4-CetYSkjK.png";
const avatar13 = "/build/assets/avatar-5-qiHDTa-u.png";
const avatar14 = "/build/assets/avatar-6-B-CEKHhh.png";
const avatar15 = "/build/assets/avatar-7-DhQ0_78s.png";
const avatar2 = "/build/assets/avatar-2-DvoCSYXh.png";
const avatar3 = "/build/assets/avatar-3-DsWgWr0y.png";
const avatar5 = "/build/assets/avatar-5-qiHDTa-u.png";
const avatar6 = "/build/assets/avatar-6-B-CEKHhh.png";
const avatar8 = "/build/assets/avatar-8-mzT6D2Lo.png";
const avatar9 = "/build/assets/avatar-1-D6-OecY3.png";
const tutorImg1 = "/build/assets/app-academy-tutor-1-B4ic_jYh.png";
const tutorImg2 = "/build/assets/app-academy-tutor-2-CaiSfIAQ.png";
const tutorImg3 = "/build/assets/app-academy-tutor-3-WKWXnZBa.png";
const tutorImg4 = "/build/assets/app-academy-tutor-4-SM9W8Sx0.png";
const tutorImg5 = "/build/assets/app-academy-tutor-5-D46Shs0k.png";
const tutorImg6 = "/build/assets/app-academy-tutor-6-CJW3eBKz.png";
const db$c = {
  courses: [
    {
      id: 1,
      user: "Lauretta Coie",
      image: avatar1,
      tutorImg: tutorImg1,
      completedTasks: 19,
      totalTasks: 25,
      userCount: 18,
      note: 20,
      view: 83,
      time: "17h 34m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Basics of Angular",
      desc: "Introductory course for Angular and framework basics with TypeScript",
      tags: "Web",
      rating: 4.4,
      ratingCount: 8
    },
    {
      id: 2,
      user: "Maybelle Zmitrovich",
      tutorImg: tutorImg2,
      image: avatar2,
      completedTasks: 48,
      totalTasks: 52,
      userCount: 14,
      note: 48,
      view: 43,
      time: "19h 17m",
      logo: "ri-palette-line",
      color: "warning",
      desc: "Learn how to design a beautiful & engaging mobile app with Figma",
      courseTitle: "UI/UX Design",
      tags: "Design",
      rating: 4.9,
      ratingCount: 10
    },
    {
      id: 3,
      user: "Gertie Langwade",
      image: avatar2,
      tutorImg: tutorImg3,
      completedTasks: 87,
      totalTasks: 100,
      userCount: 19,
      note: 81,
      view: 88,
      time: "16h 16m",
      logo: "ri-reactjs-line",
      color: "info",
      desc: "Master React.js: Build dynamic web apps with front-end technology",
      courseTitle: "React Native",
      tags: "Web",
      rating: 4.8,
      ratingCount: 9
    },
    {
      id: 4,
      user: "Estella Chace",
      image: avatar3,
      completedTasks: 33,
      tutorImg: tutorImg4,
      totalTasks: 50,
      userCount: 28,
      note: 21,
      view: 87,
      time: "15h 49m",
      logo: "ri-pencil-line",
      color: "success",
      courseTitle: "Art & Drawing",
      desc: "Easy-to-follow video & guides show you how to draw animals & people.",
      tags: "Design",
      rating: 4.7,
      ratingCount: 18
    },
    {
      id: 5,
      user: "Euell Bownass",
      tutorImg: tutorImg5,
      image: avatar14,
      completedTasks: 100,
      totalTasks: 100,
      userCount: 13,
      note: 19,
      view: 13,
      time: "12h 42m",
      logo: "ri-star-smile-line",
      color: "primary",
      courseTitle: "Basic Fundamentals",
      desc: "Learn the basics of the most popular programming language.",
      tags: "Web",
      rating: 4.6,
      ratingCount: 11
    },
    {
      id: 6,
      user: "Terrye Etches",
      tutorImg: tutorImg6,
      image: avatar3,
      completedTasks: 23,
      totalTasks: 25,
      userCount: 78,
      note: 36,
      view: 36,
      time: "1h 42m",
      logo: "ri-reactjs-line",
      color: "info",
      courseTitle: "React for Beginners",
      desc: "Learn React in just a couple of afternoons with this immersive course",
      tags: "Web",
      rating: 4.5,
      ratingCount: 68
    },
    {
      id: 7,
      user: "Papageno Sloy",
      tutorImg: tutorImg1,
      image: avatar14,
      completedTasks: 11,
      totalTasks: 20,
      userCount: 74,
      note: 21,
      view: 60,
      time: "4h 59m",
      logo: "ri-star-smile-line",
      color: "primary",
      courseTitle: "The Science of Critical Thinking",
      desc: "Learn how to improve your arguments & make better decisions",
      tags: "Psychology",
      rating: 4.4,
      ratingCount: 64
    },
    {
      id: 8,
      user: "Aviva Penvarden",
      tutorImg: tutorImg2,
      image: avatar1,
      completedTasks: 6,
      totalTasks: 25,
      userCount: 44,
      note: 28,
      view: 13,
      time: "2h 09m",
      logo: "ri-palette-line",
      color: "warning",
      courseTitle: "The Complete Figma UI/UX Course",
      desc: "Learn how to design a beautiful & engaging mobile app with Figma",
      tags: "UI/UX",
      rating: 4.3,
      ratingCount: 34
    },
    {
      id: 9,
      user: "Reggi Tuddenham",
      tutorImg: tutorImg3,
      image: avatar8,
      completedTasks: 67,
      totalTasks: 100,
      userCount: 95,
      note: 34,
      view: 26,
      time: "22h 21m",
      logo: "ri-star-smile-line",
      color: "primary",
      courseTitle: "Advanced Problem Solving Techniques",
      desc: "Learn how to solve problems like a professional with this immersive course",
      tags: "Psychology",
      rating: 4.2,
      ratingCount: 85
    },
    {
      id: 10,
      user: "Aluin Leveritt",
      image: avatar1,
      completedTasks: 49,
      totalTasks: 50,
      tutorImg: tutorImg4,
      userCount: 98,
      note: 51,
      view: 37,
      time: "22h 22m",
      logo: "ri-reactjs-line",
      color: "info",
      courseTitle: "Advanced React Native",
      desc: "Learn how to build the world's most popular mobile OS with this immersive course",
      tags: "Web",
      rating: 4.1,
      ratingCount: 88
    },
    {
      id: 11,
      user: "Ardys Deakin",
      image: avatar9,
      completedTasks: 87,
      totalTasks: 100,
      tutorImg: tutorImg5,
      userCount: 19,
      note: 40,
      view: 32,
      time: "15h 25m",
      logo: "ri-reactjs-line",
      color: "info",
      courseTitle: "Building Web Applications with React",
      desc: "Learn how to build modern web apps with React and Redux",
      tags: "Web",
      rating: 4,
      ratingCount: 9
    },
    {
      id: 12,
      user: "Camel Scown",
      image: avatar1,
      tutorImg: tutorImg6,
      completedTasks: 22,
      totalTasks: 25,
      userCount: 26,
      note: 22,
      view: 77,
      time: "4h 33m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Angular Routing and Navigation",
      desc: "Learn how to build single page applications like a pro with this immersive course",
      tags: "Web",
      rating: 3.9,
      ratingCount: 16
    },
    {
      id: 13,
      user: "Bertina Honnan",
      image: avatar15,
      tutorImg: tutorImg1,
      completedTasks: 11,
      totalTasks: 50,
      userCount: 78,
      note: 75,
      view: 87,
      time: "16h 38m",
      logo: "ri-star-smile-line",
      color: "primary",
      courseTitle: "Creative Problem Solving",
      desc: "Learn how to solve problems creatively and effectively with this immersive course",
      tags: "Psychology",
      rating: 3.8,
      ratingCount: 68
    },
    {
      id: 14,
      user: "Hillyer Wooster",
      image: avatar2,
      tutorImg: tutorImg2,
      completedTasks: 11,
      totalTasks: 25,
      userCount: 92,
      note: 39,
      view: 60,
      time: "22h 43m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Building Web Applications with Angular",
      desc: "Learn how to build modern web apps with Angular and TypeScript",
      tags: "Web",
      rating: 3.7,
      ratingCount: 82
    },
    {
      id: 15,
      user: "Emerson Hance",
      image: avatar12,
      tutorImg: tutorImg3,
      completedTasks: 4,
      totalTasks: 5,
      userCount: 14,
      note: 22,
      view: 51,
      time: "2h 29m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Advanced Angular",
      desc: "Learn how to build modern web apps with Angular and TypeScript",
      tags: "Web",
      rating: 3.6,
      ratingCount: 12
    },
    {
      id: 16,
      user: "Ginger Cruft",
      image: avatar1,
      tutorImg: tutorImg4,
      completedTasks: 22,
      totalTasks: 25,
      userCount: 20,
      note: 12,
      view: 95,
      time: "20h 10m",
      logo: "ri-reactjs-line",
      color: "info",
      courseTitle: "Testing React with Jest and Enzyme",
      desc: "Learn how to build modern web apps with React and Redux",
      tags: "Web",
      rating: 3.5,
      ratingCount: 10
    },
    {
      id: 17,
      user: "Rollie Parsons",
      image: avatar13,
      tutorImg: tutorImg5,
      completedTasks: 11,
      totalTasks: 50,
      userCount: 29,
      note: 20,
      view: 98,
      time: "16h 15m",
      logo: "ri-palette-line",
      color: "wa",
      courseTitle: "Typography Theory",
      desc: "Learn how to build modern web apps with React and Redux",
      tags: "Design",
      rating: 3.4,
      ratingCount: 19
    },
    {
      id: 18,
      user: "Randy Foister",
      image: avatar1,
      completedTasks: 23,
      tutorImg: tutorImg6,
      totalTasks: 100,
      userCount: 20,
      note: 16,
      view: 77,
      time: "4h 31m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Angular Testing",
      desc: "Learn how to build modern web apps with Angular and TypeScript",
      tags: "Web",
      rating: 4.3,
      ratingCount: 10
    },
    {
      id: 19,
      user: "Ashleigh Bartkowiak",
      image: avatar8,
      completedTasks: 17,
      tutorImg: tutorImg1,
      totalTasks: 50,
      userCount: 28,
      note: 91,
      view: 31,
      time: "1h 52m",
      logo: "ri-reactjs-line",
      color: "info",
      courseTitle: "React for Professional",
      desc: "Learn how to build modern web apps with React and Redux",
      tags: "Web",
      rating: 4.2,
      ratingCount: 18
    },
    {
      id: 20,
      user: "Bernarr Markie",
      image: avatar12,
      tutorImg: tutorImg2,
      completedTasks: 1,
      totalTasks: 10,
      userCount: 11,
      note: 33,
      view: 53,
      time: "16h 24m",
      logo: "ri-pencil-line",
      color: "success",
      courseTitle: "The Ultimate Drawing Course",
      desc: "Learn how to draw like a professional with this immersive course",
      tags: "Art",
      rating: 4.1,
      ratingCount: 9
    },
    {
      id: 21,
      user: "Merrilee Whitnell",
      image: avatar2,
      completedTasks: 91,
      totalTasks: 100,
      tutorImg: tutorImg3,
      userCount: 11,
      note: 17,
      view: 74,
      time: "5h 57m",
      logo: "ri-angularjs-line",
      color: "error",
      courseTitle: "Basics of Angular",
      desc: "Introductory course for Angular and framework basics with TypeScript",
      tags: "Web",
      rating: 4,
      ratingCount: 7
    },
    {
      id: 22,
      user: "Thekla Dineges",
      image: avatar1,
      tutorImg: tutorImg4,
      completedTasks: 49,
      totalTasks: 50,
      userCount: 28,
      note: 30,
      view: 54,
      time: "4h 40m",
      logo: "ri-pencil-line",
      color: "success",
      courseTitle: "Introduction to Digital Painting",
      desc: "Learn how to draw like a professional with this immersive course",
      tags: "Art",
      rating: 3.9,
      ratingCount: 18
    },
    {
      id: 23,
      user: "Freda Garham",
      image: avatar5,
      tutorImg: tutorImg5,
      completedTasks: 81,
      totalTasks: 100,
      userCount: 79,
      note: 46,
      view: 27,
      time: "8h 44m",
      logo: "ri-star-smile-line",
      color: "primary",
      courseTitle: "The Science of Everyday Thinking",
      desc: "Learn how to think better, argue better, and choose better",
      tags: "Psychology",
      rating: 3.8,
      ratingCount: 69
    },
    {
      id: 24,
      user: "Leyla Bourley",
      image: avatar13,
      completedTasks: 6,
      tutorImg: tutorImg6,
      totalTasks: 25,
      userCount: 28,
      note: 11,
      view: 77,
      time: "22h 36m",
      logo: "ri-pencil-line",
      color: "success",
      courseTitle: "Color Theory",
      desc: "Learn how to use color like a professional with this immersive course",
      tags: "Design",
      rating: 3.7,
      ratingCount: 18
    },
    {
      id: 25,
      user: "Nevsa Lawey",
      image: avatar6,
      completedTasks: 13,
      totalTasks: 100,
      tutorImg: tutorImg1,
      userCount: 93,
      note: 73,
      view: 67,
      time: "19h 21m",
      logo: "ri-palette-line",
      color: "warning",
      courseTitle: "The Complete Figma Course",
      desc: "Learn how to design a beautiful & engaging mobile app with Figma",
      tags: "UI/UX",
      rating: 3.6,
      ratingCount: 83
    }
  ],
  courseDetails: {
    title: "UI/UX Basic Fundamentals",
    about: "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!",
    instructor: "Devonne Wallbridge",
    instructorAvatar: avatar1,
    instructorPosition: "Web Developer, Designer, and Teacher",
    skillLevel: "All Level",
    totalStudents: 38815,
    language: "English",
    isCaptions: true,
    length: "1.5 total hours",
    totalLectures: 19,
    description: `
        <p class="text-body-1">
          The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you're already taking my other course, you already have all it takes to start designing beautiful websites today!
        </p>
      
        <p class="text-body-1">
          "Best web design course: If you're interested in web design, but want more than just a "how to use WordPress" course, I highly recommend this one." — Florian Giusti
        </p>
      
        <p class="text-body-1">
          "Very helpful to us left-brained people: I am familiar with HTML, CSS, jQuery, and Twitter Bootstrap, but I needed instruction in web design. This course gave me practical, impactful techniques for making websites more beautiful and engaging." — Susan Darlene Cain
        </p>`,
    content: [
      {
        title: "Course Content",
        status: "2 / 5",
        time: "4.4 min",
        id: "section1",
        topics: [
          { title: "1. Welcome to this course", time: "2.4 min", isCompleted: true },
          { title: "2. Watch before you start", time: "4.8 min", isCompleted: true },
          { title: "3. Basic Design theory", time: "5.9 min", isCompleted: false },
          { title: "4. Basic Fundamentals", time: "3.6 min", isCompleted: false },
          { title: "5. What is ui/ux", time: "10.6 min", isCompleted: false }
        ]
      },
      {
        title: "Web design for Developers",
        status: "0 / 4",
        time: "4.8 min",
        id: "section2",
        topics: [
          { title: "1. How to use Pages in Figma", time: "8:31 min", isCompleted: false },
          { title: "2. What is Lo Fi Wireframe", time: "2 min", isCompleted: false },
          { title: "3. How to use color in Figma", time: "5.9 min", isCompleted: false },
          { title: "4. Frames vs Groups in Figma", time: "3.6 min", isCompleted: false }
        ]
      },
      {
        title: "Build Beautiful Websites!",
        status: "0 / 4",
        time: "4.4 min",
        id: "section3",
        topics: [
          { title: "1. Section & Div Block", time: "3:53 min", isCompleted: false },
          { title: "2. Read-Only Version of Chat App", time: "2:03 min", isCompleted: false },
          { title: "3. Webflow Autosave", time: "8 min", isCompleted: false },
          { title: "4. Canvas Settings", time: "3 min", isCompleted: false },
          { title: "5. HTML Tags", time: "10 min", isCompleted: false },
          { title: "6. Footer (Chat App)", time: "9:10 min", isCompleted: false }
        ]
      },
      {
        title: "Final Project",
        status: "0 / 3",
        time: "4.4 min",
        id: "section4",
        topics: [
          { title: "1. Responsive Blog Site", time: "10:00 min", isCompleted: false },
          { title: "2. Responsive Portfolio", time: "13:00 min", isCompleted: false },
          { title: "3. Basic Design theory", time: "15 min", isCompleted: false }
        ]
      }
    ]
  }
};
const paginateArray = (array, perPage, page) => array.slice((page - 1) * perPage, page * perPage);
const handlerAppsAcademy = [
  // 👉 Course
  http.get("/api/apps/academy/courses", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const label = url.searchParams.get("label") || "All Courses";
    const hideCompleted = url.searchParams.get("hideCompleted");
    const page = url.searchParams.get("page");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const searchQuery = is.string(q) ? q : void 0;
    const queryLowered = (searchQuery ?? "").toString().toLowerCase();
    const parsedHideCompleted = destr$1(hideCompleted);
    const hideCompletedLocal = is.boolean(parsedHideCompleted) ? parsedHideCompleted : false;
    const parsedSortBy = destr$1(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr$1(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr$1(itemsPerPage);
    const parsedPage = destr$1(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const filteredCourses = db$c.courses.filter((course) => {
      return (course.courseTitle.toLowerCase().includes(queryLowered) || course.user.toLowerCase().includes(queryLowered)) && !(course.completedTasks === course.totalTasks && hideCompletedLocal) && (label !== "All Courses" ? course.tags.toLocaleLowerCase() === (label == null ? void 0 : label.toLowerCase()) : true);
    });
    if (sortByLocal) {
      if (sortByLocal === "courseName") {
        filteredCourses.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.courseTitle.localeCompare(b2.courseTitle);
          else
            return b2.courseTitle.localeCompare(a2.courseTitle);
        });
      }
      if (sortByLocal === "progress") {
        filteredCourses.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.completedTasks / a2.totalTasks - b2.completedTasks / b2.totalTasks;
          else
            return b2.completedTasks / b2.totalTasks - a2.completedTasks / a2.totalTasks;
        });
      }
    }
    return HttpResponse.json({
      totalCourse: filteredCourses,
      courses: paginateArray(filteredCourses, itemsPerPageLocal, pageLocal),
      total: filteredCourses.length
    }, { status: 200 });
  }),
  // 👉 Course Details
  http.get("/api/apps/academy/course-details", () => {
    return HttpResponse.json(db$c.courseDetails, { status: 200 });
  })
];
const date = /* @__PURE__ */ new Date();
const nextDay = new Date((/* @__PURE__ */ new Date()).getTime() + 24 * 60 * 60 * 1e3);
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);
const db$b = {
  events: [
    {
      id: 1,
      url: "",
      title: "Design Review",
      start: date,
      end: nextDay,
      allDay: false,
      extendedProps: {
        calendar: "Business"
      }
    },
    {
      id: 2,
      url: "",
      title: "Meeting With Client",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: "Business"
      }
    },
    {
      id: 3,
      url: "",
      title: "Family Trip",
      allDay: true,
      start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
      extendedProps: {
        calendar: "Holiday"
      }
    },
    {
      id: 4,
      url: "",
      title: "Doctor's Appointment",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: "Personal"
      }
    },
    {
      id: 5,
      url: "",
      title: "Dart Game?",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: "ETC"
      }
    },
    {
      id: 6,
      url: "",
      title: "Meditation",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: "Personal"
      }
    },
    {
      id: 7,
      url: "",
      title: "Dinner",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: "Family"
      }
    },
    {
      id: 8,
      url: "",
      title: "Product Review",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: "Business"
      }
    },
    {
      id: 9,
      url: "",
      title: "Monthly Meeting",
      start: nextMonth,
      end: nextMonth,
      allDay: true,
      extendedProps: {
        calendar: "Business"
      }
    },
    {
      id: 10,
      url: "",
      title: "Monthly Checkup",
      start: prevMonth,
      end: prevMonth,
      allDay: true,
      extendedProps: {
        calendar: "Personal"
      }
    }
  ]
};
const genId = (array) => {
  var _a2;
  const { length } = array;
  let lastIndex = 0;
  if (length)
    lastIndex = Number((_a2 = array[length - 1]) == null ? void 0 : _a2.id) + 1;
  return lastIndex || length + 1;
};
const handlerAppsCalendar = [
  // 👉 Get Calendar Events
  http.get("/api/apps/calendar", ({ request }) => {
    const url = new URL(request.url);
    const queries = url.searchParams.getAll("calendars");
    const parsedCalendars = destr$1(queries);
    const calendars = is.array(parsedCalendars) ? parsedCalendars : void 0;
    const events = db$b.events.filter((event) => calendars == null ? void 0 : calendars.includes(event.extendedProps.calendar));
    return HttpResponse.json(events, { status: 200 });
  }),
  // 👉 Add Calendar Event
  http.post("/api/apps/calendar", async ({ request }) => {
    const event = await request.json();
    db$b.events.push({
      ...event,
      id: genId(db$b.events)
    });
    return HttpResponse.json(event, { status: 201 });
  }),
  // 👉 Update Calendar Event
  http.put("/api/apps/calendar/:id", async ({ request, params }) => {
    const updatedEvent = await request.json();
    updatedEvent.id = Number(updatedEvent.id);
    const eventId = Number(params.id);
    const currentEvent = db$b.events.find((e2) => e2.id === eventId);
    if (currentEvent) {
      Object.assign(currentEvent, updatedEvent);
      return HttpResponse.json(currentEvent, {
        status: 201
      });
    }
    return new HttpResponse("Something Went Wrong", { status: 400 });
  }),
  // 👉 Delete Calendar Event
  http.delete("/api/apps/calendar/:id", ({ params }) => {
    const eventId = Number(params.id);
    const eventIndex = db$b.events.findIndex((e2) => e2.id === eventId);
    if (eventIndex !== -1) {
      db$b.events.splice(eventIndex, 1);
      return new HttpResponse(null, {
        status: 204
      });
    }
    return new HttpResponse("Something Went Wrong", { status: 400 });
  })
];
const avatar4 = "/build/assets/avatar-4-CetYSkjK.png";
const previousDay = new Date((/* @__PURE__ */ new Date()).getTime() - 24 * 60 * 60 * 1e3);
const dayBeforePreviousDay = new Date((/* @__PURE__ */ new Date()).getTime() - 24 * 60 * 60 * 1e3 * 2);
const db$a = {
  profileUser: {
    id: 11,
    avatar: avatar1,
    fullName: "John Doe",
    role: "admin",
    about: "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie marshmallow.",
    status: "online",
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [
    {
      id: 1,
      fullName: "Gavin Griffith",
      role: "Frontend Developer",
      about: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      avatar: avatar5,
      status: "offline"
    },
    {
      id: 2,
      fullName: "Harriet McBride",
      role: "UI/UX Designer",
      about: "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
      avatar: avatar2,
      status: "busy"
    },
    {
      id: 3,
      fullName: "Danny Conner",
      role: "Town planner",
      about: "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
      avatar: "",
      status: "busy"
    },
    {
      id: 4,
      fullName: "Janie West",
      role: "Data scientist",
      about: "Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.",
      avatar: "",
      status: "online"
    },
    {
      id: 5,
      fullName: "Bryan Murray",
      role: "Dietitian",
      about: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      avatar: avatar5,
      status: "busy"
    },
    {
      id: 6,
      fullName: "Albert Underwood",
      role: "Marketing executive",
      about: "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
      avatar: avatar6,
      status: "online"
    },
    {
      id: 7,
      fullName: "Adele Ross",
      role: "Special educational needs teacher",
      about: "Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.",
      avatar: "",
      status: "online"
    },
    {
      id: 8,
      fullName: "Mark Berry",
      role: "Advertising copywriter",
      about: "Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.",
      avatar: avatar3,
      status: "away"
    },
    {
      id: 9,
      fullName: "Joseph Evans",
      role: "Designer, television/film set",
      about: "Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.",
      avatar: avatar8,
      status: "offline"
    },
    {
      id: 10,
      fullName: "Blake Carter",
      role: "Building surveyor",
      about: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      avatar: avatar4,
      status: "away"
    }
  ],
  chats: [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 0,
      messages: [
        {
          message: "Hi",
          time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Hello. How can I help You?",
          time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Can I get details of my last transaction I made last month? 🤔",
          time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "We need to check if we can provide you such information.",
          time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "I will inform you as I get update on this.",
          time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "If it takes long you can mail me at my mail address.",
          time: String(dayBeforePreviousDay),
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: false,
            isSeen: false
          }
        }
      ]
    },
    {
      id: 2,
      userId: 1,
      unseenMsgs: 1,
      messages: [
        {
          message: "How can we help? We're here for you!",
          time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
          time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "It should use nice Framework.",
          time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Absolutely!",
          time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Our admin is the responsive admin template.!",
          time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Looks clean and fresh UI. 😍",
          time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "It's perfect for my next project.",
          time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "How can I purchase it?",
          time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "Thanks, From our official site  😇",
          time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: "I will purchase it for sure. 👍",
          time: String(previousDay),
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    }
  ]
};
const handlerAppsChat = [
  http.get("/api/apps/chat/chats-and-contacts", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";
    const qLowered = q.toLowerCase();
    const chatsContacts = db$a.chats.map((chat) => {
      const contact = JSON.parse(JSON.stringify(db$a.contacts.find((c2) => c2.id === chat.userId)));
      contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.messages.at(-1) };
      return contact;
    }).reverse();
    const profileUserData = db$a.profileUser;
    const response = {
      chatsContacts: chatsContacts.filter((c2) => c2.fullName.toLowerCase().includes(qLowered)),
      contacts: db$a.contacts.filter((c2) => c2.fullName.toLowerCase().includes(qLowered)),
      profileUser: profileUserData
    };
    return HttpResponse.json(response, { status: 200 });
  }),
  http.get("/api/apps/chat/chats/:userId", ({ params }) => {
    const userId = Number(params.userId);
    const chat = db$a.chats.find((e2) => e2.userId === userId);
    if (chat)
      chat.unseenMsgs = 0;
    return HttpResponse.json({
      chat,
      contact: db$a.contacts.find((c2) => c2.id === userId)
    }, {
      status: 200
    });
  }),
  http.post("/api/apps/chat/chats/:userId", async ({ request, params }) => {
    const chatId = Number(params.userId);
    const { message: message2, senderId } = await request.json();
    let activeChat = db$a.chats.find((chat) => chat.userId === chatId);
    const newMessageData = {
      message: message2,
      time: String(/* @__PURE__ */ new Date()),
      senderId,
      feedback: {
        isSent: true,
        isDelivered: false,
        isSeen: false
      }
    };
    let isNewChat = false;
    if (activeChat === void 0) {
      isNewChat = true;
      db$a.chats.push({
        id: db$a.chats.length + 1,
        userId: chatId,
        unseenMsgs: 0,
        messages: [newMessageData]
      });
      activeChat = db$a.chats.at(-1);
    } else {
      activeChat.messages.push(newMessageData);
    }
    const response = { msg: newMessageData };
    if (isNewChat)
      response.chat = activeChat;
    return HttpResponse.json(response, { status: 201 });
  })
];
const flagAus = "/build/assets/au-B0JQPdxV.png";
const flagBrazil = "/build/assets/br-CkUqAOvB.png";
const flagChina = "/build/assets/cn-abDW3z-l.png";
const flagFr = "/build/assets/fr-M1pdRyRf.png";
const flagIndia = "/build/assets/in-6lVDmp7l.png";
const flagUsa = "/build/assets/us-CX-5gDEE.png";
const avatar10 = "/build/assets/avatar-2-DvoCSYXh.png";
const avatar11 = "/build/assets/avatar-3-DsWgWr0y.png";
const avatar7 = "/build/assets/avatar-7-DhQ0_78s.png";
const product1 = "/build/assets/product-1-CnD-btSp.png";
const product10$1 = "/build/assets/product-10-0mxZ9k36.png";
const product11$1 = "/build/assets/product-11-D3BwVZjL.png";
const product12 = "/build/assets/product-12-B7bD5_Vt.png";
const product13$1 = "/build/assets/product-13-uCWUA1DQ.png";
const product14$1 = "/build/assets/product-14-BiQaJ4lB.png";
const product15$1 = "/build/assets/product-15-JUiFxZt7.png";
const product16$1 = "/build/assets/product-16-BuhBp9B9.png";
const product17$1 = "/build/assets/product-17-DGVKaylX.png";
const product18$1 = "/build/assets/product-18-B4DickTI.png";
const product19$1 = "/build/assets/product-19-CSiIcA4A.png";
const product2 = "/build/assets/product-2-Bf6a6Kgc.png";
const product20$1 = "/build/assets/product-20-BpQUJyBO.png";
const product24$1 = "/build/assets/product-24-BZK7W9Dw.png";
const product3$1 = "/build/assets/product-3-yFb-Mnqo.png";
const product4$1 = "/build/assets/product-4-yHm6IdJg.png";
const product5$1 = "/build/assets/product-5-CsVtFw4Y.png";
const product6$1 = "/build/assets/product-6-D_lICUdY.png";
const product7$1 = "/build/assets/product-7-ImCCPITk.png";
const product8$1 = "/build/assets/product-8-DHA1vSEx.png";
const product9$1 = "/build/assets/product-9-DAIFkVRY.png";
const db$9 = {
  products: [
    {
      id: 1,
      productName: "iPhone 14 Pro",
      category: "Electronics",
      stock: true,
      sku: 19472,
      price: "$999",
      qty: 665,
      status: "Inactive",
      image: product1,
      productBrand: "Super Retina XDR display footnote Pro Motion technology"
    },
    {
      id: 2,
      productName: "Echo Dot (4th Gen)",
      category: "Electronics",
      stock: false,
      sku: 72836,
      price: "$25.50",
      qty: 827,
      status: "Published",
      image: product2,
      productBrand: "Echo Dot Smart speaker with Alexa"
    },
    {
      id: 3,
      productName: "Dohioue Wall Clock",
      category: "Accessories",
      stock: false,
      sku: 29540,
      price: "$16.34",
      qty: 804,
      status: "Published",
      image: product3$1,
      productBrand: "Modern 10 Inch Battery Operated Wall Clocks"
    },
    {
      id: 4,
      productName: "INZCOU Running Shoes",
      category: "Shoes",
      stock: false,
      sku: 49402,
      price: "$36.98",
      qty: 528,
      status: "Scheduled",
      image: product4$1,
      productBrand: "Lightweight Tennis Shoes Non Slip Gym Workout Shoes"
    },
    {
      id: 5,
      productName: "Apple Watch Series 7",
      category: "Office",
      stock: false,
      sku: 46658,
      price: "$799",
      qty: 851,
      status: "Scheduled",
      image: product5$1,
      productBrand: "Starlight Aluminum Case with Starlight Sport Band."
    },
    {
      id: 6,
      productName: "Meta Quest 2",
      category: "Office",
      stock: true,
      sku: 57640,
      price: "$299",
      qty: 962,
      status: "Scheduled",
      image: product6$1,
      productBrand: "Advanced All-In-One Virtual Reality Headset"
    },
    {
      id: 7,
      productName: "MacBook Pro 16",
      category: "Electronics",
      stock: true,
      sku: 92885,
      price: "$2648.95",
      qty: 965,
      status: "Published",
      image: product7$1,
      productBrand: "Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU"
    },
    {
      id: 8,
      productName: "SAMSUNG Galaxy S22 Ultra",
      category: "Electronics",
      stock: true,
      sku: 75257,
      price: "$899",
      qty: 447,
      status: "Published",
      image: product8$1,
      productBrand: "Android Smartphone, 256GB, 8K Camera"
    },
    {
      id: 9,
      productName: "Air Jordan",
      category: "Shoes",
      stock: false,
      sku: 31063,
      price: "$125",
      qty: 942,
      status: "Inactive",
      image: product9$1,
      productBrand: "Air Jordan is a line of basketball shoes produced by Nike"
    },
    {
      id: 10,
      productName: "VISKABACKA",
      category: "Home Decor",
      stock: false,
      sku: 91848,
      price: "$190.45",
      qty: 133,
      status: "Scheduled",
      image: product10$1,
      productBrand: "Armchair, Skartofta black/light grey"
    },
    {
      id: 11,
      productName: "Nintendo Switch",
      category: "Games",
      stock: true,
      sku: 52575,
      price: "$296.99",
      qty: 870,
      status: "Inactive",
      image: product11$1,
      productBrand: "TV Mode, Tabletop Mode, Handheld Mode"
    },
    {
      id: 12,
      productName: "PlayStation 5",
      category: "Games",
      stock: true,
      sku: 59551,
      price: "$499",
      qty: 145,
      status: "Scheduled",
      image: product12,
      productBrand: "Marvel at incredible graphics and experience"
    },
    {
      id: 13,
      productName: "Amazon Fire TV",
      category: "Electronics",
      stock: false,
      sku: 5829,
      price: "$263.49",
      qty: 587,
      status: "Scheduled",
      image: product13$1,
      productBrand: "4K UHD smart TV, stream live TV without cable"
    },
    {
      id: 14,
      productName: "Smiletag Ceramic Vase",
      category: "Home Decor",
      stock: false,
      sku: 24456,
      price: "$34.99",
      qty: 310,
      status: "Scheduled",
      image: product14$1,
      productBrand: "Modern Farmhouse Decor Vase Set of 3"
    },
    {
      id: 15,
      productName: "Apple iPad",
      category: "Electronics",
      stock: true,
      sku: 35946,
      price: "$248.39",
      qty: 468,
      status: "Published",
      image: product15$1,
      productBrand: "10.2-inch Retina Display, 64GB"
    },
    {
      id: 16,
      productName: "BANGE Anti Theft Backpack",
      category: "Office",
      stock: true,
      sku: 41867,
      price: "$79.99",
      qty: 519,
      status: "Inactive",
      image: product16$1,
      productBrand: "Smart Business Laptop Fits 15.6 Inch Notebook"
    },
    {
      id: 17,
      productName: "Xbox Series X/S",
      category: "Games",
      stock: true,
      sku: 43224,
      price: "$49.99",
      qty: 787,
      status: "Published",
      image: product17$1,
      productBrand: "Dual Controller Charger Station Dock"
    },
    {
      id: 18,
      productName: "Canon EOS Rebel T7",
      category: "Electronics",
      stock: true,
      sku: 63474,
      price: "$399",
      qty: 810,
      status: "Scheduled",
      image: product18$1,
      productBrand: "18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor"
    },
    {
      id: 19,
      productName: "Honiway Wall Mirror",
      category: "Home Decor",
      stock: false,
      sku: 15859,
      price: "$23.99",
      qty: 735,
      status: "Inactive",
      image: product19$1,
      productBrand: "Decorative 12 inch Rustic Wood Mirror Sunburst Boho"
    },
    {
      id: 20,
      productName: "Tommaso Veloce Shoes",
      category: "Shoes",
      stock: false,
      sku: 28844,
      price: "$922.09",
      qty: 294,
      status: "Inactive",
      image: product20$1,
      productBrand: "Peloton Shoes Triathlon Road Bike Indoor Cycling"
    },
    {
      id: 21,
      productName: "Zoolab",
      category: "Accessories",
      stock: true,
      sku: 99009,
      price: "$719.13",
      qty: 927,
      status: "Scheduled",
      image: product1,
      productBrand: "Cruickshank-Jones"
    },
    {
      id: 22,
      productName: "Viva",
      category: "Home Decor",
      stock: false,
      sku: 53795,
      price: "$775.80",
      qty: 442,
      status: "Scheduled",
      image: product2,
      productBrand: "Ferry Group"
    },
    {
      id: 23,
      productName: "Transcof",
      category: "Shoes",
      stock: true,
      sku: 77663,
      price: "$817.60",
      qty: 256,
      status: "Published",
      image: product3$1,
      productBrand: "Bruen-Heathcote"
    },
    {
      id: 24,
      productName: "Uerified",
      category: "Accessories",
      stock: false,
      sku: 45282,
      price: "$167.19",
      qty: 728,
      status: "Published",
      image: product4$1,
      productBrand: "Koch Group"
    },
    {
      id: 25,
      productName: "Y-find",
      category: "Home Decor",
      stock: false,
      sku: 5622,
      price: "$189.77",
      qty: 445,
      status: "Scheduled",
      image: product5$1,
      productBrand: "Emmerich and Sons"
    },
    {
      id: 26,
      productName: "Wigtax",
      category: "Accessories",
      stock: true,
      sku: 38920,
      price: "$411.46",
      qty: 857,
      status: "Scheduled",
      image: product6$1,
      productBrand: "Zulauf-Prohaska"
    },
    {
      id: 27,
      productName: "Tempsoft",
      category: "Accessories",
      stock: true,
      sku: 78211,
      price: "$961.76",
      qty: 975,
      status: "Published",
      image: product7$1,
      productBrand: "VonRueden, Rogahn and Kris"
    },
    {
      id: 28,
      productName: "Rt",
      category: "Accessories",
      stock: true,
      sku: 98552,
      price: "$514.14",
      qty: 39,
      status: "Published",
      image: product8$1,
      productBrand: "Romaguera, O'Connell and Abernathy"
    },
    {
      id: 29,
      productName: "Zontrax",
      category: "Shoes",
      stock: true,
      sku: 7151,
      price: "$591.30",
      qty: 74,
      status: "Published",
      image: product9$1,
      productBrand: "Mills, Hagenes and Bednar"
    },
    {
      id: 30,
      productName: "Keylex",
      category: "Accessories",
      stock: true,
      sku: 79571,
      price: "$928.07",
      qty: 245,
      status: "Inactive",
      image: product10$1,
      productBrand: "Sanford, Harvey and Parisian"
    },
    {
      id: 31,
      productName: "Trippledex",
      category: "Home Decor",
      stock: false,
      sku: 51597,
      price: "$312.03",
      qty: 657,
      status: "Inactive",
      image: product11$1,
      productBrand: "Conroy-Bergstrom"
    },
    {
      id: 32,
      productName: "Opela",
      category: "Accessories",
      stock: true,
      sku: 6506,
      price: "$951.29",
      qty: 770,
      status: "Published",
      image: product12,
      productBrand: "Langosh Inc"
    },
    {
      id: 33,
      productName: "Span",
      category: "Shoes",
      stock: false,
      sku: 33523,
      price: "$600.43",
      qty: 622,
      status: "Inactive",
      image: product13$1,
      productBrand: "Jerde-Walsh"
    },
    {
      id: 34,
      productName: "Rank",
      category: "Accessories",
      stock: false,
      sku: 60307,
      price: "$337.90",
      qty: 896,
      status: "Scheduled",
      image: product14$1,
      productBrand: "Barrows, Quitzon and Roberts"
    },
    {
      id: 35,
      productName: "Tempsoft",
      category: "Accessories",
      stock: true,
      sku: 75059,
      price: "$959.47",
      qty: 239,
      status: "Inactive",
      image: product15$1,
      productBrand: "Russel-Grant"
    },
    {
      id: 36,
      productName: "Ventosanzap",
      category: "Accessories",
      stock: true,
      sku: 69072,
      price: "$756.81",
      qty: 410,
      status: "Scheduled",
      image: product16$1,
      productBrand: "O'Conner-Zboncak"
    },
    {
      id: 37,
      productName: "Mat Lam Tam",
      category: "Accessories",
      stock: false,
      sku: 68290,
      price: "$256.86",
      qty: 630,
      status: "Published",
      image: product17$1,
      productBrand: "Rutherford, Heller and Bashirian"
    },
    {
      id: 38,
      productName: "Zamit",
      category: "Shoes",
      stock: true,
      sku: 89552,
      price: "$378.54",
      qty: 247,
      status: "Inactive",
      image: product18$1,
      productBrand: "Swift-Altenwerth"
    },
    {
      id: 39,
      productName: "Tresom",
      category: "Shoes",
      stock: true,
      sku: 50863,
      price: "$166.17",
      qty: 672,
      status: "Inactive",
      image: product19$1,
      productBrand: "O'Kon, Waelchi and Lesch"
    },
    {
      id: 40,
      productName: "Viva",
      category: "Accessories",
      stock: false,
      sku: 90484,
      price: "$745.76",
      qty: 697,
      status: "Published",
      image: product20$1,
      productBrand: "Johnston, Anderson and Metz"
    },
    {
      id: 41,
      productName: "Matsoft",
      category: "Accessories",
      stock: true,
      sku: 76980,
      price: "$603.16",
      qty: 74,
      status: "Published",
      image: product1,
      productBrand: "O'Conner, Paucek and Braun"
    },
    {
      id: 42,
      productName: "Wiodex",
      category: "Home Decor",
      stock: true,
      sku: 66971,
      price: "$772.51",
      qty: 280,
      status: "Published",
      image: product2,
      productBrand: "Wisoky-Kassulke"
    },
    {
      id: 43,
      productName: "Keylex",
      category: "Shoes",
      stock: false,
      sku: 16589,
      price: "$986.22",
      qty: 758,
      status: "Inactive",
      image: product3$1,
      productBrand: "Haag, Bruen and Reichel"
    },
    {
      id: 44,
      productName: "Konklux",
      category: "Accessories",
      stock: true,
      sku: 73896,
      price: "$988.47",
      qty: 14,
      status: "Inactive",
      image: product4$1,
      productBrand: "Ankunding Inc"
    },
    {
      id: 45,
      productName: "Tresom",
      category: "Accessories",
      stock: false,
      sku: 67489,
      price: "$946.62",
      qty: 35,
      status: "Inactive",
      image: product5$1,
      productBrand: "Deckow and Sons"
    },
    {
      id: 46,
      productName: "Quo Lux",
      category: "Shoes",
      stock: true,
      sku: 48177,
      price: "$224.28",
      qty: 935,
      status: "Scheduled",
      image: product1,
      productBrand: "Kreiger, Reynolds and Sporer"
    },
    {
      id: 47,
      productName: "Roldlamis",
      category: "Home Decor",
      stock: true,
      sku: 225,
      price: "$952.14",
      qty: 361,
      status: "Published",
      image: product6$1,
      productBrand: "Kuphal-Abbott"
    },
    {
      id: 48,
      productName: "Tampflex",
      category: "Accessories",
      stock: false,
      sku: 29438,
      price: "$646.21",
      qty: 908,
      status: "Scheduled",
      image: product7$1,
      productBrand: "Romaguera, Schmeler and Volkman"
    },
    {
      id: 49,
      productName: "Span",
      category: "Home Decor",
      stock: true,
      sku: 55666,
      price: "$583.13",
      qty: 898,
      status: "Scheduled",
      image: product24$1,
      productBrand: "Hane-Romaguera"
    },
    {
      id: 50,
      productName: "Zamit",
      category: "Accessories",
      stock: false,
      sku: 55860,
      price: "$273.67",
      qty: 332,
      status: "Published",
      image: product9$1,
      productBrand: "Hoeger-Powlowski"
    }
  ],
  reviews: [
    {
      id: 1,
      product: "iPhone 14 Pro",
      companyName: "Super Retina XDR display footnote Pro Motion technology",
      productImage: product1,
      reviewer: "Zane Scraggs",
      email: "zscraggs0@flavors.me",
      avatar: avatar1,
      date: "5/28/2020",
      status: "Published",
      review: 2,
      head: "lorem ipsum dolor",
      para: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
    },
    {
      id: 2,
      product: "Echo Dot (4th Gen)",
      companyName: "Echo Dot Smart speaker with Alexa",
      productImage: product2,
      reviewer: "Stacey Hallgalley",
      email: "shallgalley1@google.nl",
      avatar: avatar2,
      date: "3/21/2021",
      status: "Published",
      review: 5,
      head: "libero ut",
      para: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
      id: 3,
      product: "Dohioue Wall Clock",
      companyName: "Modern 10 Inch Battery Operated Wall Clocks",
      productImage: product3$1,
      reviewer: "Francyne Coulthurst",
      email: "fcoulthurst2@upenn.edu",
      avatar: avatar3,
      date: "8/10/2020",
      status: "Published",
      review: 2,
      head: "neque libero convallis",
      para: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
      id: 4,
      product: "INZCOU Running Shoes",
      companyName: "Lightweight Tennis Shoes Non Slip Gym Workout Shoes",
      productImage: product4$1,
      reviewer: "Nate De Mitris",
      email: "nde3@intel.com",
      avatar: avatar4,
      date: "12/18/2021",
      status: "Pending",
      review: 3,
      head: "accumsan tellus nisi eu",
      para: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
      id: 5,
      product: "Apple Watch Series 7",
      companyName: "Starlight Aluminum Case with Starlight Sport Band.",
      productImage: product5$1,
      reviewer: "Ethel Zanardii",
      email: "ezanardii4@mapy.cz",
      avatar: avatar5,
      date: "6/12/2020",
      status: "Pending",
      review: 1,
      head: "etiam faucibus cursus",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 6,
      product: "Meta Quest 2",
      companyName: "Advanced All-In-One Virtual Reality Headset",
      productImage: product6$1,
      reviewer: "Fancy Tweedell",
      email: "ftweedell5@telegraph.co.uk",
      avatar: avatar6,
      date: "11/23/2020",
      status: "Pending",
      review: 1,
      head: "in faucibus orci luctus et",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 7,
      product: "MacBook Pro 16",
      companyName: "Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU",
      productImage: product7$1,
      reviewer: "Abeu Gregorace",
      email: "agregorace6@godaddy.com",
      avatar: avatar7,
      date: "9/8/2020",
      status: "Pending",
      review: 2,
      head: "vel enim",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 8,
      product: "SAMSUNG Galaxy S22 Ultra",
      companyName: "Android Smartphone, 256GB, 8K Camera",
      productImage: product8$1,
      reviewer: "Sibylle Goodacre",
      email: "sgoodacre7@washingtonpost.com",
      avatar: avatar8,
      date: "6/10/2021",
      status: "Pending",
      review: 1,
      head: "eget semper rutrum",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 9,
      product: "Air Jordan",
      companyName: "Air Jordan is a line of basketball shoes produced by Nike",
      productImage: product9$1,
      reviewer: "Gisela Leppard",
      email: "gleppard8@yandex.ru",
      avatar: avatar9,
      date: "4/20/2020",
      status: "Published",
      review: 2,
      head: "ut mauris",
      para: "Fusce consequat. Nulla nisl. Nunc nisl."
    },
    {
      id: 10,
      product: "VISKABACKA",
      companyName: "Armchair, Skartofta black/light grey",
      productImage: product10$1,
      reviewer: "Hilario Wheldon",
      email: "hwheldon9@apple.com",
      avatar: avatar10,
      date: "8/21/2020",
      status: "Pending",
      review: 2,
      head: "amet consectetuer adipiscing elit proin",
      para: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
      id: 11,
      product: "Nintendo Switch",
      companyName: "TV Mode, Tabletop Mode, Handheld Mode",
      productImage: product11$1,
      reviewer: "Ivie McGlaughn",
      email: "imcglaughna@mapquest.com",
      avatar: avatar11,
      date: "4/13/2020",
      status: "Pending",
      review: 4,
      head: "eget nunc donec",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 12,
      product: "PlayStation 5",
      companyName: "Marvel at incredible graphics and experience",
      productImage: product12,
      reviewer: "Neel Kingscott",
      email: "nkingscottb@soup.io",
      avatar: avatar12,
      date: "12/27/2020",
      status: "Published",
      review: 1,
      head: "lacus at velit",
      para: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
      id: 13,
      product: "Amazon Fire TV",
      companyName: "4K UHD smart TV, stream live TV without cable",
      productImage: product13$1,
      reviewer: "Tracey Ventham",
      email: "tventhamc@thetimes.co.uk",
      avatar: avatar13,
      date: "3/17/2021",
      status: "Published",
      review: 3,
      head: "at nunc commodo placerat praesent",
      para: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
    },
    {
      id: 14,
      product: "Smiletag Ceramic Vase",
      companyName: "Modern Farmhouse Decor Vase Set of 3",
      productImage: product14$1,
      reviewer: "Rollo Truckell",
      email: "rtruckelld@gravatar.com",
      avatar: avatar14,
      date: "2/23/2020",
      status: "Published",
      review: 5,
      head: "in hac",
      para: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
      id: 15,
      product: "Apple iPad",
      companyName: "10.2-inch Retina Display, 64GB",
      productImage: product15$1,
      reviewer: "Jabez Heggs",
      email: "jheggse@nba.com",
      avatar: avatar15,
      date: "4/21/2020",
      status: "Published",
      review: 1,
      head: "ac consequat",
      para: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
    },
    {
      id: 16,
      product: "BANGE Anti Theft Backpack",
      companyName: "Smart Business Laptop Fits 15.6 Inch Notebook",
      productImage: product16$1,
      reviewer: "Micaela Rowesby",
      email: "mrowesbyf@surveymonkey.com",
      avatar: avatar1,
      date: "12/11/2021",
      status: "Published",
      review: 1,
      head: "mattis egestas metus",
      para: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
      id: 17,
      product: "Xbox Series X/S",
      companyName: "Dual Controller Charger Station Dock",
      productImage: product17$1,
      reviewer: "Blakelee Benza",
      email: "bbenzag@utexas.edu",
      avatar: avatar2,
      date: "4/26/2021",
      status: "Published",
      review: 1,
      head: "sapien placerat",
      para: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
    },
    {
      id: 18,
      product: "Canon EOS Rebel T7",
      companyName: "18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor",
      productImage: product18$1,
      reviewer: "Emery Breitling",
      email: "ebreitlingh@friendfeed.com",
      avatar: avatar1,
      date: "12/1/2020",
      status: "Pending",
      review: 5,
      head: "nec nisi vulputate",
      para: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
      id: 19,
      product: "Honiway Wall Mirror",
      companyName: "Decorative 12 inch Rustic Wood Mirror Sunburst Boho",
      productImage: product19$1,
      reviewer: "Wilona Fields",
      email: "wfieldsi@columbia.edu",
      avatar: avatar1,
      date: "3/30/2020",
      status: "Published",
      review: 1,
      head: "parturient montes nascetur ridiculus",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
      id: 20,
      product: "Tommaso Veloce Shoes",
      companyName: "Peloton Shoes Triathlon Road Bike Indoor Cycling",
      productImage: product20$1,
      reviewer: "Janey Lamprecht",
      email: "jlamprechtj@tuttocitta.it",
      avatar: avatar1,
      date: "9/16/2020",
      status: "Pending",
      review: 1,
      head: "maecenas ut massa quis augue",
      para: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
      id: 21,
      product: "Zoolab",
      companyName: "Cruickshank-Jones",
      productImage: product1,
      reviewer: "Rosene Walsh",
      email: "rwalshk@latimes.com",
      avatar: avatar1,
      date: "7/17/2021",
      status: "Published",
      review: 1,
      head: "convallis nulla",
      para: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
      id: 22,
      product: "Viva",
      companyName: "Ferry Group",
      productImage: product2,
      reviewer: "Buffy Sellen",
      email: "bsellenl@qq.com",
      avatar: avatar1,
      date: "1/9/2021",
      status: "Pending",
      review: 3,
      head: "nunc viverra dapibus",
      para: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
      id: 23,
      product: "Transcof",
      companyName: "Bruen-Heathcote",
      productImage: product3$1,
      reviewer: "Alvis Szymanzyk",
      email: "aszymanzykm@google.cn",
      avatar: avatar1,
      date: "6/11/2020",
      status: "Pending",
      review: 1,
      head: "nullam porttitor",
      para: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
    },
    {
      id: 24,
      product: "Uerified",
      companyName: "Koch Group",
      productImage: product4$1,
      reviewer: "Hatty Morsley",
      email: "hmorsleyn@gov.uk",
      avatar: avatar1,
      date: "2/12/2021",
      status: "Published",
      review: 2,
      head: "metus sapien ut",
      para: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      id: 25,
      product: "Y-find",
      companyName: "Emmerich and Sons",
      productImage: product5$1,
      reviewer: "Jabez Pudner",
      email: "jpudnero@cpanel.net",
      avatar: avatar1,
      date: "10/14/2021",
      status: "Pending",
      review: 4,
      head: "orci luctus et",
      para: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
    },
    {
      id: 26,
      product: "Wigtax",
      companyName: "Zulauf-Prohaska",
      productImage: product6$1,
      reviewer: "Ida Ovill",
      email: "iovillp@newsvine.com",
      avatar: avatar1,
      date: "11/18/2020",
      status: "Published",
      review: 2,
      head: "vestibulum ante ipsum",
      para: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
      id: 27,
      product: "Tempsoft",
      companyName: "VonRueden, Rogahn and Kris",
      productImage: product7$1,
      reviewer: "Suzanne Breckin",
      email: "sbreckinq@jimdo.com",
      avatar: avatar1,
      date: "7/26/2020",
      status: "Published",
      review: 2,
      head: "vel enim",
      para: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
      id: 28,
      product: "Rt",
      companyName: "Romaguera, O'Connell and Abernathy",
      productImage: product8$1,
      reviewer: "Morgana Coote",
      email: "mcooter@tinypic.com",
      avatar: avatar1,
      date: "8/29/2021",
      status: "Pending",
      review: 5,
      head: "cubilia curae mauris",
      para: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
      id: 29,
      product: "Zontrax",
      companyName: "Mills, Hagenes and Bednar",
      productImage: product9$1,
      reviewer: "Wesley Murra",
      email: "wmurras@tumblr.com",
      avatar: avatar1,
      date: "3/20/2021",
      status: "Pending",
      review: 4,
      head: "gravida nisi at",
      para: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
      id: 30,
      product: "Keylex",
      companyName: "Sanford, Harvey and Parisian",
      productImage: product10$1,
      reviewer: "Jobye Varnam",
      email: "jvarnamt@webs.com",
      avatar: avatar1,
      date: "11/24/2020",
      status: "Pending",
      review: 2,
      head: "nec sem",
      para: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
      id: 31,
      product: "Trippledex",
      companyName: "Conroy-Bergstrom",
      productImage: product11$1,
      reviewer: "Bibbye O'Dowd",
      email: "bodowdu@infoseek.co.jp",
      avatar: avatar1,
      date: "7/7/2020",
      status: "Published",
      review: 5,
      head: "odio elementum eu",
      para: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
      id: 32,
      product: "Opela",
      companyName: "Langosh Inc",
      productImage: product12,
      reviewer: "Baldwin Bodimeade",
      email: "bbodimeadev@gnu.org",
      avatar: avatar1,
      date: "3/21/2020",
      status: "Published",
      review: 2,
      head: "in imperdiet et commodo",
      para: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
      id: 33,
      product: "Span",
      companyName: "Jerde-Walsh",
      productImage: product13$1,
      reviewer: "Rozalin Allan",
      email: "rallanw@ucsd.edu",
      avatar: avatar1,
      date: "1/23/2020",
      status: "Published",
      review: 4,
      head: "pellentesque at",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 34,
      product: "Rank",
      companyName: "Barrows, Quitzon and Roberts",
      productImage: product14$1,
      reviewer: "Patsy Bowlas",
      email: "pbowlasx@yandex.ru",
      avatar: avatar1,
      date: "10/7/2020",
      status: "Pending",
      review: 5,
      head: "congue etiam",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 35,
      product: "Tempsoft",
      companyName: "Russel-Grant",
      productImage: product15$1,
      reviewer: "Zsazsa Jansens",
      email: "zjansensy@wikipedia.org",
      avatar: avatar1,
      date: "8/7/2021",
      status: "Pending",
      review: 1,
      head: "eget eros",
      para: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
      id: 36,
      product: "Ventosanzap",
      companyName: "O'Conner-Zboncak",
      productImage: product16$1,
      reviewer: "Denny MacGettigen",
      email: "dmacgettigenz@ca.gov",
      avatar: avatar1,
      date: "2/17/2020",
      status: "Published",
      review: 1,
      head: "vel dapibus",
      para: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
    },
    {
      id: 37,
      product: "Mat Lam Tam",
      companyName: "Rutherford, Heller and Bashirian",
      productImage: product17$1,
      reviewer: "Leia Braunroth",
      email: "lbraunroth10@nytimes.com",
      avatar: avatar1,
      date: "1/28/2021",
      status: "Published",
      review: 4,
      head: "sit amet consectetuer",
      para: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    },
    {
      id: 38,
      product: "Zamit",
      companyName: "Swift-Altenwerth",
      productImage: product18$1,
      reviewer: "Nil Vasilic",
      email: "nvasilic11@ft.com",
      avatar: avatar1,
      date: "1/2/2020",
      status: "Published",
      review: 1,
      head: "blandit non",
      para: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
      id: 39,
      product: "Tresom",
      companyName: "O'Kon, Waelchi and Lesch",
      productImage: product19$1,
      reviewer: "Mandie Forseith",
      email: "mforseith12@phpbb.com",
      avatar: avatar1,
      date: "7/2/2020",
      status: "Published",
      review: 1,
      head: "in ante vestibulum ante",
      para: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
      id: 40,
      product: "Viva",
      companyName: "Johnston, Anderson and Metz",
      productImage: product20$1,
      reviewer: "Audra Pinks",
      email: "apinks13@pinterest.com",
      avatar: avatar1,
      date: "1/6/2020",
      status: "Pending",
      review: 2,
      head: "ante ipsum primis in",
      para: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    },
    {
      id: 41,
      product: "Matsoft",
      companyName: "O'Conner, Paucek and Braun",
      productImage: product1,
      reviewer: "Damita Jarad",
      email: "djarad14@un.org",
      avatar: avatar1,
      date: "10/30/2021",
      status: "Pending",
      review: 4,
      head: "mus etiam vel augue",
      para: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
    },
    {
      id: 42,
      product: "Wiodex",
      companyName: "Wisoky-Kassulke",
      productImage: product2,
      reviewer: "Fowler Drury",
      email: "fdrury15@chicagotribune.com",
      avatar: avatar1,
      date: "2/11/2020",
      status: "Published",
      review: 3,
      head: "dictumst aliquam augue quam",
      para: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
    },
    {
      id: 43,
      product: "Keylex",
      companyName: "Haag, Bruen and Reichel",
      productImage: product3$1,
      reviewer: "Anette Jouen",
      email: "ajouen16@admin.ch",
      avatar: avatar1,
      date: "12/11/2020",
      status: "Published",
      review: 3,
      head: "mauris non ligula pellentesque ultrices",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 44,
      product: "Konklux",
      companyName: "Ankunding Inc",
      productImage: product4$1,
      reviewer: "Candace Fossey",
      email: "cfossey17@live.com",
      avatar: avatar1,
      date: "2/10/2021",
      status: "Pending",
      review: 1,
      head: "vel augue vestibulum ante",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 45,
      product: "Tresom",
      companyName: "Deckow and Sons",
      productImage: product5$1,
      reviewer: "Persis Loades",
      email: "ploades18@g.co",
      avatar: avatar1,
      date: "9/11/2020",
      status: "Pending",
      review: 5,
      head: "convallis nulla neque",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 46,
      product: "Quo Lux",
      companyName: "Kreiger, Reynolds and Sporer",
      productImage: product1,
      reviewer: "Kim Carrel",
      email: "kcarrel19@webnode.com",
      avatar: avatar1,
      date: "5/26/2020",
      status: "Pending",
      review: 3,
      head: "quam turpis adipiscing lorem",
      para: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
      id: 47,
      product: "Roldlamis",
      companyName: "Kuphal-Abbott",
      productImage: product6$1,
      reviewer: "Rodger Broz",
      email: "rbroz1a@omniture.com",
      avatar: avatar1,
      date: "10/5/2020",
      status: "Pending",
      review: 1,
      head: "morbi non",
      para: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
      id: 48,
      product: "Tampflex",
      companyName: "Romaguera, Schmeler and Volkman",
      productImage: product7$1,
      reviewer: "Lauri Shearsby",
      email: "lshearsby1b@goo.ne.jp",
      avatar: avatar1,
      date: "10/18/2020",
      status: "Pending",
      review: 5,
      head: "vel dapibus at diam",
      para: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      id: 49,
      product: "Span",
      companyName: "Hane-Romaguera",
      productImage: product8$1,
      reviewer: "Hannah Drohun",
      email: "hdrohun1c@marketwatch.com",
      avatar: avatar1,
      date: "9/14/2020",
      status: "Pending",
      review: 4,
      head: "morbi porttitor lorem",
      para: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
    },
    {
      id: 50,
      product: "Zamit",
      companyName: "Hoeger-Powlowski",
      productImage: product9$1,
      reviewer: "Celesta Hadden",
      email: "chadden1d@hao123.com",
      avatar: avatar1,
      date: "4/15/2020",
      status: "Published",
      review: 5,
      head: "non sodales",
      para: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
      id: 51,
      product: "Witchip",
      companyName: "Heidenreich, Keeling and Kuhn",
      productImage: product10$1,
      reviewer: "Sollie Dowling",
      email: "sdowling1e@businessweek.com",
      avatar: avatar1,
      date: "9/7/2020",
      status: "Pending",
      review: 1,
      head: "nam congue risus semper porta",
      para: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
      id: 52,
      product: "Ratity",
      companyName: "Beier and Sons",
      productImage: product11$1,
      reviewer: "Esma Tamsett",
      email: "etamsett1f@arstechnica.com",
      avatar: avatar1,
      date: "12/21/2020",
      status: "Pending",
      review: 2,
      head: "rutrum rutrum neque aenean auctor",
      para: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
      id: 53,
      product: "Voltsillam",
      companyName: "Jones and Sons",
      productImage: product12,
      reviewer: "Fee Pieche",
      email: "fpieche1g@usa.gov",
      avatar: avatar1,
      date: "4/28/2020",
      status: "Pending",
      review: 5,
      head: "non mi",
      para: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
    },
    {
      id: 54,
      product: "Voltsillam",
      companyName: "Mohr and Sons",
      productImage: product13$1,
      reviewer: "Frankie Davis",
      email: "fdavis1h@guardian.co.uk",
      avatar: avatar1,
      date: "3/16/2021",
      status: "Published",
      review: 5,
      head: "maecenas pulvinar lobortis est phasellus",
      para: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
      id: 55,
      product: "Matsoft",
      companyName: "Kling-Hayes",
      productImage: product1,
      reviewer: "Byram Wimlet",
      email: "bwimlet1i@craigslist.org",
      avatar: avatar1,
      date: "7/13/2021",
      status: "Pending",
      review: 2,
      head: "tortor sollicitudin",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
      id: 56,
      product: "Rt",
      companyName: "Brekke-Lubowitz",
      productImage: product14$1,
      reviewer: "Maurita Hutchin",
      email: "mhutchin1j@ibm.com",
      avatar: avatar1,
      date: "11/11/2020",
      status: "Pending",
      review: 1,
      head: "odio cras mi pede malesuada",
      para: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
      id: 57,
      product: "Konklab",
      companyName: "Kiehn LLC",
      productImage: product15$1,
      reviewer: "Gorden Leftley",
      email: "gleftley1k@disqus.com",
      avatar: avatar1,
      date: "9/19/2021",
      status: "Published",
      review: 3,
      head: "sed nisl nunc rhoncus",
      para: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
    },
    {
      id: 58,
      product: "Lotstring",
      companyName: "Windler-Corwin",
      productImage: product16$1,
      reviewer: "Raviv Critcher",
      email: "rcritcher1l@icq.com",
      avatar: avatar1,
      date: "4/20/2020",
      status: "Published",
      review: 5,
      head: "bibendum imperdiet nullam orci",
      para: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
      id: 59,
      product: "Keylex",
      companyName: "Reynolds, Buckridge and Schmeler",
      productImage: product17$1,
      reviewer: "Cinda Tersay",
      email: "ctersay1m@berkeley.edu",
      avatar: avatar1,
      date: "3/31/2021",
      status: "Published",
      review: 4,
      head: "curabitur at",
      para: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
    },
    {
      id: 60,
      product: "Transcof",
      companyName: "Jacobs-Farrell",
      productImage: product18$1,
      reviewer: "Raynell Rosenauer",
      email: "rrosenauer1n@360.cn",
      avatar: avatar1,
      date: "6/3/2020",
      status: "Published",
      review: 2,
      head: "massa donec dapibus duis at",
      para: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
      id: 61,
      product: "Opela",
      companyName: "Beier-Bergstrom",
      productImage: product19$1,
      reviewer: "Aurelia Cooley",
      email: "acooley1o@prnewswire.com",
      avatar: avatar1,
      date: "7/27/2020",
      status: "Pending",
      review: 1,
      head: "dictumst maecenas",
      para: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
      id: 62,
      product: "Rlowdesk",
      companyName: "Roob and Sons",
      productImage: product20$1,
      reviewer: "Silvester Vittel",
      email: "svittel1p@eepurl.com",
      avatar: avatar1,
      date: "3/2/2021",
      status: "Pending",
      review: 5,
      head: "elit ac nulla",
      para: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    },
    {
      id: 63,
      product: "Kanlam",
      companyName: "Hauck Group",
      productImage: product2,
      reviewer: "Nester Oliffe",
      email: "noliffe1q@tinypic.com",
      avatar: avatar1,
      date: "3/31/2021",
      status: "Published",
      review: 4,
      head: "sagittis nam congue",
      para: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
    },
    {
      id: 64,
      product: "Rembucket",
      companyName: "Reynolds-Lindgren",
      productImage: product2,
      reviewer: "Cheryl Growcott",
      email: "cgrowcott1r@nifty.com",
      avatar: avatar1,
      date: "10/29/2021",
      status: "Pending",
      review: 4,
      head: "amet diam in magna bibendum",
      para: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
    },
    {
      id: 65,
      product: "Tin",
      companyName: "Stroman and Sons",
      productImage: product2,
      reviewer: "Calhoun Perot",
      email: "cperot1s@goodreads.com",
      avatar: avatar1,
      date: "10/15/2020",
      status: "Published",
      review: 4,
      head: "enim blandit mi",
      para: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
      id: 66,
      product: "Trippledex",
      companyName: "Kihn-Wisoky",
      productImage: product2,
      reviewer: "Winnah Tivenan",
      email: "wtivenan1t@example.com",
      avatar: avatar1,
      date: "5/27/2021",
      status: "Published",
      review: 3,
      head: "pede ullamcorper augue a suscipit",
      para: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    },
    {
      id: 67,
      product: "Redhold",
      companyName: "Konopelski-Hauck",
      productImage: product2,
      reviewer: "Faydra Perceval",
      email: "fperceval1u@psu.edu",
      avatar: avatar1,
      date: "10/2/2020",
      status: "Published",
      review: 2,
      head: "porta volutpat",
      para: "In congue. Etiam justo. Etiam pretium iaculis justo."
    },
    {
      id: 68,
      product: "Pannier",
      companyName: "Rau Inc",
      productImage: product3$1,
      reviewer: "Shauna Runge",
      email: "srunge1v@theatlantic.com",
      avatar: avatar1,
      date: "12/17/2021",
      status: "Published",
      review: 3,
      head: "aliquam lacus morbi quis tortor",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 69,
      product: "Rlexidy",
      companyName: "Torp-Lebsack",
      productImage: product3$1,
      reviewer: "Udell Laurand",
      email: "ulaurand1w@prnewswire.com",
      avatar: avatar1,
      date: "3/14/2021",
      status: "Pending",
      review: 5,
      head: "vestibulum velit id pretium",
      para: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
      id: 70,
      product: "Keylex",
      companyName: "Hane-Bednar",
      productImage: product3$1,
      reviewer: "Charyl Mordaunt",
      email: "cmordaunt1x@bizjournals.com",
      avatar: avatar1,
      date: "4/11/2021",
      status: "Pending",
      review: 1,
      head: "amet eros suspendisse accumsan tortor",
      para: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
      id: 71,
      product: "Kuobam",
      companyName: "Rice Group",
      productImage: product3$1,
      reviewer: "Becki Petit",
      email: "bpetit1y@addtoany.com",
      avatar: avatar1,
      date: "8/9/2021",
      status: "Published",
      review: 5,
      head: "blandit lacinia erat vestibulum sed",
      para: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
      id: 72,
      product: "Ulphazap",
      companyName: "West, White and Rau",
      productImage: product3$1,
      reviewer: "Gallagher Goldes",
      email: "ggoldes1z@microsoft.com",
      avatar: avatar1,
      date: "10/21/2020",
      status: "Pending",
      review: 4,
      head: "vitae ipsum aliquam",
      para: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    {
      id: 73,
      product: "Wiodex",
      companyName: "Keeling-Dicki",
      productImage: product4$1,
      reviewer: "Gunilla Painter",
      email: "gpainter20@drupal.org",
      avatar: avatar1,
      date: "12/11/2021",
      status: "Published",
      review: 4,
      head: "tortor duis mattis egestas",
      para: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
      id: 74,
      product: "Veribet",
      companyName: "Gerlach, Bernier and Jenkins",
      productImage: product4$1,
      reviewer: "Greggory Illingworth",
      email: "gillingworth21@lis",
      avatar: avatar1,
      date: "8/8/2020",
      status: "Pending",
      review: 4,
      head: "pede justo lacinia eget tincidunt",
      para: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
      id: 75,
      product: "Rix San",
      companyName: "Kessler and Sons",
      productImage: product4$1,
      reviewer: "Amabel Reah",
      email: "areah22@indiegogo.com",
      avatar: avatar1,
      date: "11/22/2021",
      status: "Published",
      review: 3,
      head: "sit amet lobortis sapien",
      para: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
      id: 76,
      product: "Zoolab",
      companyName: "Goldner, Lind and Hansen",
      productImage: product4$1,
      reviewer: "Eziechiele Littlejohns",
      email: "elittlejohns23@blogger.com",
      avatar: avatar1,
      date: "8/17/2020",
      status: "Pending",
      review: 4,
      head: "cras non velit",
      para: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
      id: 77,
      product: "Rob",
      companyName: "Trantow Group",
      productImage: product4$1,
      reviewer: "Faythe Hance",
      email: "fhance24@odnoklassniki.ru",
      avatar: avatar1,
      date: "7/1/2021",
      status: "Published",
      review: 5,
      head: "luctus tincidunt nulla mollis molestie",
      para: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
      id: 78,
      product: "Zamit",
      companyName: "Reichel, Hagenes and Nader",
      productImage: product5$1,
      reviewer: "Marie Hazelton",
      email: "mhazelton25@miitbeian.gov.cn",
      avatar: avatar1,
      date: "5/31/2021",
      status: "Published",
      review: 1,
      head: "ut odio cras",
      para: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
      id: 79,
      product: "Zoolab",
      companyName: "Baumbach-Renner",
      productImage: product5$1,
      reviewer: "Vincenz Izsak",
      email: "vizsak26@diigo.com",
      avatar: avatar1,
      date: "3/15/2021",
      status: "Pending",
      review: 2,
      head: "gravida sem",
      para: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
      id: 80,
      product: "Stronghold",
      companyName: "Ullrich, Jacobson and Tillman",
      productImage: product5$1,
      reviewer: "Roch Dehmel",
      email: "rdehmel27@tiny.cc",
      avatar: avatar1,
      date: "4/21/2020",
      status: "Pending",
      review: 3,
      head: "ligula pellentesque ultrices phasellus",
      para: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
      id: 81,
      product: "Rintone",
      companyName: "VonRueden, Kuphal and Lindgren",
      productImage: product5$1,
      reviewer: "Marylin Thewlis",
      email: "mthewlis28@tmall.com",
      avatar: avatar1,
      date: "5/26/2021",
      status: "Pending",
      review: 1,
      head: "elementum nullam varius nulla",
      para: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
      id: 82,
      product: "Temp",
      companyName: "Wintheiser, Bergstrom and Schimmel",
      productImage: product5$1,
      reviewer: "Annissa Mapham",
      email: "amapham29@cbslocal.com",
      avatar: avatar1,
      date: "6/10/2021",
      status: "Published",
      review: 4,
      head: "odio porttitor",
      para: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
      id: 83,
      product: "Rlexidy",
      companyName: "Kuhn and Sons",
      productImage: product6$1,
      reviewer: "Lori Prosek",
      email: "lprosek2a@webs.com",
      avatar: avatar1,
      date: "7/16/2021",
      status: "Published",
      review: 1,
      head: "lacinia sapien quis",
      para: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    },
    {
      id: 84,
      product: "Ronstring",
      companyName: "Goldner, Nitzsche and Rau",
      productImage: product6$1,
      reviewer: "Zelma Jado",
      email: "zjado2b@salon.com",
      avatar: avatar1,
      date: "7/13/2021",
      status: "Pending",
      review: 4,
      head: "mauris sit amet eros suspendisse",
      para: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
      id: 85,
      product: "Rixflex",
      companyName: "Bayer-Beer",
      productImage: product6$1,
      reviewer: "Alfreda Tuffley",
      email: "atuffley2c@drupal.org",
      avatar: avatar1,
      date: "3/25/2020",
      status: "Pending",
      review: 2,
      head: "molestie hendrerit at vulputate vitae",
      para: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
      id: 86,
      product: "Uerified",
      companyName: "Rolfson-Witting",
      productImage: product6$1,
      reviewer: "Arnold Rate",
      email: "arate2d@mit.edu",
      avatar: avatar1,
      date: "7/22/2021",
      status: "Pending",
      review: 1,
      head: "nisi venenatis tristique fusce",
      para: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
      id: 87,
      product: "Stringtough",
      companyName: "Kunde-Gibson",
      productImage: product7$1,
      reviewer: "Felizio Macieiczyk",
      email: "fmacieiczyk2e@sciencedaily.com",
      avatar: avatar1,
      date: "8/27/2020",
      status: "Published",
      review: 4,
      head: "augue quam sollicitudin",
      para: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
      id: 88,
      product: "Qookley",
      companyName: "Kshlerin-Klocko",
      productImage: product7$1,
      reviewer: "Evanne Chamley",
      email: "echamley2f@gmpg.org",
      avatar: avatar1,
      date: "2/1/2021",
      status: "Pending",
      review: 4,
      head: "eget tincidunt",
      para: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
      id: 89,
      product: "Zamit",
      companyName: "Reilly, Marvin and Ondricka",
      productImage: product7$1,
      reviewer: "Dacy Goodlatt",
      email: "dgoodlatt2g@squarespace.com",
      avatar: avatar1,
      date: "4/15/2021",
      status: "Pending",
      review: 4,
      head: "eu interdum eu",
      para: "In congue. Etiam justo. Etiam pretium iaculis justo."
    },
    {
      id: 90,
      product: "Mat Lam Tam",
      companyName: "Ratke-Bauch",
      productImage: product7$1,
      reviewer: "Samantha Vickerman",
      email: "svickerman2h@earthlink.net",
      avatar: avatar1,
      date: "6/30/2021",
      status: "Pending",
      review: 3,
      head: "leo rhoncus sed vestibulum",
      para: "Sed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
      id: 91,
      product: "Rt",
      companyName: "Kautzer-Hayes",
      productImage: product8$1,
      reviewer: "Maura Robichon",
      email: "mrobichon2i@accuweather.com",
      avatar: avatar1,
      date: "4/12/2020",
      status: "Published",
      review: 3,
      head: "dui maecenas",
      para: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
      id: 92,
      product: "Stim",
      companyName: "Bernhard and Sons",
      productImage: product8$1,
      reviewer: "Shelton Bonde",
      email: "sbonde2j@economist.com",
      avatar: avatar1,
      date: "6/1/2021",
      status: "Pending",
      review: 1,
      head: "odio elementum",
      para: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
      id: 93,
      product: "Rix San",
      companyName: "Waters, Harvey and Stiedemann",
      productImage: product8$1,
      reviewer: "Hallsy Flannigan",
      email: "hflannigan2k@printfriendly.com",
      avatar: avatar1,
      date: "6/3/2020",
      status: "Published",
      review: 5,
      head: "ultrices phasellus id",
      para: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
      id: 94,
      product: "Vagram",
      companyName: "Ondricka, Thompson and Kuhn",
      productImage: product8$1,
      reviewer: "Rheta Chazelas",
      email: "rchazelas2l@forbes.com",
      avatar: avatar1,
      date: "2/21/2021",
      status: "Pending",
      review: 1,
      head: "eleifend quam",
      para: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
      id: 95,
      product: "Otcom",
      companyName: "Volkman Group",
      productImage: product9$1,
      reviewer: "Arabelle Uc",
      email: "auc2m@archive.org",
      avatar: avatar1,
      date: "1/27/2021",
      status: "Published",
      review: 4,
      head: "fermentum justo",
      para: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
      id: 96,
      product: "Rixflex",
      companyName: "Dickinson, Spencer and Hyatt",
      productImage: product9$1,
      reviewer: "Pauly Goulden",
      email: "pgoulden2n@ed.gov",
      avatar: avatar1,
      date: "10/2/2020",
      status: "Pending",
      review: 2,
      head: "morbi ut",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
      id: 97,
      product: "Lotstring",
      companyName: "Marvin Inc",
      productImage: product9$1,
      reviewer: "Wilhelmina Benezet",
      email: "wbenezet2o@themeforest.net",
      avatar: avatar1,
      date: "8/12/2021",
      status: "Pending",
      review: 4,
      head: "sapien cursus vestibulum proin",
      para: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
      id: 98,
      product: "Wiodex",
      companyName: "Hayes-Greenholt",
      productImage: product9$1,
      reviewer: "Wallie Paolone",
      email: "wpaolone2p@paginegialle.it",
      avatar: avatar1,
      date: "7/15/2021",
      status: "Published",
      review: 2,
      head: "tincidunt in leo maecenas",
      para: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
      id: 99,
      product: "Komainer",
      companyName: "Gislason, Greenfelder and Wisozk",
      productImage: product10$1,
      reviewer: "Ezmeralda Normavill",
      email: "enormavill2q@infoseek.co.jp",
      avatar: avatar1,
      date: "8/4/2021",
      status: "Pending",
      review: 3,
      head: "pharetra magna ac",
      para: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
      id: 100,
      product: "Ulpha",
      companyName: "Kunde Group",
      productImage: product10$1,
      reviewer: "Lew Dudman",
      email: "ldudman2r@nationalgeographic.com",
      avatar: avatar1,
      date: "11/12/2020",
      status: "Published",
      review: 3,
      head: "suscipit ligula in lacus",
      para: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    }
  ],
  referrals: [
    {
      id: 1,
      user: "Koressa Leyfield",
      email: "kleyfield0@columbia.edu",
      avatar: avatar1,
      referredId: 3398,
      status: "Unpaid",
      value: "$6655.92",
      earning: "$380.17"
    },
    {
      id: 2,
      user: "Tania Brotherhood",
      email: "tbrotherhood1@bing.com",
      avatar: avatar13,
      referredId: 6740,
      status: "Unpaid",
      value: "$2113.04",
      earning: "$716.72"
    },
    {
      id: 3,
      user: "Clemmie Montgomery",
      email: "cmontgomery2@fema.gov",
      avatar: avatar1,
      referredId: 2749,
      status: "Unpaid",
      value: "$6717.09",
      earning: "$699.02"
    },
    {
      id: 4,
      user: "Job Jope",
      email: "jjope3@istockphoto.com",
      avatar: avatar15,
      referredId: 1413,
      status: "Paid",
      value: "$9465.13",
      earning: "$98.23"
    },
    {
      id: 5,
      user: "Christoffer Derell",
      email: "cderell4@apple.com",
      avatar: avatar1,
      referredId: 9176,
      status: "Paid",
      value: "$6202.81",
      earning: "$882.51"
    },
    {
      id: 6,
      user: "Herminia Eyree",
      email: "heyree5@gizmodo.com",
      avatar: avatar8,
      referredId: 6975,
      status: "Unpaid",
      value: "$9802.40",
      earning: "$219.52"
    },
    {
      id: 7,
      user: "Dela Lathwell",
      email: "dlathwell6@webmd.com",
      avatar: avatar9,
      referredId: 4552,
      status: "Paid",
      value: "$6470.46",
      earning: "$831.45"
    },
    {
      id: 8,
      user: "Kirbie Greenhow",
      email: "kgreenhow7@sina.com.cn",
      avatar: avatar1,
      referredId: 4131,
      status: "Unpaid",
      value: "$6199.28",
      earning: "$856.00"
    },
    {
      id: 9,
      user: "Adrienne Tourne",
      email: "atourne8@fotki.com",
      avatar: avatar1,
      referredId: 4072,
      status: "Unpaid",
      value: "$6774.33",
      earning: "$821.78"
    },
    {
      id: 10,
      user: "Vanya Hearons",
      email: "vhearons9@blogspot.com",
      avatar: avatar9,
      referredId: 3070,
      status: "Unpaid",
      value: "$1067.14",
      earning: "$804.91"
    },
    {
      id: 11,
      user: "Garnette Abramcik",
      email: "gabramcika@google.com",
      avatar: avatar11,
      referredId: 7828,
      status: "Unpaid",
      value: "$5375.10",
      earning: "$447.01"
    },
    {
      id: 12,
      user: "Akim Korba",
      email: "akorbab@flickr.com",
      avatar: avatar11,
      referredId: 8561,
      status: "Unpaid",
      value: "$3104.91",
      earning: "$552.75"
    },
    {
      id: 13,
      user: "Cull Scipsey",
      email: "cscipseyc@adobe.com",
      avatar: avatar2,
      referredId: 9287,
      status: "Paid",
      value: "$9375.13",
      earning: "$690.75"
    },
    {
      id: 14,
      user: "Anabal Hakking",
      email: "ahakkingd@paginegialle.it",
      avatar: avatar7,
      referredId: 4892,
      status: "Paid",
      value: "$8797.12",
      earning: "$679.71"
    },
    {
      id: 15,
      user: "Linzy Swiers",
      email: "lswierse@flickr.com",
      avatar: avatar5,
      referredId: 9180,
      status: "Unpaid",
      value: "$2996.63",
      earning: "$610.27"
    },
    {
      id: 16,
      user: "Willy Espinet",
      email: "wespinetf@addtoany.com",
      avatar: avatar1,
      referredId: 9102,
      status: "Paid",
      value: "$7048.18",
      earning: "$369.06"
    },
    {
      id: 17,
      user: "Carter Gommowe",
      email: "cgommoweg@purevolume.com",
      avatar: avatar9,
      referredId: 7049,
      status: "Unpaid",
      value: "$6049.95",
      earning: "$642.78"
    },
    {
      id: 18,
      user: "Andre Kenway",
      email: "akenwayh@rambler.ru",
      avatar: avatar6,
      referredId: 9826,
      status: "Paid",
      value: "$2221.71",
      earning: "$347.19"
    },
    {
      id: 19,
      user: "Quintina Endacott",
      email: "qendacotti@answers.com",
      avatar: avatar9,
      referredId: 4555,
      status: "Paid",
      value: "$5918.70",
      earning: "$543.44"
    },
    {
      id: 20,
      user: "Shurwood Cabble",
      email: "scabblej@twitpic.com",
      avatar: avatar4,
      referredId: 5591,
      status: "Paid",
      value: "$9073.50",
      earning: "$980.62"
    },
    {
      id: 21,
      user: "Thatch Borchardt",
      email: "tborchardtk@bing.com",
      avatar: avatar1,
      referredId: 4491,
      status: "Unpaid",
      value: "$8389.56",
      earning: "$746.81"
    },
    {
      id: 22,
      user: "Fawne O'Scanlan",
      email: "foscanlanl@europa.eu",
      avatar: avatar8,
      referredId: 2946,
      status: "Paid",
      value: "$7471.34",
      earning: "$747.24"
    },
    {
      id: 23,
      user: "Ode Birts",
      email: "obirtsm@sphinn.com",
      avatar: avatar10,
      referredId: 2328,
      status: "Paid",
      value: "$8484.83",
      earning: "$815.79"
    },
    {
      id: 24,
      user: "Bella Michelle",
      email: "bmichellen@npr.org",
      avatar: avatar2,
      referredId: 5725,
      status: "Paid",
      value: "$7088.56",
      earning: "$329.64"
    },
    {
      id: 25,
      user: "Aurora Skpsey",
      email: "askpseyo@cdc.gov",
      avatar: avatar14,
      referredId: 2821,
      status: "Unpaid",
      value: "$2938.87",
      earning: "$317.42"
    },
    {
      id: 26,
      user: "Neddie Maunders",
      email: "nmaundersp@blogspot.com",
      avatar: avatar15,
      referredId: 1661,
      status: "Unpaid",
      value: "$6256.70",
      earning: "$521.01"
    },
    {
      id: 27,
      user: "Andria Chisnell",
      email: "achisnellq@imageshack.us",
      avatar: avatar12,
      referredId: 3363,
      status: "Unpaid",
      value: "$9106.99",
      earning: "$705.15"
    },
    {
      id: 28,
      user: "Reggy Arnao",
      email: "rarnaor@kickstarter.com",
      avatar: avatar3,
      referredId: 7814,
      status: "Rejected",
      value: "$6300.60",
      earning: "$234.28"
    },
    {
      id: 29,
      user: "Shaylah Hasselby",
      email: "shasselbys@odnoklassniki.ru",
      avatar: avatar4,
      referredId: 8324,
      status: "Paid",
      value: "$1874.21",
      earning: "$899.72"
    },
    {
      id: 30,
      user: "Althea Dayce",
      email: "adaycet@youtu.be",
      avatar: avatar8,
      referredId: 6069,
      status: "Paid",
      value: "$6098.09",
      earning: "$269.32"
    },
    {
      id: 31,
      user: "Hector Biaggioli",
      email: "hbiaggioliu@umich.edu",
      avatar: avatar13,
      referredId: 5286,
      status: "Paid",
      value: "$4752.66",
      earning: "$546.63"
    },
    {
      id: 32,
      user: "Mycah Gotcher",
      email: "mgotcherv@yellowbook.com",
      avatar: avatar1,
      referredId: 7944,
      status: "Unpaid",
      value: "$5959.05",
      earning: "$888.10"
    },
    {
      id: 33,
      user: "Garv Scruton",
      email: "gscrutonw@sun.com",
      avatar: avatar13,
      referredId: 6876,
      status: "Unpaid",
      value: "$6588.37",
      earning: "$680.51"
    },
    {
      id: 34,
      user: "Renell Gurnett",
      email: "rgurnettx@businessweek.com",
      avatar: avatar2,
      referredId: 7802,
      status: "Rejected",
      value: "$7542.30",
      earning: "$208.96"
    },
    {
      id: 35,
      user: "Toinette Kilgrew",
      email: "tkilgrewy@wikispaces.com",
      avatar: avatar15,
      referredId: 6946,
      status: "Paid",
      value: "$4447.48",
      earning: "$410.48"
    },
    {
      id: 36,
      user: "Corinne Cockshtt",
      email: "ccockshttz@house.gov",
      avatar: avatar7,
      referredId: 1372,
      status: "Paid",
      value: "$3700.16",
      earning: "$858.94"
    },
    {
      id: 37,
      user: "Isis Yurkiewicz",
      email: "iyurkiewicz10@addthis.com",
      avatar: avatar4,
      referredId: 2384,
      status: "Unpaid",
      value: "$7456.86",
      earning: "$280.52"
    },
    {
      id: 38,
      user: "Gerianna Nott",
      email: "gnott11@youtu.be",
      avatar: avatar5,
      referredId: 1971,
      status: "Paid",
      value: "$5563.94",
      earning: "$515.34"
    },
    {
      id: 39,
      user: "Calli Mewes",
      email: "cmewes12@mit.edu",
      avatar: avatar13,
      referredId: 7323,
      status: "Unpaid",
      value: "$7400.29",
      earning: "$167.44"
    },
    {
      id: 40,
      user: "Sonnnie Keeltagh",
      email: "skeeltagh13@typepad.com",
      avatar: avatar7,
      referredId: 5719,
      status: "Paid",
      value: "$1977.34",
      earning: "$652.01"
    },
    {
      id: 41,
      user: "Penelope Hause",
      email: "phause14@netlog.com",
      avatar: avatar3,
      referredId: 9347,
      status: "Paid",
      value: "$2155.12",
      earning: "$101.49"
    },
    {
      id: 42,
      user: "Dannie Romeo",
      email: "dromeo15@ask.com",
      avatar: avatar1,
      referredId: 1559,
      status: "Rejected",
      value: "$7110.30",
      earning: "$95.40"
    },
    {
      id: 43,
      user: "Keely Giannazzi",
      email: "kgiannazzi16@mit.edu",
      avatar: avatar8,
      referredId: 3307,
      status: "Paid",
      value: "$2178.00",
      earning: "$173.10"
    },
    {
      id: 44,
      user: "Kassia Mottini",
      email: "kmottini17@usa.gov",
      avatar: avatar7,
      referredId: 4426,
      status: "Rejected",
      value: "$6921.60",
      earning: "$365.93"
    },
    {
      id: 45,
      user: "Burr Scrauniage",
      email: "bscrauniage18@wunderground.com",
      avatar: avatar8,
      referredId: 3570,
      status: "Paid",
      value: "$6891.09",
      earning: "$900.25"
    }
  ],
  orderData: [
    {
      id: 1,
      order: 5434,
      customer: "Gabrielle Feyer",
      email: "gfeyer0@nyu.edu",
      avatar: avatar8,
      payment: 1,
      status: "Delivered",
      spent: 73.98,
      method: "paypalLogo",
      date: "5/16/2022",
      time: "2:11 AM",
      methodNumber: 6522
    },
    {
      id: 2,
      order: 6745,
      customer: "Jackson Deignan",
      email: "jdeignan1@dell.com",
      avatar: avatar8,
      payment: 3,
      status: "Delivered",
      spent: 100.39,
      method: "paypalLogo",
      date: "5/3/2023",
      time: "7:26 PM",
      methodNumber: 7538
    },
    {
      id: 3,
      order: 6087,
      customer: "Tanya Crum",
      email: "tcrum2@yandex.ru",
      avatar: avatar7,
      payment: 4,
      status: "Ready to Pickup",
      spent: 809.26,
      method: "mastercard",
      date: "12/15/2022",
      time: "6:51 PM",
      methodNumber: 5170
    },
    {
      id: 4,
      order: 7825,
      customer: "Dallis Dillestone",
      email: "ddillestone3@archive.org",
      avatar: avatar4,
      payment: 3,
      status: "Ready to Pickup",
      spent: 617.64,
      method: "paypalLogo",
      date: "8/5/2022",
      time: "9:18 PM",
      methodNumber: 1748
    },
    {
      id: 5,
      order: 5604,
      customer: "Conan Kennham",
      email: "ckennham4@cnn.com",
      avatar: avatar9,
      payment: 3,
      status: "Delivered",
      spent: 384.41,
      method: "mastercard",
      date: "6/18/2022",
      time: "3:34 AM",
      methodNumber: 6425
    },
    {
      id: 6,
      order: 5390,
      customer: "Daven Brocket",
      email: "dbrocket5@epa.gov",
      avatar: avatar13,
      payment: 3,
      status: "Out for Delivery",
      spent: 162.85,
      method: "paypalLogo",
      date: "10/14/2022",
      time: "6:12 PM",
      methodNumber: 1694
    },
    {
      id: 7,
      order: 7279,
      customer: "Rex Farbrace",
      email: "rfarbrace6@sourceforge.net",
      avatar: avatar2,
      payment: 2,
      status: "Out for Delivery",
      spent: 591.47,
      method: "mastercard",
      date: "8/8/2022",
      time: "6:09 PM",
      methodNumber: 1883
    },
    {
      id: 8,
      order: 7003,
      customer: "Tann Biaggetti",
      email: "tbiaggetti7@eepurl.com",
      avatar: avatar8,
      payment: 4,
      status: "Delivered",
      spent: 664.51,
      method: "mastercard",
      date: "6/10/2022",
      time: "12:59 PM",
      methodNumber: 5047
    },
    {
      id: 9,
      order: 8632,
      customer: "Abagael Drogan",
      email: "adrogan8@storify.com",
      avatar: avatar11,
      payment: 4,
      status: "Dispatched",
      spent: 717.72,
      method: "paypalLogo",
      date: "10/25/2022",
      time: "10:48 AM",
      methodNumber: 1945
    },
    {
      id: 10,
      order: 8501,
      customer: "Esme Sangwin",
      email: "esangwin9@taobao.com",
      avatar: "",
      payment: 3,
      status: "Ready to Pickup",
      spent: 477.42,
      method: "mastercard",
      date: "11/2/2022",
      time: "2:19 PM",
      methodNumber: 3526
    },
    {
      id: 11,
      order: 6498,
      customer: "Jarib Siverns",
      email: "jsivernsa@dailymail.co.uk",
      avatar: "",
      payment: 4,
      status: "Out for Delivery",
      spent: 71.42,
      method: "mastercard",
      date: "8/25/2022",
      time: "8:15 PM",
      methodNumber: 8325
    },
    {
      id: 12,
      order: 7820,
      customer: "Christie Le Moucheux",
      email: "cleb@wikia.com",
      avatar: avatar8,
      payment: 1,
      status: "Delivered",
      spent: 894.55,
      method: "paypalLogo",
      date: "11/3/2022",
      time: "11:31 AM",
      methodNumber: 2034
    },
    {
      id: 13,
      order: 8229,
      customer: "Debby Albury",
      email: "dalburyc@homestead.com",
      avatar: "",
      payment: 2,
      status: "Delivered",
      spent: 279.8,
      method: "mastercard",
      date: "3/21/2023",
      time: "3:28 PM",
      methodNumber: 2751
    },
    {
      id: 14,
      order: 9076,
      customer: "Alexia Speaks",
      email: "aspeaksd@omniture.com",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 156.41,
      method: "paypalLogo",
      date: "11/26/2022",
      time: "9:16 PM",
      methodNumber: 3234
    },
    {
      id: 15,
      order: 6045,
      customer: "Orel Leamy",
      email: "oleamye@cbc.ca",
      avatar: "",
      payment: 2,
      status: "Delivered",
      spent: 614.39,
      method: "mastercard",
      date: "11/20/2022",
      time: "11:58 PM",
      methodNumber: 5209
    },
    {
      id: 16,
      order: 8005,
      customer: "Maurits Nealey",
      email: "mnealeyf@japanpost.jp",
      avatar: avatar7,
      payment: 1,
      status: "Delivered",
      spent: 203.72,
      method: "mastercard",
      date: "4/22/2023",
      time: "3:01 PM",
      methodNumber: 1555
    },
    {
      id: 17,
      order: 6917,
      customer: "Emmalee Mason",
      email: "emasong@rakuten.co.jp",
      avatar: "",
      payment: 4,
      status: "Dispatched",
      spent: 491.83,
      method: "mastercard",
      date: "9/1/2022",
      time: "10:31 PM",
      methodNumber: 7013
    },
    {
      id: 18,
      order: 6918,
      customer: "Tibold Schops",
      email: "tschopsh@reference.com",
      avatar: avatar7,
      payment: 4,
      status: "Out for Delivery",
      spent: 708.43,
      method: "paypalLogo",
      date: "6/15/2022",
      time: "11:03 AM",
      methodNumber: 4636
    },
    {
      id: 19,
      order: 8733,
      customer: "Godwin Greatbanks",
      email: "ggreatbanksi@guardian.co.uk",
      avatar: "",
      payment: 2,
      status: "Out for Delivery",
      spent: 849.78,
      method: "paypalLogo",
      date: "8/31/2022",
      time: "10:02 AM",
      methodNumber: 6846
    },
    {
      id: 20,
      order: 6630,
      customer: "Conn Cathery",
      email: "ccatheryj@w3.org",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 855.31,
      method: "paypalLogo",
      date: "1/2/2023",
      time: "4:35 PM",
      methodNumber: 4813
    },
    {
      id: 21,
      order: 8963,
      customer: "Riccardo McKerton",
      email: "rmckertonk@gravatar.com",
      avatar: avatar2,
      payment: 2,
      status: "Dispatched",
      spent: 458.76,
      method: "paypalLogo",
      date: "9/17/2022",
      time: "6:00 AM",
      methodNumber: 8197
    },
    {
      id: 22,
      order: 6916,
      customer: "Isa Cartmel",
      email: "icartmell@scientificamerican.com",
      avatar: avatar10,
      payment: 3,
      status: "Dispatched",
      spent: 914.48,
      method: "paypalLogo",
      date: "12/21/2022",
      time: "8:35 PM",
      methodNumber: 2844
    },
    {
      id: 23,
      order: 6647,
      customer: "Yoko Beetles",
      email: "ybeetlesm@discovery.com",
      avatar: avatar15,
      payment: 1,
      status: "Delivered",
      spent: 948.07,
      method: "mastercard",
      date: "1/24/2023",
      time: "12:01 AM",
      methodNumber: 2562
    },
    {
      id: 24,
      order: 8044,
      customer: "Nowell Cornford",
      email: "ncornfordn@sogou.com",
      avatar: avatar5,
      payment: 4,
      status: "Ready to Pickup",
      spent: 525.6,
      method: "paypalLogo",
      date: "8/22/2022",
      time: "6:36 PM",
      methodNumber: 2030
    },
    {
      id: 25,
      order: 9879,
      customer: "Brandy McIlvenna",
      email: "bmcilvennao@51.la",
      avatar: "",
      payment: 1,
      status: "Out for Delivery",
      spent: 100.18,
      method: "mastercard",
      date: "12/23/2022",
      time: "7:14 AM",
      methodNumber: 4686
    },
    {
      id: 26,
      order: 5551,
      customer: "Zondra Klimkin",
      email: "zklimkinp@ed.gov",
      avatar: avatar9,
      payment: 3,
      status: "Delivered",
      spent: 463.32,
      method: "mastercard",
      date: "12/20/2022",
      time: "12:01 PM",
      methodNumber: 6209
    },
    {
      id: 27,
      order: 5905,
      customer: "Elyn Aizic",
      email: "eaizicq@live.com",
      avatar: "",
      payment: 4,
      status: "Dispatched",
      spent: 581.81,
      method: "mastercard",
      date: "6/1/2022",
      time: "2:31 AM",
      methodNumber: 7031
    },
    {
      id: 28,
      order: 7616,
      customer: "Leoine Talbot",
      email: "ltalbotr@prweb.com",
      avatar: "",
      payment: 1,
      status: "Delivered",
      spent: 118.75,
      method: "paypalLogo",
      date: "10/13/2022",
      time: "12:57 AM",
      methodNumber: 4387
    },
    {
      id: 29,
      order: 6624,
      customer: "Fayre Screech",
      email: "fscreechs@army.mil",
      avatar: "",
      payment: 3,
      status: "Out for Delivery",
      spent: 774.91,
      method: "mastercard",
      date: "4/17/2023",
      time: "6:43 PM",
      methodNumber: 2077
    },
    {
      id: 30,
      order: 8653,
      customer: "Roxanne Rablen",
      email: "rrablent@alexa.com",
      avatar: "",
      payment: 1,
      status: "Delivered",
      spent: 212.75,
      method: "mastercard",
      date: "3/23/2023",
      time: "10:07 PM",
      methodNumber: 2696
    },
    {
      id: 31,
      order: 8076,
      customer: "Rebekkah Newsham",
      email: "rnewshamu@hhs.gov",
      avatar: avatar10,
      payment: 2,
      status: "Ready to Pickup",
      spent: 778.56,
      method: "mastercard",
      date: "7/1/2022",
      time: "10:37 PM",
      methodNumber: 8071
    },
    {
      id: 32,
      order: 7972,
      customer: "Crawford Beart",
      email: "cbeartv@senate.gov",
      avatar: "",
      payment: 3,
      status: "Delivered",
      spent: 378.74,
      method: "mastercard",
      date: "11/23/2022",
      time: "6:45 AM",
      methodNumber: 3993
    },
    {
      id: 33,
      order: 6979,
      customer: "Cristine Easom",
      email: "ceasomw@theguardian.com",
      avatar: avatar9,
      payment: 2,
      status: "Out for Delivery",
      spent: 595.84,
      method: "mastercard",
      date: "4/15/2023",
      time: "10:21 PM",
      methodNumber: 2356
    },
    {
      id: 34,
      order: 9438,
      customer: "Bessy Vasechkin",
      email: "bvasechkinx@plala.or.jp",
      avatar: "",
      payment: 1,
      status: "Dispatched",
      spent: 257.18,
      method: "paypalLogo",
      date: "11/10/2022",
      time: "8:12 PM",
      methodNumber: 1776
    },
    {
      id: 35,
      order: 5666,
      customer: "Joanne Morl",
      email: "jmorly@google.fr",
      avatar: "",
      payment: 1,
      status: "Ready to Pickup",
      spent: 368.26,
      method: "paypalLogo",
      date: "11/17/2022",
      time: "2:32 PM",
      methodNumber: 6276
    },
    {
      id: 36,
      order: 7128,
      customer: "Cobbie Brameld",
      email: "cbrameldz@biglobe.ne.jp",
      avatar: "",
      payment: 4,
      status: "Delivered",
      spent: 484.14,
      method: "paypalLogo",
      date: "6/13/2022",
      time: "9:36 PM",
      methodNumber: 3876
    },
    {
      id: 37,
      order: 5834,
      customer: "Turner Braban",
      email: "tbraban10@lulu.com",
      avatar: avatar14,
      payment: 2,
      status: "Delivered",
      spent: 135.04,
      method: "mastercard",
      date: "10/14/2022",
      time: "4:39 AM",
      methodNumber: 2211
    },
    {
      id: 38,
      order: 7417,
      customer: "Rudd Aisman",
      email: "raisman11@huffingtonpost.com",
      avatar: "",
      payment: 2,
      status: "Delivered",
      spent: 598.61,
      method: "mastercard",
      date: "9/29/2022",
      time: "10:31 AM",
      methodNumber: 1979
    },
    {
      id: 39,
      order: 5574,
      customer: "Rakel Hearle",
      email: "rhearle12@zimbio.com",
      avatar: avatar8,
      payment: 1,
      status: "Out for Delivery",
      spent: 612.56,
      method: "paypalLogo",
      date: "11/29/2022",
      time: "2:59 AM",
      methodNumber: 8328
    },
    {
      id: 40,
      order: 7834,
      customer: "Cull Otson",
      email: "cotson13@angelfire.com",
      avatar: avatar10,
      payment: 4,
      status: "Delivered",
      spent: 413.7,
      method: "mastercard",
      date: "7/23/2022",
      time: "3:15 PM",
      methodNumber: 3901
    },
    {
      id: 41,
      order: 9877,
      customer: "Jedd Lafont",
      email: "jlafont14@vimeo.com",
      avatar: avatar8,
      payment: 1,
      status: "Ready to Pickup",
      spent: 67.26,
      method: "paypalLogo",
      date: "11/1/2022",
      time: "8:05 AM",
      methodNumber: 7245
    },
    {
      id: 42,
      order: 5781,
      customer: "Maribeth Roffe",
      email: "mroffe15@hostgator.com",
      avatar: avatar6,
      payment: 1,
      status: "Out for Delivery",
      spent: 697.13,
      method: "paypalLogo",
      date: "9/30/2022",
      time: "8:03 PM",
      methodNumber: 8102
    },
    {
      id: 43,
      order: 5299,
      customer: "Ximenez Callaghan",
      email: "xcallaghan16@reuters.com",
      avatar: avatar6,
      payment: 2,
      status: "Dispatched",
      spent: 528.17,
      method: "mastercard",
      date: "12/30/2022",
      time: "12:21 AM",
      methodNumber: 3075
    },
    {
      id: 44,
      order: 6622,
      customer: "Oliy Seton",
      email: "oseton17@cargocollective.com",
      avatar: avatar7,
      payment: 2,
      status: "Delivered",
      spent: 662.07,
      method: "paypalLogo",
      date: "12/29/2022",
      time: "8:45 PM",
      methodNumber: 5021
    },
    {
      id: 45,
      order: 7387,
      customer: "Conroy Conan",
      email: "cconan18@jigsy.com",
      avatar: avatar8,
      payment: 1,
      status: "Delivered",
      spent: 65.73,
      method: "paypalLogo",
      date: "6/11/2022",
      time: "10:11 AM",
      methodNumber: 3954
    },
    {
      id: 46,
      order: 5078,
      customer: "Elianore Russ",
      email: "eruss19@usa.gov",
      avatar: "",
      payment: 2,
      status: "Ready to Pickup",
      spent: 741.28,
      method: "mastercard",
      date: "8/28/2022",
      time: "3:45 PM",
      methodNumber: 2128
    },
    {
      id: 47,
      order: 9631,
      customer: "Farlee Gerard",
      email: "fgerard1a@mit.edu",
      avatar: "",
      payment: 2,
      status: "Ready to Pickup",
      spent: 161.3,
      method: "paypalLogo",
      date: "6/8/2022",
      time: "4:16 PM",
      methodNumber: 6781
    },
    {
      id: 48,
      order: 7869,
      customer: "Gino Fairbrass",
      email: "gfairbrass1b@spotify.com",
      avatar: "",
      payment: 4,
      status: "Ready to Pickup",
      spent: 644.9,
      method: "paypalLogo",
      date: "6/23/2022",
      time: "10:36 AM",
      methodNumber: 5470
    },
    {
      id: 49,
      order: 8643,
      customer: "Dory Carter",
      email: "dcarter1c@sphinn.com",
      avatar: avatar2,
      payment: 3,
      status: "Delivered",
      spent: 462.45,
      method: "mastercard",
      date: "11/10/2022",
      time: "2:45 AM",
      methodNumber: 4647
    },
    {
      id: 50,
      order: 7395,
      customer: "Shane Galbreth",
      email: "sgalbreth1d@mac.com",
      avatar: avatar8,
      payment: 4,
      status: "Delivered",
      spent: 731.58,
      method: "mastercard",
      date: "5/20/2022",
      time: "8:09 PM",
      methodNumber: 4113
    },
    {
      id: 51,
      order: 7168,
      customer: "Alicea Macci",
      email: "amacci1e@bbc.co.uk",
      avatar: "",
      payment: 1,
      status: "Ready to Pickup",
      spent: 556.94,
      method: "mastercard",
      date: "6/10/2022",
      time: "4:00 PM",
      methodNumber: 6798
    },
    {
      id: 52,
      order: 5775,
      customer: "Terrijo Copello",
      email: "tcopello1f@netlog.com",
      avatar: "",
      payment: 3,
      status: "Dispatched",
      spent: 687.27,
      method: "paypalLogo",
      date: "6/23/2022",
      time: "6:41 PM",
      methodNumber: 3529
    },
    {
      id: 53,
      order: 6558,
      customer: "Bambi Yerby",
      email: "byerby1g@sohu.com",
      avatar: "",
      payment: 1,
      status: "Out for Delivery",
      spent: 309.15,
      method: "paypalLogo",
      date: "10/18/2022",
      time: "8:40 PM",
      methodNumber: 1664
    },
    {
      id: 54,
      order: 7766,
      customer: "Corny Linstead",
      email: "clinstead1h@icio.us",
      avatar: "",
      payment: 4,
      status: "Dispatched",
      spent: 805.73,
      method: "paypalLogo",
      date: "6/25/2022",
      time: "8:01 AM",
      methodNumber: 7931
    },
    {
      id: 55,
      order: 9305,
      customer: "Pauline Pfaffe",
      email: "ppfaffe1i@wikia.com",
      avatar: "",
      payment: 4,
      status: "Ready to Pickup",
      spent: 769.47,
      method: "paypalLogo",
      date: "4/17/2023",
      time: "8:05 AM",
      methodNumber: 8412
    },
    {
      id: 56,
      order: 7886,
      customer: "Ilka Adanet",
      email: "iadanet1j@tripod.com",
      avatar: "",
      payment: 4,
      status: "Ready to Pickup",
      spent: 899.35,
      method: "paypalLogo",
      date: "2/2/2023",
      time: "6:13 PM",
      methodNumber: 3946
    },
    {
      id: 57,
      order: 8333,
      customer: "Charlena Sabberton",
      email: "csabberton1k@vinaora.com",
      avatar: "",
      payment: 3,
      status: "Out for Delivery",
      spent: 201.84,
      method: "paypalLogo",
      date: "6/11/2022",
      time: "10:15 PM",
      methodNumber: 3294
    },
    {
      id: 58,
      order: 7044,
      customer: "Harwell Vallack",
      email: "hvallack1l@sakura.ne.jp",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 547.07,
      method: "paypalLogo",
      date: "6/1/2022",
      time: "1:29 PM",
      methodNumber: 5571
    },
    {
      id: 59,
      order: 5414,
      customer: "Juliette Douthwaite",
      email: "jdouthwaite1m@marketwatch.com",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 89.46,
      method: "mastercard",
      date: "9/26/2022",
      time: "11:40 AM",
      methodNumber: 4380
    },
    {
      id: 60,
      order: 7102,
      customer: "Nydia Brandel",
      email: "nbrandel1n@cnet.com",
      avatar: "",
      payment: 3,
      status: "Out for Delivery",
      spent: 417.49,
      method: "paypalLogo",
      date: "2/5/2023",
      time: "11:42 PM",
      methodNumber: 5856
    },
    {
      id: 61,
      order: 8784,
      customer: "Gaby Edy",
      email: "gedy1o@latimes.com",
      avatar: avatar9,
      payment: 4,
      status: "Out for Delivery",
      spent: 589.37,
      method: "mastercard",
      date: "2/5/2023",
      time: "8:46 AM",
      methodNumber: 1923
    },
    {
      id: 62,
      order: 9885,
      customer: "Lacey Swenson",
      email: "lswenson1p@booking.com",
      avatar: "",
      payment: 2,
      status: "Ready to Pickup",
      spent: 62.71,
      method: "mastercard",
      date: "9/11/2022",
      time: "7:41 PM",
      methodNumber: 4367
    },
    {
      id: 63,
      order: 5387,
      customer: "Bradan Edgworth",
      email: "bedgworth1q@typepad.com",
      avatar: avatar7,
      payment: 4,
      status: "Out for Delivery",
      spent: 54.45,
      method: "paypalLogo",
      date: "6/2/2022",
      time: "11:05 AM",
      methodNumber: 8829
    },
    {
      id: 64,
      order: 5459,
      customer: "Ilyssa Egan",
      email: "iegan1r@reference.com",
      avatar: avatar8,
      payment: 3,
      status: "Dispatched",
      spent: 756.16,
      method: "paypalLogo",
      date: "5/20/2022",
      time: "12:39 PM",
      methodNumber: 6971
    },
    {
      id: 65,
      order: 8812,
      customer: "Duke Jahnel",
      email: "djahnel1s@huffingtonpost.com",
      avatar: avatar7,
      payment: 2,
      status: "Dispatched",
      spent: 103.71,
      method: "mastercard",
      date: "3/1/2023",
      time: "10:25 PM",
      methodNumber: 4305
    },
    {
      id: 66,
      order: 7123,
      customer: "Christen Dillow",
      email: "cdillow1t@businessinsider.com",
      avatar: "",
      payment: 1,
      status: "Ready to Pickup",
      spent: 357.17,
      method: "mastercard",
      date: "2/1/2023",
      time: "4:11 AM",
      methodNumber: 7385
    },
    {
      id: 67,
      order: 8964,
      customer: "Hildegaard Ormshaw",
      email: "hormshaw1u@amazonaws.com",
      avatar: "",
      payment: 1,
      status: "Dispatched",
      spent: 191.57,
      method: "mastercard",
      date: "6/15/2022",
      time: "7:28 PM",
      methodNumber: 6469
    },
    {
      id: 68,
      order: 8020,
      customer: "Merrill Sangwin",
      email: "msangwin1v@ted.com",
      avatar: "",
      payment: 3,
      status: "Delivered",
      spent: 80.47,
      method: "paypalLogo",
      date: "9/15/2022",
      time: "9:35 PM",
      methodNumber: 1464
    },
    {
      id: 69,
      order: 7192,
      customer: "Niel Kitchingman",
      email: "nkitchingman1w@twitpic.com",
      avatar: "",
      payment: 1,
      status: "Delivered",
      spent: 759.98,
      method: "mastercard",
      date: "11/24/2022",
      time: "12:51 PM",
      methodNumber: 3957
    },
    {
      id: 70,
      order: 9941,
      customer: "Zacharias Stonhard",
      email: "zstonhard1x@ca.gov",
      avatar: "",
      payment: 4,
      status: "Delivered",
      spent: 333.83,
      method: "paypalLogo",
      date: "6/20/2022",
      time: "11:11 AM",
      methodNumber: 3907
    },
    {
      id: 71,
      order: 7786,
      customer: "Hirsch Garwood",
      email: "hgarwood1y@hhs.gov",
      avatar: "",
      payment: 1,
      status: "Delivered",
      spent: 993.07,
      method: "paypalLogo",
      date: "1/30/2023",
      time: "8:13 AM",
      methodNumber: 3210
    },
    {
      id: 72,
      order: 6890,
      customer: "Etienne Duke",
      email: "eduke1z@dell.com",
      avatar: avatar9,
      payment: 4,
      status: "Dispatched",
      spent: 651.14,
      method: "mastercard",
      date: "8/1/2022",
      time: "7:24 AM",
      methodNumber: 3507
    },
    {
      id: 73,
      order: 6672,
      customer: "Galen Bent",
      email: "gbent20@altervista.org",
      avatar: avatar2,
      payment: 4,
      status: "Out for Delivery",
      spent: 483.86,
      method: "mastercard",
      date: "5/10/2022",
      time: "7:51 PM",
      methodNumber: 7538
    },
    {
      id: 74,
      order: 5531,
      customer: "Cletus Arias",
      email: "carias21@rambler.ru",
      avatar: avatar9,
      payment: 3,
      status: "Delivered",
      spent: 609.47,
      method: "mastercard",
      date: "8/20/2022",
      time: "3:21 AM",
      methodNumber: 5851
    },
    {
      id: 75,
      order: 9041,
      customer: "Gilbertina Manjin",
      email: "gmanjin22@blogtalkradio.com",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 593.65,
      method: "mastercard",
      date: "9/19/2022",
      time: "5:23 AM",
      methodNumber: 8332
    },
    {
      id: 76,
      order: 9521,
      customer: "Helena Airds",
      email: "hairds23@facebook.com",
      avatar: avatar7,
      payment: 4,
      status: "Out for Delivery",
      spent: 897.84,
      method: "mastercard",
      date: "1/13/2023",
      time: "1:41 PM",
      methodNumber: 8564
    },
    {
      id: 77,
      order: 9793,
      customer: "Bonny Tebbutt",
      email: "btebbutt24@clickbank.net",
      avatar: "",
      payment: 3,
      status: "Ready to Pickup",
      spent: 856.58,
      method: "paypalLogo",
      date: "1/23/2023",
      time: "6:10 AM",
      methodNumber: 2150
    },
    {
      id: 78,
      order: 6741,
      customer: "Garreth Rubinowitz",
      email: "grubinowitz25@unblog.fr",
      avatar: avatar8,
      payment: 2,
      status: "Ready to Pickup",
      spent: 191.99,
      method: "paypalLogo",
      date: "8/24/2022",
      time: "2:01 PM",
      methodNumber: 4148
    },
    {
      id: 79,
      order: 6602,
      customer: "Lotta Martinie",
      email: "lmartinie26@ovh.net",
      avatar: avatar8,
      payment: 2,
      status: "Out for Delivery",
      spent: 790.09,
      method: "paypalLogo",
      date: "6/25/2022",
      time: "12:54 AM",
      methodNumber: 4538
    },
    {
      id: 80,
      order: 9682,
      customer: "Danna Goldis",
      email: "dgoldis27@tinypic.com",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 121.21,
      method: "mastercard",
      date: "1/11/2023",
      time: "4:33 PM",
      methodNumber: 1974
    },
    {
      id: 81,
      order: 6256,
      customer: "Ronica McDuffie",
      email: "rmcduffie28@dagondesign.com",
      avatar: "",
      payment: 4,
      status: "Delivered",
      spent: 783.05,
      method: "mastercard",
      date: "7/12/2022",
      time: "1:54 AM",
      methodNumber: 6563
    },
    {
      id: 82,
      order: 6265,
      customer: "Clarice Biesty",
      email: "cbiesty29@hp.com",
      avatar: "",
      payment: 2,
      status: "Dispatched",
      spent: 905.31,
      method: "paypalLogo",
      date: "9/7/2022",
      time: "5:58 AM",
      methodNumber: 7367
    },
    {
      id: 83,
      order: 7330,
      customer: "Georgetta Hawkins",
      email: "ghawkins2a@shinystat.com",
      avatar: "",
      payment: 4,
      status: "Out for Delivery",
      spent: 670.5,
      method: "mastercard",
      date: "12/9/2022",
      time: "4:22 AM",
      methodNumber: 4789
    },
    {
      id: 84,
      order: 6342,
      customer: "Hamid Gosford",
      email: "hgosford2b@youtu.be",
      avatar: avatar7,
      payment: 2,
      status: "Out for Delivery",
      spent: 520.17,
      method: "paypalLogo",
      date: "5/26/2022",
      time: "3:15 PM",
      methodNumber: 2733
    },
    {
      id: 85,
      order: 9620,
      customer: "Marnia Scamwell",
      email: "mscamwell2c@guardian.co.uk",
      avatar: avatar3,
      payment: 4,
      status: "Ready to Pickup",
      spent: 77.59,
      method: "paypalLogo",
      date: "9/10/2022",
      time: "11:40 AM",
      methodNumber: 3822
    },
    {
      id: 86,
      order: 5699,
      customer: "Casie Cratere",
      email: "ccratere2d@baidu.com",
      avatar: "",
      payment: 3,
      status: "Delivered",
      spent: 429.8,
      method: "mastercard",
      date: "9/22/2022",
      time: "11:52 PM",
      methodNumber: 2925
    },
    {
      id: 87,
      order: 7289,
      customer: "Edik Whytock",
      email: "ewhytock2e@vimeo.com",
      avatar: "",
      payment: 3,
      status: "Ready to Pickup",
      spent: 838.25,
      method: "mastercard",
      date: "8/4/2022",
      time: "9:12 PM",
      methodNumber: 6240
    },
    {
      id: 88,
      order: 9780,
      customer: "Wylie Marryatt",
      email: "wmarryatt2f@economist.com",
      avatar: "",
      payment: 3,
      status: "Out for Delivery",
      spent: 308.07,
      method: "mastercard",
      date: "3/2/2023",
      time: "10:00 AM",
      methodNumber: 7909
    },
    {
      id: 89,
      order: 5859,
      customer: "Eydie Vogelein",
      email: "evogelein2g@forbes.com",
      avatar: "",
      payment: 4,
      status: "Ready to Pickup",
      spent: 447.29,
      method: "paypalLogo",
      date: "4/29/2023",
      time: "9:52 AM",
      methodNumber: 5475
    },
    {
      id: 90,
      order: 9957,
      customer: "Milt Whitear",
      email: "mwhitear2h@instagram.com",
      avatar: "",
      payment: 4,
      status: "Dispatched",
      spent: 59.28,
      method: "mastercard",
      date: "11/29/2022",
      time: "6:53 PM",
      methodNumber: 4371
    },
    {
      id: 91,
      order: 7094,
      customer: "Damara Figgins",
      email: "dfiggins2i@de.vu",
      avatar: "",
      payment: 2,
      status: "Delivered",
      spent: 62.62,
      method: "mastercard",
      date: "6/29/2022",
      time: "6:51 AM",
      methodNumber: 8321
    },
    {
      id: 92,
      order: 7280,
      customer: "Sibley Braithwait",
      email: "sbraithwait2j@webmd.com",
      avatar: "",
      payment: 1,
      status: "Ready to Pickup",
      spent: 554.91,
      method: "mastercard",
      date: "12/6/2022",
      time: "2:11 AM",
      methodNumber: 8535
    },
    {
      id: 93,
      order: 7931,
      customer: "Octavius Whitchurch",
      email: "owhitchurch2k@google.ca",
      avatar: avatar7,
      payment: 3,
      status: "Dispatched",
      spent: 383.52,
      method: "mastercard",
      date: "12/26/2022",
      time: "9:49 AM",
      methodNumber: 8585
    },
    {
      id: 94,
      order: 8767,
      customer: "Lyndsey Dorey",
      email: "ldorey2l@barnesandnoble.com",
      avatar: avatar2,
      payment: 3,
      status: "Ready to Pickup",
      spent: 738.42,
      method: "mastercard",
      date: "8/29/2022",
      time: "5:24 AM",
      methodNumber: 3432
    },
    {
      id: 95,
      order: 6111,
      customer: "Chad Cock",
      email: "ccock2m@g.co",
      avatar: "",
      payment: 4,
      status: "Ready to Pickup",
      spent: 669.45,
      method: "mastercard",
      date: "3/11/2023",
      time: "10:43 AM",
      methodNumber: 1014
    },
    {
      id: 96,
      order: 5911,
      customer: "Hilliard Merck",
      email: "hmerck2n@printfriendly.com",
      avatar: "",
      payment: 4,
      status: "Out for Delivery",
      spent: 237.91,
      method: "paypalLogo",
      date: "8/14/2022",
      time: "3:26 PM",
      methodNumber: 3196
    },
    {
      id: 97,
      order: 7064,
      customer: "Carmon Vasiljevic",
      email: "cvasiljevic2o@odnoklassniki.ru",
      avatar: avatar8,
      payment: 3,
      status: "Delivered",
      spent: 595.25,
      method: "paypalLogo",
      date: "3/20/2023",
      time: "3:11 PM",
      methodNumber: 4892
    },
    {
      id: 98,
      order: 8114,
      customer: "Ulysses Goodlife",
      email: "ugoodlife2p@blogger.com",
      avatar: avatar2,
      payment: 3,
      status: "Ready to Pickup",
      spent: 746.38,
      method: "mastercard",
      date: "4/8/2023",
      time: "3:39 AM",
      methodNumber: 4509
    },
    {
      id: 99,
      order: 7189,
      customer: "Boycie Hartmann",
      email: "bhartmann2q@addthis.com",
      avatar: "",
      payment: 3,
      status: "Out for Delivery",
      spent: 704.86,
      method: "paypalLogo",
      date: "1/2/2023",
      time: "8:55 PM",
      methodNumber: 6424
    },
    {
      id: 100,
      order: 9042,
      customer: "Chere Schofield",
      email: "cschofield2r@ucsd.edu",
      avatar: "",
      payment: 2,
      status: "Ready to Pickup",
      spent: 815.77,
      method: "mastercard",
      date: "2/1/2023",
      time: "4:12 PM",
      methodNumber: 3949
    }
  ],
  customerData: [
    {
      id: 1,
      customer: "Stanfield Baser",
      customerId: 879861,
      email: "sbaser0@boston.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "lk",
      order: 157,
      totalSpent: 2074.22,
      avatar: avatar1
    },
    {
      id: 2,
      customer: "Laurie Dax",
      customerId: 178408,
      email: "ldax1@lycos.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 663,
      totalSpent: 2404.19,
      avatar: avatar2
    },
    {
      id: 3,
      customer: "Maxine Kenrick",
      customerId: 221092,
      email: "mkenrick2@eepurl.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "gt",
      order: 64,
      totalSpent: 8821.4,
      avatar: avatar3
    },
    {
      id: 4,
      customer: "Harman Burkill",
      customerId: 645579,
      email: "hburkill3@drupal.org",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "pt",
      order: 640,
      totalSpent: 5294.35,
      avatar: avatar4
    },
    {
      id: 5,
      customer: "Aubrey Borrow",
      customerId: 288765,
      email: "aborrow4@jiathis.com",
      country: "France",
      countryFlag: flagFr,
      countryCode: "fr",
      order: 184,
      totalSpent: 1003.3,
      avatar: avatar5
    },
    {
      id: 6,
      customer: "Nester Fridd",
      customerId: 321942,
      email: "nfridd5@cdbaby.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 965,
      totalSpent: 3876.92,
      avatar: avatar6
    },
    {
      id: 7,
      customer: "Lizzie Nicholes",
      customerId: 516109,
      email: "lnicholes6@rediff.com",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "br",
      order: 514,
      totalSpent: 7936.85,
      avatar: avatar7
    },
    {
      id: 8,
      customer: "Amabel Scullion",
      customerId: 403666,
      email: "ascullion7@wiley.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "gt",
      order: 584,
      totalSpent: 4150.97,
      avatar: avatar8
    },
    {
      id: 9,
      customer: "Zeke Arton",
      customerId: 895280,
      email: "zarton8@weibo.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ua",
      order: 539,
      totalSpent: 3430.05,
      avatar: avatar9
    },
    {
      id: 10,
      customer: "Rosy Medlicott",
      customerId: 199195,
      email: "rmedlicott9@amazon.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 4,
      totalSpent: 8646.75,
      avatar: avatar10
    },
    {
      id: 11,
      customer: "Elene Esp",
      customerId: 317063,
      email: "eespa@soundcloud.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 602,
      totalSpent: 5807.99,
      avatar: avatar11
    },
    {
      id: 12,
      customer: "Cal Lavington",
      customerId: 999318,
      email: "clavingtonb@nps.gov",
      country: "China",
      countryFlag: flagChina,
      countryCode: "bo",
      order: 779,
      totalSpent: 6677.41,
      avatar: avatar12
    },
    {
      id: 13,
      customer: "Merrick Antcliffe",
      customerId: 804513,
      email: "mantcliffec@php.net",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 267,
      totalSpent: 3340.41,
      avatar: avatar13
    },
    {
      id: 14,
      customer: "Price Tremathack",
      customerId: 155681,
      email: "ptremathackd@amazon.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 611,
      totalSpent: 5768.17,
      avatar: avatar14
    },
    {
      id: 15,
      customer: "Leesa Habershaw",
      customerId: 490182,
      email: "lhabershawe@washingtonpost.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "jp",
      order: 90,
      totalSpent: 4488.03,
      avatar: avatar15
    },
    {
      id: 16,
      customer: "Jeana Quincey",
      customerId: 760428,
      email: "jquinceyf@yolasite.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ua",
      order: 597,
      totalSpent: 6936.49,
      avatar: avatar1
    },
    {
      id: 17,
      customer: "Emmott Hise",
      customerId: 675190,
      email: "ehiseg@usatoday.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 30,
      totalSpent: 7994.11,
      avatar: avatar2
    },
    {
      id: 18,
      customer: "Griffith Weeke",
      customerId: 601134,
      email: "gweekeh@dyndns.org",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 322,
      totalSpent: 5710.25,
      avatar: avatar3
    },
    {
      id: 19,
      customer: "Ali Barnardo",
      customerId: 908144,
      email: "abarnardoi@forbes.com",
      country: "France",
      countryFlag: flagFr,
      countryCode: "mx",
      order: 863,
      totalSpent: 7537.74,
      avatar: avatar4
    },
    {
      id: 20,
      customer: "Powell Wornham",
      customerId: 528288,
      email: "pwornhamj@ca.gov",
      country: "France",
      countryFlag: flagFr,
      countryCode: "cz",
      order: 812,
      totalSpent: 7801.46,
      avatar: avatar5
    },
    {
      id: 21,
      customer: "Miltie Ganniclifft",
      customerId: 573210,
      email: "mganniclifftk@bandcamp.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 705,
      totalSpent: 1371.44,
      avatar: avatar6
    },
    {
      id: 22,
      customer: "Tabbatha Duinbleton",
      customerId: 473511,
      email: "tduinbletonl@mediafire.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "us",
      order: 956,
      totalSpent: 8632.52,
      avatar: avatar7
    },
    {
      id: 23,
      customer: "Maurizia Abel",
      customerId: 676743,
      email: "mabelm@xrea.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "my",
      order: 326,
      totalSpent: 7241.74,
      avatar: avatar8
    },
    {
      id: 24,
      customer: "Amargo Fliege",
      customerId: 381698,
      email: "afliegen@storify.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 748,
      totalSpent: 5821.27,
      avatar: avatar9
    },
    {
      id: 25,
      customer: "Shayla Tarplee",
      customerId: 865989,
      email: "starpleeo@ovh.net",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "ng",
      order: 535,
      totalSpent: 900.54,
      avatar: avatar10
    },
    {
      id: 26,
      customer: "Kassey Cutting",
      customerId: 545661,
      email: "kcuttingp@dion.ne.jp",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 645,
      totalSpent: 3200.38,
      avatar: avatar11
    },
    {
      id: 27,
      customer: "Blaire Hillaby",
      customerId: 408852,
      email: "bhillabyq@123-reg.co.uk",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cl",
      order: 709,
      totalSpent: 376.46,
      avatar: avatar12
    },
    {
      id: 28,
      customer: "Taryn Ducker",
      customerId: 486325,
      email: "tduckerr@tamu.edu",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "bt",
      order: 535,
      totalSpent: 3654.39,
      avatar: avatar13
    },
    {
      id: 29,
      customer: "Maddie Witherop",
      customerId: 137049,
      email: "mwitherops@bing.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 763,
      totalSpent: 1136.68,
      avatar: avatar14
    },
    {
      id: 30,
      customer: "Brooke Pattemore",
      customerId: 985599,
      email: "bpattemoret@techcrunch.com",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "br",
      order: 63,
      totalSpent: 1955.91,
      avatar: avatar15
    },
    {
      id: 31,
      customer: "Mordy Dockerty",
      customerId: 178466,
      email: "mdockertyu@umn.edu",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "se",
      order: 452,
      totalSpent: 191.11,
      avatar: avatar1
    },
    {
      id: 32,
      customer: "Clemmie Trowel",
      customerId: 871402,
      email: "ctrowelv@feedburner.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cl",
      order: 415,
      totalSpent: 5285.45,
      avatar: avatar7
    },
    {
      id: 33,
      customer: "Dehlia Shellard",
      customerId: 642834,
      email: "dshellardw@mediafire.com",
      country: "France",
      countryFlag: flagFr,
      countryCode: "cz",
      order: 651,
      totalSpent: 4284.88,
      avatar: avatar2
    },
    {
      id: 34,
      customer: "Neila Juggings",
      customerId: 471692,
      email: "njuggingsx@wp.com",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "ke",
      order: 219,
      totalSpent: 6698.44,
      avatar: avatar3
    },
    {
      id: 35,
      customer: "Ellsworth Dunnan",
      customerId: 295906,
      email: "edunnany@ucla.edu",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "br",
      order: 11,
      totalSpent: 3496.34,
      avatar: avatar4
    },
    {
      id: 36,
      customer: "Kassandra Cossentine",
      customerId: 979702,
      email: "kcossentinez@topsy.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 316,
      totalSpent: 5328.02,
      avatar: avatar15
    },
    {
      id: 37,
      customer: "Hugibert Merigeau",
      customerId: 231745,
      email: "hmerigeau10@yelp.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "pe",
      order: 931,
      totalSpent: 5868.06,
      avatar: avatar13
    },
    {
      id: 38,
      customer: "Constantina Charter",
      customerId: 259786,
      email: "ccharter11@php.net",
      country: "France",
      countryFlag: flagFr,
      countryCode: "cz",
      order: 30,
      totalSpent: 4134.97,
      avatar: avatar1
    },
    {
      id: 39,
      customer: "Charleen Langsbury",
      customerId: 794373,
      email: "clangsbury12@usatoday.com",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "br",
      order: 215,
      totalSpent: 1869.06,
      avatar: avatar6
    },
    {
      id: 40,
      customer: "Sande Ferrar",
      customerId: 949483,
      email: "sferrar13@weather.com",
      countryFlag: flagChina,
      country: "China",
      countryCode: "bo",
      order: 696,
      totalSpent: 2585.57,
      avatar: avatar7
    },
    {
      id: 41,
      customer: "Lonnard Najara",
      customerId: 225529,
      email: "lnajara14@baidu.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "bd",
      order: 956,
      totalSpent: 1741.83,
      avatar: avatar8
    },
    {
      id: 42,
      customer: "Niko Sharpling",
      customerId: 184711,
      email: "nsharpling15@ustream.tv",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 172,
      totalSpent: 1733.66,
      avatar: avatar9
    },
    {
      id: 43,
      customer: "Malinde Derricoat",
      customerId: 272711,
      email: "mderricoat16@feedburner.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "ng",
      order: 822,
      totalSpent: 3930.51,
      avatar: avatar10
    },
    {
      id: 44,
      customer: "Kelsey Muskett",
      customerId: 236093,
      email: "kmuskett17@lycos.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "ca",
      order: 51,
      totalSpent: 4638.94,
      avatar: avatar11
    },
    {
      id: 45,
      customer: "Darcey Gorghetto",
      customerId: 582408,
      email: "dgorghetto18@dropbox.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 559,
      totalSpent: 3614,
      avatar: avatar12
    },
    {
      id: 46,
      customer: "Jody Stace",
      customerId: 343364,
      email: "jstace19@ucsd.edu",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 945,
      totalSpent: 5413.53,
      avatar: avatar13
    },
    {
      id: 47,
      customer: "Rudyard Prangnell",
      customerId: 811348,
      email: "rprangnell1a@imageshack.us",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 149,
      totalSpent: 589.72,
      avatar: avatar1
    },
    {
      id: 48,
      customer: "Tanner Irdale",
      customerId: 855725,
      email: "tirdale1b@plala.or.jp",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 438,
      totalSpent: 8949.26,
      avatar: avatar14
    },
    {
      id: 49,
      customer: "Eran Galgey",
      customerId: 804218,
      email: "egalgey1c@sakura.ne.jp",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 716,
      totalSpent: 4466.54,
      avatar: avatar15
    },
    {
      id: 50,
      customer: "Julianne Lavalde",
      customerId: 670044,
      email: "jlavalde1d@twitter.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "pl",
      order: 307,
      totalSpent: 4382.72,
      avatar: avatar1
    },
    {
      id: 51,
      customer: "Hernando Stolte",
      customerId: 804269,
      email: "hstolte1e@artisteer.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "us",
      order: 684,
      totalSpent: 4671.06,
      avatar: avatar2
    },
    {
      id: 52,
      customer: "Mommy Beardsdale",
      customerId: 711203,
      email: "mbeardsdale1f@technorati.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "pt",
      order: 315,
      totalSpent: 6261.53,
      avatar: avatar2
    },
    {
      id: 53,
      customer: "Edsel Wildbore",
      customerId: 745457,
      email: "ewildbore1g@free.fr",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 797,
      totalSpent: 741.89,
      avatar: avatar3
    },
    {
      id: 54,
      customer: "Iseabal Idney",
      customerId: 560446,
      email: "iidney1h@1688.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 145,
      totalSpent: 4360.35,
      avatar: avatar4
    },
    {
      id: 55,
      customer: "Barbi Jest",
      customerId: 519637,
      email: "bjest1i@com.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "co",
      order: 574,
      totalSpent: 8328.19,
      avatar: avatar5
    },
    {
      id: 56,
      customer: "Paddie Grogan",
      customerId: 915392,
      country: "India",
      countryFlag: flagIndia,
      email: "pgrogan1j@wikia.com",
      countryCode: "eg",
      order: 948,
      totalSpent: 9899.06,
      avatar: avatar6
    },
    {
      id: 57,
      customer: "Lem Exell",
      customerId: 856323,
      email: "lexell1k@nytimes.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "tz",
      order: 541,
      totalSpent: 9285.65,
      avatar: avatar7
    },
    {
      id: 58,
      customer: "Starlin Baldassi",
      customerId: 696538,
      email: "sbaldassi1l@squarespace.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 99,
      totalSpent: 3660.8,
      avatar: avatar8
    },
    {
      id: 59,
      customer: "Marjie Badman",
      customerId: 875646,
      email: "mbadman1m@paypal.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 108,
      totalSpent: 1978.61,
      avatar: avatar9
    },
    {
      id: 60,
      customer: "Flossi McLaverty",
      customerId: 617163,
      email: "fmclaverty1n@51.la",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 483,
      totalSpent: 772.98,
      avatar: avatar10
    },
    {
      id: 61,
      customer: "Norri Dillinton",
      customerId: 123210,
      email: "ndillinton1o@bbc.co.uk",
      country: "China",
      countryFlag: flagChina,
      countryCode: "mk",
      order: 69,
      totalSpent: 4227.77,
      avatar: avatar11
    },
    {
      id: 62,
      customer: "Aloysius Lukas",
      customerId: 766292,
      email: "alukas1p@chicagotribune.com",
      country: "France",
      countryFlag: flagFr,
      countryCode: "fr",
      order: 147,
      totalSpent: 6637.38,
      avatar: avatar12
    },
    {
      id: 63,
      customer: "Rochell Cockill",
      customerId: 100696,
      email: "rcockill1q@irs.gov",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 444,
      totalSpent: 1730.64,
      avatar: avatar13
    },
    {
      id: 64,
      customer: "Emma Greensall",
      customerId: 792768,
      email: "egreensall1r@joomla.org",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 831,
      totalSpent: 9996.22,
      avatar: avatar14
    },
    {
      id: 65,
      customer: "Jodi Malyan",
      customerId: 996390,
      email: "jmalyan1s@uiuc.edu",
      country: "China",
      countryFlag: flagChina,
      countryCode: "fi",
      order: 311,
      totalSpent: 3459.82,
      avatar: avatar15
    },
    {
      id: 66,
      customer: "Zed Rawe",
      customerId: 343593,
      email: "zrawe1t@va.gov",
      country: "China",
      countryFlag: flagChina,
      countryCode: "ly",
      order: 473,
      totalSpent: 5218.22,
      avatar: avatar10
    },
    {
      id: 67,
      customer: "Thomasine Vasentsov",
      customerId: 988015,
      email: "tvasentsov1u@bloglovin.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "ar",
      order: 752,
      totalSpent: 5984.53,
      avatar: avatar11
    },
    {
      id: 68,
      customer: "Janice Large",
      customerId: 270658,
      email: "jlarge1v@dot.gov",
      country: "China",
      countryFlag: flagChina,
      countryCode: "no",
      order: 582,
      totalSpent: 5565.85,
      avatar: avatar12
    },
    {
      id: 69,
      customer: "Tadeo Blasio",
      customerId: 208862,
      email: "tblasio1w@ustream.tv",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 751,
      totalSpent: 9042.56,
      avatar: avatar13
    },
    {
      id: 70,
      customer: "Raul Onele",
      customerId: 895818,
      email: "ronele1x@bloglovin.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "pe",
      order: 689,
      totalSpent: 4508.42,
      avatar: avatar14
    },
    {
      id: 71,
      customer: "Rolf Comellini",
      customerId: 292654,
      email: "rcomellini1y@soup.io",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 837,
      totalSpent: 6379.88,
      avatar: avatar15
    },
    {
      id: 72,
      customer: "Feliza Birchenough",
      customerId: 974560,
      email: "fbirchenough1z@a8.net",
      country: "China",
      countryFlag: flagChina,
      countryCode: "ec",
      order: 724,
      totalSpent: 2933.59,
      avatar: avatar10
    },
    {
      id: 73,
      customer: "Elsinore Daltry",
      customerId: 152193,
      email: "edaltry20@themeforest.net",
      country: "Brazil",
      countryFlag: flagBrazil,
      countryCode: "br",
      order: 455,
      totalSpent: 724.68,
      avatar: avatar2
    },
    {
      id: 74,
      customer: "Roseann Serck",
      customerId: 772228,
      email: "rserck21@about.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "rs",
      order: 51,
      totalSpent: 8287.03,
      avatar: avatar3
    },
    {
      id: 75,
      customer: "Yank Luddy",
      customerId: 586615,
      email: "yluddy22@fema.gov",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "pt",
      order: 462,
      totalSpent: 9157.04,
      avatar: avatar4
    },
    {
      id: 76,
      customer: "Sloan Huskisson",
      customerId: 762754,
      email: "shuskisson23@live.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "do",
      order: 952,
      totalSpent: 6106.41,
      avatar: avatar5
    },
    {
      id: 77,
      customer: "Livy Lattimore",
      customerId: 258911,
      email: "llattimore24@sfgate.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 794,
      totalSpent: 9053.56,
      avatar: avatar6
    },
    {
      id: 78,
      customer: "Lanette Deble",
      customerId: 890051,
      email: "ldeble25@spotify.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "hk",
      order: 454,
      totalSpent: 8180.2,
      avatar: avatar7
    },
    {
      id: 79,
      customer: "Juliet Gypps",
      customerId: 493646,
      email: "jgypps26@paginegialle.it",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 320,
      totalSpent: 210.84,
      avatar: avatar8
    },
    {
      id: 80,
      customer: "Tome Joliffe",
      customerId: 356230,
      email: "tjoliffe27@phoca.cz",
      country: "France",
      countryFlag: flagFr,
      countryCode: "mx",
      order: 515,
      totalSpent: 8571.28,
      avatar: avatar9
    },
    {
      id: 81,
      customer: "Joel Hamil",
      customerId: 337022,
      email: "jhamil28@state.gov",
      country: "China",
      countryFlag: flagChina,
      countryCode: "se",
      order: 906,
      totalSpent: 620.57,
      avatar: avatar10
    },
    {
      id: 82,
      customer: "Hagen Digance",
      customerId: 864064,
      email: "hdigance29@odnoklassniki.ru",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 519,
      totalSpent: 332.44,
      avatar: avatar11
    },
    {
      id: 83,
      customer: "Kristo Wagstaff",
      customerId: 550008,
      email: "kwagstaff2a@fotki.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 313,
      totalSpent: 2481.6,
      avatar: avatar12
    },
    {
      id: 84,
      customer: "Gibbie Dysert",
      customerId: 778429,
      email: "gdysert2b@so-net.ne.jp",
      country: "China",
      countryFlag: flagChina,
      countryCode: "ni",
      order: 623,
      totalSpent: 8466.96,
      avatar: avatar13
    },
    {
      id: 85,
      customer: "Michale Britton",
      customerId: 158581,
      email: "mbritton2c@cloudflare.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 835,
      totalSpent: 9048.31,
      avatar: avatar14
    },
    {
      id: 86,
      customer: "Hiram Hoys",
      customerId: 747948,
      email: "hhoys2d@msn.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "eg",
      order: 361,
      totalSpent: 9159.23,
      avatar: avatar15
    },
    {
      id: 87,
      customer: "Tobin Bassick",
      customerId: 165827,
      email: "tbassick2e@quantcast.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "jo",
      order: 527,
      totalSpent: 9289.92,
      avatar: avatar1
    },
    {
      id: 88,
      customer: "Mikol Caskey",
      customerId: 533641,
      email: "mcaskey2f@facebook.com",
      country: "India",
      countryFlag: flagIndia,
      countryCode: "in",
      order: 25,
      totalSpent: 4920.68,
      avatar: avatar2
    },
    {
      id: 89,
      customer: "Cris Donkersley",
      customerId: 997638,
      email: "cdonkersley2g@utexas.edu",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 404,
      totalSpent: 7369.58,
      avatar: avatar3
    },
    {
      id: 90,
      customer: "Valenka Turbill",
      customerId: 179914,
      email: "vturbill2h@nbcnews.com",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "tm",
      order: 550,
      totalSpent: 9083.15,
      avatar: avatar4
    },
    {
      id: 91,
      customer: "Cherice Fairclough",
      customerId: 467280,
      email: "cfairclough2i@csmonitor.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "us",
      order: 792,
      totalSpent: 2634.36,
      avatar: avatar5
    },
    {
      id: 92,
      customer: "Lauritz Ramble",
      customerId: 140146,
      email: "lramble2j@discuz.net",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "ru",
      order: 605,
      totalSpent: 9381.83,
      avatar: avatar6
    },
    {
      id: 93,
      customer: "Goddard Fosher",
      customerId: 398102,
      email: "gfosher2k@example.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 892,
      totalSpent: 3957.06,
      avatar: avatar7
    },
    {
      id: 94,
      customer: "Darby Leming",
      customerId: 178939,
      email: "dleming2l@paginegialle.it",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "pl",
      order: 894,
      totalSpent: 1450.01,
      avatar: avatar11
    },
    {
      id: 95,
      customer: "Paulie Floch",
      customerId: 855358,
      email: "pfloch2m@cnet.com",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 866,
      totalSpent: 8713.73,
      avatar: avatar12
    },
    {
      id: 96,
      customer: "Raffaello Reaney",
      customerId: 533341,
      email: "rreaney2n@mlb.com",
      country: "China",
      countryFlag: flagChina,
      countryCode: "cn",
      order: 145,
      totalSpent: 8589.4,
      avatar: avatar13
    },
    {
      id: 97,
      customer: "Inger Weadick",
      customerId: 902643,
      email: "iweadick2o@unesco.org",
      country: "United States",
      countryFlag: flagUsa,
      countryCode: "id",
      order: 766,
      totalSpent: 7119.15,
      avatar: avatar14
    },
    {
      id: 98,
      customer: "Brooke Tegler",
      customerId: 137230,
      email: "btegler2p@state.tx.us",
      country: "Australia",
      countryFlag: flagAus,
      countryCode: "kp",
      order: 70,
      totalSpent: 4403.22,
      avatar: avatar15
    },
    {
      id: 99,
      customer: "Erny Picard",
      customerId: 960955,
      email: "epicard2q@lycos.com",
      country: "France",
      countryFlag: flagFr,
      countryCode: "cz",
      order: 471,
      totalSpent: 7696.67,
      avatar: avatar1
    },
    {
      id: 100,
      customer: "Manon Fossick",
      customerId: 478426,
      email: "mfossick2r@hatena.ne.jp",
      country: "China",
      countryFlag: flagChina,
      countryCode: "jp",
      order: 181,
      totalSpent: 2838.35,
      avatar: avatar15
    }
  ]
};
const handlerAppsEcommerce = [
  // 👉 Products
  // Get Product List
  http.get("/api/apps/ecommerce/products", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const stock = url.searchParams.get("stock");
    const category = url.searchParams.get("category");
    const status = url.searchParams.get("status");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const page = url.searchParams.get("page");
    const searchQuery = is.string(q) ? q : void 0;
    const queryLower = (searchQuery ?? "").toString().toLowerCase();
    const parsedStock = destr(stock);
    const stockLocal = is.boolean(parsedStock) ? parsedStock : void 0;
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    let filteredProducts = db$9.products.filter((product) => (product.productName.toLowerCase().includes(queryLower) || product.productBrand.toLowerCase().includes(queryLower)) && product.category === (category || product.category) && product.status === (status || product.status) && (typeof stockLocal === "undefined" ? true : product.stock === stockLocal)).reverse();
    if (sortByLocal) {
      if (sortByLocal === "product") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.productName.toLowerCase() > b2.productName.toLowerCase() ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.productName.toLowerCase() < b2.productName.toLowerCase() ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "category") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.category > b2.category ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.category < b2.category ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "status") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.status > b2.status ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.status < b2.status ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "price") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return Number(a2.price.slice(1)) > Number(b2.price.slice(1)) ? 1 : -1;
          else if (orderByLocal === "desc")
            return Number(a2.price.slice(1)) < Number(b2.price.slice(1)) ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "qty") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.qty > b2.qty ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.qty < b2.qty ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "sku") {
        filteredProducts = filteredProducts.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.sku > b2.sku ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.sku < b2.sku ? 1 : -1;
          return 0;
        });
      }
    }
    return HttpResponse.json({
      products: paginateArray(filteredProducts, itemsPerPageLocal, pageLocal),
      total: filteredProducts.length
    }, {
      status: 200
    });
  }),
  // 👉 Delete Product
  http.delete("/api/apps/ecommerce/products/:id", ({ params }) => {
    const id = Number(params.id);
    const productIndex = db$9.products.findIndex((e2) => e2.id === id);
    if (productIndex >= 0) {
      db$9.products.splice(productIndex, 1);
      return new HttpResponse(null, {
        status: 204
      });
    }
    return new HttpResponse(null, {
      status: 404
    });
  }),
  // 👉 Orders
  // Get Order List
  http.get("/api/apps/ecommerce/orders", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const page = url.searchParams.get("page");
    const searchQuery = is.string(q) ? q : void 0;
    const queryLower = (searchQuery ?? "").toString().toLowerCase();
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const filterOrders = db$9.orderData.filter((order) => {
      return order.customer.toLowerCase().includes(queryLower) || order.email.toLowerCase().includes(queryLower) || order.order.toString().includes(queryLower);
    }).reverse();
    if (sortByLocal) {
      if (sortByLocal === "order") {
        filterOrders.sort((a2, b2) => {
          if (orderByLocal === "desc")
            return b2.order - a2.order;
          else
            return a2.order - b2.order;
        });
      }
      if (sortByLocal === "customers") {
        filterOrders.sort((a2, b2) => {
          if (orderByLocal === "desc")
            return b2.customer.localeCompare(a2.customer);
          else
            return a2.customer.localeCompare(b2.customer);
        });
      }
      if (sortByLocal === "date") {
        filterOrders.sort((a2, b2) => {
          if (orderByLocal === "desc")
            return Number(new Date(b2.date)) - Number(new Date(a2.date));
          else
            return Number(new Date(a2.date)) - Number(new Date(b2.date));
        });
      }
      if (sortByLocal === "status") {
        filterOrders.sort((a2, b2) => {
          if (orderByLocal === "desc")
            return b2.status.localeCompare(a2.status);
          else
            return a2.status.localeCompare(b2.status);
        });
      }
    }
    if (sortByLocal === "spent") {
      filterOrders.sort((a2, b2) => {
        if (orderByLocal === "desc")
          return Number(b2.spent) - Number(a2.spent);
        else
          return Number(a2.spent) - Number(b2.spent);
      });
    }
    return HttpResponse.json({
      orders: paginateArray(filterOrders, itemsPerPageLocal, pageLocal),
      total: filterOrders.length
    }, {
      status: 200
    });
  }),
  // Delete Order
  http.delete("/api/apps/ecommerce/orders/:id", ({ params }) => {
    const id = Number(params.id);
    const orderIndex = db$9.orderData.findIndex((e2) => e2.id === id);
    if (orderIndex >= 0)
      db$9.orderData.splice(orderIndex, 1);
    return new HttpResponse(null, {
      status: 204
    });
  }),
  // 👉 Customers
  // Get single Customer
  http.get("/api/apps/ecommerce/customers/:id", ({ params }) => {
    const customerId = Number(params.id);
    try {
      const customerIndex = db$9.customerData.findIndex((e2) => e2.customerId === customerId);
      const customer = db$9.customerData[customerIndex];
      Object.assign(customer, {
        status: "Active",
        contact: "+1 (234) 567 890"
      });
      if (customer)
        return HttpResponse.json(customer, { status: 200 });
    } catch (error2) {
      return new HttpResponse(null, {
        status: 404
      });
    }
  }),
  // Get Customer List
  http.get("/api/apps/ecommerce/customers", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const page = url.searchParams.get("page");
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const searchQuery = is.string(q) ? q : void 0;
    const queryLowered = (searchQuery ?? "").toString().toLowerCase();
    const filteredCustomers = db$9.customerData.filter((customer) => {
      return customer.customer.toLowerCase().includes(queryLowered) || customer.country.toLowerCase().includes(queryLowered) || customer.email.toLowerCase().includes(queryLowered);
    }).reverse();
    if (sortByLocal) {
      if (sortByLocal === "customer") {
        filteredCustomers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.customer.localeCompare(b2.customer);
          return b2.customer.localeCompare(a2.customer);
        });
      }
      if (sortByLocal === "country") {
        filteredCustomers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.country.localeCompare(b2.country);
          return b2.country.localeCompare(a2.country);
        });
      }
      if (sortByLocal === "customerId") {
        filteredCustomers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.customerId - b2.customerId;
          return b2.customerId - a2.customerId;
        });
      }
      if (sortByLocal === "orders") {
        filteredCustomers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.order - b2.order;
          return b2.order - a2.order;
        });
      }
    }
    if (sortByLocal === "totalSpent") {
      filteredCustomers.sort((a2, b2) => {
        if (orderByLocal === "asc")
          return a2.totalSpent - b2.totalSpent;
        return b2.totalSpent - a2.totalSpent;
      });
    }
    return HttpResponse.json({
      customers: paginateArray(filteredCustomers, itemsPerPageLocal, pageLocal),
      total: filteredCustomers.length
    }, {
      status: 200
    });
  }),
  // 👉 Manage Reviews.
  // Get Reviews
  http.get("/api/apps/ecommerce/reviews", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const status = url.searchParams.get("status");
    const page = url.searchParams.get("page");
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const searchQuery = is.string(q) ? q : void 0;
    const queryLower = (searchQuery ?? "").toString().toLowerCase();
    const filteredReviews = db$9.reviews.filter((review) => {
      const { product, reviewer, email } = review;
      return (product.toLowerCase().includes(queryLower) || reviewer.toLowerCase().includes(queryLower) || email.toLowerCase().includes(queryLower) || review.head.toLowerCase().includes(queryLower) || review.para.toLowerCase().includes(queryLower)) && (review.status === status || status === "All");
    });
    if (sortByLocal) {
      if (sortByLocal === "product") {
        filteredReviews.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.product.toLowerCase() > b2.product.toLowerCase() ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.product.toLowerCase() < b2.product.toLowerCase() ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "reviewer") {
        filteredReviews.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.reviewer.toLowerCase() > b2.reviewer.toLowerCase() ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.reviewer.toLowerCase() < b2.reviewer.toLowerCase() ? 1 : -1;
          return 0;
        });
      }
      if (sortByLocal === "date") {
        filteredReviews.sort((a2, b2) => {
          if (orderByLocal === "desc")
            return Number(new Date(b2.date)) - Number(new Date(a2.date));
          else if (orderByLocal === "asc")
            return Number(new Date(a2.date)) - Number(new Date(b2.date));
          return 0;
        });
      }
    }
    if (sortByLocal === "status") {
      filteredReviews.sort((a2, b2) => {
        if (orderByLocal === "asc")
          return a2.status.toLowerCase() > b2.status.toLowerCase() ? 1 : -1;
        else if (orderByLocal === "desc")
          return a2.status.toLowerCase() < b2.status.toLowerCase() ? 1 : -1;
        else
          return 0;
      });
    }
    return HttpResponse.json({
      reviews: paginateArray(filteredReviews, itemsPerPageLocal, pageLocal),
      total: filteredReviews.length
    }, {
      status: 200
    });
  }),
  // Delete Review
  http.delete("/api/apps/ecommerce/reviews/:id", ({ params }) => {
    const id = Number(params.id);
    const reviewIndex = db$9.reviews.findIndex((e2) => e2.id === id);
    if (reviewIndex !== -1) {
      db$9.reviews.splice(reviewIndex, 1);
      return new HttpResponse(null, {
        status: 204
      });
    }
    return new HttpResponse(null, {
      status: 404
    });
  }),
  // 👉 Referrals
  // Get Referrals
  http.get("/api/apps/ecommerce/referrals", ({ request }) => {
    const url = new URL(request.url);
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const page = url.searchParams.get("page");
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const filteredReferrals = [...db$9.referrals];
    if (sortByLocal) {
      if (sortByLocal === "users") {
        filteredReferrals.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.user.localeCompare(b2.user);
          else
            return b2.user.localeCompare(a2.user);
        });
      }
      if (sortByLocal === "referred-id") {
        filteredReferrals.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.referredId - b2.referredId;
          else if (orderByLocal === "desc")
            return b2.referredId - a2.referredId;
          return 0;
        });
      }
      if (sortByLocal === "earning") {
        filteredReferrals.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return Number(a2.earning.slice(1)) - Number(b2.earning.slice(1));
          else if (orderByLocal === "desc")
            return Number(b2.earning.slice(1)) - Number(a2.earning.slice(1));
          return 0;
        });
      }
      if (sortByLocal === "value") {
        filteredReferrals.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return Number(a2.value.slice(1)) - Number(b2.value.slice(1));
          else if (orderByLocal === "desc")
            return Number(b2.value.slice(1)) - Number(a2.value.slice(1));
          return 0;
        });
      }
      if (sortByLocal === "status") {
        filteredReferrals.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.status.toLowerCase() > b2.status.toLowerCase() ? 1 : -1;
          else if (orderByLocal === "desc")
            return a2.status.toLowerCase() < b2.status.toLowerCase() ? 1 : -1;
          return 0;
        });
      }
    }
    return HttpResponse.json({
      referrals: paginateArray(filteredReferrals, itemsPerPageLocal, pageLocal),
      total: filteredReferrals.length
    }, {
      status: 200
    });
  })
];
const txt = "/build/assets/txt-D130L64-.png";
const xls = "/build/assets/xls-BrstSTmp.png";
const db$8 = {
  emails: [
    {
      id: 50,
      to: [
        {
          email: "johndoe@mail.com",
          name: "me"
        }
      ],
      from: {
        email: "james25@gmail.com",
        name: "Katie Brandt",
        avatar: avatar8
      },
      subject: "Bring smile discussion same boy include care.",
      cc: [],
      bcc: [],
      message: '<p>Guy national course pay small per. Commercial research lose key fight marriage. Young series raise degree foot degree detail number.\nCrime gas real pass white. Television success east.</p><p>Into miss knowledge result. Seat carry tax beat line. Amount language paper machine fly.\nMusic several common former. More mouth year site move hold. Billion material born news western late.</p><p class="mb-0">World them term identify. Rule southern condition thought. Article successful traditional friend.\nPhone financial skill theory.\nChange Mr experience. Everyone help structure much family.\nVoice general group likely.</p>',
      attachments: [
        {
          fileName: "log.txt",
          thumbnail: txt,
          url: "",
          size: "5mb"
        },
        {
          fileName: "performance.xls",
          thumbnail: xls,
          url: "",
          size: "10mb"
        }
      ],
      isStarred: true,
      labels: ["private", "company"],
      time: "2021-07-14T12:42:22",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 49,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "jamesskinner@hotmail.com",
        name: "Joshua Cline",
        avatar: avatar1
      },
      subject: "Magazine say side view.",
      cc: [],
      bcc: [],
      message: "<p>Campaign even order for color. Remember card return position white argue prepare. Case fill follow then condition investment why.\nCold son pattern wife. Child name interest company thought every federal. He catch daughter design.</p><p>Affect customer a. Which difficult science.\nReality whether what animal. Call report author against season heart.\nCatch have always source response your even. Person mother whether since clearly. Cut staff work the nothing.</p><p>Cell cover along school. Method option not why laugh. Nation medical thousand world rule.\nEvening fish rich sense create. Civil family particularly day machine free read. Interesting capital owner international nor condition.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal"],
      time: "2021-07-16T01:23:14",
      replies: [
        {
          id: 74474,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "teresa54@gmail.com",
            name: "Brittany Young",
            avatar: avatar2
          },
          subject: "The beat save none make sea large number.",
          cc: [],
          bcc: [],
          message: "<p>College before employee recognize. Teach central this interest service party section. Floor west break bit suggest ok everyone.\n Pm quality school out form. Want case town individual.</p><p>Hundred a modern career whose know find responsibility. East option trouble next. Sport goal after race pull political common board.</p><p>Beat support exactly material fact benefit six. Time represent stuff forget plant pass team. Begin lot war field simple.\nBuilding development wear trip marriage. Economy speech be election arrive color next.</p>",
          attachments: [],
          isStarred: false,
          labels: ["company", "private", "personal", "important"],
          time: "2021-07-21T18:43:19",
          replies: [],
          folder: "inbox",
          isRead: false,
          isDeleted: false
        },
        {
          id: 766,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "angelajimenez@yahoo.com",
            name: "Emily Moore",
            avatar: avatar8
          },
          subject: "Movement along college bad reality scientist.",
          cc: [],
          bcc: [],
          message: "<p>Goal reveal past rule arrive project performance. Learn despite the way. Operation within suggest glass beautiful always really.\nLanguage although cut network conference economy long. Forward us point meet. Sing buy central quality science.</p><p>Real keep material wind drive life. Job election to determine table within expert art.\nOften ten ask city. Memory to run market.\nMove theory contain good fire. Area walk position site would.</p><p>Seem response base question tough consumer another. Sit hard deep child operation institution. Charge child picture different sense.\nMedia remain could go eight different west. Thousand fly box else.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal"],
          time: "2021-07-07T22:12:32",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 3718436,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "alexanderpatel@yahoo.com",
            name: "Andrew Cruz",
            avatar: avatar7
          },
          subject: "Realize agree dark spring suddenly maintain level history.",
          cc: [],
          bcc: [],
          message: "<p>Actually and them time itself newspaper stand. Billion Republican manager little hot store. Pull issue many close by large seven.\nIt writer will concern community rate through factor. Reduce south director budget shake return.</p><p>Score event since campaign single conference significant. Design fall teacher.\nWhich themselves along that themselves activity.\nUntil nothing cold toward politics product. Rock enter in what option.</p><p>Relate authority agency claim protect. Task not wait respond week hotel.\nAt catch matter try boy why white physical. Section protect try kind few. Skin two author style.\nWestern simple instead strategy mention item suffer. Remain agree account.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "private"],
          time: "2021-07-18T19:27:18",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 48,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "williamsstacey@yahoo.com",
        name: "Jonathan Walker",
        avatar: avatar1
      },
      subject: "Then until task something before color impact now.",
      cc: [],
      bcc: [],
      message: "<p>Head claim property experience arm remain structure. Worry do science look oil easy. His whose want.\nHuge protect foot save century somebody future. Skin building truth along sing such read speech.\nRaise argue everything send.</p><p>While attorney to power card. Agent card big nothing. Wall behavior investment stay relate stage their. Carry full rather product arrive center when.</p><p>Law chance mention sound maintain expect whose. Treatment simply if power decide bar. Theory building laugh hand manager condition true.\nFoot few eat store environment that involve man. Into report player writer yourself.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "private", "important"],
      time: "2021-07-22T09:59:40",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 47,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "lori82@gmail.com", name: "Kevin Evans", avatar: avatar7 },
      subject: "Shoulder science point show human black answer anything.",
      cc: [],
      bcc: [],
      message: "<p>Rate church step beat head class nor.\nLeg ten offer girl me teach. Quite could within. Bill civil situation to.\nDifference unit tax garden. Fine cause political center her. Design look free treat item ball.</p><p>Also night argue I explain time practice.\nCommercial example reveal window try door great material. Wear data loss. Visit prove either catch will.</p><p>Show young century between box. Statement go guess bad film.\nIdea voice by audience meet everyone next prove. Art leader minute build.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal"],
      time: "2021-07-09T15:02:15",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 46,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "crussell@hotmail.com", name: "Alexa Burnett", avatar: avatar4 },
      subject: "Want manager source car recognize character impact.",
      cc: [],
      bcc: [],
      message: "<p>Mr attorney role meeting enter.\nMajor serve night often. Region current nation.\nHear each knowledge today. Church positive let anyone hospital member difficult color. Product difference such sea view senior.</p><p>Home require nor material current. State probably customer size soldier music site.\nSeveral east when miss partner language hotel ask. She hold turn. Century general study radio.</p><p>Old community prevent. Subject minute song sport.\nCover woman born decision agree center cold.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal"],
      time: "2021-07-09T06:52:08",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 45,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "kkim@yahoo.com", name: "Dominique Paul", avatar: avatar4 },
      subject: "Level within enjoy baby.",
      cc: [],
      bcc: [],
      message: "<p>Opportunity meet author table pressure leader. Owner never investment recent nearly before. Whom ask road.\nBody attorney clear program tonight current. Name watch school hard fly.</p><p>People crime window talk. Cell should third have sit would.\nOccur hit take.\nFact go system really entire common. Fast organization could themselves continue. End ahead rather.</p><p>Action quickly hundred movie choice. Nice yes lose two. Stay practice section onto some firm little Republican.\nLarge fast politics what. Common price speak sign particularly answer. You simply certain which direction.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important", "personal"],
      time: "2021-07-15T14:59:01",
      replies: [
        {
          id: 781,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "amyconner@hotmail.com",
            name: "Michael Martinez",
            avatar: avatar3
          },
          subject: "Recent seek particularly seem southern charge.",
          cc: [],
          bcc: [],
          message: "<p>Accept his citizen again anyone. Claim process watch.\nSeven court there. Local author line would real machine officer.\nPlant just benefit operation. Similar soldier wrong part hospital action drive.</p><p>Before throw enough goal different. Doctor remain Mrs political staff.\nSeem successful why check after best pass. Degree because prove church move center space often.</p><p>Might trade cell guess institution. Difference win again.\nCulture life car agency improve you. Thing also hold child apply south box appear. Education itself effort their.\nFast save pull deal his talk issue. Fall sport better step.</p>",
          attachments: [],
          isStarred: true,
          labels: ["important", "personal"],
          time: "2021-07-14T21:30:32",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: false
        },
        {
          id: 6933053,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "ivanguerrero@yahoo.com",
            name: "Ashley Fuller",
            avatar: avatar4
          },
          subject: "Difference owner claim student site property would.",
          cc: [],
          bcc: [],
          message: "<p>Hour town against move difference scene cause walk.\nAgreement bag accept society story generation.\nLike process floor lose.\nStop think work off once. Billion institution anyone stuff determine federal attention.</p><p>Notice ever same tonight away performance role increase. Continue best same candidate expect look. Feeling church whole case risk town boy language.\nManage may send rate among. Physical law risk final source. Matter star ago or at possible.</p><p>Hotel I energy piece drop. Learn southern by maintain often evening.\nLate rise husband top skin memory lot.\nTest compare strategy father. Everyone few actually this again minute become.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-11T10:46:10",
          replies: [],
          folder: "draft",
          isRead: false,
          isDeleted: false
        },
        {
          id: 8,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "lmoreno@yahoo.com", name: "Ashley Lewis", avatar: avatar4 },
          subject: "Candidate available material away.",
          cc: [],
          bcc: [],
          message: "<p>Ten spend paper. Trial certain those. Make middle campaign might.\nEffect well accept great wall.\nSeem your at small. So his serious high center political man.</p><p>Guess staff argue ready trade whole including. Science four skill best level interesting prevent. Mind he recent another point understand.\nAsk daughter specific hot without body challenge. Official threat pretty left bar check believe bit.</p><p>Trouble result receive political.\nAvailable knowledge increase. Dog computer ability prove paper. Scientist either color capital fall do.\nShoulder bar small. Those thank beyond sea piece.</p>",
          attachments: [],
          isStarred: false,
          labels: ["important", "personal"],
          time: "2021-07-02T03:06:42",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: false
        },
        {
          id: 784835803,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "mortiz@gmail.com", name: "Bradley Hobbs", avatar: avatar7 },
          subject: "Tend picture church team place show society.",
          cc: [],
          bcc: [],
          message: "<p>Republican risk window. Different speak prove college from push main.\nRegion experience field wind get choose. Away drug professional memory. Nation still best fact forget election smile. Sure ready security office question.</p><p>Appear civil appear movie space.\nAmount rule meet wide exactly theory be. Pretty Republican material human that. Page war fear pay.\nAgree fall investment red nothing go also. Expect join against threat and.</p><p>Serve writer leader room.\nPurpose high west lose firm. Mouth between myself get upon avoid power low.\nSurface particular be main yeah. Huge parent morning continue research.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "private", "important"],
          time: "2021-07-04T08:11:01",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 44,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "ethan27@gmail.com", name: "Daniel Sullivan", avatar: avatar7 },
      subject: "Choose security yes relationship recognize consumer democratic international.",
      cc: [],
      bcc: [],
      message: "<p>Person whom reflect prove show.\nBreak exist which prepare. Collection she population understand result business ability site.\nFact figure recent population condition. What west grow food space former.</p><p>Individual catch management her skin bag specific. Order base project under. Minute watch continue relationship state continue this store.</p><p>Recent cut organization machine.\nEnter today growth five interest some. Million official middle space return. Second cold available seven behind protect owner.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important", "personal"],
      time: "2021-07-12T02:53:08",
      replies: [
        {
          id: 23853,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "hubbardsharon@hotmail.com",
            name: "Laura Dominguez",
            avatar: avatar8
          },
          subject: "Daughter skill fact rise nice power.",
          cc: [],
          bcc: [],
          message: "<p>Concern enter model team want admit detail far. West TV themselves short friend agreement service.\nAccording toward free upon draw family state. Account or action president piece.\nCause part fight second. Natural international mean.</p><p>Lay nearly center hear ten season officer water. Pattern loss window follow sure line.\nGlass analysis seat have. Ok budget among moment sing four.</p><p>Product now material play pick deal determine suffer. Most second region represent.\nRich reduce evidence home nothing yeah pressure. Rule play between fast wrong place.\nEvidence color anything because. Wall start manage style central charge beyond.</p>",
          attachments: [],
          isStarred: false,
          labels: ["company", "important"],
          time: "2021-07-12T20:13:42",
          replies: [],
          folder: "spam",
          isRead: false,
          isDeleted: false
        },
        {
          id: 317,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "jameslopez@yahoo.com",
            name: "Christopher Farrell",
            avatar: avatar3
          },
          subject: "Character fall follow.",
          cc: [],
          bcc: [],
          message: "<p>Hope bar civil. Final design section those.\nBrother sit many receive vote read large. Reflect evening man realize detail. Party yeah factor never guy.\nSouthern movement everything. Play although movie effect space front.</p><p>Front first say interesting million force issue so. Enjoy least Democrat strong dark. Parent business bill surface arrive daughter.\nUntil home successful might capital. Nearly issue free customer. Carry matter executive country human shake.</p><p>Key do choose however.\nDiscuss each police modern. Apply method speech population participant.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal"],
          time: "2021-07-22T15:28:46",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 43,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "rmartin@gmail.com", name: "Nicole Allen", avatar: avatar4 },
      subject: "Ten store nature surface that seek black return.",
      cc: [],
      bcc: [],
      message: "<p>Recognize section different ground million. Source court seek street.\nScience thank two capital shoulder herself certainly. Individual hair general manager why.</p><p>Live hear lawyer quickly player system. American spend ok beautiful. Shoulder drug itself wrong partner event.\nInclude account water success political. Newspaper quality really road. Short maintain raise appear.</p><p>Move cultural others protect season he future. Argue glass loss whether available size apply government.\nFood hand night particular. Change few key would thus.\nGreen talk to improve miss.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-27T07:21:36",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 42,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "adkinsryan@yahoo.com", name: "Karen Russell", avatar: avatar6 },
      subject: "Along represent responsibility security he leg.",
      cc: [],
      bcc: [],
      message: "<p>Explain through thought forward daughter entire. Investment direction great writer thus blue provide.\nPersonal she community phone same. Remain religious meeting. Data personal meeting agreement style. Next time build.</p><p>Avoid board beautiful strong effect. We star fight quality stay sense soldier. Her social month. System professional social.\nYoung back including benefit position plan just. Line history sometimes check need remain make.</p><p>Radio should magazine yard ahead then. Student knowledge cover general use though.\nEnergy agree away team. Power whose music sort between man analysis. Boy election value.\nClearly law avoid dream. Would around role third seek world present.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal"],
      time: "2021-07-02T20:02:30",
      replies: [
        {
          id: 82117976,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "oblack@hotmail.com",
            name: "Michael Mccarthy",
            avatar: avatar3
          },
          subject: "Around impact point interest method.",
          cc: [],
          bcc: [],
          message: "<p>Blood power job common. Spring success arm article. Continue manager blue new enough business six difference.\nMe finish pick energy wear him home. If affect ready east. Light enter speech many off day answer.</p><p>Quality consider statement building suddenly poor. Indeed because image month charge pressure lawyer. Color lot subject leg.\nUs cold everybody clearly evening ago apply. Run between pull. Could amount policy think second take born draw.</p><p>Rest feel forget garden tough citizen him. Sign court point recent.\nClaim wide chair plant. Smile build everyone politics run.\nFactor trip personal.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private", "important", "company"],
          time: "2021-07-04T15:30:03",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        },
        {
          id: 3151,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "zjackson@hotmail.com",
            name: "Don Stewart",
            avatar: avatar7
          },
          subject: "Nation campaign still never church politics business.",
          cc: [],
          bcc: [],
          message: "<p>Leg simple region out compare include wide. Simply kid away person training how. Answer laugh build attention cell authority be.\nPolitical citizen soldier record score green consider. Catch result traditional debate subject finally security.</p><p>Model seek stand fish three. View might space.\nSection receive fire town prepare public camera order. Sometimes nice another realize level. Shake fill institution forward author matter same.</p><p>Too home after lay senior. Result agree strong finish should easy onto agreement. Size PM usually war recent raise tend use.\nWork section story six billion. Long would add film middle financial third. Citizen up debate room owner deal.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private", "company"],
          time: "2021-07-08T17:55:49",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 600,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "mary98@yahoo.com", name: "Dana Harvey", avatar: avatar2 },
          subject: "Both community term run maybe sort per.",
          cc: [],
          bcc: [],
          message: "<p>Watch great himself all. Court such building kid from region. Reveal team poor lawyer theory listen.\nSon participant very better. Bed city dog sign.\nBall despite player whatever whatever opportunity. Training social kitchen blood fly.</p><p>May hit expert last. Attention opportunity shoulder. Agency federal just candidate study long.\nNotice first work full write recognize probably. Once writer common low last.</p><p>Hour about entire material. Various from subject military read safe seat. Truth third spend hair role home. Any herself analysis pay.\nGame get class ever enter once its. Job street student ok.</p>",
          attachments: [],
          isStarred: true,
          labels: ["important", "private", "personal", "company"],
          time: "2021-07-27T16:48:17",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 23080678,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "ppineda@yahoo.com",
            name: "Samantha Martin",
            avatar: avatar4
          },
          subject: "Whether far ready success yes many window.",
          cc: [],
          bcc: [],
          message: "<p>Cause have like. Unit nearly view feeling arrive player. Nor officer she production fly nice begin value.\nBehavior trade focus any. Or economy information class blue school structure everything. Production white although her total natural space.</p><p>Recognize section and tend. Understand box option agency event drive window. Child himself during statement financial under. Drug daughter attention magazine window go red.</p><p>Because drop measure I significant. Fall type us a staff wind court. Student discuss pattern way.\nPlan should book. Lead decide radio ok foreign behavior bit style.\nHundred no dream smile. Whose put indeed medical.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal", "company"],
          time: "2021-07-04T13:28:16",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 41,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "julie16@yahoo.com", name: "Tyler Hernandez", avatar: avatar3 },
      subject: "Environment success however window student.",
      cc: [],
      bcc: [],
      message: "<p>While million social ball surface in late.\nBudget though five so fund purpose.\nBall understand effect teach. Find charge rich child. Do require laugh everybody interesting.</p><p>Season south town performance whole political thought box. Management try just president. Finish fish strong teach enter ahead.\nBehind unit difference expert position two. Let before account baby cut should TV. Explain effort realize need.</p><p>Even item or environment save ten prepare activity. Nearly become current.\nBed nature indicate discussion least career perhaps. Head must sure. Why sea around buy. Audience politics sell strong career.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important", "private", "company"],
      time: "2021-07-06T01:09:02",
      replies: [],
      folder: "sent",
      isRead: true,
      isDeleted: false
    },
    {
      id: 40,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "brownsandy@gmail.com", name: "Michael Smith", avatar: avatar3 },
      subject: "Miss strategy want author test.",
      cc: [],
      bcc: [],
      message: "<p>Hear college professor see agent believe easy. Front test big black shoulder although. Candidate skill every player pressure.\nMany six reason allow kitchen. Respond us bank idea treat sure stuff tonight.</p><p>Nothing stay medical strategy early position maybe buy. Turn board early. Particularly then care value should material.\nSong doctor phone offer. Lawyer fear say discussion result represent. Performance back when cover effort.</p><p>Determine huge with newspaper computer focus detail trouble. Move support strong certainly.\nPopulation administration thing fund push movie democratic community. Town next wonder.</p>",
      attachments: [],
      isStarred: true,
      labels: ["private", "important"],
      time: "2021-07-05T16:18:51",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 39,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "marissa73@hotmail.com", name: "James Russell", avatar: avatar3 },
      subject: "Interview some and minute.",
      cc: [],
      bcc: [],
      message: "<p>Result last clearly should bad. Need management account other player. Time pressure beautiful teacher provide. Mouth senior explain official would exactly.</p><p>Management attack fight some item. Once century agent method section what. What their defense you. Factor civil significant enough plan different.</p><p>Body amount know condition own gas near state. Strong as black place service.\nSignificant all game. Drive assume from wear option.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "private", "important"],
      time: "2021-07-19T05:03:32",
      replies: [],
      folder: "inbox",
      isRead: false,
      isDeleted: false
    },
    {
      id: 38,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "brendajames@hotmail.com",
        name: "Richard Spencer",
        avatar: avatar7
      },
      subject: "Town baby them account house save prevent.",
      cc: [],
      bcc: [],
      message: "<p>Pattern sing wrong late north.\nDeal age risk yourself mission able car defense. Choice audience determine dream spend Congress. Mrs produce everyone who bed civil.</p><p>Forget top well little door at share. Money leg recently from make will radio.</p><p>Result plant rich tonight here discussion draw during. Population play serious their bill. Reduce industry right remember attorney them too.\nFirst once over yard. Standard so low.</p>",
      attachments: [],
      isStarred: true,
      labels: ["company", "important"],
      time: "2021-07-16T20:40:12",
      replies: [
        {
          id: 1245629,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "kellyjones@yahoo.com",
            name: "Mark Martinez",
            avatar: avatar5
          },
          subject: "Movement risk cultural.",
          cc: [],
          bcc: [],
          message: "<p>Both statement now painting decade guess commercial. Treatment movement over idea drop house expect. Heart sense agree live amount her.\nAuthority data Mr all day stock star. By shake seem shoulder not myself order. Out concern from reach.</p><p>Me worry field three name. Mr history when across around. Garden think rate central challenge guess structure.\nCall difficult relationship house around. Water public maintain. Our myself yet personal government condition.</p><p>Themselves final admit from staff conference no. Ask certain summer set purpose. Budget cost enter town most trip. Most your keep he the power.\nTrip news couple.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal"],
          time: "2021-07-11T06:55:40",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 1,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "sonyamccall@hotmail.com",
            name: "Lisa Richardson",
            avatar: avatar4
          },
          subject: "Despite produce officer ground employee president.",
          cc: [],
          bcc: [],
          message: "<p>Understand conference debate. Among call fear away. Represent camera show job range street.\nInterview continue ahead believe subject. Himself sit them bit with bring. Oil particular represent wish home.</p><p>Your action note rise can food change. Eat claim plant accept wear film available few. Human wind security protect camera line.\nNotice deal to about truth forget every. Dark me camera where different better. Dog involve serve indicate do share for.</p><p>Sort all want oil travel need.\nBag contain hold deal individual pick believe ago. Middle oil receive close fact read. Offer often painting identify sure.\nLearn show next. Learn consider view face. Only life study near.</p>",
          attachments: [],
          isStarred: true,
          labels: ["important", "private", "company"],
          time: "2021-07-04T15:24:04",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 37,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "juliasosa@hotmail.com", name: "Cheryl Wright", avatar: avatar6 },
      subject: "Movie admit final enjoy particular.",
      cc: [],
      bcc: [],
      message: "<p>Poor bad find. Report TV over long region defense.\nTwo sister according alone. Natural great before prove north assume become focus. Including work environment water poor.</p><p>Score though true evening again analysis feeling wait. Certain discover carry chance ever. Rich staff test raise discover.\nBoard federal improve bad impact eat box word. Situation blue culture environment road city soon.</p><p>Decade subject another our million or. Be stock interview easy those population maybe. Help send society. Win many team find.\nManagement about guy. Cultural resource prevent natural age tree reduce. Effect carry man.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-28T11:05:28",
      replies: [
        {
          id: 3558,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "dillon01@hotmail.com",
            name: "Brenda Navarro",
            avatar: avatar8
          },
          subject: "Business key Democrat sing.",
          cc: [],
          bcc: [],
          message: "<p>Meeting carry shake turn. Money because radio lawyer better. World trial view benefit result someone sort expert. American while public question.</p><p>Court ask various serious safe. Cup than hot child sort.\nSmile view issue high recently develop floor. Ten science including force message. Hear room author return risk military.</p><p>Unit vote popular collection strategy group. Newspaper region fly structure seem story art. Skill ever as money meet involve.\nAs environmental sister investment film represent. Until student occur include few science.</p>",
          attachments: [],
          isStarred: true,
          labels: ["important", "personal"],
          time: "2021-07-20T02:27:59",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 21238317,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "danielle69@yahoo.com",
            name: "Erica Miller",
            avatar: avatar2
          },
          subject: "Way program finish type yes then area.",
          cc: [],
          bcc: [],
          message: "<p>Project growth brother. Star capital bring.\nRange movement risk perhaps loss. Team raise card bag hit.\nParticularly last lead system within walk public perhaps. Tax travel suggest physical data company. Mrs fear establish away.</p><p>Treatment fight as foot Republican. Sister happy major I well less fish. Various goal face up. Age put head hotel style tree.\nSurface list evening this stay. Doctor stage would current. Wide audience after paper. Process yard end man future lead.</p><p>Moment push store necessary program. Have health seek. Name safe young career those agent.\nBe protect whatever skin. Read by talk we start. Might author final perform. Tv own follow wife either husband.</p>",
          attachments: [],
          isStarred: false,
          labels: ["company", "private", "important"],
          time: "2021-07-06T20:33:50",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 36,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "benjamin30@gmail.com", name: "Pamela Mueller", avatar: avatar6 },
      subject: "Dinner start pretty.",
      cc: [],
      bcc: [],
      message: "<p>Require might team under authority.\nCustomer value still number deal. Cell both type customer do. Congress opportunity subject.</p><p>Above threat security how. Worry too interesting especially government help instead.\nWide ability study oil training teach. Help lot tree recent admit lot business.\nCapital order himself fall rest room those.</p><p>Impact beat business hear pretty. Current professor nearly agency. Attorney education fish result move.\nFormer military bar middle PM back his. Play nature image matter pick. Standard job smile food.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "personal"],
      time: "2021-07-03T05:40:50",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 35,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "dana33@yahoo.com", name: "Becky Coffey", avatar: avatar2 },
      subject: "Less forget everything only girl.",
      cc: [],
      bcc: [],
      message: "<p>His exactly require able. Team become friend chair between within. Employee program power science eight guy dark.</p><p>Crime his teacher imagine outside energy recent. Building week short brother many enter measure. Approach better them area deep.\nChild gas yard character. To management mother never own arm key. Trouble three speech cover feel listen.</p><p>Future north quite partner interesting. Interview investment clear industry Democrat investment. Even ahead identify.\nThese character threat next help include. Offer contain necessary something all. Reflect growth quickly part rate create question.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important", "company"],
      time: "2021-07-08T06:53:31",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 34,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "hollandjulie@yahoo.com",
        name: "Christopher Evans DDS",
        avatar: avatar5
      },
      subject: "Financial series artist region.",
      cc: [],
      bcc: [],
      message: "<p>Peace approach ask course central reality. Decision PM standard production brother report federal its. Wonder common group current often vote.</p><p>Professional sure fear blood much question. Operation ever authority water the woman. Hospital second rich let.\nOpportunity actually decision positive. During beautiful today decide know those. Chance list many create including become instead with.</p><p>Feel put treat. Mention arm name bank side.\nWhy area language reach well. Mother Mr worry order example.\nBegin part stay culture tend. Strategy administration yeah woman measure air. Than exist with indeed population talk.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal", "private"],
      time: "2021-07-12T11:07:10",
      replies: [
        {
          id: 689385,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "wilsonroy@gmail.com",
            name: "Chelsea Sims",
            avatar: avatar4
          },
          subject: "Prove rest forward wear.",
          cc: [],
          bcc: [],
          message: "<p>Just trip own remember change these part. Trip success network send not room half yet. Floor pay which expert service.\nWhile both throw sister.\nCertainly remember certain country both. How seat exist. Hundred wind in page.</p><p>Trouble them least control. Forget up scene training garden. Effect for risk remain sign.\nSouthern bill blue general usually end how admit. Whom view final pay population reason. Type fire million on section individual.</p><p>Business specific prepare machine. Area stage poor pull. Performance myself dark school.\nScientist service student nation who wide market. Know clearly they finish. And maintain not soon play right.\nSign similar support cell. Meet less share pass.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal", "company", "private"],
          time: "2021-07-26T09:23:33",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 66371,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "dannynguyen@hotmail.com",
            name: "Matthew Schaefer",
            avatar: avatar5
          },
          subject: "Staff can next along long true dark.",
          cc: [],
          bcc: [],
          message: "<p>Hotel only mind create soon north life. Improve pass too important those per including. System four north.\nFamily politics floor huge bad. Light look start apply forward civil agree. Later place expect at build.</p><p>First now against include time experience those and. Their these reveal guy dark. Always option fall evidence once success.\nLive sing gun meet. Spring face political voice. Blood clear couple run left available.</p><p>Visit network so total wife. People artist experience citizen maybe water good.\nHis news wonder note. Consumer kitchen him sport type.\nCandidate fall where structure. Art hour term matter look program.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal", "private"],
          time: "2021-07-09T01:39:12",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "sent",
      isRead: true,
      isDeleted: false
    },
    {
      id: 33,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "hsmith@gmail.com", name: "Wendy Marshall", avatar: avatar8 },
      subject: "Enjoy see man news decide build class make.",
      cc: [],
      bcc: [],
      message: "<p>Because gun area better region role party. Most cultural control radio religious rule human.\nFinal cold positive country story gun.\nThey myself bed involve. Course president health might lot close. Level fine college deal.</p><p>Tree race ground customer. Window prove maybe television possible well soldier over. International run conference free white audience consider.\nInterview ball leg number blood support his turn. Care product a.</p><p>Something ahead painting then option recognize. Use force price then away.\nFind agent hospital physical his. Town money person case during body.\nFast have kitchen character a race walk. Stage bring we entire sort.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal", "company"],
      time: "2021-07-10T22:42:15",
      replies: [
        {
          id: 301809469,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "maryatkins@gmail.com",
            name: "Kimberly Cisneros",
            avatar: avatar4
          },
          subject: "Family pretty interest decision.",
          cc: [],
          bcc: [],
          message: "<p>Feeling production spend. Program look stand meet him. Ask away generation phone.\nMachine process window range serious process remain. Good charge in serious study seat. Heavy she concern door fire organization money fact.</p><p>Whether end investment pay. Happy information cup then. Edge fire suffer remain catch.\nDirector international determine might. Clearly fire something player. How that increase ready section. Visit become contain.</p><p>Decide find growth continue movie thank sort.\nPull where attention treat or. Since resource gas person trade organization crime. Growth southern lay lose president likely half.</p>",
          attachments: [],
          isStarred: true,
          labels: ["private"],
          time: "2021-07-23T04:23:43",
          replies: [],
          folder: "spam",
          isRead: false,
          isDeleted: false
        },
        {
          id: 930166,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "nramirez@yahoo.com", name: "Kenneth West", avatar: avatar1 },
          subject: "Factor TV wife career thing loss increase.",
          cc: [],
          bcc: [],
          message: "<p>Every public quality also. Almost base imagine former decade pull also the. She stage so military admit.\nSouth better general base reason employee may. Control see way end material service. Everybody fear risk party weight.</p><p>Sea line production appear them through. Late gun something power little care. Interest since test total.\nProvide as condition none wind month thus. Fly sort south artist letter health night.\nWrong group affect even. Identify way interview politics.</p><p>Risk total natural follow music drop sense hospital. Space family cover effect. Live particularly letter generation toward concern reality friend.\nOrganization bar ask great most live seat week. Against western use present.</p>",
          attachments: [],
          isStarred: true,
          labels: ["private", "company"],
          time: "2021-07-14T00:55:32",
          replies: [],
          folder: "sent",
          isRead: false,
          isDeleted: false
        },
        {
          id: 324,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "tina53@hotmail.com",
            name: "Douglas George",
            avatar: avatar1
          },
          subject: "Recognize to study.",
          cc: [],
          bcc: [],
          message: "<p>Perhaps pretty color walk different likely think. Southern occur soon chair leave discover heart. Rest product break member operation.</p><p>Agreement I include for.\nState anyone fight interview view west concern. Reach social reason how husband east.\nSometimes able especially simple size behavior. Talk beyond both big another often former.</p><p>Her money art involve building natural garden. Pay them respond step that. Old yourself table would agency. Pay recognize family individual.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "company"],
          time: "2021-07-28T01:47:02",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "spam",
      isRead: false,
      isDeleted: false
    },
    {
      id: 32,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "jeffreystevens@yahoo.com",
        name: "Christopher Adams",
        avatar: avatar3
      },
      subject: "Finish actually parent condition business discussion later practice.",
      cc: [],
      bcc: [],
      message: "<p>Design left million test bag character. Pm everybody ago. Table finish sell my pay quite. Often account cover home war.\nCourt sport difference film left guy natural understand. Across ok quite now camera rock.</p><p>Plan citizen star off often evidence remember. Describe professor economic professional represent catch. Employee stand person eye. Region address spend.</p><p>It policy beyond scene. Wide bed culture account eat. Color technology even.\nMight ready option guess. Once create ever worker paper perhaps. Show likely say produce capital court.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal", "important", "private", "company"],
      time: "2021-07-27T09:40:52",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 31,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "maria99@hotmail.com", name: "Theresa Schmitt", avatar: avatar8 },
      subject: "Life store technology least under black type.",
      cc: [],
      bcc: [],
      message: "<p>Main each pay bar professional blood fill. The commercial amount thousand carry. Sound ball become court relationship so white.\nFight late exactly evidence evidence art but. Congress spend camera sea other. Theory protect plant wait.</p><p>Her necessary capital around nor issue herself. Late quickly someone own painting moment participant.\nRequire civil night take. Southern cold because option report share fine who.</p><p>List black mean everything read front Mrs. Look whatever street approach fear guess once. Paper somebody hear machine.\nTogether it price world professor country. National worker specific shake. Open security tell all sure none imagine say.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "private", "personal"],
      time: "2021-07-01T03:23:03",
      replies: [],
      folder: "sent",
      isRead: false,
      isDeleted: false
    },
    {
      id: 30,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "kempsarah@gmail.com", name: "Sherry Guzman", avatar: avatar2 },
      subject: "Officer population memory level foot public.",
      cc: [],
      bcc: [],
      message: "<p>Summer general go happen owner last. Store live organization court think.\nDiscover second million today space activity conference. Generation young design factor interesting. Account always Mrs garden plant.</p><p>Sound discover piece people. Positive decade describe. Focus science free.\nSide mean however plan price me.\nBy later building result important down lay. Try growth structure nation above pull however those.</p><p>Wonder end value lead help quite trial. Recognize teacher establish explain. Try usually find over matter much.\nRaise son mouth.\nBase reach bit recognize focus. Stop best sea improve develop.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private"],
      time: "2021-07-20T16:43:48",
      replies: [
        {
          id: 76,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "jessica23@gmail.com",
            name: "Lauren Smith",
            avatar: avatar8
          },
          subject: "College community effect care.",
          cc: [],
          bcc: [],
          message: "<p>Task age compare talk yard. Matter turn their price road.\nCulture four decide work chance cost include. Rock return statement. Major major several around method.\nUs would threat federal sense mean.\nCondition as why fast. Guy bit often professor.</p><p>Tell concern difference eye office trade fund fire. Lead report only star hot.\nFeel far factor current girl. Two hair fight a recent movie apply. Again series sometimes recent identify.</p><p>Perhaps agree note between house whom too. Down could important production tend figure special. West far bad impact cause great.\nRepresent green throughout never type trouble outside. Call adult would clearly. Turn stand federal.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private", "important", "personal"],
          time: "2021-07-20T17:21:18",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        },
        {
          id: 435260844,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "lkelley@yahoo.com",
            name: "Michael Torres",
            avatar: avatar3
          },
          subject: "Build learn audience water article ball must.",
          cc: [],
          bcc: [],
          message: "<p>Method election require important majority five. Seat listen story.\nCause middle act film. Available turn gun before whole especially kind simple.\nStage wrong hot find agree suddenly. Chance source clear share stay few.</p><p>Figure activity role official. Food live personal.\nPersonal no public computer prepare when. Fish available report network if attack among decide. Seem rule inside economic door.</p><p>Budget open send wrong property. Half spend stock less. Degree act general skin these any personal per.\nUntil never state chair already. Product sign best.</p>",
          attachments: [],
          isStarred: false,
          labels: ["important", "company", "private"],
          time: "2021-07-10T07:00:15",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: false
        },
        {
          id: 7780,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "thomaspeterson@yahoo.com",
            name: "Dylan Logan",
            avatar: avatar1
          },
          subject: "Artist food section media commercial hospital.",
          cc: [],
          bcc: [],
          message: "<p>Tax above either world. Candidate accept final challenge which risk. Fact book example positive follow attention.\nCost building central contain natural. Adult least by.</p><p>Fast cause environment go explain necessary. Help citizen others beat sure child. Claim inside whether approach chance always central.\nSide ten bill look fine career. Attention real little power yourself bank.</p><p>Nothing American sister truth medical matter. Use door practice feel point fear. Argue else however involve fact.\nOwn recognize save. Federal brother loss mouth painting paper.\nDemocrat crime join quality. Off politics note soon.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-26T23:06:27",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        }
      ],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 29,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "daniel37@hotmail.com", name: "David Cruz", avatar: avatar5 },
      subject: "Clearly my usually billion ability response.",
      cc: [],
      bcc: [],
      message: "<p>Face despite management international talk force detail. Partner score hit democratic fast life property. Age information wear grow rise hard price. Every area character first activity smile.</p><p>Station character American usually nice change young. Make perhaps happy trade since science. Fine think attack successful.\nCrime bit spring city. Lawyer light ball unit instead statement. Lose friend account buy oil ten tend.</p><p>Security identify there. Person factor item build never language.\nEnter stock military early. Wish identify level difference fire wall. Girl finish sense indicate bad.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private", "company"],
      time: "2021-07-01T10:33:17",
      replies: [],
      folder: "sent",
      isRead: true,
      isDeleted: false
    },
    {
      id: 28,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "areeves@gmail.com", name: "Anthony Obrien", avatar: avatar5 },
      subject: "A type network effort blood do various.",
      cc: [],
      bcc: [],
      message: "<p>Own measure phone view baby officer. Detail nor television. Wear decade official long.\nCan interview point poor increase pick quickly run. General need audience foot weight firm. Month ability public. Go class let rise spring heart.</p><p>Cover attention letter later many town stuff away. Week lawyer western street.\nUnit rate reality adult. Arrive staff book me many.\nHand perhaps well thank join serious great budget. Including road upon will. Per price mission break.</p><p>Experience late nothing get baby head should. Must technology service address blood.\nChance decide else mean consumer pretty everything. Hospital couple second fly security region brother.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important", "company"],
      time: "2021-07-20T18:39:49",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 27,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "bnunez@hotmail.com", name: "Jason Gonzalez", avatar: avatar5 },
      subject: "Affect method provide break himself house.",
      cc: [],
      bcc: [],
      message: "<p>Science design amount responsibility. Seem himself degree. Decade central manage. Rather four decide word.\nQuickly keep such popular different approach woman. Population body decade baby view significant can. Wish a build respond.</p><p>Site cut forget international lay he there. Tax early try authority.\nAbout term enjoy prevent affect. Even environmental kid skill.\nFirst plant number site bad interest board. Investment half so.</p><p>Method sea agent capital later just worker. Main guy cut build building. Condition similar best gun. Dinner new box major artist space in.\nRaise try science grow. House picture raise indeed light.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private"],
      time: "2021-07-23T07:42:38",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 26,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "welchcrystal@gmail.com",
        name: "Christopher Sanchez",
        avatar: avatar5
      },
      subject: "Trade science concern necessary theory option us.",
      cc: [],
      bcc: [],
      message: "<p>Top foreign never recent baby girl base. Show charge senior difficult drug effect. Fear on standard doctor stop investment spring.</p><p>One long article market there into. Share nature member owner evening. Form tree real cultural.\nSecond be report teacher admit close.\nWhom skill teach. Blue song ahead weight rather walk line. Five talk require.</p><p>Rate onto nearly address rule side activity. Result ahead you hope woman worker evidence.\nCollection citizen we industry. Sister and that according organization leave. Day agency hope pick.\nEconomic him consider body four section single when.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-10T16:15:08",
      replies: [],
      folder: "inbox",
      isRead: false,
      isDeleted: false
    },
    {
      id: 25,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "fullerkatelyn@hotmail.com", name: "Ana Short", avatar: avatar4 },
      subject: "Follow tax officer soon our four relationship consumer.",
      cc: [],
      bcc: [],
      message: "<p>Couple almost table everyone together contain. Plan fill trip. Perhaps explain college will machine mouth training popular.\nNice include wrong road alone. Could for adult perform.</p><p>Tax ahead ground general industry. Else style only Mr agent all.\nAlready walk edge might forward. Cold wind hard read. Street poor process major especially example defense.\nDecade capital question talk work box forget. Always hear Mr ago.</p><p>Apply camera white natural should another. Past event herself score. Own thus general despite pattern. Ability pressure network mouth sometimes represent.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-12T09:22:10",
      replies: [
        {
          id: 4556357,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "woodjames@gmail.com",
            name: "Taylor Lopez",
            avatar: avatar4
          },
          subject: "Appear imagine western.",
          cc: [],
          bcc: [],
          message: "<p>Effect fall action chair candidate forward. Away character action start even focus claim address.\nJob once off according put off. Give answer near star cell expert. Use tax care month list.</p><p>Investment it check.\nPopulation oil mouth glass against. Stand all art leader agree.\nHerself only score image prevent bar table. Total treatment enjoy everything. Long later just cover or great meet.</p><p>Exist month watch wish remember simply low. Knowledge treatment maintain fine organization fall identify.\nIdea enough worry coach better stand general. Threat western language must person.</p>",
          attachments: [],
          isStarred: false,
          labels: ["important", "company"],
          time: "2021-07-08T11:19:22",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        },
        {
          id: 419,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "charlotte46@gmail.com",
            name: "Edwin Pena",
            avatar: avatar3
          },
          subject: "Hundred happen national measure.",
          cc: [],
          bcc: [],
          message: "<p>Try high body design blue. Deep improve ahead police.\nHuman behind police international. Around would nor position particular physical break. Pm for against clearly.</p><p>Who in rock then build. Analysis produce kind senior until where. Part east understand.\nChance billion culture might so five. Particularly create story maintain article give fall. Short improve whatever new available wear affect.</p><p>Financial great impact everyone until.\nThem might try range main. Activity decade stock first stock start explain. Write phone nice increase fish several.\nNewspaper exist himself dinner choice agree hear. Great receive today identify.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "personal"],
          time: "2021-07-28T00:33:38",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 5123,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "amandawagner@yahoo.com",
            name: "Laura Montes",
            avatar: avatar2
          },
          subject: "Administration choice move against provide value none.",
          cc: [],
          bcc: [],
          message: "<p>Goal throw including miss sometimes staff traditional. Material talk place point pay.\nShake popular part wind. While state light. Explain movement they.</p><p>Our herself indeed let use. Debate front within yes impact change big contain. Purpose outside nothing leg image never dark husband.\nPlant bring decision avoid ground act book. Up hold speech. Local indeed short.</p><p>Cold step herself style important. Week base tree game kid. Coach yet expect determine personal. Here happy peace have cause up.\nApply include recently reality common attention. Effort politics player though fly.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "company"],
          time: "2021-07-23T04:17:17",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        },
        {
          id: 60679807,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "clarkdwayne@hotmail.com",
            name: "Felicia Myers",
            avatar: avatar2
          },
          subject: "Me during name.",
          cc: [],
          bcc: [],
          message: "<p>Miss back sing simply. Tax surface shake page so. Any rule vote for.\nSport six former simple. Daughter business push reality information.\nResource just possible rich enter. Tax full box beat. Network edge cultural among no morning.</p><p>Since but appear place. Trouble particularly paper chair commercial. Offer everyone success trip. Treatment special support resource.\nGun analysis test recently ball. Reality organization family test TV I surface.</p><p>Appear system shake charge nice foot. There our wrong author investment coach. Feel leg economy require push performance out speech. Need hair however commercial.\nLike Congress system whether skin. Research little attention art.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "important"],
          time: "2021-07-09T19:19:45",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 31103,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "hobbsjeffrey@yahoo.com",
            name: "Erica Mann",
            avatar: avatar6
          },
          subject: "Ability pretty student health current interesting even.",
          cc: [],
          bcc: [],
          message: "<p>Image American daughter test animal. Somebody especially war loss name only just.\nStation such television also good away so water. Protect across television phone. Realize almost final half fight establish.</p><p>Program skill rest bed east here become law. How loss might purpose low time organization. Industry different enter share budget.\nFeel million how modern whole religious half finish. Hospital stage decision consider democratic.</p><p>Sort move scene behind. First office take together keep note break kind. Either laugh top agree prepare change.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "important", "company"],
          time: "2021-07-21T11:41:54",
          replies: [],
          folder: "spam",
          isRead: false,
          isDeleted: false
        }
      ],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 24,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "hmoran@gmail.com", name: "Vincent Alexander", avatar: avatar1 },
      subject: "Over tough city well first should quite.",
      cc: [],
      bcc: [],
      message: "<p>Sense speech economic compare chair. Suddenly model bank add. Let church door human ready share begin sense.\nPlay weight audience call necessary reach candidate rest. Collection lead voice position news listen police.</p><p>Describe safe almost hold. Rich because trip blue. Discussion born spend because anyone need.\nWonder skill state. Movie receive guess with. Turn pressure market term experience hotel collection.\nOff staff word once money.</p><p>Response north Mrs area writer election. Include early look similar nearly be. Rate happen green not.\nRun bed where state why sit house attorney. Which allow size learn. Describe mind where speak some son herself.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "important"],
      time: "2021-07-12T13:33:33",
      replies: [
        {
          id: 324726,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "victorjohnson@yahoo.com",
            name: "Tamara Vega",
            avatar: avatar6
          },
          subject: "Democrat miss deal career maintain hotel.",
          cc: [],
          bcc: [],
          message: "<p>Base enter whom respond throughout together. Nor generation various company bar. What consumer how.\nKid recently civil store. High hot assume gun.</p><p>Important win election center. Party less knowledge only magazine past condition yard. Sound doctor say between.\nResult process may have firm wide. Moment audience skill safe fast. Spring although member defense value job.</p><p>Nothing serve media tell network site benefit artist. Left scene strong. As community decide major.\nNearly indeed send begin read. Recent foot three letter wide spend have. Growth whether once home actually without central.</p>",
          attachments: [],
          isStarred: false,
          labels: ["important", "personal"],
          time: "2021-07-13T12:43:08",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 3,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "jeremywilliams@yahoo.com",
            name: "Jason Schultz",
            avatar: avatar1
          },
          subject: "Piece effect usually everyone make.",
          cc: [],
          bcc: [],
          message: "<p>Market easy before really individual window soldier garden. Better space avoid fund. Politics friend class something western model. Seem successful recently sometimes.\nServe shake try for you our. Involve organization last at inside.</p><p>Employee office list player. Pass cold charge.\nEye sometimes article pressure. Chair mission structure him owner. Fight leg common her forget across against.\nMusic national student. At part wide fund.\nReady health everybody.</p><p>Cover century him back card property success. Enter feeling light oil cell push research.\nNow drop everyone must side blood program. Factor fire dark their kind hit everyone person. How property million interesting both important.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal"],
          time: "2021-07-13T19:56:30",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 4,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "jasonpalmer@hotmail.com",
            name: "Deborah Tran",
            avatar: avatar2
          },
          subject: "Certain executive them health successful spring.",
          cc: [],
          bcc: [],
          message: "<p>Commercial individual understand past history large strong.\nPositive summer three need evening. North between pay politics art hand ago cover.\nLevel happen start practice reach. Produce sport show condition. Individual grow education.</p><p>Return fear food enter friend. Great company opportunity nearly garden choose.\nLast capital cell true edge. Daughter cost west stage force tell.\nEvidence stop whether power. North hospital base accept. Message him likely trouble tax business part.</p><p>Just record kind drug four perhaps entire. Economic surface century individual behind understand.\nTax hair charge investment similar perhaps pay. Return room create table other foot happen approach.</p>",
          attachments: [],
          isStarred: true,
          labels: ["private", "personal"],
          time: "2021-07-14T18:37:56",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 19865651,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "danny06@gmail.com", name: "Walter Moss", avatar: avatar3 },
          subject: "Go town spend determine we money experience partner.",
          cc: [],
          bcc: [],
          message: "<p>Color onto chair very the account article different. Time however total without.\nHerself left knowledge never heart its product over. Citizen range state various same fall would day. Anyone against when grow evening.</p><p>Grow main front thing boy. Accept shake student consumer whom.\nAnyone return between apply.\nRead its prepare young. Week start for again focus doctor. Itself term until see somebody.</p><p>Trial direction idea green young. Success to light later.\nUse box sense indicate ask. Himself six five. Ready government than young represent difficult.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-08T13:58:13",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 23,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "paulbarrett@gmail.com", name: "Robert Soto", avatar: avatar7 },
      subject: "Apply loss always difference husband course deal.",
      cc: [],
      bcc: [],
      message: "<p>Realize American professor television give.\nNice meeting individual could major instead. Late development deep. Memory main how minute reduce want whether happy.</p><p>Capital fight water page artist seem own. Make join public break. Support water analysis cup forget together.\nAgain along listen defense ground mission once region. Last ground experience hot trade free camera.</p><p>Bill floor tonight good condition. Traditional must spring onto break. Left just everybody election. Treatment foreign control dark often.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private", "personal"],
      time: "2021-07-06T23:12:45",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 22,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "danagriffin@gmail.com",
        name: "Alexander Alexander",
        avatar: avatar7
      },
      subject: "Lead position story common choice pay sit line.",
      cc: [],
      bcc: [],
      message: "<p>Hand style bill phone day new area. Central husband measure could. Democratic health begin draw politics wear interest.\nHim avoid knowledge music. Offer forward happy easy. Just yard one light weight teacher threat.</p><p>American it feel parent protect. Center building recent politics when hand bar under. Without hard relationship issue.\nContinue friend game concern. Agency discussion simply hotel now prevent.</p><p>Sense indeed glass accept interest. Carry window dog onto involve specific.\nRadio despite police scientist economic. Fire affect your term. Send to end avoid political ability.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private", "personal"],
      time: "2021-07-03T07:04:27",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 21,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "bakercarrie@yahoo.com", name: "Dawn Hall", avatar: avatar2 },
      subject: "Magazine smile hear price.",
      cc: [],
      bcc: [],
      message: "<p>Ball skin product option anyone. Away involve whatever score.\nCommon ever show all body bed already. Modern politics century sort. Half study write life certain.</p><p>Nothing little whose carry source force heavy employee. Price force leave small follow. Push enjoy down teacher among. Huge nature whose risk season east maybe peace.\nPolitics interview drop sell. Trip from simple matter event.</p><p>Brother simply structure some kitchen some expect. Family personal civil focus professional task specific cut.\nDemocrat continue cause television yourself whether. Find west particular ago stand car.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-06T12:47:33",
      replies: [
        {
          id: 6333,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "james94@gmail.com",
            name: "Ronald Mitchell",
            avatar: avatar1
          },
          subject: "Cost example hope modern especially language rock.",
          cc: [],
          bcc: [],
          message: "<p>Mr go size financial role. Deal defense about space. Leader site water well side walk need.\nBall impact suddenly those rather have marriage first. May wear need may design.</p><p>Everyone artist run weight. State on executive travel.\nBrother instead nice while such half trial live. Policy truth animal make set them ask.\nPretty almost pick player after involve. Hot energy interview clearly however adult.</p><p>People during left particular rock design war young. Station require reflect. Later space head front within general. Program lose century stage.\nInstead very both. Owner bill tend Congress local.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-19T13:54:07",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 3539,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "averyamy@hotmail.com",
            name: "Courtney Reynolds",
            avatar: avatar6
          },
          subject: "President attack quickly religious.",
          cc: [],
          bcc: [],
          message: "<p>Stop military interest. Picture his money go quickly. Possible second wide high.\nTime air somebody on development born charge. Marriage address pull. Laugh chair range standard open list consumer wide.</p><p>Dinner another but student upon out. Soldier current management hair management.\nLikely population measure Democrat serious result reflect. Property tax knowledge. Recognize top peace nature pattern.</p><p>Table teach knowledge. Economic section security she. Myself share oil decide necessary when smile difference.\nService open oil car. Be model record stuff position scene also. All professional plan as radio candidate movie.</p>",
          attachments: [],
          isStarred: false,
          labels: ["company"],
          time: "2021-07-06T00:53:34",
          replies: [],
          folder: "sent",
          isRead: false,
          isDeleted: false
        },
        {
          id: 132667,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "englishjohn@gmail.com",
            name: "Phillip Warner",
            avatar: avatar1
          },
          subject: "Stand never treat commercial.",
          cc: [],
          bcc: [],
          message: "<p>Like begin million option dream just. Side still six truth alone exist that.\nIncluding himself movement increase significant. Police trial instead success he chair speak. Medical writer oil.</p><p>Successful compare analysis yes successful. Before sit old process similar physical.\nMedical receive debate than. Hit assume baby result place total.\nMoney discussion tax democratic surface everybody thousand. Throw six far home.</p><p>While reality along loss only alone pick current. Ok month view computer. Available drug ask knowledge add choose must.\nScene you ago laugh else city. Receive provide goal husband throughout. Focus local middle civil ever oil.</p>",
          attachments: [],
          isStarred: false,
          labels: ["important"],
          time: "2021-07-07T04:28:47",
          replies: [],
          folder: "spam",
          isRead: false,
          isDeleted: false
        },
        {
          id: 815966603,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "davidmckenzie@yahoo.com",
            name: "Tony Garcia",
            avatar: avatar3
          },
          subject: "However walk less use election.",
          cc: [],
          bcc: [],
          message: "<p>Shake stop century indicate cut garden. Night learn should low material north economy.\nAnother soldier base whole accept. Natural two everyone television. Sure option key market method week. Mouth day look too western world.</p><p>Company first rise in. Image movement enjoy clearly work box. Process parent fear state these theory want. Close friend team put check.\nCourt practice since account way indeed. Between exactly five. Conference green fast see century notice.</p><p>South six discover college long anyone young. Her company fine hotel rise.\nIf raise long yeah direction painting. Rest tell entire machine than summer laugh list. Personal rise figure collection player yard.</p>",
          attachments: [],
          isStarred: true,
          labels: ["private", "company", "important"],
          time: "2021-07-07T09:57:28",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 20,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "sandraarroyo@hotmail.com",
        name: "Natalie Lloyd",
        avatar: avatar2
      },
      subject: "During teach truth group society enough that.",
      cc: [],
      bcc: [],
      message: "<p>Price agreement more tell. Push special fine turn alone.\nVarious weight shake heavy age control side so. Determine fall family agreement pull guy easy. Sell will director experience where challenge Democrat.</p><p>Fly such evening all entire. Data cold hour.\nLocal strong article tend bag. Probably relate political sell. Service end environmental theory health. Ready think body necessary low result impact.</p><p>Agency trial address per strong bill able. Top lay chair bag positive rich partner. Interest address government argue project attention myself election.\nReach value pattern treat act result star. Staff list federal.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "important"],
      time: "2021-07-11T17:48:11",
      replies: [
        {
          id: 7,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "webersamuel@gmail.com",
            name: "Steven Jackson",
            avatar: avatar1
          },
          subject: "Hotel account interview begin carry everybody its.",
          cc: [],
          bcc: [],
          message: "<p>Get behavior better walk claim. Material popular civil detail.\nStop strong true first. Science scientist low story. These former near represent.</p><p>Fine value happy admit. Although its four could yet call. May beyond building bank push past perform.\nEnd civil audience son our my artist make. Security wish probably cold space reach life situation.</p><p>Station per choice live safe dog without. Above according break her woman organization market.\nCareer pass race mother manage for. Summer organization stage century fact individual particular.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal"],
          time: "2021-07-18T23:08:26",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 378459327,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "jobush@yahoo.com",
            name: "Mrs. Pamela Riggs MD",
            avatar: avatar6
          },
          subject: "Industry difficult want without day partner road.",
          cc: [],
          bcc: [],
          message: "<p>Never hospital price site without star. Agency nature resource perhaps send. Stand nice must.\nProve window individual final. Exactly collection boy picture try operation increase. About purpose American type include store determine.</p><p>Speak they reality consumer ball church.\nWorld sit price. More local clear. Camera kind food.\nShe often term somebody prove. Would low over someone law.\nInstitution any among face begin race term do. Teach language technology get animal good.</p><p>Play cell type process certain total stay. Court enough side choice again speech.\nBy alone young scientist walk individual a. Mind relate whatever fund vote contain. Reflect special hospital study may local.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "private"],
          time: "2021-07-18T03:59:12",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "spam",
      isRead: false,
      isDeleted: false
    },
    {
      id: 19,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "washingtonsamantha@hotmail.com",
        name: "Jessica Johnston",
        avatar: avatar6
      },
      subject: "Exist general medical under entire radio.",
      cc: [],
      bcc: [],
      message: "<p>Process book suddenly plan sense change science. Prepare air option response. Voice range human.\nYet staff back idea note his cold. Raise service about state final official.\nHair when expect ok sit food. Religious rule doctor all.</p><p>Need improve field set wrong born.\nConsider there situation also something. Glass finally must special. Region news water responsibility to my short. Deal hotel fill.</p><p>Successful apply reality think woman short. Hope various indeed onto third audience.\nWay score none. Raise budget tough dinner name. Similar something fall certain I different.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private"],
      time: "2021-07-24T18:10:41",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 18,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "mcleanrobert@hotmail.com",
        name: "Matthew Lee",
        avatar: avatar1
      },
      subject: "Travel free or write determine.",
      cc: [],
      bcc: [],
      message: "<p>Edge memory where short stuff. Seven summer from sometimes body probably church.\nYeah might enough believe world person somebody. Compare summer road save magazine.</p><p>Light street wear home. Result baby my show current present. Attorney analysis rule democratic bed top.\nFace should pay side federal responsibility item. Test step safe his yourself.\nHold language interview other agency. Leg soon determine.</p><p>Make style already you physical.\nAir challenge fund dark. Myself another evening let big improve parent huge. Money fly investment practice.\nProvide feeling peace open decide course. Community attack her magazine white. Those let any beyond.</p>",
      attachments: [],
      isStarred: true,
      labels: ["private", "company", "personal"],
      time: "2021-07-24T00:15:10",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 17,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "perkinselizabeth@gmail.com",
        name: "James Wilson",
        avatar: avatar7
      },
      subject: "Always beautiful name push miss international.",
      cc: [],
      bcc: [],
      message: "<p>Skin if open line speak wish. Ten size their happen trial. Will third prevent.\nPopular wall indeed memory cause generation under age. Less one pressure guy song.\nUpon theory item science speak mission. After read plan official good week yet show.</p><p>Shake trip when once break election red. Left individual store site prepare figure. Once indicate blue wear effect person catch.\nWind chance entire perhaps carry notice leg. Successful property education. Guy option include.</p><p>Author of exist no bag exactly. To impact since.\nArgue market strategy evidence start business movie. Million fire crime magazine mention.\nDeep figure full Mr. Take response four serve law. Forward late part.</p>",
      attachments: [],
      isStarred: true,
      labels: ["important"],
      time: "2021-07-07T22:14:25",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 16,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "garcialauren@hotmail.com",
        name: "Gregory Allen",
        avatar: avatar3
      },
      subject: "Test look option movement position card cause.",
      cc: [],
      bcc: [],
      message: "<p>Key rather religious director week inside campaign. Sport fast activity.\nCamera go sing development up pay. Product toward well.\nRepresent appear civil skill son city leg. Best road attorney religious. Issue collection who peace morning director.</p><p>Above know trip beyond smile science. Part sport behavior notice establish. Recent direction similar everything admit pretty.\nBehind a knowledge second sound. Body soldier begin word site.</p><p>Sense policy rule after no response itself. Have magazine draw should bit often food. Car start that trade person.\nLeft pattern PM identify before executive Mr. State two your meeting task different.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal", "company", "important"],
      time: "2021-07-11T00:14:13",
      replies: [
        {
          id: 744639799,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "howardjustin@gmail.com",
            name: "Rebecca Smith",
            avatar: avatar6
          },
          subject: "Region stop vote tonight partner capital us.",
          cc: [],
          bcc: [],
          message: "<p>Republican ten picture although partner green.\nWrite his than another hand only. Focus night table speak ahead couple. Baby me single another already unit hand.</p><p>On alone involve.\nMusic author event story east pressure thus. Game power administration.\nNext standard boy provide although city short society. Hospital company old view.</p><p>Interest see majority ability center hope. His decision use most four return college. Born technology affect like.\nAlong your military there note great day attack. Specific I throughout. Hand month family open.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal", "important", "private"],
          time: "2021-07-05T08:12:17",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 18,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "dwelch@yahoo.com", name: "Peter Davis", avatar: avatar1 },
          subject: "Second ground way child seem social resource appear.",
          cc: [],
          bcc: [],
          message: "<p>Building believe manage analysis artist another enough similar.\nFood provide long view civil couple. Citizen too health west culture rule finish administration. Political ever eight message specific mission.\nServe determine city stand four present.</p><p>Moment compare red or institution begin more. Nothing law long might degree. Meet relationship work money human probably head.\nForward region their high with region their. Many side goal.</p><p>Customer thousand amount ask other might. Article energy wide relationship. Prevent save himself wrong action.\nShow entire play upon at shake. Unit heavy training window probably start share. Common by allow.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal"],
          time: "2021-07-23T16:37:03",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        },
        {
          id: 712,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: { email: "larrybrown@yahoo.com", name: "Amy Peters", avatar: avatar4 },
          subject: "Interesting strategy south ok recognize shoulder lead.",
          cc: [],
          bcc: [],
          message: "<p>Bring dark let list then kitchen audience. Agreement raise result decision choose without.\nIndicate yet radio consider perform western. Find follow far require wish than pattern. Meeting benefit through seven service.</p><p>Question response big son student stuff. There imagine hold pick friend. For join condition try.\nAnimal foot work public one brother hit.\nWithout free business new degree. Local administration it those animal.</p><p>Simply less tax. Stuff apply member deal rather sort. Best politics project say rest.\nCare expect program break concern development care. East seat window. Kind firm cover up share perhaps.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal"],
          time: "2021-07-17T02:58:14",
          replies: [],
          folder: "draft",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 15,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "dreed@hotmail.com", name: "Rhonda Hamilton", avatar: avatar4 },
      subject: "They new police guy trade carry bad.",
      cc: [],
      bcc: [],
      message: "<p>Certain operation woman production especially second. To answer main good democratic move likely radio. Down rise human model land culture the.</p><p>Ten actually feeling call blue human. Less forward star another something he.\nUsually scene door enjoy heavy view management. Eye data conference. Attention traditional especially star else federal course. Speak position season stage head when.</p><p>Foot face beautiful little seven former you usually. Candidate hotel help.\nKitchen heavy she. Agent put move sister much. Hit some baby have fight.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "private", "important", "personal"],
      time: "2021-07-18T12:06:21",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 14,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "andersonkatrina@hotmail.com",
        name: "Richard Buckley",
        avatar: avatar7
      },
      subject: "Hospital small technology defense affect car.",
      cc: [],
      bcc: [],
      message: "<p>Finish race write suggest visit pay east. Might point heavy care.\nSociety who happen stock over toward account. Question shake city share marriage drug.\nEvery test total agency another like. Wall day word camera art.</p><p>As thus necessary degree always support fall. Leader town agree improve check career. Later service when artist customer blood.\nEasy daughter tend no raise. Throw glass various among nearly act if. Than area sort trial many marriage old decision.</p><p>Worker coach together raise civil term themselves. Television something ok thank.\nAlmost song task there budget quite process than. Sell which apply environmental.\nDrop mind computer increase born.\nAuthor with will time. Garden others agency wall.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal", "company", "private"],
      time: "2021-07-09T06:36:05",
      replies: [],
      folder: "sent",
      isRead: true,
      isDeleted: false
    },
    {
      id: 13,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "kimberlyrobinson@hotmail.com",
        name: "James Brady",
        avatar: avatar3
      },
      subject: "There bar risk bring.",
      cc: [],
      bcc: [],
      message: "<p>Thought prepare want hand character design most. Run result attack before.\nVoice return give right way along. He lose change season less cell moment use. Today benefit would somebody.</p><p>Million area million across near company heart. Happen official knowledge look. Turn class interesting.\nGive product fund would factor into hope. Everyone painting program forget including.</p><p>Begin force foreign degree detail oil such.\nFirm scene individual here point. Particular interview before people last shoulder. Appear until spend under along magazine.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal"],
      time: "2021-07-06T02:27:43",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 12,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "ugray@gmail.com", name: "Jane Buckley", avatar: avatar2 },
      subject: "Picture everything throw happen nothing social.",
      cc: [],
      bcc: [],
      message: "<p>Cell role hundred husband president figure. Make how real again.\nDevelopment image develop Republican. Military head drop. Relate wait able art.\nPolice response range establish back. Chance assume subject stock appear good research.</p><p>Thousand PM speech hear three yard should for.\nMachine crime too represent campaign book. According call each.\nPicture site create sister. Opportunity become who never bed number develop set. Major finish everyone meet vote letter across.</p><p>Reality send American. Democratic serious event oil lose. Tax position down front service improve election.\nThreat heavy over. Each leave several writer card politics. Question feel technology many thank.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-18T13:42:20",
      replies: [],
      folder: "spam",
      isRead: false,
      isDeleted: false
    },
    {
      id: 11,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "morrisjaclyn@gmail.com",
        name: "Kathryn Smith",
        avatar: avatar6
      },
      subject: "Green attorney government same course join in woman.",
      cc: [],
      bcc: [],
      message: "<p>Employee society live back. Bar woman film education.\nImportant report avoid. Wait nor goal. As morning say clear.\nBody strong of alone camera fall. Civil program particular first garden. Social become voice law quality.</p><p>Mouth whole for positive. Certain tough especially nature claim box.\nFill space allow second second cut. Bank want why decide recognize space.</p><p>Outside ability second whose second. Point stand bank list defense understand seat.\nClear finish follow media sing type. Technology white practice miss price.\nDifference establish some nation western job meeting. Give article beautiful.</p>",
      attachments: [],
      isStarred: false,
      labels: ["private"],
      time: "2021-07-08T14:51:49",
      replies: [
        {
          id: 133615687,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "juan31@gmail.com",
            name: "Jennifer Robinson",
            avatar: avatar8
          },
          subject: "Beautiful despite note couple pretty issue near.",
          cc: [],
          bcc: [],
          message: "<p>Store use cultural human smile. Subject trip that laugh.\nWalk sense a operation about window small southern. Show road them movement.</p><p>Water behind do else just. Reach mean science yet among what.\nGreen modern design us know use others weight. Recently wonder soldier within plan.\nRoom test story see southern special nice. Drop take mind plant throw American my. A husband sit thing.</p><p>There performance fine coach way majority truth. House beyond candidate beyond debate painting alone. There significant poor something chance spring. Yeah worry white Democrat.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-13T14:02:08",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 867,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "gflores@hotmail.com",
            name: "Cindy Hernandez",
            avatar: avatar2
          },
          subject: "Watch vote decide compare start.",
          cc: [],
          bcc: [],
          message: "<p>Choice race different. Yard case newspaper wide series growth identify.\nBeyond go rest read me. Though quite industry method animal organization leave quality.</p><p>Back music theory fund produce. Foreign hard board learn home add. Data political buy budget think.\nBook consumer future writer. Bag evidence thus school.\nDifficult my accept yard. Million loss officer person language to. Television room feeling.</p><p>Country myself current tough image school. Court activity catch low value. Hotel local through.\nFocus attorney computer evening you always. Guess require event picture director. Garden floor month husband mention.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "important", "private"],
          time: "2021-07-12T14:38:42",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        },
        {
          id: 7,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "judyvillarreal@hotmail.com",
            name: "Amy Chavez",
            avatar: avatar8
          },
          subject: "Member around task woman as.",
          cc: [],
          bcc: [],
          message: "<p>Police physical down generation condition throw foot relate. Table experience represent practice development.\nOrder option success thank miss. Tree knowledge light police service remain during. Entire respond join hit kind enjoy language.</p><p>Modern page social decide though small realize impact. Around special difficult level organization course her.\nMr tree three former this husband hold. Local expert especially should writer visit moment. Quite move travel less.</p><p>Nearly loss those democratic bring production. Ago economic method consider discuss.\nCapital approach red but reveal successful. Middle television treatment. Turn recent reflect interview.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "private"],
          time: "2021-07-17T02:32:58",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 59708653,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "mwalker@hotmail.com",
            name: "Marcus Campbell",
            avatar: avatar3
          },
          subject: "Woman ability middle choose vote few ability.",
          cc: [],
          bcc: [],
          message: "<p>Because structure put. Face business possible light box.\nSmile group six history financial. General try financial either discuss like million. Begin create fill series age.\nExist control popular begin deep. Sit another health live.</p><p>Politics side finally senior sit here activity protect. Heavy major control education. Bad involve want skill project feel.\nNone usually kid study eight. Civil consider effort. Marriage front their live eye significant far.</p><p>Scene keep major bank up prepare others. Change century brother media energy alone. Life range explain interest address.\nMedical account indicate hit start live support. Prove popular claim direction college.</p>",
          attachments: [],
          isStarred: false,
          labels: ["private"],
          time: "2021-07-04T03:37:29",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        },
        {
          id: 804622,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "lauramartin@hotmail.com",
            name: "Connie Osborne",
            avatar: avatar8
          },
          subject: "Heavy ball debate style message main rate.",
          cc: [],
          bcc: [],
          message: "<p>Feeling ability finish kitchen majority same moment. Decision money compare really education deal. Officer get be food ahead compare stay.\nDeep teacher state. Guy purpose too remain help enough.</p><p>Cut city father while green both information.\nLetter left fall body general. Very exactly common though policy star. Former health arm respond treatment.\nEnter industry will trouble day authority agree blood. Indeed air until but idea nor enter.</p><p>Site direction lay hotel these. Role focus affect focus before. Gas fill figure rise marriage like offer child.\nAgainst wall either. Mind one ready total. Fly food why part for again season.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "important", "private"],
          time: "2021-07-02T03:33:03",
          replies: [],
          folder: "sent",
          isRead: true,
          isDeleted: false
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 10,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "sean36@gmail.com", name: "Ronald Buckley", avatar: avatar5 },
      subject: "Blue both light anyone trial nor approach tough.",
      cc: [],
      bcc: [],
      message: "<p>Take anything season ok. Nor than war fine speak happen. Where business hold continue message state for.\nMorning southern allow. Mission color camera how Republican behind. Learn five break suffer.</p><p>Over born sure continue. Option show meet however.\nModel no mean us. Enough as space herself article bring others. Place them need drive cost decide.</p><p>Million friend remain product eye Congress. Education near amount middle.\nSay key past if shoulder rule. Others mean behind case interesting bag near option. Step why example mean thus. Fish forget turn never kind boy anyone.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal", "important"],
      time: "2021-07-11T11:09:30",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 9,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "wkline@yahoo.com", name: "Jennifer Garcia", avatar: avatar6 },
      subject: "Simply idea project health prevent beyond both after.",
      cc: [],
      bcc: [],
      message: "<p>Second again well doctor because election necessary point. Campaign about from western themselves particular loss popular. During garden star couple water simply area.</p><p>Worker leave know mission southern. Sea eye walk moment.\nCamera executive education wall marriage say. Man tend perform. Issue area great financial note other guess.</p><p>Likely market physical heavy quite we.\nRecent how room page sit fast Congress fight. Interview establish watch water.\nLoss family picture mind consumer about PM. Safe natural size. Character recognize painting movie.</p>",
      attachments: [],
      isStarred: false,
      labels: ["personal", "company"],
      time: "2021-07-17T20:25:41",
      replies: [],
      folder: "inbox",
      isRead: false,
      isDeleted: false
    },
    {
      id: 8,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "tolson@gmail.com", name: "Lindsey Melton", avatar: avatar2 },
      subject: "Amount collection marriage price.",
      cc: [],
      bcc: [],
      message: "<p>Join list dog rate doctor surface share. Meeting beat particular sing apply space.\nClear down thought magazine meet.\nWould better sport wide personal matter. Analysis effort school officer such. Age blue future her start marriage.</p><p>Material year close beat rest happy. Interview material over thought. Win until morning certainly.\nDevelopment personal direction game present.</p><p>Accept wall price hair garden staff. Enough off rest. Beyond half small lay agency.\nOption in hand charge direction least message. Safe minute situation just floor. Guess month than already.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company"],
      time: "2021-07-25T05:19:46",
      replies: [],
      folder: "inbox",
      isRead: false,
      isDeleted: false
    },
    {
      id: 7,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "jeffrey89@gmail.com", name: "Amanda Pratt", avatar: avatar4 },
      subject: "Pull clear protect start exactly purpose scientist food.",
      cc: [],
      bcc: [],
      message: "<p>See beautiful necessary hold. Marriage TV cut look chance whom.\nHeavy girl like only special position hot throw.\nReligious someone value girl save avoid. Market soon against central baby. So follow paper run along bag.</p><p>Worry provide form. Walk receive adult.\nMind style campaign blood. Public sign allow history nature customer. Offer how answer join.\nDiscussion blue Congress half important beat without. Authority key personal forget quickly model quickly really.</p><p>Better know magazine. Attention discuss staff turn affect tough.\nSo later whose reveal follow. Almost someone end. Rate necessary dog strategy.\nHope administration born his. Upon foot vote ability medical. Poor behind stage opportunity.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company"],
      time: "2021-07-12T16:41:20",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 6,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "gentryjeff@yahoo.com", name: "Joseph Clark", avatar: avatar3 },
      subject: "Grow seat discover.",
      cc: [],
      bcc: [],
      message: "<p>Become laugh and up onto. Sister raise pretty material picture. Own middle region open.\nProcess rock throw kind.\nQuestion them interest some international notice agreement. Control remember purpose.</p><p>Level consumer contain process rise system. Ten responsibility finally detail development else.\nRace well letter. Over receive it might.\nDifferent use send than he everyone. Drive answer develop bad past budget.</p><p>Increase prove theory million lose down quickly.\nMoment young just position information.\nName discover different majority use seek. Religious world discover never pressure ok develop. Name also all. Drug city program way.</p>",
      attachments: [],
      isStarred: true,
      labels: ["personal", "private"],
      time: "2021-07-20T13:44:07",
      replies: [],
      folder: "inbox",
      isRead: true,
      isDeleted: true
    },
    {
      id: 5,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "maciaspatricia@hotmail.com",
        name: "Alisha Hughes",
        avatar: avatar4
      },
      subject: "Play hope gas military that.",
      cc: [],
      bcc: [],
      message: "<p>International hundred anything see ten but long. Collection edge difference turn other let price. Would ahead commercial may scene develop minute.\nOnly film avoid. Last dark party store. Collection another three movement network ready hit.</p><p>Report keep probably individual argue.\nKid activity style million. Late stage lawyer answer.\nReligious both opportunity wide. Once television amount necessary so line. Now simple shoulder ground.</p><p>Radio idea glass realize research floor. Why range brother baby own impact century. Believe service doctor once.\nKnowledge finally anything sea. Across certainly reality provide. Past center feeling financial.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-04T09:53:05",
      replies: [],
      folder: "spam",
      isRead: true,
      isDeleted: false
    },
    {
      id: 4,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "rvalenzuela@hotmail.com",
        name: "Michelle Murphy",
        avatar: avatar6
      },
      subject: "Anyone want yet forget effect.",
      cc: [],
      bcc: [],
      message: "<p>Expert space school material success security interest. Realize size seem growth game evidence. Time itself fine travel.\nCup reason environmental analysis.</p><p>Chance election look. Pretty job they officer other.\nBrother challenge military dark. Decade behavior several few race ball along. Amount rich suddenly stand. Mention street local site.</p><p>Join thus employee determine degree lead player. Color room ever soon easy. Administration toward experience why.\nSea hard detail rule. Strong factor language enjoy find.</p>",
      attachments: [],
      isStarred: false,
      labels: ["company", "important"],
      time: "2021-07-17T15:51:47",
      replies: [],
      folder: "spam",
      isRead: false,
      isDeleted: false
    },
    {
      id: 3,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "gbeltran@gmail.com", name: "Charles Cooper", avatar: avatar1 },
      subject: "Fight account night short.",
      cc: [],
      bcc: [],
      message: "<p>Get through stay. On difficult popular.\nFine turn mean artist. President explain turn professor fly prove cultural. Moment field front.\nSuccess almost various week. North message herself front eight. Final huge right happy.</p><p>Analysis rise son let. Age specific against visit.\nPerhaps series unit center total. Bed hour sense. Star morning history design late.\nOnce but fund share education. Majority face what year interest wish financial pretty.</p><p>Class treat enjoy stock seven natural establish indeed.\nHelp eat figure rich. Although bill discover build town.\nAsk continue claim here hand surface. Success foot action close treat.</p>",
      attachments: [
        {
          fileName: "log.txt",
          thumbnail: txt,
          url: "",
          size: "5mb"
        },
        {
          fileName: "performance.xls",
          thumbnail: xls,
          url: "",
          size: "10mb"
        }
      ],
      isStarred: true,
      labels: ["important", "company"],
      time: "2021-07-22T19:12:31",
      replies: [
        {
          id: 756051771,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "rwhitehead@yahoo.com",
            name: "Bruce Johnson",
            avatar: avatar3
          },
          subject: "Guy someone wind.",
          cc: [],
          bcc: [],
          message: "<p>Century those system character. Enter mind she baby compare movie. Soldier reality guy end meeting go.\nPositive only our important. Month world century impact nothing such bar. Term their himself safe its deep.</p><p>Coach bank agent value glass race. Instead reason suffer bar role action finally town. Political market window of although least will.\nGuess thought chance term.</p><p>Pressure tonight beyond because wait early leader prove. Ground reality court event bar. Behind manage really so four vote.\nSecond series score thus.\nRealize move around baby interview clear.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal", "private"],
          time: "2021-07-22T16:03:07",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 4255040,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "perezannette@gmail.com",
            name: "Kyle Christensen",
            avatar: avatar7
          },
          subject: "Each close probably.",
          cc: [],
          bcc: [],
          message: "<p>Late contain dream why ready go spring to. Against page medical wonder just fall card four. Unit live manager within feeling.\nSupport democratic lose list law. Baby address inside area or. Little individual remain sister area since thousand.</p><p>Culture effect similar clear population stuff himself quite. Trade story quality quite successful such.\nEven might his continue necessary thousand give. Record former tend determine true population reflect.</p><p>Dream when TV try loss central. Billion direction up run reduce that record. Ability then best draw.\nRich second yourself deep about foreign impact. Crime military appear shoulder bed. West job call home health woman lot.</p>",
          attachments: [],
          isStarred: true,
          labels: ["personal"],
          time: "2021-07-15T20:54:36",
          replies: [],
          folder: "draft",
          isRead: false,
          isDeleted: false
        },
        {
          id: 946586133,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "ramirezsarah@yahoo.com",
            name: "Tammy Lloyd",
            avatar: avatar8
          },
          subject: "Security set letter once.",
          cc: [],
          bcc: [],
          message: "<p>Hair kind piece main want evening career. Water artist source ago south design father. Mention movie number house yeah some government.\nScore rock idea seven establish of. Candidate oil fact about to spend about.</p><p>Not both energy key.\nMust face those idea address pull.\nLet look cover star place later. Personal student both window agency produce.\nRemember cause hour explain box worry. One upon might soon enter baby car consumer.</p><p>Character service your idea. Adult guess stay us. Law would improve.\nWithin official anyone Mr. Difference before record treatment perhaps audience culture. Along present experience because history challenge detail.</p>",
          attachments: [],
          isStarred: true,
          labels: ["company", "important"],
          time: "2021-07-20T05:34:05",
          replies: [],
          folder: "spam",
          isRead: true,
          isDeleted: false
        },
        {
          id: 182449812,
          to: [{ email: "johndoe@mail.com", name: "me" }],
          from: {
            email: "evansantonio@yahoo.com",
            name: "Shawn Flores",
            avatar: avatar5
          },
          subject: "Card yeah need shake.",
          cc: [],
          bcc: [],
          message: "<p>Fine wonder sister order rock conference lose should. Personal party drug sense way north. Hear stock political pick model.</p><p>Focus population expert sense past green. Call community property tough news instead bad. War explain former quite else explain next guy. Education like send method method.</p><p>Necessary detail teacher company discuss world activity. And me get star eat power. Read sound wish already culture seek because face. Attorney purpose green.</p>",
          attachments: [],
          isStarred: false,
          labels: ["personal", "private"],
          time: "2021-07-22T14:31:03",
          replies: [],
          folder: "inbox",
          isRead: true,
          isDeleted: true
        }
      ],
      folder: "inbox",
      isRead: true,
      isDeleted: false
    },
    {
      id: 2,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: {
        email: "wilsonwilliam@yahoo.com",
        name: "Rachel Palmer",
        avatar: avatar2
      },
      subject: "Account base lose detail.",
      cc: [],
      bcc: [],
      message: "<p>Religious system evidence star meeting notice draw. Garden audience sometimes strong imagine vote free.\nLow Republican nice. Toward fund decade ever. Likely itself serve camera risk adult imagine.</p><p>Main nice environmental address defense. Toward movie inside every. Else event message continue.\nReturn rise attorney black role. Individual build tonight soldier return environment successful. Dinner learn rock mother wife all.</p><p>Yard but card her then. Foreign evening ability my president dog guess. Leave husband south.\nHealth leg represent yeah. Turn sell onto kid several. Morning degree few.\nStart dark measure big end role. Property attention walk eye exist.</p>",
      attachments: [],
      isStarred: false,
      labels: ["important"],
      time: "2021-07-10T01:13:20",
      replies: [],
      folder: "draft",
      isRead: true,
      isDeleted: false
    },
    {
      id: 1,
      to: [{ email: "johndoe@mail.com", name: "me" }],
      from: { email: "edavid@yahoo.com", name: "Wendy Harris", avatar: avatar2 },
      subject: "Step face collection heart light cultural prepare.",
      cc: [],
      bcc: [],
      message: "<p>Suddenly man team would nor piece. Miss democratic receive.\nWindow measure drug success recent necessary group mission. Exist school under student rock trial treatment.\nRun season there social. Visit staff floor network improve home the.</p><p>Lay laugh sea sit food parent. Line move scientist floor establish like production. Decade PM exist moment.\nBeat under campaign say. Term gun local Congress democratic.</p><p>Chance poor attack far kitchen will. Appear thing also child whom manage hospital. Federal trouble fear between receive such involve here.\nSeek wife increase draw hair. Onto style minute democratic. Clearly music outside standard.</p>",
      attachments: [],
      isStarred: true,
      labels: ["important", "private"],
      time: "2021-07-18T11:43:46",
      replies: [],
      folder: "sent",
      isRead: true,
      isDeleted: false
    }
  ]
};
const handlerAppsEmail = [
  // 👉 Get Email List
  http.get("/api/apps/email", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";
    const filter = url.searchParams.get("filter") || "inbox";
    const label = url.searchParams.get("label") || "";
    const queryLowered = q.toLowerCase();
    function isInFolder(email) {
      if (filter === "trashed")
        return email.isDeleted;
      if (filter === "starred")
        return email.isStarred && !email.isDeleted;
      return email.folder === (filter || email.folder) && !email.isDeleted;
    }
    const filteredData = db$8.emails.filter((email) => (email.from.name.toLowerCase().includes(queryLowered) || email.subject.toLowerCase().includes(queryLowered)) && isInFolder(email) && (label ? email.labels.includes(label) : true));
    const emailsMeta = {
      inbox: db$8.emails.filter((email) => !email.isDeleted && !email.isRead && email.folder === "inbox").length,
      draft: db$8.emails.filter((email) => !email.isDeleted && email.folder === "draft").length,
      spam: db$8.emails.filter((email) => !email.isDeleted && !email.isRead && email.folder === "spam").length,
      star: db$8.emails.filter((email) => !email.isDeleted && email.isStarred).length
    };
    return HttpResponse.json({ emails: filteredData, emailsMeta }, { status: 200 });
  }),
  // 👉 Update Email Meta
  http.post("/api/apps/email", async ({ request }) => {
    const { ids, data, label } = await request.json();
    const labelLocal = destr(label);
    if (!labelLocal) {
      let updateMailData = function(email) {
        Object.assign(email, data);
      };
      const emailIdsLocal = destr(ids);
      db$8.emails.forEach((email) => {
        if (emailIdsLocal.includes(email.id))
          updateMailData(email);
      });
      return new HttpResponse(null, { status: 201 });
    } else {
      let updateMailLabels = function(email) {
        const labelIndex = email.labels.indexOf(label);
        if (labelIndex === -1)
          email.labels.push(label);
        else
          email.labels.splice(labelIndex, 1);
      };
      db$8.emails.forEach((email) => {
        if (Array.isArray(ids) ? ids.includes(email.id) : ids === email.id)
          updateMailLabels(email);
      });
      return new HttpResponse(null, { status: 201 });
    }
  })
];
const now = /* @__PURE__ */ new Date();
const currentMonth = now.toLocaleString("default", { month: "2-digit" });
const database$1 = [
  {
    id: 4987,
    issuedDate: `${now.getFullYear()}-${currentMonth}-13`,
    client: {
      address: "7777 Mendez Plains",
      company: "Hall-Robbins PLC",
      companyEmail: "don85@johnson.com",
      country: "USA",
      contact: "(616) 865-4180",
      name: "Jordan Stevenson"
    },
    service: "Software Development",
    total: 3428,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 724,
    dueDate: `${now.getFullYear()}-${currentMonth}-23`
  },
  {
    id: 4988,
    issuedDate: `${now.getFullYear()}-${currentMonth}-17`,
    client: {
      address: "04033 Wesley Wall Apt. 961",
      company: "Mccann LLC and Sons",
      companyEmail: "brenda49@taylor.info",
      country: "Haiti",
      contact: "(226) 204-8287",
      name: "Stephanie Burns"
    },
    service: "UI/UX Design & Development",
    total: 5219,
    avatar: avatar1,
    invoiceStatus: "Downloaded",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-15`
  },
  {
    id: 4989,
    issuedDate: `${now.getFullYear()}-${currentMonth}-19`,
    client: {
      address: "5345 Robert Squares",
      company: "Leonard-Garcia and Sons",
      companyEmail: "smithtiffany@powers.com",
      country: "Denmark",
      contact: "(955) 676-1076",
      name: "Tony Herrera"
    },
    service: "Unlimited Extended License",
    total: 3719,
    invoiceStatus: "Paid",
    avatar: avatar2,
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-03`
  },
  {
    id: 4990,
    issuedDate: `${now.getFullYear()}-${currentMonth}-06`,
    client: {
      address: "19022 Clark Parks Suite 149",
      company: "Smith, Miller and Henry LLC",
      companyEmail: "mejiageorge@lee-perez.com",
      country: "Cambodia",
      contact: "(832) 323-6914",
      name: "Kevin Patton"
    },
    service: "Software Development",
    total: 4749,
    avatar: avatar3,
    invoiceStatus: "Sent",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-11`
  },
  {
    id: 4991,
    issuedDate: `${now.getFullYear()}-${currentMonth}-08`,
    client: {
      address: "8534 Saunders Hill Apt. 583",
      company: "Garcia-Cameron and Sons",
      companyEmail: "brandon07@pierce.com",
      country: "Martinique",
      contact: "(970) 982-3353",
      name: "Mrs. Julie Donovan MD"
    },
    service: "UI/UX Design & Development",
    total: 4056,
    avatar: avatar4,
    invoiceStatus: "Draft",
    balance: 815,
    dueDate: `${now.getFullYear()}-${currentMonth}-30`
  },
  {
    id: 4992,
    issuedDate: `${now.getFullYear()}-${currentMonth}-26`,
    client: {
      address: "661 Perez Run Apt. 778",
      company: "Burnett-Young PLC",
      companyEmail: "guerrerobrandy@beasley-harper.com",
      country: "Botswana",
      contact: "(511) 938-9617",
      name: "Amanda Phillips"
    },
    service: "UI/UX Design & Development",
    total: 2771,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 2771,
    dueDate: `${now.getFullYear()}-${currentMonth}-24`
  },
  {
    id: 4993,
    issuedDate: `${now.getFullYear()}-${currentMonth}-17`,
    client: {
      address: "074 Long Union",
      company: "Wilson-Lee LLC",
      companyEmail: "williamshenry@moon-smith.com",
      country: "Montserrat",
      contact: "(504) 859-2893",
      name: "Christina Collier"
    },
    service: "UI/UX Design & Development",
    total: 2713,
    avatar: "",
    invoiceStatus: "Draft",
    balance: 407,
    dueDate: `${now.getFullYear()}-${currentMonth}-22`
  },
  {
    id: 4994,
    issuedDate: `${now.getFullYear()}-${currentMonth}-11`,
    client: {
      address: "5225 Ford Cape Apt. 840",
      company: "Schwartz, Henry and Rhodes Group",
      companyEmail: "margaretharvey@russell-murray.com",
      country: "Oman",
      contact: "(758) 403-7718",
      name: "David Flores"
    },
    service: "Template Customization",
    total: 4309,
    avatar: avatar5,
    invoiceStatus: "Paid",
    balance: -205,
    dueDate: `${now.getFullYear()}-${currentMonth}-13`
  },
  {
    id: 4995,
    issuedDate: `${now.getFullYear()}-${currentMonth}-16`,
    client: {
      address: "23717 James Club Suite 277",
      company: "Henderson-Holder PLC",
      companyEmail: "dianarodriguez@villegas.com",
      country: "Cambodia",
      contact: "(292) 873-8254",
      name: "Valerie Perez"
    },
    service: "Software Development",
    total: 3367,
    avatar: avatar6,
    invoiceStatus: "Downloaded",
    balance: 3367,
    dueDate: `${now.getFullYear()}-${currentMonth}-24`
  },
  {
    id: 4996,
    issuedDate: `${now.getFullYear()}-${currentMonth}-15`,
    client: {
      address: "4528 Myers Gateway",
      company: "Page-Wise PLC",
      companyEmail: "bwilson@norris-brock.com",
      country: "Guam",
      contact: "(956) 803-2008",
      name: "Susan Dickerson"
    },
    service: "Software Development",
    total: 4776,
    avatar: avatar7,
    invoiceStatus: "Downloaded",
    balance: 305,
    dueDate: `${now.getFullYear()}-${currentMonth}-02`
  },
  {
    id: 4997,
    issuedDate: `${now.getFullYear()}-${currentMonth}-27`,
    client: {
      address: "4234 Mills Club Suite 107",
      company: "Turner PLC Inc",
      companyEmail: "markcampbell@bell.info",
      country: "United States Virgin Islands",
      contact: "(716) 962-8635",
      name: "Kelly Smith"
    },
    service: "Unlimited Extended License",
    total: 3789,
    avatar: avatar8,
    invoiceStatus: "Partial Payment",
    balance: 666,
    dueDate: `${now.getFullYear()}-${currentMonth}-18`
  },
  {
    id: 4998,
    issuedDate: `${now.getFullYear()}-${currentMonth}-31`,
    client: {
      address: "476 Keith Meadow",
      company: "Levine-Dorsey PLC",
      companyEmail: "mary61@rosario.com",
      country: "Syrian Arab Republic",
      contact: "(523) 449-0782",
      name: "Jamie Jones"
    },
    service: "Unlimited Extended License",
    total: 5200,
    avatar: avatar2,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-17`
  },
  {
    id: 4999,
    issuedDate: `${now.getFullYear()}-${currentMonth}-14`,
    client: {
      address: "56381 Ashley Village Apt. 332",
      company: "Hall, Thompson and Ramirez LLC",
      companyEmail: "sean22@cook.com",
      country: "Ukraine",
      contact: "(583) 470-8356",
      name: "Ruben Garcia"
    },
    service: "Software Development",
    total: 4558,
    avatar: avatar1,
    invoiceStatus: "Paid",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-01`
  },
  {
    id: 5e3,
    issuedDate: `${now.getFullYear()}-${currentMonth}-21`,
    client: {
      address: "6946 Gregory Plaza Apt. 310",
      company: "Lambert-Thomas Group",
      companyEmail: "mccoymatthew@lopez-jenkins.net",
      country: "Vanuatu",
      contact: "(366) 906-6467",
      name: "Ryan Meyer"
    },
    service: "Template Customization",
    total: 3503,
    avatar: avatar7,
    invoiceStatus: "Paid",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-22`
  },
  {
    id: 5001,
    issuedDate: `${now.getFullYear()}-${currentMonth}-30`,
    client: {
      address: "64351 Andrew Lights",
      company: "Gregory-Haynes PLC",
      companyEmail: "novakshannon@mccarty-murillo.com",
      country: "Romania",
      contact: "(320) 616-3915",
      name: "Valerie Valdez"
    },
    service: "Unlimited Extended License",
    total: 5285,
    avatar: avatar6,
    invoiceStatus: "Partial Payment",
    balance: -202,
    dueDate: `${now.getFullYear()}-${currentMonth}-02`
  },
  {
    id: 5002,
    issuedDate: `${now.getFullYear()}-${currentMonth}-21`,
    client: {
      address: "5702 Sarah Heights",
      company: "Wright-Schmidt LLC",
      companyEmail: "smithrachel@davis-rose.net",
      country: "Costa Rica",
      contact: "(435) 899-1963",
      name: "Melissa Wheeler"
    },
    service: "UI/UX Design & Development",
    total: 3668,
    avatar: avatar5,
    invoiceStatus: "Downloaded",
    balance: 731,
    dueDate: `${now.getFullYear()}-${currentMonth}-15`
  },
  {
    id: 5003,
    issuedDate: `${now.getFullYear()}-${currentMonth}-30`,
    client: {
      address: "668 Robert Flats",
      company: "Russell-Abbott Ltd",
      companyEmail: "scott96@mejia.net",
      country: "Congo",
      contact: "(254) 399-4728",
      name: "Alan Jimenez"
    },
    service: "Unlimited Extended License",
    total: 4372,
    avatar: "",
    invoiceStatus: "Sent",
    balance: -344,
    dueDate: `${now.getFullYear()}-${currentMonth}-17`
  },
  {
    id: 5004,
    issuedDate: `${now.getFullYear()}-${currentMonth}-27`,
    client: {
      address: "55642 Chang Extensions Suite 373",
      company: "Williams LLC Inc",
      companyEmail: "cramirez@ross-bass.biz",
      country: "Saint Pierre and Miquelon",
      contact: "(648) 500-4338",
      name: "Jennifer Morris"
    },
    service: "Template Customization",
    total: 3198,
    avatar: avatar4,
    invoiceStatus: "Partial Payment",
    balance: -253,
    dueDate: `${now.getFullYear()}-${currentMonth}-16`
  },
  {
    id: 5005,
    issuedDate: `${now.getFullYear()}-${currentMonth}-30`,
    client: {
      address: "56694 Eric Orchard",
      company: "Hudson, Bell and Phillips PLC",
      companyEmail: "arielberg@wolfe-smith.com",
      country: "Uruguay",
      contact: "(896) 544-3796",
      name: "Timothy Stevenson"
    },
    service: "Unlimited Extended License",
    total: 5293,
    avatar: "",
    invoiceStatus: "Past Due",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-01`
  },
  {
    id: 5006,
    issuedDate: `${now.getFullYear()}-${currentMonth}-10`,
    client: {
      address: "3727 Emma Island Suite 879",
      company: "Berry, Gonzalez and Heath Inc",
      companyEmail: "yrobinson@nichols.com",
      country: "Israel",
      contact: "(236) 784-5142",
      name: "Erik Hayden"
    },
    service: "Template Customization",
    total: 5612,
    avatar: avatar3,
    invoiceStatus: "Downloaded",
    balance: 883,
    dueDate: `${now.getFullYear()}-${currentMonth}-12`
  },
  {
    id: 5007,
    issuedDate: `${now.getFullYear()}-${currentMonth}-01`,
    client: {
      address: "953 Miller Common Suite 580",
      company: "Martinez, Fuller and Chavez and Sons",
      companyEmail: "tatejennifer@allen.net",
      country: "Cook Islands",
      contact: "(436) 717-2419",
      name: "Katherine Kennedy"
    },
    service: "Software Development",
    total: 2230,
    avatar: avatar2,
    invoiceStatus: "Sent",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-19`
  },
  {
    id: 5008,
    issuedDate: `${now.getFullYear()}-${currentMonth}-22`,
    client: {
      address: "808 Sullivan Street Apt. 135",
      company: "Wilson and Sons LLC",
      companyEmail: "gdurham@lee.com",
      country: "Nepal",
      contact: "(489) 946-3041",
      name: "Monica Fuller"
    },
    service: "Unlimited Extended License",
    total: 2032,
    avatar: avatar1,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-30`
  },
  {
    id: 5009,
    issuedDate: `${now.getFullYear()}-${currentMonth}-30`,
    client: {
      address: "25135 Christopher Creek",
      company: "Hawkins, Johnston and Mcguire PLC",
      companyEmail: "jenny96@lawrence-thompson.com",
      country: "Kiribati",
      contact: "(274) 246-3725",
      name: "Stacey Carter"
    },
    service: "UI/UX Design & Development",
    total: 3128,
    avatar: avatar8,
    invoiceStatus: "Paid",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-10`
  },
  {
    id: 5010,
    issuedDate: `${now.getFullYear()}-${currentMonth}-06`,
    client: {
      address: "81285 Rebecca Estates Suite 046",
      company: "Huynh-Mills and Sons",
      companyEmail: "jgutierrez@jackson.com",
      country: "Swaziland",
      contact: "(258) 211-5970",
      name: "Chad Davis"
    },
    service: "Software Development",
    total: 2060,
    avatar: avatar7,
    invoiceStatus: "Downloaded",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-08`
  },
  {
    id: 5011,
    issuedDate: `${now.getFullYear()}-${currentMonth}-01`,
    client: {
      address: "3102 Briggs Dale Suite 118",
      company: "Jones-Cooley and Sons",
      companyEmail: "hunter14@jones.com",
      country: "Congo",
      contact: "(593) 965-4100",
      name: "Chris Reyes"
    },
    service: "UI/UX Design & Development",
    total: 4077,
    avatar: "",
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-01`
  },
  {
    id: 5012,
    issuedDate: `${now.getFullYear()}-${currentMonth}-30`,
    client: {
      address: "811 Jill Skyway",
      company: "Jones PLC Ltd",
      companyEmail: "pricetodd@johnson-jenkins.com",
      country: "Brazil",
      contact: "(585) 829-2603",
      name: "Laurie Summers"
    },
    service: "Template Customization",
    total: 2872,
    avatar: avatar6,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-18`
  },
  {
    id: 5013,
    issuedDate: `${now.getFullYear()}-${currentMonth}-05`,
    client: {
      address: "2223 Brandon Inlet Suite 597",
      company: "Jordan, Gomez and Ross Group",
      companyEmail: "perrydavid@chapman-rogers.com",
      country: "Congo",
      contact: "(527) 351-5517",
      name: "Lindsay Wilson"
    },
    service: "Software Development",
    total: 3740,
    avatar: avatar4,
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-01`
  },
  {
    id: 5014,
    issuedDate: `${now.getFullYear()}-${currentMonth}-01`,
    client: {
      address: "08724 Barry Causeway",
      company: "Gonzalez, Moody and Glover LLC",
      companyEmail: "leahgriffin@carpenter.com",
      country: "Equatorial Guinea",
      contact: "(628) 903-0132",
      name: "Jenna Castro"
    },
    service: "Unlimited Extended License",
    total: 3623,
    avatar: "",
    invoiceStatus: "Downloaded",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-23`
  },
  {
    id: 5015,
    issuedDate: `${now.getFullYear()}-${currentMonth}-16`,
    client: {
      address: "073 Holt Ramp Apt. 755",
      company: "Ashley-Pacheco Ltd",
      companyEmail: "esparzadaniel@allen.com",
      country: "Seychelles",
      contact: "(847) 396-9904",
      name: "Wendy Weber"
    },
    service: "Software Development",
    total: 2477,
    avatar: avatar5,
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-01`
  },
  {
    id: 5016,
    issuedDate: `${now.getFullYear()}-${currentMonth}-24`,
    client: {
      address: "984 Sherry Trail Apt. 953",
      company: "Berry PLC Group",
      companyEmail: "todd34@owens-morgan.com",
      country: "Ireland",
      contact: "(852) 249-4539",
      name: "April Yates"
    },
    service: "Unlimited Extended License",
    total: 3904,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 951,
    dueDate: `${now.getFullYear()}-${currentMonth}-30`
  },
  {
    id: 5017,
    issuedDate: `${now.getFullYear()}-${currentMonth}-24`,
    client: {
      address: "093 Jonathan Camp Suite 953",
      company: "Allen Group Ltd",
      companyEmail: "roydavid@bailey.com",
      country: "Netherlands",
      contact: "(917) 984-2232",
      name: "Daniel Marshall PhD"
    },
    service: "UI/UX Design & Development",
    total: 3102,
    avatar: avatar3,
    invoiceStatus: "Partial Payment",
    balance: -153,
    dueDate: `${now.getFullYear()}-${currentMonth}-25`
  },
  {
    id: 5018,
    issuedDate: `${now.getFullYear()}-${currentMonth}-29`,
    client: {
      address: "4735 Kristie Islands Apt. 259",
      company: "Chapman-Schneider LLC",
      companyEmail: "baldwinjoel@washington.com",
      country: "Cocos (Keeling) Islands",
      contact: "(670) 409-3703",
      name: "Randy Rich"
    },
    service: "UI/UX Design & Development",
    total: 2483,
    avatar: avatar2,
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-10`
  },
  {
    id: 5019,
    issuedDate: `${now.getFullYear()}-${currentMonth}-07`,
    client: {
      address: "92218 Andrew Radial",
      company: "Mcclure, Hernandez and Simon Ltd",
      companyEmail: "psmith@morris.info",
      country: "Macao",
      contact: "(646) 263-0257",
      name: "Mrs. Jodi Chapman"
    },
    service: "Unlimited Extended License",
    total: 2825,
    avatar: avatar1,
    invoiceStatus: "Partial Payment",
    balance: -459,
    dueDate: `${now.getFullYear()}-${currentMonth}-14`
  },
  {
    id: 5020,
    issuedDate: `${now.getFullYear()}-${currentMonth}-10`,
    client: {
      address: "2342 Michelle Valley",
      company: "Hamilton PLC and Sons",
      companyEmail: "lori06@morse.com",
      country: "Somalia",
      contact: "(751) 213-4288",
      name: "Steven Myers"
    },
    service: "Unlimited Extended License",
    total: 2029,
    avatar: avatar2,
    invoiceStatus: "Past Due",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-28`
  },
  {
    id: 5021,
    issuedDate: `${now.getFullYear()}-${currentMonth}-02`,
    client: {
      address: "16039 Brittany Terrace Apt. 128",
      company: "Silva-Reeves LLC",
      companyEmail: "zpearson@miller.com",
      country: "Slovakia (Slovak Republic)",
      contact: "(655) 649-7872",
      name: "Charles Alexander"
    },
    service: "Software Development",
    total: 3208,
    avatar: "",
    invoiceStatus: "Sent",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-06`
  },
  {
    id: 5022,
    issuedDate: `${now.getFullYear()}-${currentMonth}-02`,
    client: {
      address: "37856 Olsen Lakes Apt. 852",
      company: "Solis LLC Ltd",
      companyEmail: "strongpenny@young.net",
      country: "Brazil",
      contact: "(402) 935-0735",
      name: "Elizabeth Jones"
    },
    service: "Software Development",
    total: 3077,
    avatar: "",
    invoiceStatus: "Sent",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-09`
  },
  {
    id: 5023,
    issuedDate: `${now.getFullYear()}-${currentMonth}-23`,
    client: {
      address: "11489 Griffin Plaza Apt. 927",
      company: "Munoz-Peters and Sons",
      companyEmail: "carrietorres@acosta.com",
      country: "Argentina",
      contact: "(915) 448-6271",
      name: "Heidi Walton"
    },
    service: "Software Development",
    total: 5578,
    avatar: avatar4,
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-23`
  },
  {
    id: 5024,
    issuedDate: `${now.getFullYear()}-${currentMonth}-28`,
    client: {
      address: "276 Michael Gardens Apt. 004",
      company: "Shea, Velez and Garcia LLC",
      companyEmail: "zjohnson@nichols-powers.com",
      country: "Philippines",
      contact: "(817) 700-2984",
      name: "Christopher Allen"
    },
    service: "Software Development",
    total: 2787,
    avatar: avatar5,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-25`
  },
  {
    id: 5025,
    issuedDate: `${now.getFullYear()}-${currentMonth}-21`,
    client: {
      address: "633 Bell Well Apt. 057",
      company: "Adams, Simmons and Brown Group",
      companyEmail: "kayla09@thomas.com",
      country: "Martinique",
      contact: "(266) 611-9482",
      name: "Joseph Oliver"
    },
    service: "UI/UX Design & Development",
    total: 5591,
    avatar: "",
    invoiceStatus: "Downloaded",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-07`
  },
  {
    id: 5026,
    issuedDate: `${now.getFullYear()}-${currentMonth}-24`,
    client: {
      address: "1068 Lopez Fall",
      company: "Williams-Lawrence and Sons",
      companyEmail: "melvindavis@allen.info",
      country: "Mexico",
      contact: "(739) 745-9728",
      name: "Megan Roberts"
    },
    service: "Template Customization",
    total: 2783,
    avatar: avatar6,
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-22`
  },
  {
    id: 5027,
    issuedDate: `${now.getFullYear()}-${currentMonth}-13`,
    client: {
      address: "86691 Mackenzie Light Suite 568",
      company: "Deleon Inc LLC",
      companyEmail: "gjordan@fernandez-coleman.com",
      country: "Costa Rica",
      contact: "(682) 804-6506",
      name: "Mary Garcia"
    },
    service: "Template Customization",
    total: 2719,
    avatar: "",
    invoiceStatus: "Sent",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-04`
  },
  {
    id: 5028,
    issuedDate: `${now.getFullYear()}-${currentMonth}-18`,
    client: {
      address: "86580 Sarah Bridge",
      company: "Farmer, Johnson and Anderson Group",
      companyEmail: "robertscott@garcia.com",
      country: "Cameroon",
      contact: "(775) 366-0411",
      name: "Crystal Mays"
    },
    service: "Template Customization",
    total: 3325,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 361,
    dueDate: `${now.getFullYear()}-${currentMonth}-02`
  },
  {
    id: 5029,
    issuedDate: `${now.getFullYear()}-${currentMonth}-29`,
    client: {
      address: "49709 Edwin Ports Apt. 353",
      company: "Sherman-Johnson PLC",
      companyEmail: "desiree61@kelly.com",
      country: "Macedonia",
      contact: "(510) 536-6029",
      name: "Nicholas Tanner"
    },
    service: "Template Customization",
    total: 3851,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-25`
  },
  {
    id: 5030,
    issuedDate: `${now.getFullYear()}-${currentMonth}-07`,
    client: {
      address: "3856 Mathis Squares Apt. 584",
      company: "Byrd LLC PLC",
      companyEmail: "jeffrey25@martinez-hodge.com",
      country: "Congo",
      contact: "(253) 230-4657",
      name: "Justin Richardson"
    },
    service: "Template Customization",
    total: 5565,
    avatar: "",
    invoiceStatus: "Draft",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-06`
  },
  {
    id: 5031,
    issuedDate: `${now.getFullYear()}-${currentMonth}-21`,
    client: {
      address: "141 Adrian Ridge Suite 550",
      company: "Stone-Zimmerman Group",
      companyEmail: "john77@anderson.net",
      country: "Falkland Islands (Malvinas)",
      contact: "(612) 546-3485",
      name: "Jennifer Summers"
    },
    service: "Template Customization",
    total: 3313,
    avatar: avatar7,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-09`
  },
  {
    id: 5032,
    issuedDate: `${now.getFullYear()}-${currentMonth}-31`,
    client: {
      address: "01871 Kristy Square",
      company: "Yang, Hansen and Hart PLC",
      companyEmail: "ywagner@jones.com",
      country: "Germany",
      contact: "(203) 601-8603",
      name: "Richard Payne"
    },
    service: "Template Customization",
    total: 5181,
    avatar: "",
    invoiceStatus: "Past Due",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-29`
  },
  {
    id: 5033,
    issuedDate: `${now.getFullYear()}-${currentMonth}-12`,
    client: {
      address: "075 Smith Views",
      company: "Jenkins-Rosales Inc",
      companyEmail: "calvin07@joseph-edwards.org",
      country: "Colombia",
      contact: "(895) 401-4255",
      name: "Lori Wells"
    },
    service: "Template Customization",
    total: 2869,
    avatar: avatar4,
    invoiceStatus: "Partial Payment",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-22`
  },
  {
    id: 5034,
    issuedDate: `${now.getFullYear()}-${currentMonth}-10`,
    client: {
      address: "2577 Pearson Overpass Apt. 314",
      company: "Mason-Reed PLC",
      companyEmail: "eric47@george-castillo.com",
      country: "Paraguay",
      contact: "(602) 336-9806",
      name: "Tammy Sanchez"
    },
    service: "Unlimited Extended License",
    total: 4836,
    avatar: "",
    invoiceStatus: "Paid",
    balance: 0,
    dueDate: `${now.getFullYear()}-${currentMonth}-22`
  },
  {
    id: 5035,
    issuedDate: `${now.getFullYear()}-${currentMonth}-20`,
    client: {
      address: "1770 Sandra Mountains Suite 636",
      company: "Foster-Pham PLC",
      companyEmail: "jamesjoel@chapman.net",
      country: "Western Sahara",
      contact: "(936) 550-1638",
      name: "Dana Carey"
    },
    service: "UI/UX Design & Development",
    total: 4263,
    avatar: "",
    invoiceStatus: "Draft",
    balance: 762,
    dueDate: `${now.getFullYear()}-${currentMonth}-12`
  },
  {
    id: 5036,
    issuedDate: `${now.getFullYear()}-${currentMonth}-19`,
    client: {
      address: "78083 Laura Pines",
      company: "Richardson and Sons LLC",
      companyEmail: "pwillis@cross.org",
      country: "Bhutan",
      contact: "(687) 660-2473",
      name: "Andrew Burns"
    },
    service: "Unlimited Extended License",
    total: 3171,
    avatar: avatar3,
    invoiceStatus: "Paid",
    balance: -205,
    dueDate: `${now.getFullYear()}-${currentMonth}-25`
  }
];
const handlerAppsInvoice = [
  // 👉 Client
  // Get Clients
  http.get("/api/apps/invoice/clients", () => {
    const clients = database$1.map((invoice) => invoice.client);
    return HttpResponse.json(clients.splice(0, 5), { status: 200 });
  }),
  // 👉 Invoice
  // Get Invoice List
  http.get("/api/apps/invoice", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const status = url.searchParams.get("status");
    const selectedDateRange = url.searchParams.get("selectedDateRange");
    const page = url.searchParams.get("page");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const sortBy = url.searchParams.get("sortBy");
    const orderBy = url.searchParams.get("orderBy");
    const searchQuery = is.string(q) ? q : void 0;
    const queryLowered = (searchQuery ?? "").toString().toLowerCase();
    const parsedSortBy = destr$1(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr$1(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr$1(itemsPerPage);
    const parsedPage = destr$1(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const parsedDateRange = destr$1(selectedDateRange);
    const startDateLocal = parsedDateRange == null ? void 0 : parsedDateRange.start;
    const endDateLocal = parsedDateRange == null ? void 0 : parsedDateRange.end;
    let filteredInvoices = database$1.filter((invoice) => (invoice.client.name.toLowerCase().includes(queryLowered) || invoice.client.companyEmail.toLowerCase().includes(queryLowered) || invoice.id.toString().includes(queryLowered)) && invoice.invoiceStatus === (status || invoice.invoiceStatus)).reverse();
    if (sortByLocal) {
      if (sortByLocal === "client") {
        filteredInvoices = filteredInvoices.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.client.name.localeCompare(b2.client.name);
          return b2.client.name.localeCompare(a2.client.name);
        });
      } else if (sortByLocal === "total") {
        filteredInvoices = filteredInvoices.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.total - b2.total;
          return b2.total - a2.total;
        });
      } else if (sortByLocal === "id") {
        filteredInvoices = filteredInvoices.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.id - b2.id;
          return b2.id - a2.id;
        });
      } else if (sortByLocal === "date") {
        filteredInvoices = filteredInvoices.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return new Date(a2.issuedDate).getTime() - new Date(b2.issuedDate).getTime();
          return new Date(b2.issuedDate).getTime() - new Date(a2.issuedDate).getTime();
        });
      } else if (sortByLocal === "balance") {
        filteredInvoices = filteredInvoices.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.balance - b2.balance;
          return b2.balance - a2.balance;
        });
      }
    }
    if (startDateLocal && endDateLocal) {
      filteredInvoices = filteredInvoices.filter((invoiceObj) => {
        const start = new Date(startDateLocal).getTime();
        const end = new Date(endDateLocal).getTime();
        const issuedDate = new Date(invoiceObj.issuedDate).getTime();
        return issuedDate >= start && issuedDate <= end;
      });
    }
    const totalInvoices = filteredInvoices.length;
    return HttpResponse.json({
      invoices: paginateArray(filteredInvoices, itemsPerPageLocal, pageLocal),
      totalInvoices
    }, {
      status: 200
    });
  }),
  // Get Single Invoice
  http.get("/api/apps/invoice/:id", ({ params }) => {
    const invoiceId = params.id;
    const invoice = database$1.find((e2) => e2.id === Number(invoiceId));
    if (!invoice) {
      return HttpResponse.json("No invoice found with this id", { status: 404 });
    }
    const responseData = {
      invoice,
      paymentDetails: {
        totalDue: "$12,110.55",
        bankName: "American Bank",
        country: "United States",
        iban: "ETD95476213874685",
        swiftCode: "BR91905"
      }
    };
    return HttpResponse.json(responseData, { status: 200 });
  }),
  // Delete Invoice
  http.delete("/api/apps/invoice/:id", ({ params }) => {
    const invoiceId = params.id;
    const invoiceIndex = database$1.findIndex((e2) => e2.id === Number(invoiceId));
    if (invoiceIndex >= 0) {
      database$1.splice(invoiceIndex, 1);
      return new HttpResponse(null, {
        status: 204
      });
    }
    return HttpResponse.json({ error: "Something went wrong" }, { status: 404 });
  })
];
const treePot = "/build/assets/tree-pot-DQ1sT54J.png";
const database = {
  boards: [
    {
      id: 1,
      title: "In Progress",
      itemsIds: [1, 2]
    },
    {
      id: 2,
      title: "In Review",
      itemsIds: [3, 4]
    },
    {
      id: 3,
      title: "Done",
      itemsIds: [5, 6]
    }
  ],
  items: [
    {
      id: 1,
      title: "Research FAQ page UX",
      dueDate: "",
      labels: ["UX"],
      members: [{ img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "FAQ page design is ready and needs to be implemented.",
      attachments: 2,
      commentsCount: 1,
      image: ""
    },
    {
      id: 2,
      title: "Review JavaScript code",
      dueDate: "",
      labels: ["Code Review"],
      members: [{ img: avatar3, name: "Robert Johnson" }, { img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "JavaScript code needs to be reviewed and refactored.",
      attachments: 2,
      commentsCount: 4,
      image: ""
    },
    {
      id: 3,
      title: "Review completed Apps",
      dueDate: "",
      labels: ["Dashboard"],
      members: [{ img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "Apps design is ready and needs to be implemented.",
      image: "",
      attachments: 5,
      commentsCount: 10
    },
    {
      id: 4,
      title: "Find new images for pages",
      dueDate: "",
      labels: ["Image"],
      members: [{ img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "New images need to be found for the new pages.",
      image: treePot,
      attachments: 5,
      commentsCount: 4
    },
    {
      id: 5,
      title: "Forms & tables section",
      dueDate: "",
      labels: ["Bug"],
      members: [{ img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "Forms and tables need to be updated.",
      attachments: 7,
      commentsCount: 2,
      image: ""
    },
    {
      id: 6,
      title: "Completed charts & maps",
      dueDate: "",
      labels: ["Charts & maps"],
      members: [{ img: avatar1, name: "John Doe" }, { img: avatar2, name: "Jane Smith" }],
      comments: "Charts and maps need to be updated.",
      attachments: 1,
      commentsCount: 10,
      image: ""
    }
  ]
};
const handlerAppsKanban = [
  // 👉 get all kanban data
  http.get("/api/apps/kanban", () => {
    return HttpResponse.json(database, { status: 200 });
  }),
  // 👉 rename board
  http.put("/api/apps/kanban/board/rename", async ({ request }) => {
    const boardData = await request.json();
    database.boards = database.boards.map((board) => {
      if (board.id === boardData.boardId)
        board.title = boardData.newName;
      return board;
    });
    return new HttpResponse(null, { status: 201 });
  }),
  // 👉 delete board
  http.delete("/api/apps/kanban/board/:id", async ({ params }) => {
    const boardId = Number(params.id);
    database.boards = database.boards.filter((board) => board.id !== boardId);
    return new HttpResponse(null, { status: 204 });
  }),
  // 👉 add new board
  http.post("/api/apps/kanban/board/add", async ({ request }) => {
    const boardName = await request.json();
    const getNewBoardId = () => {
      const newBoardId = database.boards.length + 1;
      if (!database.boards.some((board) => board.id === newBoardId))
        return newBoardId;
      else
        return newBoardId + 1;
    };
    if (database.boards.some((board) => board.title === boardName.title)) {
      return HttpResponse.error();
    } else {
      database.boards.push({
        id: getNewBoardId(),
        title: boardName.title,
        itemsIds: []
      });
      return new HttpResponse(null, { status: 201 });
    }
  }),
  // 👉 add new item
  http.post("/api/apps/kanban/item/add", async ({ request }) => {
    const newItem = await request.json();
    const itemId = database.items[database.items.length - 1].id + 1;
    if (newItem.itemTitle && newItem.boardName) {
      database.items.push({
        id: itemId,
        title: newItem.itemTitle,
        attachments: 0,
        comments: "",
        commentsCount: 0,
        dueDate: "",
        labels: [],
        members: []
      });
      const boardId = database.boards.findIndex((board) => board.id === newItem.boardId);
      database.boards[boardId].itemsIds.push(itemId);
    } else {
      return HttpResponse.error();
    }
    return new HttpResponse(null, { status: 201 });
  }),
  // 👉 update item
  http.put("/api/apps/kanban/item/update", async ({ request }) => {
    const itemData = await request.json();
    database.items.forEach((item) => {
      if (itemData.item && item.id === itemData.item.id) {
        item.title = itemData.item.title;
        item.attachments = itemData.item.attachments;
        item.comments = itemData.item.comments;
        item.commentsCount = itemData.item.commentsCount;
        item.dueDate = itemData.item.dueDate;
        item.labels = itemData.item.labels;
        item.members = itemData.item.members;
      }
    });
    return new HttpResponse(null, { status: 201 });
  }),
  // 👉 delete item
  http.delete("/api/apps/kanban/item/:id", async ({ params }) => {
    const itemId = Number(params.id);
    database.items = database.items.filter((item) => item.id !== itemId);
    database.boards.forEach((board) => {
      board.itemsIds = board.itemsIds.filter((id) => id !== itemId);
    });
    return new HttpResponse(null, { status: 204 });
  }),
  // 👉 update item state
  http.put("/api/apps/kanban/item/state-update", async ({ request }) => {
    const stateData = await request.json();
    database.boards.forEach((board) => {
      if (board.id === stateData.boardId)
        board.itemsIds = stateData.ids;
    });
    return new HttpResponse(null, { status: 201 });
  }),
  // 👉 update board state
  http.put("/api/apps/kanban/board/state-update", async ({ request }) => {
    const boardState = await request.json();
    const sortedBoards = boardState.map((boardId) => {
      return database.boards.find((board) => board.id === boardId);
    });
    database.boards = sortedBoards;
    return new HttpResponse(null, { status: 201 });
  })
];
const db$7 = {
  vehicles: [
    {
      id: 1,
      location: 468031,
      startCity: "Cagnes-sur-Mer",
      startCountry: "France",
      endCity: "Catania",
      endCountry: "Italy",
      warnings: "No Warnings",
      progress: 49
    },
    {
      id: 2,
      location: 302781,
      startCity: "Köln",
      startCountry: "Germany",
      endCity: "Laspezia",
      endCountry: "Italy",
      warnings: "Ecu Not Responding",
      progress: 24
    },
    {
      id: 3,
      location: 715822,
      startCity: "Chambray-lès-Tours",
      startCountry: "France",
      endCity: "Hamm",
      endCountry: "Germany",
      warnings: "Oil Leakage",
      progress: 7
    },
    {
      id: 4,
      location: 451430,
      startCity: "Berlin",
      startCountry: "Germany",
      endCity: "Gelsenkirchen",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 95
    },
    {
      id: 5,
      location: 921577,
      startCity: "Cergy-Pontoise",
      startCountry: "France",
      endCity: "Berlin",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 65
    },
    {
      id: 6,
      location: 480957,
      startCity: "Villefranche-sur-Saône",
      startCountry: "France",
      endCity: "Halle",
      endCountry: "Germany",
      warnings: "Ecu Not Responding",
      progress: 55
    },
    {
      id: 7,
      location: 330178,
      startCity: "Mâcon",
      startCountry: "France",
      endCity: "Bochum",
      endCountry: "Germany",
      warnings: "Fuel Problems",
      progress: 74
    },
    {
      id: 8,
      location: 595525,
      startCity: "Fullerton",
      startCountry: "USA",
      endCity: "Lübeck",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 100
    },
    {
      id: 9,
      location: 182964,
      startCity: "Saintes",
      startCountry: "France",
      endCity: "Roma",
      endCountry: "Italy",
      warnings: "Oil Leakage",
      progress: 82
    },
    {
      id: 10,
      location: 706085,
      startCity: "Fort Wayne",
      startCountry: "USA",
      endCity: "Mülheim an der Ruhr",
      endCountry: "Germany",
      warnings: "Oil Leakage",
      progress: 49
    },
    {
      id: 11,
      location: 523708,
      startCity: "Albany",
      startCountry: "USA",
      endCity: "Wuppertal",
      endCountry: "Germany",
      warnings: "Temperature not optimal",
      progress: 66
    },
    {
      id: 12,
      location: 676485,
      startCity: "Toledo",
      startCountry: "USA",
      endCity: "Magdeburg",
      endCountry: "Germany",
      warnings: "Temperature not optimal",
      progress: 7
    },
    {
      id: 13,
      location: 514437,
      startCity: "Houston",
      startCountry: "USA",
      endCity: "Wiesbaden",
      endCountry: "Germany",
      warnings: "Fuel Problems",
      progress: 27
    },
    {
      id: 14,
      location: 300198,
      startCity: "West Palm Beach",
      startCountry: "USA",
      endCity: "Dresden",
      endCountry: "Germany",
      warnings: "Temperature not optimal",
      progress: 90
    },
    {
      id: 15,
      location: 960090,
      startCity: "Fort Lauderdale",
      startCountry: "USA",
      endCity: "Kiel",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 81
    },
    {
      id: 16,
      location: 878423,
      startCity: "Schaumburg",
      startCountry: "USA",
      endCity: "Berlin",
      endCountry: "Germany",
      warnings: "Fuel Problems",
      progress: 21
    },
    {
      id: 17,
      location: 318119,
      startCity: "Mundolsheim",
      startCountry: "France",
      endCity: "München",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 26
    },
    {
      id: 18,
      location: 742500,
      startCity: "Fargo",
      startCountry: "USA",
      endCity: "Salerno",
      endCountry: "Italy",
      warnings: "Temperature not optimal",
      progress: 80
    },
    {
      id: 19,
      location: 469399,
      startCity: "München",
      startCountry: "Germany",
      endCity: "Ath",
      endCountry: "Belgium",
      warnings: "Ecu Not Responding",
      progress: 50
    },
    {
      id: 20,
      location: 411175,
      startCity: "Chicago",
      startCountry: "USA",
      endCity: "Neuss",
      endCountry: "Germany",
      warnings: "Oil Leakage",
      progress: 44
    },
    {
      id: 21,
      location: 753525,
      startCity: "Limoges",
      startCountry: "France",
      endCity: "Messina",
      endCountry: "Italy",
      warnings: "Temperature not optimal",
      progress: 55
    },
    {
      id: 22,
      location: 882341,
      startCity: "Cesson-Sévigné",
      startCountry: "France",
      endCity: "Napoli",
      endCountry: "Italy",
      warnings: "No Warnings",
      progress: 48
    },
    {
      id: 23,
      location: 408270,
      startCity: "Leipzig",
      startCountry: "Germany",
      endCity: "Tournai",
      endCountry: "Belgium",
      warnings: "Ecu Not Responding",
      progress: 73
    },
    {
      id: 24,
      location: 276904,
      startCity: "Aulnay-sous-Bois",
      startCountry: "France",
      endCity: "Torino",
      endCountry: "Italy",
      warnings: "Fuel Problems",
      progress: 30
    },
    {
      id: 25,
      location: 159145,
      startCity: "Paris 19",
      startCountry: "France",
      endCity: "Dresden",
      endCountry: "Germany",
      warnings: "No Warnings",
      progress: 60
    }
  ]
};
const handlerAppLogistics = [
  http.get("/api/apps/logistics/vehicles", ({ request }) => {
    const url = new URL(request.url);
    const sortBy = url.searchParams.get("sortBy");
    const page = url.searchParams.get("page") ?? 1;
    const itemsPerPage = url.searchParams.get("itemsPerPage") ?? 10;
    const orderBy = url.searchParams.get("orderBy");
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    let vehicles = [...db$7.vehicles];
    if (sortBy) {
      if (sortByLocal === "location") {
        vehicles = vehicles.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.location - b2.location;
          return b2.location - a2.location;
        });
      }
      if (sortByLocal === "startRoute") {
        vehicles = vehicles.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.startCity.localeCompare(b2.startCity);
          return b2.startCity.localeCompare(a2.startCity);
        });
      }
      if (sortByLocal === "endRoute") {
        vehicles = vehicles.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.endCity.localeCompare(b2.endCity);
          return b2.endCity.localeCompare(a2.endCity);
        });
      }
      if (sortByLocal === "warnings") {
        vehicles = vehicles.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.warnings.localeCompare(b2.warnings);
          return b2.warnings.localeCompare(a2.warnings);
        });
      }
      if (sortByLocal === "progress") {
        vehicles = vehicles.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.progress - b2.progress;
          return b2.progress - a2.progress;
        });
      }
    }
    return HttpResponse.json({
      vehicles: paginateArray(vehicles, itemsPerPageLocal, pageLocal),
      totalVehicles: vehicles.length
    }, { status: 200 });
  })
];
const db$6 = {
  permissions: [
    {
      id: 1,
      name: "Management",
      assignedTo: ["administrator"],
      createdDate: "14 Apr 2021, 8:43 PM"
    },
    {
      id: 2,
      assignedTo: ["administrator"],
      name: "Manage Billing & Roles",
      createdDate: "16 Sep 2021, 5:20 PM"
    },
    {
      id: 3,
      name: "Add & Remove Users",
      createdDate: "14 Oct 2021, 10:20 AM",
      assignedTo: ["administrator", "manager"]
    },
    {
      id: 4,
      name: "Project Planning",
      createdDate: "14 Oct 2021, 10:20 AM",
      assignedTo: ["administrator", "users", "support"]
    },
    {
      id: 5,
      name: "Manage Email Sequences",
      createdDate: "23 Aug 2021, 2:00 PM",
      assignedTo: ["administrator", "users", "support"]
    },
    {
      id: 6,
      name: "Client Communication",
      createdDate: "15 Apr 2021, 11:30 AM",
      assignedTo: ["administrator", "manager"]
    },
    {
      id: 7,
      name: "Only View",
      createdDate: "04 Dec 2021, 8:15 PM",
      assignedTo: ["administrator", "restricted-user"]
    },
    {
      id: 8,
      name: "Financial Management",
      createdDate: "25 Feb 2021, 10:30 AM",
      assignedTo: ["administrator", "manager"]
    },
    {
      id: 9,
      name: "Manage Others' Tasks",
      createdDate: "04 Nov 2021, 11:45 AM",
      assignedTo: ["administrator", "support"]
    }
  ]
};
const handlerAppsPermission = [
  // 👉 Get Permission List
  http.get("/api/apps/permissions", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";
    const sortBy = url.searchParams.get("sortBy");
    const page = url.searchParams.get("page") || 1;
    const itemsPerPage = url.searchParams.get("itemsPerPage") || 10;
    const orderBy = url.searchParams.get("orderBy");
    const parsedSortBy = destr(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr(itemsPerPage);
    const parsedPage = destr(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    const searchQuery = is.string(q) ? q : void 0;
    const queryLower = (searchQuery ?? "").toString().toLowerCase();
    let filteredPermissions = db$6.permissions.filter((permissions) => permissions.name.toLowerCase().includes(queryLower) || permissions.createdDate.toLowerCase().includes(queryLower) || permissions.assignedTo.some((i2) => i2.toLowerCase().startsWith(queryLower)));
    if (sortByLocal && sortByLocal === "name") {
      filteredPermissions = filteredPermissions.sort((a2, b2) => {
        if (orderByLocal === "asc")
          return a2.name.localeCompare(b2.name);
        return b2.name.localeCompare(a2.name);
      });
    }
    return HttpResponse.json({
      permissions: paginateArray(filteredPermissions, itemsPerPageLocal, pageLocal),
      totalPermissions: filteredPermissions.length
    }, {
      status: 200
    });
  })
];
const db$5 = {
  users: [
    {
      id: 1,
      fullName: "Galasasen Slixby",
      company: "Yotz PVT LTD",
      role: "editor",
      username: "gslixby0",
      country: "El Salvador",
      contact: "(479) 232-9151",
      email: "gslixby0@abc.net.au",
      currentPlan: "enterprise",
      status: "Inactive",
      avatar: avatar1
    },
    {
      id: 2,
      fullName: "Halsey Redmore",
      company: "Skinder PVT LTD",
      role: "author",
      username: "hredmore1",
      country: "Albania",
      contact: "(472) 607-9137",
      email: "hredmore1@imgur.com",
      currentPlan: "team",
      status: "Pending",
      avatar: avatar2
    },
    {
      id: 3,
      fullName: "Marjory Sicely",
      company: "Oozz PVT LTD",
      role: "maintainer",
      username: "msicely2",
      country: "Russia",
      contact: "(321) 264-4599",
      email: "msicely2@who.int",
      currentPlan: "enterprise",
      status: "Active",
      avatar: ""
    },
    {
      id: 4,
      fullName: "Cyrill Risby",
      company: "Oozz PVT LTD",
      role: "maintainer",
      username: "crisby3",
      country: "China",
      contact: "(923) 690-6806",
      email: "crisby3@wordpress.com",
      currentPlan: "team",
      status: "Inactive",
      avatar: avatar3
    },
    {
      id: 5,
      fullName: "Maggy Hurran",
      company: "Aimbo PVT LTD",
      role: "subscriber",
      username: "mhurran4",
      country: "Pakistan",
      contact: "(669) 914-1078",
      email: "mhurran4@yahoo.co.jp",
      currentPlan: "enterprise",
      status: "Pending",
      avatar: avatar4
    },
    {
      id: 6,
      fullName: "Silvain Halstead",
      company: "Jaxbean PVT LTD",
      role: "author",
      username: "shalstead5",
      country: "China",
      contact: "(958) 973-3093",
      email: "shalstead5@shinystat.com",
      currentPlan: "company",
      status: "Active",
      avatar: ""
    },
    {
      id: 7,
      fullName: "Breena Gallemore",
      company: "Jazzy PVT LTD",
      role: "subscriber",
      username: "bgallemore6",
      country: "Canada",
      contact: "(825) 977-8152",
      email: "bgallemore6@boston.com",
      currentPlan: "company",
      status: "Pending",
      avatar: ""
    },
    {
      id: 8,
      fullName: "Kathryne Liger",
      company: "Pixoboo PVT LTD",
      role: "author",
      username: "kliger7",
      country: "France",
      contact: "(187) 440-0934",
      email: "kliger7@vinaora.com",
      currentPlan: "enterprise",
      status: "Pending",
      avatar: ""
    },
    {
      id: 9,
      fullName: "Franz Scotfurth",
      company: "Tekfly PVT LTD",
      role: "subscriber",
      username: "fscotfurth8",
      country: "China",
      contact: "(978) 146-5443",
      email: "fscotfurth8@dailymotion.com",
      currentPlan: "team",
      status: "Pending",
      avatar: ""
    },
    {
      id: 10,
      fullName: "Jillene Bellany",
      company: "Gigashots PVT LTD",
      role: "maintainer",
      username: "jbellany9",
      country: "Jamaica",
      contact: "(589) 284-6732",
      email: "jbellany9@kickstarter.com",
      currentPlan: "company",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 11,
      fullName: "Jonah Wharlton",
      company: "Eare PVT LTD",
      role: "subscriber",
      username: "jwharltona",
      country: "United States",
      contact: "(176) 532-6824",
      email: "jwharltona@oakley.com",
      currentPlan: "team",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 12,
      fullName: "Seth Hallam",
      company: "Yakitri PVT LTD",
      role: "subscriber",
      username: "shallamb",
      country: "Peru",
      contact: "(234) 464-0600",
      email: "shallamb@hugedomains.com",
      currentPlan: "team",
      status: "Pending",
      avatar: ""
    },
    {
      id: 13,
      fullName: "Yoko Pottie",
      company: "Leenti PVT LTD",
      role: "subscriber",
      username: "ypottiec",
      country: "Philippines",
      contact: "(907) 284-5083",
      email: "ypottiec@privacy.gov.au",
      currentPlan: "basic",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 14,
      fullName: "Maximilianus Krause",
      company: "Digitube PVT LTD",
      role: "author",
      username: "mkraused",
      country: "Democratic Republic of the Congo",
      contact: "(167) 135-7392",
      email: "mkraused@stanford.edu",
      currentPlan: "team",
      status: "Active",
      avatar: ""
    },
    {
      id: 15,
      fullName: "Zsazsa McCleverty",
      company: "Kaymbo PVT LTD",
      role: "maintainer",
      username: "zmcclevertye",
      country: "France",
      contact: "(317) 409-6565",
      email: "zmcclevertye@soundcloud.com",
      currentPlan: "enterprise",
      status: "Active",
      avatar: ""
    },
    {
      id: 16,
      fullName: "Bentlee Emblin",
      company: "Yambee PVT LTD",
      role: "author",
      username: "bemblinf",
      country: "Spain",
      contact: "(590) 606-1056",
      email: "bemblinf@wired.com",
      currentPlan: "company",
      status: "Active",
      avatar: ""
    },
    {
      id: 17,
      fullName: "Brockie Myles",
      company: "Wikivu PVT LTD",
      role: "maintainer",
      username: "bmylesg",
      country: "Poland",
      contact: "(553) 225-9905",
      email: "bmylesg@amazon.com",
      currentPlan: "basic",
      status: "Active",
      avatar: ""
    },
    {
      id: 18,
      fullName: "Bertha Biner",
      company: "Twinte PVT LTD",
      role: "editor",
      username: "bbinerh",
      country: "Yemen",
      contact: "(901) 916-9287",
      email: "bbinerh@mozilla.com",
      currentPlan: "team",
      status: "Active",
      avatar: ""
    },
    {
      id: 19,
      fullName: "Travus Bruntjen",
      company: "Cogidoo PVT LTD",
      role: "admin",
      username: "tbruntjeni",
      country: "France",
      contact: "(524) 586-6057",
      email: "tbruntjeni@sitemeter.com",
      currentPlan: "enterprise",
      status: "Active",
      avatar: ""
    },
    {
      id: 20,
      fullName: "Wesley Burland",
      company: "Bubblemix PVT LTD",
      role: "editor",
      username: "wburlandj",
      country: "Honduras",
      contact: "(569) 683-1292",
      email: "wburlandj@uiuc.edu",
      currentPlan: "team",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 21,
      fullName: "Selina Kyle",
      company: "Wayne Enterprises",
      role: "admin",
      username: "catwomen1940",
      country: "United States",
      contact: "(829) 537-0057",
      email: "irena.dubrovna@wayne.com",
      currentPlan: "team",
      status: "Active",
      avatar: avatar3
    },
    {
      id: 22,
      fullName: "Jameson Lyster",
      company: "Quaxo PVT LTD",
      role: "editor",
      username: "jlysterl",
      country: "Ukraine",
      contact: "(593) 624-0222",
      email: "jlysterl@guardian.co.uk",
      currentPlan: "company",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 23,
      fullName: "Kare Skitterel",
      company: "Ainyx PVT LTD",
      role: "maintainer",
      username: "kskitterelm",
      country: "Poland",
      contact: "(254) 845-4107",
      email: "kskitterelm@ainyx.com",
      currentPlan: "basic",
      status: "Pending",
      avatar: ""
    },
    {
      id: 24,
      fullName: "Cleavland Hatherleigh",
      company: "Flipopia PVT LTD",
      role: "admin",
      username: "chatherleighn",
      country: "Brazil",
      contact: "(700) 783-7498",
      email: "chatherleighn@washington.edu",
      currentPlan: "team",
      status: "Pending",
      avatar: ""
    },
    {
      id: 25,
      fullName: "Adeline Micco",
      company: "Topicware PVT LTD",
      role: "admin",
      username: "amiccoo",
      country: "France",
      contact: "(227) 598-1841",
      email: "amiccoo@whitehouse.gov",
      currentPlan: "enterprise",
      status: "Pending",
      avatar: ""
    },
    {
      id: 26,
      fullName: "Hugh Hasson",
      company: "Skinix PVT LTD",
      role: "admin",
      username: "hhassonp",
      country: "China",
      contact: "(582) 516-1324",
      email: "hhassonp@bizjournals.com",
      currentPlan: "basic",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 27,
      fullName: "Germain Jacombs",
      company: "Youopia PVT LTD",
      role: "editor",
      username: "gjacombsq",
      country: "Zambia",
      contact: "(137) 467-5393",
      email: "gjacombsq@jigsy.com",
      currentPlan: "enterprise",
      status: "Active",
      avatar: ""
    },
    {
      id: 28,
      fullName: "Bree Kilday",
      company: "Jetpulse PVT LTD",
      role: "maintainer",
      username: "bkildayr",
      country: "Portugal",
      contact: "(412) 476-0854",
      email: "bkildayr@mashable.com",
      currentPlan: "team",
      status: "Active",
      avatar: ""
    },
    {
      id: 29,
      fullName: "Candice Pinyon",
      company: "Kare PVT LTD",
      role: "maintainer",
      username: "cpinyons",
      country: "Sweden",
      contact: "(170) 683-1520",
      email: "cpinyons@behance.net",
      currentPlan: "team",
      status: "Active",
      avatar: ""
    },
    {
      id: 30,
      fullName: "Isabel Mallindine",
      company: "Voomm PVT LTD",
      role: "subscriber",
      username: "imallindinet",
      country: "Slovenia",
      contact: "(332) 803-1983",
      email: "imallindinet@shinystat.com",
      currentPlan: "team",
      status: "Pending",
      avatar: ""
    },
    {
      id: 31,
      fullName: "Gwendolyn Meineken",
      company: "Oyondu PVT LTD",
      role: "admin",
      username: "gmeinekenu",
      country: "Moldova",
      contact: "(551) 379-7460",
      email: "gmeinekenu@hc360.com",
      currentPlan: "basic",
      status: "Pending",
      avatar: ""
    },
    {
      id: 32,
      fullName: "Rafaellle Snowball",
      company: "Fivespan PVT LTD",
      role: "editor",
      username: "rsnowballv",
      country: "Philippines",
      contact: "(974) 829-0911",
      email: "rsnowballv@indiegogo.com",
      currentPlan: "basic",
      status: "Pending",
      avatar: ""
    },
    {
      id: 33,
      fullName: "Rochette Emer",
      company: "Thoughtworks PVT LTD",
      role: "admin",
      username: "remerw",
      country: "North Korea",
      contact: "(841) 889-3339",
      email: "remerw@blogtalkradio.com",
      currentPlan: "basic",
      status: "Active",
      avatar: ""
    },
    {
      id: 34,
      fullName: "Ophelie Fibbens",
      company: "Jaxbean PVT LTD",
      role: "subscriber",
      username: "ofibbensx",
      country: "Indonesia",
      contact: "(764) 885-7351",
      email: "ofibbensx@booking.com",
      currentPlan: "company",
      status: "Active",
      avatar: ""
    },
    {
      id: 35,
      fullName: "Stephen MacGilfoyle",
      company: "Browseblab PVT LTD",
      role: "maintainer",
      username: "smacgilfoyley",
      country: "Japan",
      contact: "(350) 589-8520",
      email: "smacgilfoyley@bigcartel.com",
      currentPlan: "company",
      status: "Pending",
      avatar: avatar12
    },
    {
      id: 36,
      fullName: "Bradan Rosebotham",
      company: "Agivu PVT LTD",
      role: "subscriber",
      username: "brosebothamz",
      country: "Belarus",
      contact: "(882) 933-2180",
      email: "brosebothamz@tripadvisor.com",
      currentPlan: "team",
      status: "Inactive",
      avatar: avatar6
    },
    {
      id: 37,
      fullName: "Skip Hebblethwaite",
      company: "Katz PVT LTD",
      role: "admin",
      username: "shebblethwaite10",
      country: "Canada",
      contact: "(610) 343-1024",
      email: "shebblethwaite10@arizona.edu",
      currentPlan: "company",
      status: "Inactive",
      avatar: avatar11
    },
    {
      id: 38,
      fullName: "Moritz Piccard",
      company: "Twitternation PVT LTD",
      role: "maintainer",
      username: "mpiccard11",
      country: "Croatia",
      contact: "(365) 277-2986",
      email: "mpiccard11@vimeo.com",
      currentPlan: "enterprise",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 39,
      fullName: "Tyne Widmore",
      company: "Yombu PVT LTD",
      role: "subscriber",
      username: "twidmore12",
      country: "Finland",
      contact: "(531) 731-0928",
      email: "twidmore12@bravesites.com",
      currentPlan: "team",
      status: "Pending",
      avatar: avatar8
    },
    {
      id: 40,
      fullName: "Florenza Desporte",
      company: "Kamba PVT LTD",
      role: "author",
      username: "fdesporte13",
      country: "Ukraine",
      contact: "(312) 104-2638",
      email: "fdesporte13@omniture.com",
      currentPlan: "company",
      status: "Active",
      avatar: ""
    },
    {
      id: 41,
      fullName: "Edwina Baldetti",
      company: "Dazzlesphere PVT LTD",
      role: "maintainer",
      username: "ebaldetti14",
      country: "Haiti",
      contact: "(315) 329-3578",
      email: "ebaldetti14@theguardian.com",
      currentPlan: "team",
      status: "Pending",
      avatar: avatar10
    },
    {
      id: 42,
      fullName: "Benedetto Rossiter",
      company: "Mybuzz PVT LTD",
      role: "editor",
      username: "brossiter15",
      country: "Indonesia",
      contact: "(323) 175-6741",
      email: "brossiter15@craigslist.org",
      currentPlan: "team",
      status: "Inactive",
      avatar: avatar9
    },
    {
      id: 43,
      fullName: "Micaela McNirlan",
      company: "Tambee PVT LTD",
      role: "admin",
      username: "mmcnirlan16",
      country: "Indonesia",
      contact: "(242) 952-0916",
      email: "mmcnirlan16@hc360.com",
      currentPlan: "basic",
      status: "Inactive",
      avatar: ""
    },
    {
      id: 44,
      fullName: "Vladamir Koschek",
      company: "Centimia PVT LTD",
      role: "author",
      username: "vkoschek17",
      country: "Guatemala",
      contact: "(531) 758-8335",
      email: "vkoschek17@abc.net.au",
      currentPlan: "team",
      status: "Active",
      avatar: avatar7
    },
    {
      id: 45,
      fullName: "Corrie Perot",
      company: "Flipopia PVT LTD",
      role: "subscriber",
      username: "cperot18",
      country: "China",
      contact: "(659) 385-6808",
      email: "cperot18@goo.ne.jp",
      currentPlan: "team",
      status: "Pending",
      avatar: avatar6
    },
    {
      id: 46,
      fullName: "Saunder Offner",
      company: "Skalith PVT LTD",
      role: "maintainer",
      username: "soffner19",
      country: "Poland",
      contact: "(200) 586-2264",
      email: "soffner19@mac.com",
      currentPlan: "enterprise",
      status: "Pending",
      avatar: avatar5
    },
    {
      id: 47,
      fullName: "Karena Courtliff",
      company: "Feedfire PVT LTD",
      role: "admin",
      username: "kcourtliff1a",
      country: "China",
      contact: "(478) 199-0020",
      email: "kcourtliff1a@bbc.co.uk",
      currentPlan: "basic",
      status: "Active",
      avatar: avatar4
    },
    {
      id: 48,
      fullName: "Onfre Wind",
      company: "Thoughtmix PVT LTD",
      role: "admin",
      username: "owind1b",
      country: "Ukraine",
      contact: "(344) 262-7270",
      email: "owind1b@yandex.ru",
      currentPlan: "basic",
      status: "Pending",
      avatar: avatar2
    },
    {
      id: 49,
      fullName: "Paulie Durber",
      company: "Babbleblab PVT LTD",
      role: "subscriber",
      username: "pdurber1c",
      country: "Sweden",
      contact: "(694) 676-1275",
      email: "pdurber1c@gov.uk",
      currentPlan: "team",
      status: "Inactive",
      avatar: avatar3
    },
    {
      id: 50,
      fullName: "Beverlie Krabbe",
      company: "Kaymbo PVT LTD",
      role: "editor",
      username: "bkrabbe1d",
      country: "China",
      contact: "(397) 294-5153",
      email: "bkrabbe1d@home.pl",
      currentPlan: "company",
      status: "Active",
      avatar: avatar1
    }
  ]
};
const handlerAppsUsers = [
  // Get Users Details
  http.get("/api/apps/users", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const role = url.searchParams.get("role");
    const plan = url.searchParams.get("plan");
    const status = url.searchParams.get("status");
    const sortBy = url.searchParams.get("sortBy");
    const itemsPerPage = url.searchParams.get("itemsPerPage");
    const page = url.searchParams.get("page");
    const orderBy = url.searchParams.get("orderBy");
    const searchQuery = is.string(q) ? q : void 0;
    const queryLower = (searchQuery ?? "").toString().toLowerCase();
    const parsedSortBy = destr$1(sortBy);
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : "";
    const parsedOrderBy = destr$1(orderBy);
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : "";
    const parsedItemsPerPage = destr$1(itemsPerPage);
    const parsedPage = destr$1(page);
    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10;
    const pageLocal = is.number(parsedPage) ? parsedPage : 1;
    let filteredUsers = db$5.users.filter((user) => (user.fullName.toLowerCase().includes(queryLower) || user.email.toLowerCase().includes(queryLower)) && user.role === (role || user.role) && user.currentPlan === (plan || user.currentPlan) && user.status === (status || user.status)).reverse();
    if (sortByLocal) {
      if (sortByLocal === "user") {
        filteredUsers = filteredUsers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.fullName.localeCompare(b2.fullName);
          else
            return b2.fullName.localeCompare(a2.fullName);
        });
      }
      if (sortByLocal === "email") {
        filteredUsers = filteredUsers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.email.localeCompare(b2.email);
          else
            return b2.email.localeCompare(a2.email);
        });
      }
      if (sortByLocal === "role") {
        filteredUsers = filteredUsers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.role.localeCompare(b2.role);
          else
            return b2.role.localeCompare(a2.role);
        });
      }
      if (sortByLocal === "plan") {
        filteredUsers = filteredUsers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.currentPlan.localeCompare(b2.currentPlan);
          else
            return b2.currentPlan.localeCompare(a2.currentPlan);
        });
      }
      if (sortByLocal === "status") {
        filteredUsers = filteredUsers.sort((a2, b2) => {
          if (orderByLocal === "asc")
            return a2.status.localeCompare(b2.status);
          else
            return b2.status.localeCompare(a2.status);
        });
      }
    }
    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / itemsPerPageLocal);
    return HttpResponse.json({
      users: paginateArray(filteredUsers, itemsPerPageLocal, pageLocal),
      totalPages,
      totalUsers,
      page: pageLocal > Math.ceil(totalUsers / itemsPerPageLocal) ? 1 : page
    }, { status: 200 });
  }),
  // Get Single User Detail
  http.get("/api/apps/users/:id", ({ params }) => {
    const userId = Number(params.id);
    const user = db$5.users.find((e2) => e2.id === userId);
    if (!user) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    } else {
      return HttpResponse.json({
        ...user,
        ...{
          taskDone: 1230,
          projectDone: 568,
          taxId: "Tax-8894",
          language: "English"
        }
      }, { status: 200 });
    }
  }),
  // Delete User
  http.delete("/api/apps/users/:id", ({ params }) => {
    const userId = Number(params.id);
    const userIndex = db$5.users.findIndex((e2) => e2.id === userId);
    if (userIndex === -1) {
      return HttpResponse.json("User not found", { status: 404 });
    } else {
      db$5.users.splice(userIndex, 1);
      return new HttpResponse(null, {
        status: 204
      });
    }
  }),
  // 👉 Add user
  http.post("/api/apps/users", async ({ request }) => {
    const user = await request.json();
    db$5.users.push({
      ...user,
      id: db$5.users.length + 1
    });
    return HttpResponse.json({ body: user }, { status: 201 });
  })
];
const db$4 = {
  // TODO: Use jsonwebtoken pkg
  // ℹ️ Created from https://jwt.io/ using HS256 algorithm
  // ℹ️ We didn't created it programmatically because jsonwebtoken package have issues with esm support. View Issues: https://github.com/auth0/node-jsonwebtoken/issues/655
  userTokens: [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.fhc3wykrAnRpcKApKhXiahxaOe8PSHatad31NuIZ0Zg",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M30.PGOfMaZA_T9W05vMj5FYXG5d47soSPJD1WuxeUfw4L4",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.d_9aq2tpeA9-qpqO0X4AmW6gU2UpWkXwc04UJYFWiZE",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NX0.ocO77FbjOSU1-JQ_BilEZq2G_M8bCiB10KYqtfkv1ss",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nn0.YgQILRqZy8oefhTZgJJfiEzLmhxQT_Bd2510OvrrwB8",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6N30.KH9RmOWIYv_HONxajg7xBIJXHEUvSdcBygFtS2if8Jk",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OH0.shrp-oMHkVAkiMkv_aIvSx3k6Jk-X7TrH5UeufChz_g",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.9JD1MR3ZkwHzhl4mOHH6lGG8hOVNZqDNH6UkFzjCqSE",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg"
  ],
  users: [
    {
      id: 1,
      fullName: "John Doe",
      username: "johndoe",
      password: "admin",
      avatar: `${"/build/".replace(/build\/$/g, "") ?? "/"}images/avatars/avatar-1.png`,
      email: "admin@demo.com",
      role: "admin",
      abilityRules: [
        {
          action: "manage",
          subject: "all"
        }
      ]
    },
    {
      id: 2,
      fullName: "Jane Doe",
      username: "janedoe",
      password: "client",
      avatar: `${"/build/".replace(/build\/$/g, "") ?? "/"}images/avatars/avatar-2.png`,
      email: "client@demo.com",
      role: "client",
      abilityRules: [
        {
          action: "read",
          subject: "AclDemo"
        }
      ]
    }
  ]
};
const handlerAuth = [
  http.post("/api/auth/login", async ({ request }) => {
    const { email, password } = await request.json();
    let errors = {
      email: ["Something went wrong"]
    };
    const user = db$4.users.find((u2) => u2.email === email && u2.password === password);
    if (user) {
      try {
        const accessToken = db$4.userTokens[user.id];
        const userData = { ...user };
        const userOutData = Object.fromEntries(Object.entries(userData).filter(([key, _]) => !(key === "password" || key === "abilityRules")));
        const response = {
          userAbilityRules: userData.abilityRules,
          accessToken,
          userData: userOutData
        };
        return HttpResponse.json(response, { status: 201 });
      } catch (e2) {
        errors = { email: [e2] };
      }
    } else {
      errors = { email: ["Invalid email or password"] };
    }
    return HttpResponse.json({ errors }, { status: 400 });
  })
];
const product10 = "/build/assets/10-BSkQkhNh.png";
const product11 = "/build/assets/11-C0GXUTQl.png";
const product13 = "/build/assets/13-DChRaH3m.png";
const product14 = "/build/assets/14-DSu3_vx8.png";
const product15 = "/build/assets/15-DTHwHBZr.png";
const product16 = "/build/assets/16-CtYCgrqz.png";
const product17 = "/build/assets/17-VGKeRqlw.png";
const product18 = "/build/assets/18-BElAYBmo.png";
const product19 = "/build/assets/19-DN8byslC.png";
const product20 = "/build/assets/20-GHedSxRd.png";
const product23 = "/build/assets/23-DhXHsG8s.png";
const product24 = "/build/assets/24-BgBw8U3G.png";
const product25 = "/build/assets/25-BwgkBx_p.png";
const product26 = "/build/assets/26-_iASYVNh.png";
const product3 = "/build/assets/3-DWAhoqPB.png";
const product4 = "/build/assets/4-rHyMhWdp.png";
const product5 = "/build/assets/5-XGgxWLve.png";
const product6 = "/build/assets/6-C3xtR9gd.png";
const product7 = "/build/assets/7-BTtLNyyS.png";
const product8 = "/build/assets/8-DH26cUjJ.png";
const product9 = "/build/assets/9-yElqNC6G.png";
const db$3 = {
  salesDetails: [
    {
      product: {
        id: 19,
        name: "OnePlus 7 Pro ",
        slug: "one-plus-7-pro-19",
        brand: "Philips",
        category: "Smart Phone",
        price: 14.99,
        image: product9,
        hasFreeShipping: false,
        rating: 4,
        description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
      },
      date: "30 Apr 2020",
      buyer: {
        name: "Ana Smith",
        avatar: avatar3
      },
      payment: {
        total: 984,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 984,
        status: "Completed"
      }
    },
    {
      product: {
        id: 21,
        name: "Google - Google Home",
        slug: "google-google-home-white-slate-fabric-21",
        brand: "Google",
        category: "Google Home",
        price: 129.29,
        image: product7,
        hasFreeShipping: true,
        rating: 4,
        description: "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use\n    voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with\n    Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest."
      },
      date: "11 Jul 2020",
      buyer: {
        name: "Lindsay Green",
        avatar: avatar8
      },
      payment: {
        total: 1101,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1101,
        status: "Completed"
      }
    },
    {
      product: {
        id: 17,
        name: "Nike Air Max",
        slug: "72-9301-speaker-wire-harness-adapter-for-most-plymouth-dodge-and-mitsubishi-vehicles-multi-17",
        description: "With a bold application of colorblocking inspired by modern art styles, the Nike Air Max 270 React sneaker is constructed with layers of lightweight material to achieve its artful look and comfortable feel.",
        brand: "Nike",
        category: "Shoes",
        price: 81.99,
        image: product11,
        hasFreeShipping: true,
        rating: 5
      },
      date: "06 Jan 2021",
      buyer: {
        name: "Ethan Lee",
        avatar: avatar1
      },
      payment: {
        total: 726,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 126,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 2,
        name: "Bose Frames Tenor",
        slug: "bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2",
        description: "Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen",
        brand: "Bose",
        category: "Glass",
        price: 249,
        image: product26,
        hasFreeShipping: false,
        rating: 4
      },
      date: "21 Aug 2020",
      buyer: {
        name: "Scott Miller",
        avatar: avatar7
      },
      payment: {
        total: 646,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 345,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 25,
        name: "Apple iMac 27-inch",
        slug: "apple-i-mac-27-inch-25",
        brand: "Apple",
        category: "iMac",
        price: 999.99,
        image: product3,
        hasFreeShipping: true,
        rating: 4,
        description: "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully & incredibly intuitive and\n    packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the\n    experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video\n    capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster\n    than ever."
      },
      date: "21 Aug 2020",
      buyer: {
        name: "Brandon Brooks",
        avatar: avatar5
      },
      payment: {
        total: 1005,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 21,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 12,
        name: "Adidas Mens Tech Response Shoes",
        slug: "adidas-mens-tech-response-shoes-12",
        description: "Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.",
        brand: "Adidas",
        category: "Shoes",
        price: 54.59,
        image: product16,
        hasFreeShipping: false,
        rating: 5
      },
      date: "10 Mar 2021",
      buyer: {
        name: "Henry Mann",
        avatar: avatar6
      },
      payment: {
        total: 1114,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 814,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 25,
        name: "Apple iMac 27-inch",
        slug: "apple-i-mac-27-inch-25",
        brand: "Apple",
        category: "iMac",
        price: 999.99,
        image: product3,
        hasFreeShipping: true,
        rating: 4,
        description: "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully & incredibly intuitive and\n    packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the\n    experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video\n    capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster\n    than ever."
      },
      date: "21 Aug 2020",
      buyer: {
        name: "Brandon Brooks",
        avatar: avatar5
      },
      payment: {
        total: 1005,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 21,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 24,
        name: "OneOdio A71 Wired Headphones",
        slug: "one-odio-a71-wired-headphones-24",
        brand: "OneOdio",
        category: "Headphone",
        price: 49.99,
        image: product4,
        hasFreeShipping: true,
        rating: 3,
        description: "Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business,\n    podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice\n    activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device\n    turns any home into a smart device on a smartphone or tablet."
      },
      date: "12 Nov 2020",
      buyer: {
        name: "Grant Wright",
        avatar: avatar2
      },
      payment: {
        total: 207,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 207,
        status: "Completed"
      }
    },
    {
      product: {
        id: 20,
        name: "Sony 4K Ultra HD LED TV ",
        slug: "sony-4-k-ultra-hd-led-tv-20",
        brand: "Apple",
        category: "Smart TV",
        price: 7999.99,
        image: product8,
        hasFreeShipping: false,
        rating: 5,
        description: "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality\n    and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI.\n    You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
      },
      date: "19 Apr 2021",
      buyer: {
        name: "Amanda Sanchez",
        avatar: avatar2
      },
      payment: {
        total: 1119,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1119,
        status: "Completed"
      }
    },
    {
      product: {
        id: 23,
        name: "Apple - MacBook Air®",
        slug: "apple-mac-book-air-latest-model-13-3-display-silver-23",
        brand: "Apple",
        category: "Mac",
        price: 999.99,
        image: product5,
        hasFreeShipping: false,
        rating: 4,
        description: "MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a\n    fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin,\n    light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there,\n better."
      },
      date: "25 Dec 2020",
      buyer: {
        name: "Kathy Estrada",
        avatar: avatar2
      },
      payment: {
        total: 1221,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 1025,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 25,
        name: "Apple iMac 27-inch",
        slug: "apple-i-mac-27-inch-25",
        brand: "Apple",
        category: "iMac",
        price: 999.99,
        image: product3,
        hasFreeShipping: true,
        rating: 4,
        description: "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully & incredibly intuitive and\n    packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the\n    experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video\n capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster\n than ever."
      },
      date: "19 May 2020",
      buyer: {
        name: "William Lopez",
        avatar: avatar2
      },
      payment: {
        total: 973,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 374,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 8,
        name: "PlayStation 4 Console",
        slug: "play-station-4-console-8",
        description: "All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
        brand: "Sony",
        category: "Gaming",
        price: 339.95,
        image: product20,
        hasFreeShipping: false,
        rating: 4
      },
      date: "27 Mar 2021",
      buyer: {
        name: "Colleen Taylor",
        avatar: avatar2
      },
      payment: {
        total: 1235,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1235,
        status: "Completed"
      }
    },
    {
      product: {
        id: 5,
        name: "Toshiba Canvio External Hard Drive",
        slug: "toshiba-canvio-advance-2-tb-portable-external-hard-drive-5",
        description: "Up to 3TB of storage capacity to store your growing files and content",
        brand: "Toshiba",
        category: "Storage Device",
        price: 69.99,
        image: product23,
        hasFreeShipping: true,
        rating: 2
      },
      date: "21 Jun 2020",
      buyer: {
        name: "Melanie Olson",
        avatar: avatar6
      },
      payment: {
        total: 780,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 780,
        status: "Completed"
      }
    },
    {
      product: {
        id: 19,
        name: "OnePlus 7 Pro ",
        slug: "one-plus-7-pro-19",
        brand: "Philips",
        category: "Smart Phone",
        price: 14.99,
        image: product9,
        hasFreeShipping: false,
        rating: 4,
        description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
      },
      date: "28 Jan 2021",
      buyer: {
        name: "Cynthia Cannon",
        avatar: avatar7
      },
      payment: {
        total: 1073,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 871,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 23,
        name: "Apple - MacBook Air®",
        slug: "apple-mac-book-air-latest-model-13-3-display-silver-23",
        brand: "Apple",
        category: "Mac",
        price: 999.99,
        image: product5,
        hasFreeShipping: false,
        rating: 4,
        description: "MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a\n    fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin,\n    light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there,\n better."
      },
      date: "20 Aug 2020",
      buyer: {
        name: "David Archer",
        avatar: avatar5
      },
      payment: {
        total: 224,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 224,
        status: "Completed"
      }
    },
    {
      product: {
        id: 9,
        name: "Giotto 32oz Leakproof BPA Free Drinking Water",
        slug: "giotto-32oz-leakproof-bpa-free-drinking-water-9",
        description: "With unique inspirational quote and time markers on it,this water bottle is great for measuring your daily intake of water,reminding you stay hydrated and drink enough water throughout the day.A must have for any fitness goals including weight loss,appetite control and overall health.",
        brand: "3M",
        category: "Home",
        price: 16.99,
        image: product19,
        hasFreeShipping: true,
        rating: 4
      },
      date: "29 Dec 2020",
      buyer: {
        name: "Michael Cervantes",
        avatar: avatar8
      },
      payment: {
        total: 960,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 866,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 13,
        name: "Laptop Bag",
        slug: "laptop-bag-13",
        description: "TSA FRIENDLY- A separate DIGI SMART compartment can hold 15.6 inch Laptop as well as 15 inch, 14 inch MacBook, 12.9 inch iPad, and tech accessories like charger for quick TSA checkpoint when traveling",
        brand: "TAS",
        category: "Bag",
        price: 29.99,
        image: product15,
        hasFreeShipping: true,
        rating: 5
      },
      date: "15 Aug 2020",
      buyer: {
        name: "Nathaniel Marshall",
        avatar: avatar6
      },
      payment: {
        total: 1423,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Cancelled"
      }
    },
    {
      product: {
        id: 5,
        name: "Toshiba Canvio External Hard Drive",
        slug: "toshiba-canvio-advance-2-tb-portable-external-hard-drive-5",
        description: "Up to 3TB of storage capacity to store your growing files and content",
        brand: "Toshiba",
        category: "Storage Device",
        price: 69.99,
        image: product23,
        hasFreeShipping: true,
        rating: 2
      },
      date: "03 Jan 2021",
      buyer: {
        name: "Tiffany Ross",
        avatar: avatar4
      },
      payment: {
        total: 663,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 285,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 14,
        name: "Wireless Charger 5W Max",
        slug: "wireless-charger-5-w-max-14",
        description: "Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.",
        brand: "3M",
        category: "Electronics",
        price: 10.83,
        image: product14,
        hasFreeShipping: true,
        rating: 3
      },
      date: "20 Dec 2020",
      buyer: {
        name: "Philip Walters",
        avatar: null
      },
      payment: {
        total: 1112,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 426,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 15,
        name: "Vankyo leisure 3 mini projector",
        slug: "3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15",
        description: "SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.",
        brand: "Vankyo Store",
        category: "Projector",
        price: 99.99,
        image: product13,
        hasFreeShipping: true,
        rating: 2
      },
      date: "02 Jul 2020",
      buyer: {
        name: "Pamela Smith",
        avatar: null
      },
      payment: {
        total: 462,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 383,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 12,
        name: "Adidas Mens Tech Response Shoes",
        slug: "adidas-mens-tech-response-shoes-12",
        description: "Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.",
        brand: "Adidas",
        category: "Shoes",
        price: 54.59,
        image: product16,
        hasFreeShipping: false,
        rating: 5
      },
      date: "24 Jul 2020",
      buyer: {
        name: "Kara Gonzalez",
        avatar: avatar3
      },
      payment: {
        total: 1325,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 792,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 18,
        name: "Logitech K380 Wireless Keyboard",
        slug: "acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18",
        description: "Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.",
        brand: "Logitech",
        category: "Keyboard",
        price: 81.99,
        image: product10,
        hasFreeShipping: false,
        rating: 4
      },
      date: "07 Jan 2021",
      buyer: {
        name: "Katherine Tate",
        avatar: avatar8
      },
      payment: {
        total: 582,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 234,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 3,
        name: "Willful Smart Watch for Men Women 2020,",
        slug: "willful-smart-watch-for-men-women-2020-3",
        description: "Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.",
        brand: "Willful",
        category: "Smart Watch",
        price: 29.99,
        image: product25,
        hasFreeShipping: true,
        rating: 5
      },
      date: "29 Aug 2020",
      buyer: {
        name: "Ashley Douglas DDS",
        avatar: avatar3
      },
      payment: {
        total: 1092,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1092,
        status: "Completed"
      }
    },
    {
      product: {
        id: 22,
        name: "Switch Pro Controller",
        slug: "switch-pro-controller-22",
        brand: "Sharp",
        category: "Gaming",
        price: 429.99,
        image: product6,
        hasFreeShipping: false,
        rating: 3,
        description: "The Nintendo Switch Pro Controller is one of the priciest 'baseline' controllers in the current console\n generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features\n    impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an\n    adapter to use it with your PC."
      },
      date: "09 Jan 2021",
      buyer: {
        name: "Eric Gregory",
        avatar: avatar3
      },
      payment: {
        total: 939,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 939,
        status: "Completed"
      }
    },
    {
      product: {
        id: 4,
        name: "Ronyes Unisex College Bag Bookbags for Women",
        slug: "ronyes-unisex-college-bag-bookbags-for-women-4",
        description: "Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging",
        brand: "Ronyes",
        category: "Bag",
        price: 23.99,
        image: product24,
        hasFreeShipping: true,
        rating: 2
      },
      date: "06 May 2020",
      buyer: {
        name: "Taylor Hernandez",
        avatar: avatar3
      },
      payment: {
        total: 1129,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Cancelled"
      }
    },
    {
      product: {
        id: 10,
        name: "Oculus Quest All-in-one VR",
        slug: "oculus-quest-all-in-one-vr-10",
        description: "All-in-one VR: No PC. No wires. No limits. Oculus quest is an all-in-one gaming system built for virtual reality. Now you can play almost anywhere with just a VR headset and controllers. Oculus touch controllers: arm yourself with the award-winning Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game",
        brand: "Oculus",
        category: "VR",
        price: 645,
        image: product18,
        hasFreeShipping: false,
        rating: 1
      },
      date: "29 Dec 2020",
      buyer: {
        name: "Justin Patterson",
        avatar: avatar3
      },
      payment: {
        total: 252,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 252,
        status: "Completed"
      }
    },
    {
      product: {
        id: 11,
        name: "Handbags for Women Large Designer bag",
        slug: "handbags-for-women-large-designer-bag-11",
        description: "Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business",
        brand: "Hobo",
        category: "Bag",
        price: 39.99,
        image: product17,
        hasFreeShipping: true,
        rating: 3
      },
      date: "19 Dec 2020",
      buyer: {
        name: "Judy Cummings",
        avatar: avatar3
      },
      payment: {
        total: 1369,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1369,
        status: "Completed"
      }
    },
    {
      product: {
        id: 18,
        name: "Logitech K380 Wireless Keyboard",
        slug: "acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18",
        description: "Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.",
        brand: "Logitech",
        category: "Keyboard",
        price: 81.99,
        image: product10,
        hasFreeShipping: false,
        rating: 4
      },
      date: "02 Jan 2021",
      buyer: {
        name: "Linda Buchanan",
        avatar: avatar7
      },
      payment: {
        total: 351,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 351,
        status: "Completed"
      }
    },
    {
      product: {
        id: 21,
        name: "Google - Google Home",
        slug: "google-google-home-white-slate-fabric-21",
        brand: "Google",
        category: "Google Home",
        price: 129.29,
        image: product7,
        hasFreeShipping: true,
        rating: 4,
        description: "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use\n    voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with\n    Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest."
      },
      date: "25 Feb 2021",
      buyer: {
        name: "Brian Perez",
        avatar: avatar8
      },
      payment: {
        total: 506,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 497,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 3,
        name: "Willful Smart Watch for Men Women 2020,",
        slug: "willful-smart-watch-for-men-women-2020-3",
        description: "Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.",
        brand: "Willful",
        category: "Smart Watch",
        price: 29.99,
        image: product25,
        hasFreeShipping: true,
        rating: 5
      },
      date: "13 Sep 2020",
      buyer: {
        name: "Amy White",
        avatar: null
      },
      payment: {
        total: 195,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 195,
        status: "Completed"
      }
    },
    {
      product: {
        id: 18,
        name: "Logitech K380 Wireless Keyboard",
        slug: "acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18",
        description: "Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.",
        brand: "Logitech",
        category: "Keyboard",
        price: 81.99,
        image: product10,
        hasFreeShipping: false,
        rating: 4
      },
      date: "30 Sep 2020",
      buyer: {
        name: "Katherine Clark",
        avatar: avatar1
      },
      payment: {
        total: 1246,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 475,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 14,
        name: "Wireless Charger 5W Max",
        slug: "wireless-charger-5-w-max-14",
        description: "Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.",
        brand: "3M",
        category: "Electronics",
        price: 10.83,
        image: product14,
        hasFreeShipping: true,
        rating: 3
      },
      date: "26 Mar 2021",
      buyer: {
        name: "Jose Murphy",
        avatar: avatar5
      },
      payment: {
        total: 383,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 383,
        status: "Completed"
      }
    },
    {
      product: {
        id: 2,
        name: "Bose Frames Tenor",
        slug: "bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2",
        description: "Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen",
        brand: "Bose",
        category: "Glass",
        price: 249,
        image: product26,
        hasFreeShipping: false,
        rating: 4
      },
      date: "01 Dec 2020",
      buyer: {
        name: "Jeffrey Rose",
        avatar: avatar5
      },
      payment: {
        total: 902,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 902,
        status: "Completed"
      }
    },
    {
      product: {
        id: 24,
        name: "OneOdio A71 Wired Headphones",
        slug: "one-odio-a71-wired-headphones-24",
        brand: "OneOdio",
        category: "Headphone",
        price: 49.99,
        image: product4,
        hasFreeShipping: true,
        rating: 3,
        description: "Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business,\n    podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice\n    activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device\n    turns any home into a smart device on a smartphone or tablet."
      },
      date: "15 Sep 2020",
      buyer: {
        name: "Amber Hunt",
        avatar: avatar7
      },
      payment: {
        total: 379,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 174,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 2,
        name: "Bose Frames Tenor",
        slug: "bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2",
        description: "Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen",
        brand: "Bose",
        category: "Glass",
        price: 249,
        image: product26,
        hasFreeShipping: false,
        rating: 4
      },
      date: "08 Apr 2021",
      buyer: {
        name: "Christopher Haas",
        avatar: avatar2
      },
      payment: {
        total: 7,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 2,
        name: "Bose Frames Tenor",
        slug: "bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2",
        description: "Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen",
        brand: "Bose",
        category: "Glass",
        price: 249,
        image: product26,
        hasFreeShipping: false,
        rating: 4
      },
      date: "21 Oct 2020",
      buyer: {
        name: "Stephen Mccormick",
        avatar: avatar6
      },
      payment: {
        total: 186,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 81,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 19,
        name: "OnePlus 7 Pro ",
        slug: "one-plus-7-pro-19",
        brand: "Philips",
        category: "Smart Phone",
        price: 14.99,
        image: product9,
        hasFreeShipping: false,
        rating: 4,
        description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
      },
      date: "21 Oct 2020",
      buyer: {
        name: "Matthew Reyes",
        avatar: avatar3
      },
      payment: {
        total: 198,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 198,
        status: "Completed"
      }
    },
    {
      product: {
        id: 4,
        name: "Ronyes Unisex College Bag Bookbags for Women",
        slug: "ronyes-unisex-college-bag-bookbags-for-women-4",
        description: "Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging",
        brand: "Ronyes",
        category: "Bag",
        price: 23.99,
        image: product24,
        hasFreeShipping: true,
        rating: 2
      },
      date: "16 May 2020",
      buyer: {
        name: "Ricardo Morgan",
        avatar: avatar5
      },
      payment: {
        total: 519,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 447,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 20,
        name: "Sony 4K Ultra HD LED TV ",
        slug: "sony-4-k-ultra-hd-led-tv-20",
        brand: "Apple",
        category: "Smart TV",
        price: 7999.99,
        image: product8,
        hasFreeShipping: false,
        rating: 5,
        description: "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality\n    and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI.\n    You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
      },
      date: "01 Jul 2020",
      buyer: {
        name: "William Castillo",
        avatar: avatar4
      },
      payment: {
        total: 10,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 6,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 11,
        name: "Handbags for Women Large Designer bag",
        slug: "handbags-for-women-large-designer-bag-11",
        description: "Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business",
        brand: "Hobo",
        category: "Bag",
        price: 39.99,
        image: product17,
        hasFreeShipping: true,
        rating: 3
      },
      date: "04 Jul 2020",
      buyer: {
        name: "James Coleman",
        avatar: avatar8
      },
      payment: {
        total: 897,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 677,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 18,
        name: "Logitech K380 Wireless Keyboard",
        slug: "acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18",
        description: "Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.",
        brand: "Logitech",
        category: "Keyboard",
        price: 81.99,
        image: product10,
        hasFreeShipping: false,
        rating: 4
      },
      date: "19 Feb 2021",
      buyer: {
        name: "Michael Summers",
        avatar: avatar3
      },
      payment: {
        total: 653,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 653,
        status: "Completed"
      }
    },
    {
      product: {
        id: 3,
        name: "Willful Smart Watch for Men Women 2020,",
        slug: "willful-smart-watch-for-men-women-2020-3",
        description: "Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.",
        brand: "Willful",
        category: "Smart Watch",
        price: 29.99,
        image: product25,
        hasFreeShipping: true,
        rating: 5
      },
      date: "03 Mar 2021",
      buyer: {
        name: "Jeremiah Espinoza",
        avatar: avatar2
      },
      payment: {
        total: 913,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 468,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 2,
        name: "Bose Frames Tenor",
        slug: "bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2",
        description: "Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen",
        brand: "Bose",
        category: "Glass",
        price: 249,
        image: product26,
        hasFreeShipping: false,
        rating: 4
      },
      date: "03 Mar 2021",
      buyer: {
        name: "Tyler Brooks",
        avatar: null
      },
      payment: {
        total: 1123,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 1123,
        status: "Completed"
      }
    },
    {
      product: {
        id: 17,
        name: "Nike Air Max",
        slug: "72-9301-speaker-wire-harness-adapter-for-most-plymouth-dodge-and-mitsubishi-vehicles-multi-17",
        description: "With a bold application of colorblocking inspired by modern art styles, the Nike Air Max 270 React sneaker is constructed with layers of lightweight material to achieve its artful look and comfortable feel.",
        brand: "Nike",
        category: "Shoes",
        price: 81.99,
        image: product11,
        hasFreeShipping: true,
        rating: 5
      },
      date: "29 Dec 2020",
      buyer: {
        name: "Juan Wilson",
        avatar: avatar3
      },
      payment: {
        total: 779,
        receivedPaymentStatus: "Fully Paid",
        paidAmount: 779,
        status: "Completed"
      }
    },
    {
      product: {
        id: 15,
        name: "Vankyo leisure 3 mini projector",
        slug: "3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15",
        description: "SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.",
        brand: "Vankyo Store",
        category: "Projector",
        price: 99.99,
        image: product13,
        hasFreeShipping: true,
        rating: 2
      },
      date: "03 Dec 2020",
      buyer: {
        name: "Marvin Duran",
        avatar: null
      },
      payment: {
        total: 594,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Cancelled"
      }
    },
    {
      product: {
        id: 22,
        name: "Switch Pro Controller",
        slug: "switch-pro-controller-22",
        brand: "Sharp",
        category: "Gaming",
        price: 429.99,
        image: product6,
        hasFreeShipping: false,
        rating: 3,
        description: "The Nintendo Switch Pro Controller is one of the priciest 'baseline' controllers in the current console\n    generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features\n impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an\n    adapter to use it with your PC."
      },
      date: "28 May 2020",
      buyer: {
        name: "Jessica Glass",
        avatar: avatar5
      },
      payment: {
        total: 1065,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 844,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 18,
        name: "Logitech K380 Wireless Keyboard",
        slug: "acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18",
        description: "Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.",
        brand: "Logitech",
        category: "Keyboard",
        price: 81.99,
        image: product10,
        hasFreeShipping: false,
        rating: 4
      },
      date: "17 May 2020",
      buyer: {
        name: "Gary Herman",
        avatar: avatar8
      },
      payment: {
        total: 432,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 64,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 19,
        name: "OnePlus 7 Pro ",
        slug: "one-plus-7-pro-19",
        brand: "Philips",
        category: "Smart Phone",
        price: 14.99,
        image: product9,
        hasFreeShipping: false,
        rating: 4,
        description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
      },
      date: "25 Mar 2021",
      buyer: {
        name: "Adam Williams",
        avatar: avatar2
      },
      payment: {
        total: 1402,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 434,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 20,
        name: "Sony 4K Ultra HD LED TV ",
        slug: "sony-4-k-ultra-hd-led-tv-20",
        brand: "Apple",
        category: "Smart TV",
        price: 7999.99,
        image: product8,
        hasFreeShipping: false,
        rating: 5,
        description: "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality\n    and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI.\n    You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
      },
      date: "13 Apr 2021",
      buyer: {
        name: "Bobby Brown",
        avatar: null
      },
      payment: {
        total: 100,
        receivedPaymentStatus: "Partially Paid",
        paidAmount: 65,
        status: "Confirmed"
      }
    },
    {
      product: {
        id: 14,
        name: "Wireless Charger 5W Max",
        slug: "wireless-charger-5-w-max-14",
        description: "Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.",
        brand: "3M",
        category: "Electronics",
        price: 10.83,
        image: product14,
        hasFreeShipping: true,
        rating: 3
      },
      date: "07 Aug 2020",
      buyer: {
        name: "Sharon Moss",
        avatar: avatar8
      },
      payment: {
        total: 823,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Cancelled"
      }
    },
    {
      product: {
        id: 15,
        name: "Vankyo leisure 3 mini projector",
        slug: "3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15",
        description: "SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.",
        brand: "Vankyo Store",
        category: "Projector",
        price: 99.99,
        image: product13,
        hasFreeShipping: true,
        rating: 2
      },
      date: "23 Feb 2021",
      buyer: {
        name: "Scott Buchanan",
        avatar: avatar5
      },
      payment: {
        total: 183,
        receivedPaymentStatus: "Unpaid",
        paidAmount: 0,
        status: "Cancelled"
      }
    }
  ]
};
const handlerPagesDatatable = [
  http.get("/api/pages/datatable", () => {
    return HttpResponse.json(db$3.salesDetails, { status: 200 });
  })
];
const db$2 = {
  faqs: [
    {
      faqTitle: "Payment",
      faqIcon: "ri-bank-card-line",
      faqSubtitle: "Get help with payment",
      faqs: [
        {
          question: "When is payment taken for my order?",
          answer: "Payment is taken during the checkout process when you pay for your order. The order number that appears on the confirmation screen indicates payment has been successfully processed."
        },
        {
          question: "How do I pay for my order?",
          answer: "We accept Visa®, MasterCard®, American Express®, and PayPal®. Our servers encrypt all information submitted to them, so you can be confident that your credit card information will be kept safe and secure."
        },
        {
          question: "What should I do if I'm having trouble placing an order?",
          answer: "For any technical difficulties you are experiencing with our website, please contact us at our support portal, or you can call us toll-free at 1-000-000-000, or email us at order@companymail.com"
        },
        {
          question: "Which license do I need for an end product that is only accessible to paying users?",
          answer: "If you have paying users or you are developing any SaaS products then you need an Extended License. For each products, you need a license. You can get free lifetime updates as well."
        },
        {
          question: "Does my subscription automatically renew?",
          answer: "No, This is not subscription based item.Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps."
        }
      ]
    },
    {
      faqTitle: "Delivery",
      faqIcon: "ri-shopping-cart-line",
      faqSubtitle: "Get help with delivery",
      faqs: [
        {
          question: "How would you ship my order?",
          answer: "For large products, we deliver your product via a third party logistics company offering you the “room of choice” scheduled delivery service. For small products, we offer free parcel delivery."
        },
        {
          question: "What is the delivery cost of my order?",
          answer: "The cost of scheduled delivery is $69 or $99 per order, depending on the destination postal code. The parcel delivery is free."
        },
        {
          question: "What to do if my product arrives damaged?",
          answer: "We will promptly replace any product that is damaged in transit. Just contact our support team, to notify us of the situation within 48 hours of product arrival."
        }
      ]
    },
    {
      faqTitle: "Cancellation & Return",
      faqIcon: "ri-refresh-line",
      faqSubtitle: "Get help with cancellation & return",
      faqs: [
        {
          question: "Can I cancel my order?",
          answer: "Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund. Parcel delivery orders cannot be cancelled, however a free return label can be provided upon request."
        },
        {
          question: "Can I return my product?",
          answer: "You can return your product within 15 days of delivery, by contacting our support team, All merchandise returned must be in the original packaging with all original items."
        },
        {
          question: "Where can I view status of return?",
          answer: "Locate the item from Your Orders. Select Return/Refund status"
        }
      ]
    },
    {
      faqTitle: "My Order",
      faqIcon: "ri-inbox-archive-line",
      faqSubtitle: "Order details",
      faqs: [
        {
          question: "Has my order been successful?",
          answer: `All successful order transactions will receive an order confirmation email once the order has been processed. If you have not received your order confirmation email within 24 hours, check your junk email or spam folder.
              Alternatively, log in to your account to check your order summary. If you do not have a account, you can contact our Customer Care Team on 1-000-000-000.
              `
        },
        {
          question: "My Promotion Code is not working, what can I do?",
          answer: "If you are having issues with a promotion code, please contact us at 1 000 000 000 for assistance."
        },
        {
          question: "How do I track my Orders?",
          answer: "If you have an account just sign into your account from here and select “My Orders”. If you have a a guest account track your order from here using the order number and the email address."
        }
      ]
    },
    {
      faqTitle: "Product & Services",
      faqIcon: "ri-settings-4-line",
      faqSubtitle: "Get help with product & services",
      faqs: [
        {
          question: "Will I be notified once my order has shipped?",
          answer: "Yes, We will send you an email once your order has been shipped. This email will contain tracking and order information."
        },
        {
          question: "Where can I find warranty information?",
          answer: "We are committed to quality products. For information on warranty period and warranty services, visit our Warranty section here."
        },
        {
          question: "How can I purchase additional warranty coverage?",
          answer: "For the peace of your mind, we offer extended warranty plans that add additional year(s) of protection to the standard manufacturer's warranty provided by us. To purchase or find out more about the extended warranty program, visit Extended Warranty section here."
        }
      ]
    }
  ]
};
const handlerPagesFaq = [
  http.get("/api/pages/faq", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
    const searchQuery = is.string(q) ? q : void 0;
    const queryLowered = (searchQuery ?? "").toString().toLowerCase();
    const filteredData = [];
    Object.entries(db$2.faqs).forEach(([_, faqObj]) => {
      const filteredQAndA = faqObj.faqs.filter((obj) => {
        return obj.question.toLowerCase().includes(queryLowered);
      });
      if (filteredQAndA.length)
        filteredData.push({ ...faqObj, faqs: filteredQAndA });
    });
    return HttpResponse.json(filteredData, { status: 200 });
  })
];
const checkoutImg = "/build/assets/checkout-image-Dh8sQZil.png";
const productImg = "/build/assets/product-image-Bp42RYEh.png";
const db$1 = {
  popularArticles: [
    {
      slug: "getting-started",
      title: "Getting Started",
      img: "../images/svg/rocket.svg",
      subtitle: "Whether you're new or you're a power user, this article will help you."
    },
    {
      slug: "first-steps",
      title: "First Steps",
      img: "../images/svg/gift.svg",
      subtitle: "Are you a new customer wondering on how to get started?"
    },
    {
      slug: "external-content",
      title: "Add External Content",
      img: "../images/svg/keyboard.svg",
      subtitle: "Article will show you how to expand functionality of App with external content."
    }
  ],
  allArticles: [
    {
      title: "Buying",
      icon: "ri-shopping-cart-line",
      articles: [
        { title: "What are Favourites?" },
        { title: "How do I purchase an item?" },
        { title: "How do i add or change my details?" },
        { title: "How do refunds work?" },
        { title: "Can I Get A Refund?" },
        { title: "I'm trying to find a specific item" }
      ]
    },
    {
      title: "Item Support",
      icon: "ri-question-line",
      articles: [
        { title: "What is Item Support?" },
        { title: "How to contact an author?" },
        { title: "Where Is My Purchase Code?" },
        { title: "Extend or renew Item Support" },
        { title: "Item Support FAQ" },
        { title: "Why has my item been removed?" }
      ]
    },
    {
      title: "Licenses",
      icon: "ri-file-text-line",
      articles: [
        { title: "Can I use the same license for the..." },
        { title: "How to contact an author?" },
        { title: "I'm making a test site - it's not for ..." },
        { title: "which license do I need?" },
        { title: "I want to make multiple end prod ..." },
        { title: "For logo what license do I need?" }
      ]
    },
    {
      title: "Template Kits",
      icon: "ri-palette-line",
      articles: [
        { title: "Template Kits" },
        { title: "Elementor Template Kits: PHP Zip ..." },
        { title: "Template Kits - Imported template ..." },
        { title: "Troubleshooting Import Problems" },
        { title: "How to use the WordPress Plugin ..." },
        { title: "How to use the Template Kit Import ..." }
      ]
    },
    {
      title: "Account & Password",
      icon: "ri-lock-line",
      articles: [
        { title: "Signing in with a social account" },
        { title: "Locked Out of Account" },
        { title: "I'm not receiving the verification email" },
        { title: "Forgotten Username Or Password" },
        { title: "New password not accepted" },
        { title: "What is Sign In Verification?" }
      ]
    },
    {
      title: "Account Settings",
      icon: "ri-user-3-line",
      articles: [
        { title: "How do I change my password?" },
        { title: "How do I change my username?" },
        { title: "How do I close my account?" },
        { title: "How do I change my email address?" },
        { title: "How can I regain access to my a ..." },
        { title: "Are RSS feeds available on Market?" }
      ]
    }
  ],
  keepLearning: [
    {
      slug: "blogging",
      title: "Blogging",
      img: "../images/svg/laptop.svg",
      subtitle: "Expert tips & tools to improve your website or online store using blog."
    },
    {
      slug: "inspiration-center",
      title: "Inspiration Center",
      img: "../images/svg/lightbulb.svg",
      subtitle: "inspiration from experts to help you start and grow your big ideas."
    },
    {
      slug: "community",
      title: "Community",
      img: "../images/svg/discord.svg",
      subtitle: "A group of people living in the same place or having a particular."
    }
  ],
  articleData: {
    title: "How to add product in cart?",
    lastUpdated: "1 month ago  -  Updated",
    productContent: `
            <p class='text-body-1'>
              If you're after only one item, simply choose the 'Buy Now' option on the item page. This will take you directly to Checkout.
            </p>
            <p class='text-body-1'>
              If you want several items, use the 'Add to Cart' button and then choose 'Keep Browsing' to continue shopping or 'Checkout' to finalize your purchase.
            </p>
        `,
    checkoutContent: "You can go back to your cart at any time by clicking on the shopping cart icon at the top right side of the page.",
    articleList: [
      "Template Kits",
      "Elementor Template Kits: PHP Zip Extends",
      "Envato Elements Template Kits",
      "Envato Elements Template Kits",
      "How to use the template in WordPress",
      "How to use the Template Kit Import"
    ],
    checkoutImg,
    productImg
  }
};
const handlerPagesHelpCenter = [
  http.get("/api/pages/help-center", () => {
    return HttpResponse.json({ allArticles: db$1.allArticles, popularArticles: db$1.popularArticles, keepLearning: db$1.keepLearning }, { status: 200 });
  }),
  http.get("/api/pages/help-center/article", () => {
    return HttpResponse.json(db$1.articleData, { status: 200 });
  })
];
const eventLabel = "/build/assets/event-B9e7NeGJ.png";
const figma = "/build/assets/figma-Cl6TuocT.png";
const html5 = "/build/assets/html5-Bp0r7gIb.png";
const react = "/build/assets/react-B8nFg6IT.png";
const socialLabel = "/build/assets/social-Ch4LtR3X.png";
const supportLabel = "/build/assets/support-BBzmQgkm.png";
const twitterLabel = "/build/assets/twitter-DGmLwFKF.png";
const vue = "/build/assets/vue-3UgQmhcq.png";
const xdLabel = "/build/assets/xd-Dgu4zthb.png";
const UserProfileHeaderBg = "/build/assets/user-profile-header-bg-DUZf10XJ.png";
const db = {
  data: {
    profileHeader: {
      fullName: "John Doe",
      location: "Vatican City",
      joiningDate: "Joined April 2021",
      designation: "UX Designer",
      profileImg: avatar1,
      coverImg: UserProfileHeaderBg
    },
    profile: {
      about: [
        { property: "Full Name", value: "John Doe", icon: "ri-user-line" },
        { property: "Status", value: "Active", icon: "ri-check-line" },
        { property: "Role", value: "Developer", icon: "ri-star-smile-line" },
        { property: "Country", value: "USA", icon: "ri-flag-2-line" },
        { property: "Language", value: "English", icon: "ri-translate-2" }
      ],
      contacts: [
        { property: "Contact", value: "(123) 456-7890", icon: "ri-phone-line" },
        { property: "Skype", value: "john.doe", icon: "ri-wechat-line" },
        { property: "Email", value: "john.doe@example.com", icon: "ri-mail-open-line" }
      ],
      teams: [
        { property: "Backend Developer", value: "(126 Members)", icon: "ri-github-fill", color: "secondary" },
        { property: "VueJS Developer", value: "(98 Members)", icon: "ri-vuejs-line", color: "success" }
      ],
      overview: [
        { property: "Task Compiled", value: "13.5k", icon: "ri-check-line" },
        { property: "Connections", value: "897", icon: "ri-user-line" },
        { property: "Projects Compiled", value: "146", icon: "ri-star-smile-line" }
      ],
      connections: [
        {
          isFriend: false,
          connections: "45",
          name: "Cecilia Payne",
          avatar: avatar2
        },
        {
          isFriend: true,
          connections: "1.32k",
          name: "Curtis Fletcher",
          avatar: avatar3
        },
        {
          isFriend: true,
          connections: "125",
          name: "Alice Stone",
          avatar: avatar4
        },
        {
          isFriend: false,
          connections: "456",
          name: "Darrell Barnes",
          avatar: avatar5
        },
        {
          isFriend: false,
          connections: "1.2k",
          name: "Eugenia Moore",
          avatar: avatar8
        }
      ],
      teamsTech: [
        {
          members: 72,
          ChipColor: "error",
          chipText: "Developer",
          title: "React Developers",
          avatar: react
        },
        {
          members: 122,
          chipText: "Support",
          ChipColor: "primary",
          title: "Support Team",
          avatar: supportLabel
        },
        {
          members: 7,
          ChipColor: "info",
          chipText: "Designer",
          title: "UI Designer",
          avatar: figma
        },
        {
          members: 289,
          ChipColor: "error",
          chipText: "Developer",
          title: "Vue.js Developers",
          avatar: vue
        },
        {
          members: 24,
          chipText: "Marketing",
          ChipColor: "secondary",
          title: "Digital Marketing",
          avatar: twitterLabel
        }
      ]
    },
    teams: [
      {
        extraMembers: 9,
        title: "React Developers",
        avatar: react,
        avatarGroup: [
          { avatar: avatar1, name: "Vinnie Mostowy" },
          { avatar: avatar2, name: "Allen Rieske" },
          { avatar: avatar3, name: "Julee Rossignol" },
          { avatar: avatar4, name: "George Burrill" }
        ],
        description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
        chips: [
          {
            title: "React",
            color: "primary"
          },
          {
            title: "MUI",
            color: "info"
          }
        ]
      },
      {
        extraMembers: 4,
        title: "Vue.js Dev Team",
        avatar: vue,
        avatarGroup: [
          { avatar: avatar5, name: "Kaith D'souza" },
          { avatar: avatar6, name: "John Doe" },
          { avatar: avatar7, name: "Alan Walker" },
          { avatar: avatar8, name: "Calvin Middleton" }
        ],
        description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
        chips: [
          {
            title: "Vuejs",
            color: "success"
          },
          {
            color: "error",
            title: "Developer"
          }
        ]
      },
      {
        extraMembers: 2,
        title: "Creative Designers",
        avatar: xdLabel,
        avatarGroup: [
          { avatar: avatar1, name: "Jimmy Ressula" },
          { avatar: avatar2, name: "Kristi Lawker" },
          { avatar: avatar3, name: "Danny Paul" },
          { avatar: avatar4, name: "Alicia Littleton" }
        ],
        description: "A design or product team is more than just the people on it. A team includes the creative people, the roles they play.",
        chips: [
          {
            title: "Sketch",
            color: "warning"
          },
          {
            title: "XD",
            color: "error"
          }
        ]
      },
      {
        extraMembers: 7,
        title: "Support Team",
        avatar: supportLabel,
        avatarGroup: [
          { avatar: avatar5, name: "Andrew Tye" },
          { avatar: avatar6, name: "Rishi Swaat" },
          { avatar: avatar7, name: "Rossie Kim" },
          { avatar: avatar8, name: "Mary Hunter" }
        ],
        description: "Support your team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.",
        chips: [
          {
            color: "info",
            title: "Zendesk"
          }
        ]
      },
      {
        title: "Digital Marketing",
        avatar: socialLabel,
        avatarGroup: [
          { avatar: avatar1, name: "Kim Merchent" },
          { avatar: avatar2, name: "Sam D'souza" },
          { avatar: avatar3, name: "Nurvi Karlos" },
          { avatar: avatar4, name: "Margorie Whitmire" }
        ],
        description: "Digital marketing refers to advertising delivered through digital channels such as search engines,social media, websites…",
        chips: [
          {
            color: "primary",
            title: "Twitter"
          },
          {
            title: "Email",
            color: "success"
          }
        ]
      },
      {
        title: "Event",
        extraMembers: 2,
        avatar: eventLabel,
        avatarGroup: [
          { avatar: avatar5, name: "Vinnie Mostowy" },
          { avatar: avatar6, name: "Allen Rieske" },
          { avatar: avatar7, name: "Julee Rossignol" },
          { avatar: avatar8, name: "Daniel Long" }
        ],
        description: "Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…",
        chips: [
          {
            title: "Hubilo",
            color: "success"
          }
        ]
      },
      {
        title: "Figma Resources",
        avatar: figma,
        avatarGroup: [
          { avatar: avatar1, name: "Andrew Mostowy" },
          { avatar: avatar2, name: "Micky Ressula" },
          { avatar: avatar3, name: "Michel Pal" },
          { avatar: avatar4, name: "Herman Lockard" }
        ],
        description: "Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.",
        chips: [
          {
            title: "UI/UX",
            color: "success"
          },
          {
            title: "Figma",
            color: "warning"
          }
        ]
      },
      {
        title: "Native Mobile App",
        avatar: react,
        avatarGroup: [
          { avatar: avatar1, name: "Andrew Mostowy" },
          { avatar: avatar2, name: "Micky Ressula" },
          { avatar: avatar3, name: "Michel Pal" }
        ],
        description: "Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.",
        chips: [
          {
            title: "React",
            color: "primary"
          }
        ]
      },
      {
        extraMembers: 8,
        title: "Only Beginners",
        avatar: html5,
        avatarGroup: [
          { avatar: avatar5, name: "Kim Karlos" },
          { avatar: avatar6, name: "Katy Turner" },
          { avatar: avatar7, name: "Peter Adward" },
          { avatar: avatar8, name: "Leona Miller" }
        ],
        description: "Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and…",
        chips: [
          {
            title: "CSS",
            color: "info"
          },
          {
            title: "HTML",
            color: "primary"
          }
        ]
      }
    ],
    projects: [
      {
        comments: 15,
        totalTask: 344,
        hours: "380/244",
        tasks: "290/344",
        budget: "$18.2k",
        completedTask: 328,
        deadline: "28/2/22",
        chipColor: "error",
        chipText: "Developer",
        startDate: "14/2/21",
        budgetSpent: "$24.8k",
        members: "280 members",
        title: "Social Banners",
        client: "Christian Jimenez",
        avatar: socialLabel,
        description: "We are Consulting, Software Development and Web Development Services.",
        avatarGroup: [
          { avatar: avatar1, name: "Vinnie Mostowy" },
          { avatar: avatar2, name: "Allen Rieske" },
          { avatar: avatar3, name: "Julee Rossignol" }
        ]
      },
      {
        chipText: "15 days left",
        comments: 236,
        totalTask: 90,
        tasks: "12/90",
        hours: "98/135",
        budget: "$1.8k",
        completedTask: 38,
        deadline: "21/6/22",
        budgetSpent: "$2.4k",
        chipColor: "warning",
        startDate: "18/8/21",
        members: "1.1k members",
        title: "Admin Template",
        client: "Jeffrey Phillips",
        avatar: react,
        avatarGroup: [
          { avatar: avatar4, name: "Kaith D'souza" },
          { avatar: avatar5, name: "John Doe" },
          { avatar: avatar6, name: "Alan Walker" }
        ],
        description: "Time is our most valuable asset, that's why we want to help you save it by creating…"
      },
      {
        chipText: "Developer",
        comments: 98,
        budget: "$420",
        totalTask: 140,
        tasks: "22/140",
        hours: "880/421",
        completedTask: 95,
        chipColor: "error",
        budgetSpent: "$980",
        deadline: "8/10/21",
        title: "App Design",
        startDate: "24/7/21",
        members: "458 members",
        client: "Ricky McDonald",
        avatar: vue,
        description: "App design combines the user interface (UI) and user experience (UX).",
        avatarGroup: [
          { avatar: avatar7, name: "Jimmy Ressula" },
          { avatar: avatar8, name: "Kristi Lawker" },
          { avatar: avatar1, name: "Danny Paul" }
        ]
      },
      {
        comments: 120,
        chipText: "Developer",
        totalTask: 420,
        budget: "2.43k",
        tasks: "237/420",
        hours: "1.2k/820",
        completedTask: 302,
        deadline: "12/9/22",
        budgetSpent: "$8.5k",
        chipColor: "error",
        startDate: "10/2/19",
        members: "137 members",
        client: "Hulda Wright",
        title: "Create Website",
        avatar: html5,
        description: "Your domain name should reflect your products or services so that your...",
        avatarGroup: [
          { avatar: avatar2, name: "Andrew Tye" },
          { avatar: avatar3, name: "Rishi Swaat" },
          { avatar: avatar4, name: "Rossie Kim" }
        ]
      },
      {
        chipText: "15 days left",
        comments: 20,
        totalTask: 285,
        tasks: "29/285",
        budget: "28.4k",
        hours: "142/420",
        chipColor: "warning",
        completedTask: 100,
        deadline: "25/12/21",
        startDate: "12/12/20",
        members: "82 members",
        budgetSpent: "$52.7k",
        client: "Jerry Greene",
        title: "Figma Dashboard",
        avatar: figma,
        description: "Use this template to organize your design project. Some of the key features are…",
        avatarGroup: [
          { avatar: avatar5, name: "Kim Merchent" },
          { avatar: avatar6, name: "Sam D'souza" },
          { avatar: avatar7, name: "Nurvi Karlos" }
        ]
      },
      {
        chipText: "Developer",
        comments: 98,
        budget: "$655",
        totalTask: 290,
        tasks: "29/290",
        hours: "580/445",
        completedTask: 290,
        budgetSpent: "$1.3k",
        chipColor: "error",
        deadline: "02/11/21",
        startDate: "17/8/21",
        title: "Logo Design",
        members: "16 members",
        client: "Olive Strickland",
        avatar: xdLabel,
        description: "Premium logo designs created by top logo designers. Create the branding of business.",
        avatarGroup: [
          { avatar: avatar8, name: "Kim Karlos" },
          { avatar: avatar1, name: "Katy Turner" },
          { avatar: avatar2, name: "Peter Adward" }
        ]
      }
    ],
    connections: [
      {
        tasks: "834",
        projects: "18",
        isConnected: true,
        connections: "129",
        name: "Mark Gilbert",
        designation: "UI Designer",
        avatar: avatar3,
        chips: [
          {
            title: "Figma",
            color: "secondary"
          },
          {
            title: "Sketch",
            color: "warning"
          }
        ]
      },
      {
        tasks: "2.31k",
        projects: "112",
        isConnected: false,
        connections: "1.28k",
        name: "Eugenia Parsons",
        designation: "Developer",
        avatar: avatar4,
        chips: [
          {
            color: "error",
            title: "Angular"
          },
          {
            color: "info",
            title: "React"
          }
        ]
      },
      {
        tasks: "1.25k",
        projects: "32",
        isConnected: false,
        connections: "890",
        name: "Francis Byrd",
        designation: "Developer",
        avatar: avatar5,
        chips: [
          {
            title: "HTML",
            color: "primary"
          },
          {
            color: "info",
            title: "React"
          }
        ]
      },
      {
        tasks: "12.4k",
        projects: "86",
        isConnected: false,
        connections: "890",
        name: "Leon Lucas",
        designation: "UI/UX Designer",
        avatar: avatar6,
        chips: [
          {
            title: "Figma",
            color: "secondary"
          },
          {
            title: "Sketch",
            color: "warning"
          },
          {
            color: "primary",
            title: "Photoshop"
          }
        ]
      },
      {
        tasks: "23.8k",
        projects: "244",
        isConnected: true,
        connections: "2.14k",
        name: "Jayden Rogers",
        designation: "Full Stack Developer",
        avatar: avatar1,
        chips: [
          {
            color: "info",
            title: "React"
          },
          {
            title: "HTML",
            color: "warning"
          },
          {
            color: "success",
            title: "Node.js"
          }
        ]
      },
      {
        tasks: "1.28k",
        projects: "32",
        isConnected: false,
        designation: "SEO",
        connections: "1.27k",
        name: "Jeanette Powell",
        avatar: avatar2,
        chips: [
          {
            title: "Analysis",
            color: "secondary"
          },
          {
            color: "success",
            title: "Node.js"
          }
        ]
      }
    ]
  },
  projectTable: [
    {
      id: 1,
      status: 38,
      leader: "Eileen",
      name: "Website SEO",
      date: "10 may 2021",
      avatarColor: "success",
      avatarGroup: [avatar1, avatar2, avatar3, avatar4]
    },
    {
      id: 2,
      status: 45,
      leader: "Owen",
      date: "03 Jan 2021",
      name: "Social Banners",
      avatar: socialLabel,
      avatarGroup: [avatar5, avatar6]
    },
    {
      id: 3,
      status: 92,
      leader: "Keith",
      date: "12 Aug 2021",
      name: "Logo Designs",
      avatar: "/images/icons/project-icons/sketch-label.png",
      avatarGroup: [avatar7, avatar8, avatar1, avatar2]
    },
    {
      id: 4,
      status: 56,
      leader: "Merline",
      date: "19 Apr 2021",
      name: "IOS App Design",
      avatar: "/images/icons/project-icons/sketch-label.png",
      avatarGroup: [avatar3, avatar4, avatar5, avatar6]
    },
    {
      id: 5,
      status: 25,
      leader: "Harmonia",
      date: "08 Apr 2021",
      name: "Figma Dashboards",
      avatar: figma,
      avatarGroup: [avatar7, avatar8, avatar1]
    },
    {
      id: 6,
      status: 36,
      leader: "Allyson",
      date: "29 Sept 2021",
      name: "Crypto Admin",
      avatar: html5,
      avatarGroup: [avatar2, avatar3, avatar4, avatar5]
    },
    {
      id: 7,
      status: 72,
      leader: "Georgie",
      date: "20 Mar 2021",
      name: "Create Website",
      avatar: react,
      avatarGroup: [avatar6, avatar7, avatar8, avatar1]
    },
    {
      id: 8,
      status: 89,
      leader: "Fred",
      date: "09 Feb 2021",
      name: "App Design",
      avatar: xdLabel,
      avatarGroup: [avatar2, avatar3, avatar4, avatar5]
    },
    {
      id: 9,
      status: 77,
      leader: "Richardo",
      date: "17 June 2021",
      name: "Angular APIs",
      avatar: figma,
      avatarGroup: [avatar6, avatar7, avatar8, avatar1]
    },
    {
      id: 10,
      status: 100,
      leader: "Genevra",
      date: "06 Oct 2021",
      name: "Admin Template",
      avatar: vue,
      avatarGroup: [avatar2, avatar3, avatar4, avatar5]
    }
  ]
};
const handlerPagesProfile = [
  // GET /pages/profile
  http.get("/api/pages/profile", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") || "";
    return HttpResponse.json(db.data[tab], { status: 200 });
  }),
  // GET /pages/profile/header
  http.get("/api/pages/profile/header", () => {
    return HttpResponse.json(db.data.profileHeader, { status: 200 });
  })
];
const worker = setupWorker(...handlerAppsEcommerce, ...handlerAppsAcademy, ...handlerAppsInvoice, ...handlerAppsUsers, ...handlerAppsEmail, ...handlerAppsCalendar, ...handlerAppsChat, ...handlerAppsPermission, ...handlerPagesHelpCenter, ...handlerPagesProfile, ...handlerPagesFaq, ...handlerPagesDatatable, ...handlerAppBarSearch, ...handlerAppLogistics, ...handlerAuth, ...handlerAppsKanban);
function index$3() {
  const workerUrl = `${"/build/".replace(/build\/$/g, "") ?? "/"}mockServiceWorker.js`;
  worker.start({
    serviceWorker: {
      url: workerUrl
    },
    onUnhandledRequest: "bypass"
  });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$3
}, Symbol.toStringTag, { value: "Module" }));
const resource$2 = {
  "UI Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["عناصر واجهة المستخدم"]);
  },
  "Forms & Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["النماذج والجداول"]);
  },
  "Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الصفحات"]);
  },
  "Charts & Maps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الرسوم البيانية والخرائط"]);
  },
  "Others": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["آحرون"]);
  },
  "Typography": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الطباعة"]);
  },
  "Cards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["البطاقات"]);
  },
  "Basic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أساسي"]);
  },
  "Advance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["يتقدم"]);
  },
  "Analytic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تحليلي"]);
  },
  "Actions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أجراءات"]);
  },
  "Components": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["عناصر"]);
  },
  "Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["انذار"]);
  },
  "Close Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أغلق التنبيه"]);
  },
  "Avatar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الصورة الرمزية"]);
  },
  "Badge": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["شارة"]);
  },
  "Button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["زر"]);
  },
  "Calendar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تقويم"]);
  },
  "Kanban": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مجلس كانبان"]);
  },
  "Image": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["صورة"]);
  },
  "Pagination": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["ترقيم الصفحات"]);
  },
  "Progress Circular": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تقدم التعميم"]);
  },
  "Progress Linear": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تقدم خطي"]);
  },
  "Autocomplete": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الإكمال التلقائي"]);
  },
  "Tooltip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تلميح"]);
  },
  "Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المنزلق"]);
  },
  "Date Time Picker": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["منتقي التاريخ والوقت"]);
  },
  "Select": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["يختار"]);
  },
  "Switch": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["يُحوّل"]);
  },
  "Checkbox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خانة اختيار"]);
  },
  "Radio": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مذياع"]);
  },
  "Textarea": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تيكستاريا"]);
  },
  "Rating": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تقييم"]);
  },
  "File Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إدخال الملف"]);
  },
  "Otp Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إدخال أوتب"]);
  },
  "Form Layout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تخطيط النموذج"]);
  },
  "Form Validation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التحقق من صحة النموذج"]);
  },
  "Charts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الرسوم البيانية"]);
  },
  "Apex Chart": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مخطط أبيكس"]);
  },
  "Chartjs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تشارتجس"]);
  },
  "Account Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إعدادت الحساب"]);
  },
  "User Profile": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["ملف تعريفي للمستخدم"]);
  },
  "FAQ": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التعليمات"]);
  },
  "Dialog Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أمثلة على الحوار"]);
  },
  "Pricing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التسعير"]);
  },
  "List": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["قائمة"]);
  },
  "Edit": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["يحرر"]);
  },
  "Nav Levels": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مستويات التنقل"]);
  },
  "Level 2.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المستوى 2.1"]);
  },
  "Level 2.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مستوى 2.2"]);
  },
  "Level 3.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المستوى 3.1"]);
  },
  "Level 3.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المستوى 3.2"]);
  },
  "Raise Support": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["رفع الدعم"]);
  },
  "Documentation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["توثيق"]);
  },
  "Dashboards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["لوحات القيادة"]);
  },
  "Apps & Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التطبيقات والصفحات"]);
  },
  "Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["البريد الإلكتروني"]);
  },
  "Chat": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["دردشة"]);
  },
  "Invoice": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["فاتورة"]);
  },
  "Preview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["معاينة"]);
  },
  "Add": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["يضيف"]);
  },
  "User": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المستعمل"]);
  },
  "View": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["رأي"]);
  },
  "Login v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل الدخول v1"]);
  },
  "Login v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل الدخول v2"]);
  },
  "Login": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل الدخول"]);
  },
  "Register v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل v1"]);
  },
  "Register v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل v2"]);
  },
  "Register": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل"]);
  },
  "Forget Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نسيت كلمة المرور v1"]);
  },
  "Forget Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نسيت كلمة المرور v2"]);
  },
  "Forgot Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نسيت كلمة المرور v1"]);
  },
  "Forgot Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نسيت كلمة المرور v2"]);
  },
  "Forgot Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نسيت كلمة المرور"]);
  },
  "Reset Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إعادة تعيين كلمة المرور v1"]);
  },
  "Reset Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إعادة تعيين كلمة المرور v2"]);
  },
  "Reset Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إعادة تعيين كلمة المرور"]);
  },
  "Miscellaneous": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["متفرقات"]);
  },
  "Coming Soon": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["قريبا"]);
  },
  "Not Authorized": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["غير مخول"]);
  },
  "Under Maintenance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تحت الصيانة"]);
  },
  "Error": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خطأ"]);
  },
  "Statistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إحصائيات"]);
  },
  "Analytics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تحليلات"]);
  },
  "Access Control": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["صلاحية التحكم صلاحية الدخول"]);
  },
  "User Interface": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["واجهة المستخدم"]);
  },
  "CRM": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["سي آر إم"]);
  },
  "Icons": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أيقونات"]);
  },
  "Chip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["رقاقة"]);
  },
  "Dialog": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["حوار"]);
  },
  "Expansion Panel": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["لوحة التوسع"]);
  },
  "Combobox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["صندوق التحرير"]);
  },
  "Textfield": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مجال التحرير مكان كتابة النص"]);
  },
  "Range Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نطاق المنزلق"]);
  },
  "Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["قائمة الطعام"]);
  },
  "Snackbar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مطعم الوجبات الخفيفة"]);
  },
  "Tabs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نوافذ التبويب"]);
  },
  "Form Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["عناصر النموذج"]);
  },
  "Form Layouts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تخطيطات النموذج"]);
  },
  "Authentication": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المصادقة"]);
  },
  "Page Not Found - 404": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الصفحة غير موجودة - 404"]);
  },
  "Not Authorized - 401": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["غير مصرح - 401"]);
  },
  "Server Error - 500": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خطأ في الخادم - 500"]);
  },
  "2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["2"]);
  },
  "Gamification": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التلعيب"]);
  },
  "Forms": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نماذج"]);
  },
  "Timeline": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الجدول الزمني"]);
  },
  "Disabled Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["قائمة المعوقين"]);
  },
  "Help Center": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مركز المساعدة"]);
  },
  "Verify Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التحقق من البريد الإلكتروني"]);
  },
  "Verify Email v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تحقق من البريد الإلكتروني v1"]);
  },
  "Verify Email v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تحقق من البريد الإلكتروني v2"]);
  },
  "Two Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خطوتين"]);
  },
  "Two Steps v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خطوتين v1.0"]);
  },
  "Two Steps v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["خطوتين v2.0"]);
  },
  "Custom Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إدخال مخصص"]);
  },
  "Extensions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["ملحقات"]);
  },
  "Tour": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["رحلة"]);
  },
  "Register Multi-Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تسجيل خطوات متعددة"]);
  },
  "Wizard Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أمثلة المعالج"]);
  },
  "Checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الدفع"]);
  },
  "Create Deal": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إنشاء صفقة"]);
  },
  "Property Listing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["قائمة الممتلكات "]);
  },
  "Roles & Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الأدوار والأذونات"]);
  },
  "Roles": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الأدوار"]);
  },
  "Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الأذونات"]);
  },
  "Simple Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["جدول بسيط"]);
  },
  "Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الجداول"]);
  },
  "DataTable": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["جدول البيانات"]);
  },
  "Data Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["جدول البيانات"]);
  },
  "Apps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التطبيقات"]);
  },
  "Misc": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["متفرقات"]);
  },
  "Wizard Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["صفحات المعالج"]);
  },
  "Form Wizard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["معالج النموذج"]);
  },
  "Numbered": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["مرقم"]);
  },
  "eCommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التجارة الإلكترونية"]);
  },
  "Ecommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["التجارة الإلكترونية"]);
  },
  "Product": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المنتج"]);
  },
  "Category": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الفئة"]);
  },
  "Order": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["طلب"]);
  },
  "Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تفاصيل"]);
  },
  "Customer": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الزبون"]);
  },
  "Manage Review": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["إدارة المراجعة"]);
  },
  "Referrals": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الإحالات"]);
  },
  "Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الإعدادات"]);
  },
  "Course Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["تفاصيل الدورة التدريبية"]);
  },
  "My Course": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["دورتي"]);
  },
  "Overview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["نظرة عامة"]);
  },
  "Academy": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["أكاديمية"]);
  },
  "Logistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الخدمات اللوجستية"]);
  },
  "Dashboard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["لوحة القيادة"]);
  },
  "Fleet": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الأسطول"]);
  },
  "Editors": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المحررين"]);
  },
  "Front Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الصفحات الأمامية"]);
  },
  "Landing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المقصودة"]);
  },
  "checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الدفع"]);
  },
  "Payment": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["دفع"]);
  },
  "Swiper": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["المنزلق"]);
  },
  "Widgets": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["الحاجيات"]);
  },
  "loading": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["جار التحميل"]);
  },
  "5": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["5"]);
  },
  "10": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["10"]);
  },
  "20": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["20"]);
  },
  "25": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["25"]);
  },
  "50": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["50"]);
  },
  "100": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["100"]);
  },
  "$vuetify": {
    "badge": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["شارة"]);
    },
    "noDataText": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["لا تتوافر بيانات"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["قريب"]);
    },
    "open": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["افتح"]);
    },
    "dataFooter": {
      "itemsPerPageText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["مواد لكل صفحة:"]);
      },
      "itemsPerPageAll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["الجميع"]);
      },
      "pageText": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " - ", _interpolate(_list(1)), " من ", _interpolate(_list(2))]);
      },
      "firstPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["الصفحة الأولى"]);
      },
      "prevPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["الصفحة السابقة"]);
      },
      "nextPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["الصفحة التالية"]);
      },
      "lastPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["آخر صفحة"]);
      }
    },
    "pagination": {
      "ariaLabel": {
        "root": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["جذر"]);
        },
        "previous": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["السابق"]);
        },
        "next": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["التالي"]);
        },
        "currentPage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["الصفحه الحاليه"]);
        },
        "page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["صفحة"]);
        },
        "first": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["الصفحة الأولى"]);
        },
        "last": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["آخر صفحة"]);
        }
      }
    },
    "carousel": {
      "ariaLabel": {
        "delimiter": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["الشريحة الدائرية ", _interpolate(_list(0)), " من ", _interpolate(_list(1))]);
        }
      }
    },
    "input": {
      "clear": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["صافي"]);
      },
      "appendAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["إلحاق الإجراء"]);
      },
      "prependAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["قبل العمل"]);
      },
      "otp": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["أوتب"]);
      }
    },
    "fileInput": {
      "counterSize": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["حجم العداد"]);
      }
    },
    "rating": {
      "ariaLabel": {
        "item": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["العنصر"]);
        }
      }
    }
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: resource$2
}, Symbol.toStringTag, { value: "Module" }));
const resource$1 = {
  "UI Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["UI Elements"]);
  },
  "Forms & Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forms & Tables"]);
  },
  "Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pages"]);
  },
  "Charts & Maps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Charts & Maps"]);
  },
  "Others": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Others"]);
  },
  "Typography": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Typography"]);
  },
  "Cards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Cards"]);
  },
  "Basic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Basic"]);
  },
  "Advance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Advance"]);
  },
  "Analytic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Analytic"]);
  },
  "Components": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Components"]);
  },
  "Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Alert"]);
  },
  "Close Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Close Alert"]);
  },
  "Avatar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Avatar"]);
  },
  "Badge": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Badge"]);
  },
  "Button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Button"]);
  },
  "Calendar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Calendar"]);
  },
  "Kanban": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Kanban"]);
  },
  "Image": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Image"]);
  },
  "Pagination": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pagination"]);
  },
  "Progress Circular": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Progress Circular"]);
  },
  "Progress Linear": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Progress Linear"]);
  },
  "Autocomplete": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Autocomplete"]);
  },
  "Tooltip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tooltip"]);
  },
  "Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Slider"]);
  },
  "Date Time Picker": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Date Time Picker"]);
  },
  "Select": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Select"]);
  },
  "Switch": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Switch"]);
  },
  "Checkbox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Checkbox"]);
  },
  "Radio": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Radio"]);
  },
  "Textarea": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Textarea"]);
  },
  "Rating": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Rating"]);
  },
  "File Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["File Input"]);
  },
  "Otp Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Otp Input"]);
  },
  "Form Layout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Form Layout"]);
  },
  "Form Validation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Form Validation"]);
  },
  "Charts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Charts"]);
  },
  "Apex Chart": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Apex Chart"]);
  },
  "Chartjs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chartjs"]);
  },
  "Account Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Account Settings"]);
  },
  "User Profile": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["User Profile"]);
  },
  "FAQ": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["FAQ"]);
  },
  "Dialog Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dialog Examples"]);
  },
  "Pricing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pricing"]);
  },
  "List": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["List"]);
  },
  "Edit": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Edit"]);
  },
  "Nav Levels": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Nav Levels"]);
  },
  "Level 2.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Level 2.1"]);
  },
  "Level 2.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Level 2.2"]);
  },
  "Level 3.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Level 3.1"]);
  },
  "Level 3.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Level 3.2"]);
  },
  "Raise Support": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Raise Support"]);
  },
  "Documentation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Documentation"]);
  },
  "Dashboards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dashboards"]);
  },
  "Analytics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Analytics"]);
  },
  "Apps & Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Apps & Pages"]);
  },
  "Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Email"]);
  },
  "Chat": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chat"]);
  },
  "Invoice": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Invoice"]);
  },
  "Preview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Preview"]);
  },
  "Add": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Add"]);
  },
  "User": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["User"]);
  },
  "View": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["View"]);
  },
  "Login v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Login v1"]);
  },
  "Login v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Login v2"]);
  },
  "Login": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Login"]);
  },
  "Register v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Register v1"]);
  },
  "Register v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Register v2"]);
  },
  "Register": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Register"]);
  },
  "Forget Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forget Password v1"]);
  },
  "Forget Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forget Password v2"]);
  },
  "Forgot Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forgot Password v1"]);
  },
  "Forgot Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forgot Password v2"]);
  },
  "Forgot Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forgot Password"]);
  },
  "Reset Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Reset Password v1"]);
  },
  "Reset Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Reset Password v2"]);
  },
  "Reset Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Reset Password"]);
  },
  "Miscellaneous": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Miscellaneous"]);
  },
  "Coming Soon": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Coming Soon"]);
  },
  "Not Authorized": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not Authorized"]);
  },
  "Under Maintenance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Under Maintenance"]);
  },
  "Error": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Error"]);
  },
  "Statistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Statistics"]);
  },
  "Actions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Actions"]);
  },
  "Access Control": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Access Control"]);
  },
  "User Interface": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["User Interface"]);
  },
  "CRM": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["CRM"]);
  },
  "Icons": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Icons"]);
  },
  "Chip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chip"]);
  },
  "Dialog": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dialog"]);
  },
  "Expansion Panel": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Expansion Panel"]);
  },
  "Combobox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Combobox"]);
  },
  "Textfield": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Textfield"]);
  },
  "Range Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Range Slider"]);
  },
  "Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Menu"]);
  },
  "Snackbar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Snackbar"]);
  },
  "Tabs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tabs"]);
  },
  "Form Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Form Elements"]);
  },
  "Form Layouts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Form Layouts"]);
  },
  "Authentication": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Authentication"]);
  },
  "Page Not Found - 404": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Page Not Found - 404"]);
  },
  "Not Authorized - 401": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not Authorized - 401"]);
  },
  "Server Error - 500": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Server Error - 500"]);
  },
  "2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["2"]);
  },
  "Gamification": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Gamification"]);
  },
  "Forms": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Forms"]);
  },
  "Timeline": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Timeline"]);
  },
  "Disabled Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Disabled Menu"]);
  },
  "Help Center": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Help Center"]);
  },
  "Verify Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Verify Email"]);
  },
  "Verify Email v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Verify Email v1"]);
  },
  "Verify Email v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Verify Email v2"]);
  },
  "Two Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Two Steps"]);
  },
  "Two Steps v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Two Steps v1"]);
  },
  "Two Steps v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Two Steps v2"]);
  },
  "Custom Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Custom Input"]);
  },
  "Extensions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Extensions"]);
  },
  "Tour": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tour"]);
  },
  "Register Multi-Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Register Multi-Steps"]);
  },
  "Wizard Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Wizard Examples"]);
  },
  "Checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Checkout"]);
  },
  "Create Deal": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Create Deal"]);
  },
  "Property Listing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Property Listing"]);
  },
  "Roles & Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Roles & Permissions"]);
  },
  "Roles": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Roles"]);
  },
  "Simple Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Simple Table"]);
  },
  "Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tables"]);
  },
  "Data Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Data Table"]);
  },
  "Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Permissions"]);
  },
  "Apps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Apps"]);
  },
  "Misc": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Misc"]);
  },
  "Wizard Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Wizard Pages"]);
  },
  "Form Wizard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Form Wizard"]);
  },
  "Numbered": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Numbered"]);
  },
  "eCommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["eCommerce"]);
  },
  "Ecommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Ecommerce"]);
  },
  "Editors": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Editors"]);
  },
  "Front Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Front Pages"]);
  },
  "Landing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Landing"]);
  },
  "checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["checkout"]);
  },
  "Payment": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Payment"]);
  },
  "Swiper": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Swiper"]);
  },
  "Product": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Product"]);
  },
  "Category": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Category"]);
  },
  "Order": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Order"]);
  },
  "Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Details"]);
  },
  "Customer": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Customer"]);
  },
  "Manage Review": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Manage Review"]);
  },
  "Referrals": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Referrals"]);
  },
  "Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Settings"]);
  },
  "Overview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Overview"]);
  },
  "My Course": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["My Course"]);
  },
  "Course Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Course Details"]);
  },
  "Academy": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Academy"]);
  },
  "Logistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Logistics"]);
  },
  "Dashboard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dashboard"]);
  },
  "Fleet": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Fleet"]);
  },
  "Widgets": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Widgets"]);
  },
  "5": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["5"]);
  },
  "10": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["10"]);
  },
  "20": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["20"]);
  },
  "25": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["25"]);
  },
  "50": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["50"]);
  },
  "100": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["100"]);
  },
  "$vuetify": {
    "badge": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Badge"]);
    },
    "noDataText": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No data available"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["loading"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Close"]);
    },
    "open": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["open"]);
    },
    "dataFooter": {
      "itemsPerPageText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Items per page:"]);
      },
      "itemsPerPageAll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["All"]);
      },
      "pageText": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "-", _interpolate(_list(1)), " of ", _interpolate(_list(2))]);
      },
      "firstPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["First Page"]);
      },
      "prevPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Previous Page"]);
      },
      "nextPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Next Page"]);
      },
      "lastPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Last Page"]);
      }
    },
    "pagination": {
      "ariaLabel": {
        "root": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["root"]);
        },
        "previous": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["previous"]);
        },
        "next": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["next"]);
        },
        "currentPage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["currentPage"]);
        },
        "page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["page"]);
        },
        "first": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["first"]);
        },
        "last": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["last"]);
        }
      }
    },
    "carousel": {
      "ariaLabel": {
        "delimiter": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["Carousel slide ", _interpolate(_list(0)), " of ", _interpolate(_list(1))]);
        }
      }
    },
    "input": {
      "clear": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["clear"]);
      },
      "appendAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["appendAction"]);
      },
      "prependAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["prependAction"]);
      },
      "counterSize": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["counterSize"]);
      },
      "otp": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["otp"]);
      }
    },
    "fileInput": {
      "counterSize": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["counterSize"]);
      }
    },
    "rating": {
      "ariaLabel": {
        "item": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["item"]);
        }
      }
    }
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: resource$1
}, Symbol.toStringTag, { value: "Module" }));
const resource = {
  "UI Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["ÉLÉMENTS DE L'UI"]);
  },
  "Forms & Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Formulaires et tableaux"]);
  },
  "Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Des pages"]);
  },
  "Charts & Maps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Graphiques et cartes"]);
  },
  "Others": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Autres"]);
  },
  "Typography": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Typographie"]);
  },
  "Cards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Cartes"]);
  },
  "Basic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["De base"]);
  },
  "Advance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Avance"]);
  },
  "Analytic": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Analytique"]);
  },
  "Card Action": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Action de la carte"]);
  },
  "Components": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Composants"]);
  },
  "Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Alerte"]);
  },
  "Close Alert": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Fermer l'alerte"]);
  },
  "Avatar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Avatar"]);
  },
  "Badge": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Badge"]);
  },
  "Button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bouton"]);
  },
  "Calendar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Calendrier"]);
  },
  "Kanban": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tableau Kanban"]);
  },
  "Image": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Image"]);
  },
  "Pagination": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pagination"]);
  },
  "Progress Circular": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Progrès circulaire"]);
  },
  "Progress Linear": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Progrès Linéaire"]);
  },
  "Autocomplete": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Saisie automatique"]);
  },
  "Tooltip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Info-bulle"]);
  },
  "Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Glissière"]);
  },
  "Date Time Picker": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Sélecteur de date et d'heure"]);
  },
  "Select": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Sélectionner"]);
  },
  "Switch": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Commutateur"]);
  },
  "Checkbox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Case à cocher"]);
  },
  "Radio": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Radio"]);
  },
  "Textarea": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Textarea"]);
  },
  "Rating": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Évaluation"]);
  },
  "File Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Entrée de fichier"]);
  },
  "Otp Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Entrée Otp"]);
  },
  "Form Layout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Disposition du formulaire"]);
  },
  "Form Validation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Validation de formulaire"]);
  },
  "Charts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Graphiques"]);
  },
  "Apex Chart": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Graphique Apex"]);
  },
  "Chartjs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chartjs"]);
  },
  "Account Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Paramètres du compte"]);
  },
  "User Profile": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Profil de l'utilisateur"]);
  },
  "FAQ": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["FAQ"]);
  },
  "Dialog Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Exemples de dialogue"]);
  },
  "Pricing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tarification"]);
  },
  "List": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["liste"]);
  },
  "Edit": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Éditer"]);
  },
  "Nav Levels": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Niveaux de navigation"]);
  },
  "Level 2.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Niveau 2.1"]);
  },
  "Level 2.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Niveau 2.2"]);
  },
  "Level 3.1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Niveau 3.1"]);
  },
  "Level 3.2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Niveau 3.2"]);
  },
  "Raise Support": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Augmenter le soutien"]);
  },
  "Documentation": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Documentation"]);
  },
  "Dashboards": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tableaux de bord"]);
  },
  "Analytics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Analytique"]);
  },
  "Apps & Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Applications et pages"]);
  },
  "Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Email"]);
  },
  "Chat": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bavarder"]);
  },
  "Invoice": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Facture d'achat"]);
  },
  "Preview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Aperçu"]);
  },
  "Add": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Ajouter"]);
  },
  "User": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Utilisateur"]);
  },
  "View": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Vue"]);
  },
  "Login v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Connexion v1"]);
  },
  "Login v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Connexion v2"]);
  },
  "Login": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Connexion"]);
  },
  "Register v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["S'inscrire v1"]);
  },
  "Register v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["S'inscrire v2"]);
  },
  "Register": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["S'inscrire"]);
  },
  "Forget Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Oubliez le mot de passe v1"]);
  },
  "Forget Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Oubliez le mot de passe v2"]);
  },
  "Forgot Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Oubliez le mot de passe v1"]);
  },
  "Forgot Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Oubliez le mot de passe v2"]);
  },
  "Forgot Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Oubliez le mot de passe"]);
  },
  "Reset Password v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Réinitialiser le mot de passe v1"]);
  },
  "Reset Password v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Réinitialiser le mot de passe v2"]);
  },
  "Reset Password": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Réinitialiser le mot de passe"]);
  },
  "Miscellaneous": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Divers"]);
  },
  "Coming Soon": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bientôt disponible"]);
  },
  "Not Authorized": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pas autorisé"]);
  },
  "Under Maintenance": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["En maintenance"]);
  },
  "Error": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Erreur"]);
  },
  "Statistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Statistiques"]);
  },
  "Card Actions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Actions de la carte"]);
  },
  "Actions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Actions"]);
  },
  "Access Control": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Contrôle d'accès"]);
  },
  "User Interface": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Interface utilisateur"]);
  },
  "CRM": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["CRM"]);
  },
  "Icons": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Icône"]);
  },
  "Chip": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Ébrécher"]);
  },
  "Dialog": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dialogue"]);
  },
  "Expansion Panel": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Panneau d'extension"]);
  },
  "Combobox": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Boîte combo"]);
  },
  "Textfield": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Champ de texte"]);
  },
  "Range Slider": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Curseur Gamme"]);
  },
  "Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Menu"]);
  },
  "Snackbar": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Casse-croûte"]);
  },
  "Tabs": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Onglets"]);
  },
  "Form Elements": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Éléments de formulaire"]);
  },
  "Form Layouts": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Dispositions de formulaire"]);
  },
  "Authentication": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Authentification"]);
  },
  "Page Not Found - 404": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Page introuvable - 404"]);
  },
  "Not Authorized - 401": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Non autorisé - 401"]);
  },
  "Server Error - 500": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Erreur de serveur - 500"]);
  },
  "2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["2"]);
  },
  "Gamification": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Gamification"]);
  },
  "Forms": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Formes"]);
  },
  "Timeline": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chronologie"]);
  },
  "Disabled Menu": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Menu désactivé"]);
  },
  "Help Center": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Centre d'aide"]);
  },
  "Verify Email": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Vérifier les courriels"]);
  },
  "Verify Email v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Vérifier l'e-mail v1"]);
  },
  "Verify Email v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Vérifier l'e-mail v2"]);
  },
  "Two Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Deux étapes"]);
  },
  "Two Steps v1": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Deux étapes v1"]);
  },
  "Two Steps v2": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Deux étapes v2"]);
  },
  "Custom Input": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Entrée personnalisée"]);
  },
  "Extensions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Rallonges"]);
  },
  "Tour": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tour"]);
  },
  "Register Multi-Steps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Enregistrer plusieurs étapes"]);
  },
  "Wizard Examples": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Exemples de guide"]);
  },
  "Checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Check-out"]);
  },
  "Create Deal": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Créer une offre"]);
  },
  "Property Listing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Liste des propriétés"]);
  },
  "Roles & Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Rôles et autorisations"]);
  },
  "Roles": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Rôles"]);
  },
  "Permissions": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Autorisations"]);
  },
  "Simple Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Table simple"]);
  },
  "Tables": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tables"]);
  },
  "Data Table": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Table de données"]);
  },
  "Apps": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Applications"]);
  },
  "Misc": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Divers"]);
  },
  "Wizard Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pages de l'assistant"]);
  },
  "Form Wizard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Assistant de formulaire"]);
  },
  "Numbered": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Numéroté"]);
  },
  "eCommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["commerce électronique"]);
  },
  "Ecommerce": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Commerce électronique"]);
  },
  "Product": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Produit"]);
  },
  "Category": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Catégorie"]);
  },
  "Order": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Ordre"]);
  },
  "Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Détails"]);
  },
  "Customer": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Client"]);
  },
  "Manage Review": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Gérer la revue"]);
  },
  "Referrals": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Références"]);
  },
  "Settings": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Paramètres"]);
  },
  "Course Details": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Détails du cours"]);
  },
  "My Course": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Mon cours"]);
  },
  "Overview": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Aperçu"]);
  },
  "Academy": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Académie"]);
  },
  "Logistics": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Logistique"]);
  },
  "Dashboard": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tableau de bord"]);
  },
  "Fleet": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Flotte"]);
  },
  "Editors": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Éditeurs"]);
  },
  "Front Pages": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Pages frontales"]);
  },
  "Landing": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["d'atterrissage"]);
  },
  "checkout": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Check-out"]);
  },
  "Payment": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Paiement"]);
  },
  "Swiper": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Swiper"]);
  },
  "Widgets": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Widgets"]);
  },
  "loading": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Chargement"]);
  },
  "5": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["5"]);
  },
  "10": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["10"]);
  },
  "20": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["20"]);
  },
  "25": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["25"]);
  },
  "50": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["50"]);
  },
  "100": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["100"]);
  },
  "$vuetify": {
    "badge": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Badge"]);
    },
    "noDataText": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pas de données disponibles"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fermer"]);
    },
    "open": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ouvert"]);
    },
    "dataFooter": {
      "itemsPerPageText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Objets par page:"]);
      },
      "itemsPerPageAll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tout"]);
      },
      "pageText": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "-", _interpolate(_list(1)), " of ", _interpolate(_list(2))]);
      },
      "firstPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Première page"]);
      },
      "prevPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Page précédente"]);
      },
      "nextPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Page suivante"]);
      },
      "lastPage": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Dernière page"]);
      }
    },
    "pagination": {
      "ariaLabel": {
        "root": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["racine"]);
        },
        "previous": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["précédente"]);
        },
        "next": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["suivante"]);
        },
        "currentPage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["page actuelle"]);
        },
        "page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["page"]);
        },
        "first": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["première"]);
        },
        "last": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["dernière"]);
        }
      }
    },
    "carousel": {
      "ariaLabel": {
        "delimiter": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["Diapositive carrousel ", _interpolate(_list(0)), " sur ", _interpolate(_list(1))]);
        }
      }
    },
    "input": {
      "clear": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["dégager"]);
      },
      "appendAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ajouter une action"]);
      },
      "prependAction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["préfixer l'action"]);
      },
      "otp": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["otp"]);
      }
    },
    "fileInput": {
      "counterSize": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Taille du compteur"]);
      }
    },
    "rating": {
      "ariaLabel": {
        "item": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Objet"]);
        }
      }
    }
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: resource
}, Symbol.toStringTag, { value: "Module" }));
const messages = Object.fromEntries(Object.entries(/* @__PURE__ */ Object.assign({ "./locales/ar.json": __vite_glob_0_0, "./locales/en.json": __vite_glob_0_1, "./locales/fr.json": __vite_glob_0_2 })).map(([key, value]) => [key.slice(10, -5), value.default]));
let _i18n = null;
const getI18n = () => {
  if (_i18n === null) {
    _i18n = createI18n({
      legacy: false,
      locale: cookieRef("language", themeConfig.app.i18n.defaultLocale).value,
      fallbackLocale: "en",
      messages
    });
  }
  return _i18n;
};
function index$2(app) {
  app.use(getI18n());
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2,
  getI18n
}, Symbol.toStringTag, { value: "Module" }));
function index$1() {
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "HorizontalNav",
  __ssrInlineRender: true,
  props: {
    navItems: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const resolveNavItemComponent = (item) => {
      if ("children" in item)
        return _sfc_main$9;
      return _sfc_main$7;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nav-items" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.navItems, (item, index2) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
          key: index2,
          item
        }, null), _parent);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/HorizontalNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({
  name: "HorizontalNavGroup"
}, {
  __name: "HorizontalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    },
    childrenAtEnd: {
      type: Boolean,
      required: false,
      default: false
    },
    isSubItem: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute$1();
    const router2 = useRouter$1();
    const configStore = useLayoutConfigStore();
    const isGroupActive = ref(false);
    watch(() => route.path, () => {
      const isActive = isNavGroupActive(props.item.children, router2);
      isGroupActive.value = isActive;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(canViewNavMenuGroup)(__props.item)) {
        _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
          "is-rtl": unref(configStore).isAppRTL,
          class: ["nav-group", [{
            "active": unref(isGroupActive),
            "children-at-end": __props.childrenAtEnd,
            "sub-item": __props.isSubItem,
            "disabled": __props.item.disable
          }]],
          tag: "li",
          "content-container-tag": "ul",
          "popper-inline-end": __props.childrenAtEnd
        }, _attrs), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.item.children, (child) => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("children" in child ? "HorizontalNavGroup" : unref(_sfc_main$7)), {
                  key: child.title,
                  item: child,
                  "children-at-end": "",
                  "is-sub-item": ""
                }, null), _parent2, _scopeId);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (child) => {
                  return openBlock(), createBlock(resolveDynamicComponent("children" in child ? "HorizontalNavGroup" : unref(_sfc_main$7)), {
                    key: child.title,
                    item: child,
                    "children-at-end": "",
                    "is-sub-item": ""
                  }, null, 8, ["item"]);
                }), 128))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="nav-group-label"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, __props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(__props.item.title, "span"), { class: "nav-item-title" }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(unref(layoutConfig$1).icons.chevronDown, { class: "nav-group-arrow" }), null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "nav-group-label" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, __props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null, 16)),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(__props.item.title, "span"), { class: "nav-item-title" }), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ]),
                    _: 1
                  }, 16)),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(unref(layoutConfig$1).icons.chevronDown, { class: "nav-group-arrow" }), null, 16))
                ])
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
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/HorizontalNavGroup.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "HorizontalNavLayout",
  __ssrInlineRender: true,
  props: {
    navItems: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["layout-wrapper", unref(configStore)._layoutClasses]
      }, _attrs))}><div class="${ssrRenderClass([unref(configStore).isNavbarBlurEnabled && "header-blur", "layout-navbar-and-nav-container"])}"><div class="layout-navbar"><div class="navbar-content-container">`);
      ssrRenderSlot(_ctx.$slots, "navbar", {}, null, _push, _parent);
      _push(`</div></div><div class="layout-horizontal-nav"><div class="horizontal-nav-content-container">`);
      _push(ssrRenderComponent(unref(_sfc_main$a), { "nav-items": __props.navItems }, null, _parent));
      _push(`</div></div></div><main class="layout-page-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="layout-footer"><div class="footer-content-container">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></footer></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/HorizontalNavLayout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "HorizontalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    },
    isSubItem: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(__props.item.action, __props.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-link", [{
            "sub-item": props.isSubItem,
            "disabled": __props.item.disable
          }]]
        }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.to ? "RouterLink" : "a"), mergeProps(unref(getComputedNavLinkToProp)(__props.item), {
          class: { "router-link-active router-link-exact-active": unref(isNavLinkActive)(__props.item, _ctx.$router) }
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, __props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ class: "nav-item-title" }, unref(getDynamicI18nProps)(__props.item.title, "span")), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, __props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null, 16)),
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ class: "nav-item-title" }, unref(getDynamicI18nProps)(__props.item.title, "span")), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.title), 1)
                  ]),
                  _: 1
                }, 16))
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/HorizontalNavLink.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "HorizontalNavPopper",
  __ssrInlineRender: true,
  props: {
    popperInlineEnd: {
      type: Boolean,
      required: false,
      default: false
    },
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    contentContainerTag: {
      type: String,
      required: false,
      default: "div"
    },
    isRtl: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const configStore = useLayoutConfigStore();
    const refPopperContainer = ref();
    const refPopper = ref();
    const popperContentStyles = ref({
      left: "0px",
      top: "0px"
      /*ℹ️ Why we are not using fixed positioning?
      
      `position: fixed` doesn't work as expected when some CSS properties like `transform` is applied on its parent element.
      Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/position#values <= See `fixed` value description
      
      Hence, when we use transitions where transition apply `transform` on its parent element, fixed positioning will not work.
      (Popper content moves away from the element when parent element transition)
      
      To avoid this, we use `position: absolute` instead of `position: fixed`.
      
      NOTE: This issue starts from third level children (Top Level > Sub item > Sub item).
      */
      // strategy: 'fixed',
    });
    const updatePopper = async () => {
      if (refPopperContainer.value !== void 0 && refPopper.value !== void 0) {
        const { x: x2, y: y2 } = await computePosition(refPopperContainer.value, refPopper.value, {
          placement: props.popperInlineEnd ? props.isRtl ? "left-start" : "right-start" : "bottom-start",
          middleware: [
            ...configStore.horizontalNavPopoverOffset ? [offset(configStore.horizontalNavPopoverOffset)] : [],
            flip({ boundary: document.querySelector("body") }),
            shift({ boundary: document.querySelector("body") })
          ]
          /*ℹ️ Why we are not using fixed positioning?
          
          `position: fixed` doesn't work as expected when some CSS properties like `transform` is applied on its parent element.
          Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/position#values <= See `fixed` value description
          
          Hence, when we use transitions where transition apply `transform` on its parent element, fixed positioning will not work.
          (Popper content moves away from the element when parent element transition)
          
          To avoid this, we use `position: absolute` instead of `position: fixed`.
          
          NOTE: This issue starts from third level children (Top Level > Sub item > Sub item).
          */
          // strategy: 'fixed',
        });
        popperContentStyles.value.left = `${x2}px`;
        popperContentStyles.value.top = `${y2}px`;
      }
    };
    until$2(() => configStore.horizontalNavType).toMatch((type) => type === "static").then(() => {
      useEventListener("scroll", updatePopper);
    });
    const isContentShown = ref(false);
    const showContent = () => {
      isContentShown.value = true;
      updatePopper();
    };
    const hideContent = () => {
      isContentShown.value = false;
    };
    onMounted(updatePopper);
    watch([
      () => configStore.isAppRTL,
      () => configStore.appContentWidth
    ], updatePopper);
    const route = useRoute$1();
    watch(() => route.fullPath, hideContent);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nav-popper", [{
          "popper-inline-end": __props.popperInlineEnd,
          "show-content": unref(isContentShown)
        }]]
      }, _attrs))}><div class="popper-triggerer">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (!unref(themeConfig).horizontalNav.transition) {
        _push(`<div class="popper-content" style="${ssrRenderStyle(unref(popperContentStyles))}"><div>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else if (typeof unref(themeConfig).horizontalNav.transition === "string") {
        _push(`<div style="${ssrRenderStyle([
          unref(isContentShown) ? null : { display: "none" },
          unref(popperContentStyles)
        ])}" class="popper-content"><div>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(themeConfig).horizontalNav.transition), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle([
                unref(isContentShown) ? null : { display: "none" },
                unref(popperContentStyles)
              ])}" class="popper-content"${_scopeId}><div${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              return [
                withDirectives(createVNode("div", {
                  ref_key: "refPopper",
                  ref: refPopper,
                  class: "popper-content",
                  style: unref(popperContentStyles),
                  onMouseenter: showContent,
                  onMouseleave: hideContent
                }, [
                  createVNode("div", null, [
                    renderSlot(_ctx.$slots, "content")
                  ])
                ], 36), [
                  [vShow, unref(isContentShown)]
                ])
              ];
            }
          }),
          _: 3
        }), _parent);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/HorizontalNavPopper.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = defineComponent$1({
  name: "TransitionExpand",
  setup(_, { slots }) {
    const onEnter = (element) => {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const height = getComputedStyle(element).height;
      element.style.width = "";
      element.style.position = "";
      element.style.visibility = "";
      element.style.height = "0px";
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    };
    const onAfterEnter = (element) => {
      element.style.height = "auto";
    };
    const onLeave = (element) => {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = "0px";
      });
    };
    return () => h$1(h$1(Transition), {
      name: "expand",
      onEnter,
      onAfterEnter,
      onLeave
    }, () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    });
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/TransitionExpand.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TransitionExpand = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2683bda9"]]);
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const VNodeRenderer = defineComponent$1({
  name: "VNodeRenderer",
  props: {
    nodes: {
      type: [Array, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.nodes;
  }
});
const __moduleId = "resources/js/@layouts/components/VNodeRenderer.jsx";
ssrRegisterHelper(VNodeRenderer, __moduleId);
const _sfc_main$4 = {
  __name: "VerticalNav",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: null,
      required: false,
      default: "aside"
    },
    navItems: {
      type: null,
      required: true
    },
    isOverlayNavActive: {
      type: Boolean,
      required: true
    },
    toggleIsOverlayNavActive: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const refNav = ref();
    const isHovered = useElementHover(refNav);
    provide(injectionKeyIsVerticalNavHovered, isHovered);
    const configStore = useLayoutConfigStore();
    const resolveNavItemComponent = (item) => {
      if ("heading" in item)
        return _sfc_main;
      if ("children" in item)
        return _sfc_main$3;
      return _sfc_main$1;
    };
    const route = useRoute$1();
    watch(() => route.name, () => {
      props.toggleIsOverlayNavActive(false);
    });
    const isVerticalNavScrolled = ref(false);
    const updateIsVerticalNavScrolled = (val) => isVerticalNavScrolled.value = val;
    const handleNavScroll = (evt) => {
      isVerticalNavScrolled.value = evt.target.scrollTop > 0;
    };
    const hideTitleAndIcon = configStore.isVerticalNavMini(isHovered);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.tag), mergeProps({
        ref_key: "refNav",
        ref: refNav,
        class: ["layout-vertical-nav", [
          {
            "overlay-nav": unref(configStore).isLessThanOverlayNavBreakpoint,
            "hovered": unref(isHovered),
            "visible": __props.isOverlayNavActive,
            "scrolled": unref(isVerticalNavScrolled)
          }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-header" data-v-c52b07d3${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "nav-header", {}, () => {
              _push2(ssrRenderComponent(_component_RouterLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VNodeRenderer), {
                      nodes: unref(layoutConfig$1).app.logo
                    }, null, _parent3, _scopeId2));
                    _push3(`<h1 style="${ssrRenderStyle(!unref(hideTitleAndIcon) ? null : { display: "none" })}" class="app-logo-title leading-normal" data-v-c52b07d3${_scopeId2}>${ssrInterpolate(unref(layoutConfig$1).app.title)}</h1>`);
                  } else {
                    return [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig$1).app.logo
                      }, null, 8, ["nodes"]),
                      createVNode(Transition, { name: "vertical-nav-app-title" }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(layoutConfig$1).app.title), 513), [
                            [vShow, !unref(hideTitleAndIcon)]
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                style: unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["header-action d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig$1).icons.verticalNavUnPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                style: !unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["header-action d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig$1).icons.verticalNavPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "header-action d-lg-none" }, unref(layoutConfig$1).icons.close, {
                onClick: ($event) => __props.toggleIsOverlayNavActive(false)
              }), null), _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "before-nav-items", {}, () => {
              _push2(`<div class="vertical-nav-items-shadow" data-v-c52b07d3${_scopeId}></div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => {
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                key: unref(configStore).isAppRTL,
                tag: "ul",
                class: "nav-items",
                options: { wheelPropagation: false },
                onPsScrollY: handleNavScroll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.navItems, (item, index2) => {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                        key: index2,
                        item
                      }, null), _parent3, _scopeId2);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.navItems, (item, index2) => {
                        return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                          key: index2,
                          item
                        }, null, 8, ["item"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "after-nav-items", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "nav-header" }, [
                renderSlot(_ctx.$slots, "nav-header", {}, () => [
                  createVNode(_component_RouterLink, {
                    to: "/",
                    class: "app-logo app-title-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig$1).app.logo
                      }, null, 8, ["nodes"]),
                      createVNode(Transition, { name: "vertical-nav-app-title" }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(layoutConfig$1).app.title), 513), [
                            [vShow, !unref(hideTitleAndIcon)]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                    class: ["header-action d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                  }, unref(layoutConfig$1).icons.verticalNavUnPinned, {
                    onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                  }), null, 16, ["class", "onClick"])), [
                    [vShow, unref(configStore).isVerticalNavCollapsed]
                  ]),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                    class: ["header-action d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                  }, unref(layoutConfig$1).icons.verticalNavPinned, {
                    onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                  }), null, 16, ["class", "onClick"])), [
                    [vShow, !unref(configStore).isVerticalNavCollapsed]
                  ]),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "header-action d-lg-none" }, unref(layoutConfig$1).icons.close, {
                    onClick: ($event) => __props.toggleIsOverlayNavActive(false)
                  }), null, 16, ["onClick"]))
                ], true)
              ]),
              renderSlot(_ctx.$slots, "before-nav-items", {}, () => [
                createVNode("div", { class: "vertical-nav-items-shadow" })
              ], true),
              renderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => [
                (openBlock(), createBlock(unref(PerfectScrollbar), {
                  key: unref(configStore).isAppRTL,
                  tag: "ul",
                  class: "nav-items",
                  options: { wheelPropagation: false },
                  onPsScrollY: handleNavScroll
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.navItems, (item, index2) => {
                      return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                        key: index2,
                        item
                      }, null, 8, ["item"]);
                    }), 128))
                  ]),
                  _: 1
                }))
              ], true),
              renderSlot(_ctx.$slots, "after-nav-items", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/VerticalNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c52b07d3"]]);
const _sfc_main$3 = /* @__PURE__ */ Object.assign({
  name: "VerticalNavGroup"
}, {
  __name: "VerticalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute$1();
    const router2 = useRouter$1();
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    const isVerticalNavHovered = inject$1(injectionKeyIsVerticalNavHovered, ref(false));
    const isGroupActive = ref(false);
    const isGroupOpen = ref(false);
    const isAnyChildOpen = (children) => {
      return children.some((child) => {
        let result = openGroups.value.includes(child.title);
        if ("children" in child)
          result = isAnyChildOpen(child.children) || result;
        return result;
      });
    };
    const collapseChildren = (children) => {
      children.forEach((child) => {
        if ("children" in child)
          collapseChildren(child.children);
        openGroups.value = openGroups.value.filter((group) => group !== child.title);
      });
    };
    watch(() => route.path, () => {
      const isActive = isNavGroupActive(props.item.children, router2);
      isGroupOpen.value = isActive && !configStore.isVerticalNavMini(isVerticalNavHovered).value;
      isGroupActive.value = isActive;
    }, { immediate: true });
    watch(isGroupOpen, (val) => {
      const grpIndex = openGroups.value.indexOf(props.item.title);
      if (val && grpIndex === -1) {
        openGroups.value.push(props.item.title);
      } else if (!val && grpIndex !== -1) {
        openGroups.value.splice(grpIndex, 1);
        collapseChildren(props.item.children);
      }
    }, { immediate: true });
    watch(openGroups, (val) => {
      const lastOpenedGroup = val.at(-1);
      if (lastOpenedGroup === props.item.title)
        return;
      const isActive = isNavGroupActive(props.item.children, router2);
      if (isActive)
        return;
      if (isAnyChildOpen(props.item.children))
        return;
      isGroupOpen.value = isActive;
      isGroupActive.value = isActive;
    }, { deep: true });
    watch(configStore.isVerticalNavMini(isVerticalNavHovered), (val) => {
      isGroupOpen.value = val ? false : isGroupActive.value;
    });
    const isMounted = useMounted();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(canViewNavMenuGroup)(__props.item)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-group", [
            {
              active: unref(isGroupActive),
              open: unref(isGroupOpen),
              disabled: __props.item.disable
            }
          ]]
        }, _attrs))}><div class="nav-group-label">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(__props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(isMounted) ? TransitionGroup : "div"), mergeProps({ name: "transition-slide-x" }, !unref(isMounted) ? { class: "d-flex align-center flex-grow-1" } : void 0), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(__props.item.title, "span"), {
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (__props.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(__props.item.badgeContent, "span"), {
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", __props.item.badgeClass]
                }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                style: !unref(hideTitleAndBadge) ? null : { display: "none" }
              }, unref(layoutConfig$1).icons.chevronRight, {
                key: "arrow",
                class: "nav-group-arrow"
              }), null), _parent2, _scopeId);
            } else {
              return [
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(__props.item.title, "span"), {
                  key: "title",
                  class: "nav-item-title"
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.title), 1)
                  ]),
                  _: 1
                }, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]),
                __props.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ key: 0 }, unref(getDynamicI18nProps)(__props.item.badgeContent, "span"), {
                  key: "badge",
                  class: ["nav-item-badge", __props.item.badgeClass]
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.badgeContent), 1)
                  ]),
                  _: 1
                }, 16, ["class"])), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]) : createCommentVNode("", true),
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(unref(layoutConfig$1).icons.chevronRight, {
                  key: "arrow",
                  class: "nav-group-arrow"
                }), null, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ])
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div>`);
        _push(ssrRenderComponent(unref(TransitionExpand), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${ssrRenderStyle(unref(isGroupOpen) ? null : { display: "none" })}" class="nav-group-children"${_scopeId}><!--[-->`);
              ssrRenderList(__props.item.children, (child) => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$1)), {
                  key: child.title,
                  item: child
                }, null), _parent2, _scopeId);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                withDirectives(createVNode("ul", { class: "nav-group-children" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (child) => {
                    return openBlock(), createBlock(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$1)), {
                      key: child.title,
                      item: child
                    }, null, 8, ["item"]);
                  }), 128))
                ], 512), [
                  [vShow, unref(isGroupOpen)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/VerticalNavGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = defineComponent$1({
  props: {
    navItems: {
      type: Array,
      required: true
    },
    verticalNavAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { width: windowWidth } = useWindowSize();
    const configStore = useLayoutConfigStore();
    const isOverlayNavActive = ref(false);
    const isLayoutOverlayVisible = ref(false);
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive);
    syncRef(isOverlayNavActive, isLayoutOverlayVisible);
    watch(windowWidth, () => {
      if (!configStore.isLessThanOverlayNavBreakpoint && isLayoutOverlayVisible.value)
        isLayoutOverlayVisible.value = false;
    });
    return () => {
      var _a2, _b, _c;
      const verticalNavAttrs = toRef(props, "verticalNavAttrs");
      const { wrapper: verticalNavWrapper, wrapperProps: verticalNavWrapperProps, ...additionalVerticalNavAttrs } = verticalNavAttrs.value;
      const verticalNav = h$1(VerticalNav, { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive, navItems: props.navItems, ...additionalVerticalNavAttrs }, {
        "nav-header": () => {
          var _a3;
          return (_a3 = slots["vertical-nav-header"]) == null ? void 0 : _a3.call(slots);
        },
        "before-nav-items": () => {
          var _a3;
          return (_a3 = slots["before-vertical-nav-items"]) == null ? void 0 : _a3.call(slots);
        }
      });
      const navbar = h$1("header", { class: ["layout-navbar", { "navbar-blur": configStore.isNavbarBlurEnabled }] }, [
        h$1("div", { class: "navbar-content-container" }, (_a2 = slots.navbar) == null ? void 0 : _a2.call(slots, {
          toggleVerticalOverlayNavActive: toggleIsOverlayNavActive
        }))
      ]);
      const main = h$1("main", { class: "layout-page-content" }, h$1("div", { class: "page-content-container" }, (_b = slots.default) == null ? void 0 : _b.call(slots)));
      const footer = h$1("footer", { class: "layout-footer" }, [
        h$1("div", { class: "footer-content-container" }, (_c = slots.footer) == null ? void 0 : _c.call(slots))
      ]);
      const layoutOverlay = h$1("div", {
        class: ["layout-overlay", { visible: isLayoutOverlayVisible.value }],
        onClick: () => {
          isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value;
        }
      });
      return h$1("div", { class: ["layout-wrapper", ...configStore._layoutClasses] }, [
        verticalNavWrapper ? h$1(verticalNavWrapper, verticalNavWrapperProps, { default: () => verticalNav }) : verticalNav,
        h$1("div", { class: "layout-content-wrapper" }, [
          navbar,
          main,
          footer
        ]),
        layoutOverlay
      ]);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/VerticalNavLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "VerticalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(__props.item.action, __props.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-link", { disabled: __props.item.disable }]
        }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.to ? "RouterLink" : "a"), mergeProps(unref(getComputedNavLinkToProp)(__props.item), {
          class: { "router-link-active router-link-exact-active": unref(isNavLinkActive)(__props.item, _ctx.$router) }
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(__props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent2, _scopeId);
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }, unref(getDynamicI18nProps)(__props.item.title, "span")), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (__props.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", __props.item.badgeClass]
                }, unref(getDynamicI18nProps)(__props.item.badgeContent, "span")), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              }
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(__props.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null, 16)),
                createVNode(TransitionGroup, { name: "transition-slide-x" }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "title",
                      class: "nav-item-title"
                    }, unref(getDynamicI18nProps)(__props.item.title, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.item.title), 1)
                      ]),
                      _: 1
                    }, 16)), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]),
                    __props.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "badge",
                      class: ["nav-item-badge", __props.item.badgeClass]
                    }, unref(getDynamicI18nProps)(__props.item.badgeContent, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.item.badgeContent), 1)
                      ]),
                      _: 1
                    }, 16, ["class"])), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/VerticalNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "VerticalNavSectionTitle",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const shallRenderIcon = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(__props.item.action, __props.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-section-title" }, _attrs))}><div class="title-wrapper">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(shallRenderIcon) ? unref(layoutConfig$1).app.iconRenderer : unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
          key: unref(shallRenderIcon),
          class: unref(shallRenderIcon) ? "placeholder-icon" : "title-text"
        }, { ...unref(layoutConfig$1).icons.sectionTitlePlaceholder, ...unref(getDynamicI18nProps)(__props.item.heading, "span") }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(!unref(shallRenderIcon) ? __props.item.heading : null)}`);
            } else {
              return [
                createTextVNode(toDisplayString(!unref(shallRenderIcon) ? __props.item.heading : null), 1)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@layouts/components/VerticalNavSectionTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createLayouts = (userConfig) => {
  return () => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    const configStore = useLayoutConfigStore();
    layoutConfig$1.app.title = ((_a2 = userConfig.app) == null ? void 0 : _a2.title) ?? layoutConfig$1.app.title;
    layoutConfig$1.app.logo = ((_b = userConfig.app) == null ? void 0 : _b.logo) ?? layoutConfig$1.app.logo;
    layoutConfig$1.app.overlayNavFromBreakpoint = ((_c = userConfig.app) == null ? void 0 : _c.overlayNavFromBreakpoint) ?? layoutConfig$1.app.overlayNavFromBreakpoint;
    layoutConfig$1.app.i18n.enable = ((_e = (_d = userConfig.app) == null ? void 0 : _d.i18n) == null ? void 0 : _e.enable) ?? layoutConfig$1.app.i18n.enable;
    layoutConfig$1.app.iconRenderer = ((_f = userConfig.app) == null ? void 0 : _f.iconRenderer) ?? layoutConfig$1.app.iconRenderer;
    layoutConfig$1.verticalNav.defaultNavItemIconProps = ((_g = userConfig.verticalNav) == null ? void 0 : _g.defaultNavItemIconProps) ?? layoutConfig$1.verticalNav.defaultNavItemIconProps;
    layoutConfig$1.icons.chevronDown = ((_h = userConfig.icons) == null ? void 0 : _h.chevronDown) ?? layoutConfig$1.icons.chevronDown;
    layoutConfig$1.icons.chevronRight = ((_i = userConfig.icons) == null ? void 0 : _i.chevronRight) ?? layoutConfig$1.icons.chevronRight;
    layoutConfig$1.icons.close = ((_j = userConfig.icons) == null ? void 0 : _j.close) ?? layoutConfig$1.icons.close;
    layoutConfig$1.icons.verticalNavPinned = ((_k = userConfig.icons) == null ? void 0 : _k.verticalNavPinned) ?? layoutConfig$1.icons.verticalNavPinned;
    layoutConfig$1.icons.verticalNavUnPinned = ((_l = userConfig.icons) == null ? void 0 : _l.verticalNavUnPinned) ?? layoutConfig$1.icons.verticalNavUnPinned;
    layoutConfig$1.icons.sectionTitlePlaceholder = ((_m = userConfig.icons) == null ? void 0 : _m.sectionTitlePlaceholder) ?? layoutConfig$1.icons.sectionTitlePlaceholder;
    configStore.$patch({
      appContentLayoutNav: cookieRef("appContentLayoutNav", ((_n = userConfig.app) == null ? void 0 : _n.contentLayoutNav) ?? layoutConfig$1.app.contentLayoutNav).value,
      appContentWidth: cookieRef("appContentWidth", ((_o = userConfig.app) == null ? void 0 : _o.contentWidth) ?? layoutConfig$1.app.contentWidth).value,
      footerType: cookieRef("footerType", ((_p = userConfig.footer) == null ? void 0 : _p.type) ?? layoutConfig$1.footer.type).value,
      navbarType: cookieRef("navbarType", ((_q = userConfig.navbar) == null ? void 0 : _q.type) ?? layoutConfig$1.navbar.type).value,
      isNavbarBlurEnabled: cookieRef("isNavbarBlurEnabled", ((_r = userConfig.navbar) == null ? void 0 : _r.navbarBlur) ?? layoutConfig$1.navbar.navbarBlur).value,
      isVerticalNavCollapsed: cookieRef("isVerticalNavCollapsed", ((_s = userConfig.verticalNav) == null ? void 0 : _s.isVerticalNavCollapsed) ?? layoutConfig$1.verticalNav.isVerticalNavCollapsed).value,
      // isAppRTL: userConfig.app?.isRTL ?? config.app.isRTL,
      // isLessThanOverlayNavBreakpoint: false,
      horizontalNavType: cookieRef("horizontalNavType", ((_t = userConfig.horizontalNav) == null ? void 0 : _t.type) ?? layoutConfig$1.horizontalNav.type).value
    });
    _setDirAttr(configStore.isAppRTL ? "rtl" : "ltr");
  };
};
function layouts(app) {
  app.use(createLayouts(layoutConfig));
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layouts
}, Symbol.toStringTag, { value: "Module" }));
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === "") {
      classes.push(`${name}--border`);
    } else if (typeof border === "string" || border === 0) {
      for (const value of String(border).split(" ")) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}
const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v2) => allowedDensities.includes(v2)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v2) {
      const value = parseInt(v2);
      return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = computed(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null)
      return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const tile = isRef(props) ? props.value : props.tile;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    } else if (tile) {
      classes.push("rounded-0");
    }
    return classes;
  });
  return {
    roundedClasses
  };
}
const allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createVNode(Fragment, null, [isClickable && createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v2) => allowedVariants.includes(v2)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = computed(() => {
    const {
      variant
    } = unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(computed(() => {
    const {
      variant,
      color
    } = unref(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
const makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = getUid();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject$1(injectKey, null);
  if (!group) {
    if (!required)
      return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  onBeforeUnmount(() => {
    group.unregister(id);
  });
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  }, {
    flush: "sync"
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  let isUnmounted = false;
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v2) => {
    if (v2 == null)
      return [];
    return getIds(items, wrapInArray(v2));
  }, (v2) => {
    const arr = getValues(items, v2);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index2 = children.indexOf(vm);
    if (unref(unwrapped.value) == null) {
      unwrapped.value = index2;
    }
    if (index2 > -1) {
      items.splice(index2, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    if (isUnmounted)
      return;
    forceMandatoryValue();
    const index2 = items.findIndex((item) => item.id === id);
    items.splice(index2, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  onMounted(() => {
    forceMandatoryValue();
  });
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled))
      return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index2 = internalValue.findIndex((v2) => v2 === id);
      const isSelected = ~index2;
      value = value ?? !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1)
        return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
        return;
      if (index2 < 0 && value)
        internalValue.push(id);
      else if (index2 >= 0 && !value)
        internalValue.splice(index2, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected)
        return;
      selected.value = value ?? !isSelected ? [id] : [];
    }
  }
  function step(offset2) {
    if (props.multiple)
      consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i2) => i2.id === currentId);
      let newIndex = (currentIndex + offset2) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset2) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled)
        return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length)
    return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
const VBtnToggle = genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const btnGroupProps = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a2;
          return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
const makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
const VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults: defaults2,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults2, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    }, options);
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width)
  }));
  return {
    dimensionStyles
  };
}
const oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset2 = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location)
      return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset(side2) {
      return offset2 ? offset2(side2) : 0;
    }
    const styles = {};
    if (side !== "center") {
      if (opposite)
        styles[oppositeMap[side]] = `calc(100% - ${getOffset(side)}px)`;
      else
        styles[side] = 0;
    }
    if (align !== "center") {
      if (opposite)
        styles[oppositeMap[align]] = `calc(100% - ${getOffset(align)}px)`;
      else
        styles[align] = 0;
    } else {
      if (side === "center")
        styles.top = styles.left = "50%";
      else {
        styles[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}
const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e2) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e2.clientX + (right - width) : e2.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...locationStyles.value
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a2;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "absolute": props.absolute,
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v2) => positionValues.includes(v2)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = computed(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}
function useRoute() {
  const vm = getCurrentInstance("useRoute");
  return computed(() => {
    var _a2;
    return (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$route;
  });
}
function useRouter() {
  var _a2, _b;
  return (_b = (_a2 = getCurrentInstance("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b.$router;
}
function useLink(props, attrs) {
  var _a2, _b;
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
    return {
      isLink,
      isClickable,
      href: toRef(props, "href")
    };
  }
  const linkProps = computed(() => ({
    ...props,
    to: toRef(() => props.to || {})
  }));
  const routerLink = RouterLink.useLink(linkProps.value);
  const link = computed(() => props.to ? routerLink : void 0);
  const route = useRoute();
  return {
    isLink,
    isClickable,
    route: (_a2 = link.value) == null ? void 0 : _a2.route,
    navigate: (_b = link.value) == null ? void 0 : _b.navigate,
    isActive: computed(() => {
      var _a3, _b2, _c;
      if (!link.value)
        return false;
      if (!props.exact)
        return ((_a3 = link.value.isActive) == null ? void 0 : _a3.value) ?? false;
      if (!route.value)
        return ((_b2 = link.value.isExactActive) == null ? void 0 : _b2.value) ?? false;
      return ((_c = link.value.isExactActive) == null ? void 0 : _c.value) && deepEqual(link.value.route.value.query, route.value.query);
    }),
    href: computed(() => {
      var _a3;
      return props.to ? (_a3 = link.value) == null ? void 0 : _a3.route.value.href : props.href;
    })
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let inTransition = false;
function useBackButton(router2, cb) {
  let popped = false;
  let removeBefore;
  let removeAfter;
  if (IN_BROWSER) {
    nextTick(() => {
      window.addEventListener("popstate", onPopstate);
      removeBefore = router2 == null ? void 0 : router2.beforeEach((to, from, next) => {
        if (!inTransition) {
          setTimeout(() => popped ? cb(next) : next());
        } else {
          popped ? cb(next) : next();
        }
        inTransition = true;
      });
      removeAfter = router2 == null ? void 0 : router2.afterEach(() => {
        inTransition = false;
      });
    });
    onScopeDispose(() => {
      window.removeEventListener("popstate", onPopstate);
      removeBefore == null ? void 0 : removeBefore();
      removeAfter == null ? void 0 : removeAfter();
    });
  }
  function onPopstate(e2) {
    var _a2;
    if ((_a2 = e2.state) == null ? void 0 : _a2.replaced)
      return;
    popped = true;
    setTimeout(() => popped = false);
  }
}
function useSelectLink(link, select) {
  watch(() => {
    var _a2;
    return (_a2 = link.isActive) == null ? void 0 : _a2.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
const stopSymbol = Symbol("rippleStop");
const DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e2) {
  return e2.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e2) {
  return e2.constructor.name === "KeyboardEvent";
}
const calculate = function(e2, el) {
  var _a2;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e2)) {
    const offset2 = el.getBoundingClientRect();
    const target = isTouchEvent(e2) ? e2.touches[e2.touches.length - 1] : e2;
    localX = target.clientX - offset2.left;
    localY = target.clientY - offset2.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_a2 = el._ripple) == null ? void 0 : _a2.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x2 = value.center ? centerX : `${localX - radius}px`;
  const y2 = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x: x2,
    y: y2,
    centerX,
    centerY
  };
};
const ripples = {
  /* eslint-disable max-statements */
  show(e2, el) {
    var _a2;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((_a2 = el == null ? void 0 : el._ripple) == null ? void 0 : _a2.enabled)) {
      return;
    }
    const container = document.createElement("span");
    const animation = document.createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x: x2,
      y: y2,
      centerX,
      centerY
    } = calculate(e2, el, value);
    const size = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed2 = window.getComputedStyle(el);
    if (computed2 && computed2.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x2}, ${y2}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--enter");
      animation.classList.add("v-ripple__animation--in");
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(el) {
    var _a2;
    if (!((_a2 = el == null ? void 0 : el._ripple) == null ? void 0 : _a2.enabled))
      return;
    const ripples2 = el.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0)
      return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding)
      return;
    else
      animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      setTimeout(() => {
        var _a3;
        const ripples3 = el.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (((_a3 = animation.parentNode) == null ? void 0 : _a3.parentNode) === el)
          el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e2) {
  const value = {};
  const element = e2.currentTarget;
  if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e2[stopSymbol])
    return;
  e2[stopSymbol] = true;
  if (isTouchEvent(e2)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch)
      return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e2);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e2)) {
    if (element._ripple.showTimerCommit)
      return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e2, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      var _a2;
      if ((_a2 = element == null ? void 0 : element._ripple) == null ? void 0 : _a2.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e2, element, value);
  }
}
function rippleStop(e2) {
  e2[stopSymbol] = true;
}
function rippleHide(e2) {
  const element = e2.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  window.clearTimeout(element._ripple.showTimer);
  if (e2.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e2);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e2) {
  const element = e2.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e2) {
  if (!keyboardRipple && (e2.keyCode === keyCodes.enter || e2.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e2);
  }
}
function keyboardRippleHide(e2) {
  keyboardRipple = false;
  rippleHide(e2);
}
function focusRippleHide(e2) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e2);
  }
}
function updateRipple(el, binding, wasEnabled) {
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = el._ripple ?? {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  if (isObject$1(value) && value.class) {
    el._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el.addEventListener("mousedown", rippleStop);
      return;
    }
    el.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el.addEventListener("touchcancel", rippleHide);
    el.addEventListener("mousedown", rippleShow);
    el.addEventListener("mouseup", rippleHide);
    el.addEventListener("mouseleave", rippleHide);
    el.addEventListener("keydown", keyboardRippleShow);
    el.addEventListener("keyup", keyboardRippleHide);
    el.addEventListener("blur", focusRippleHide);
    el.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  el.removeEventListener("mousedown", rippleShow);
  el.removeEventListener("touchstart", rippleShow);
  el.removeEventListener("touchend", rippleHide);
  el.removeEventListener("touchmove", rippleCancelShow);
  el.removeEventListener("touchcancel", rippleHide);
  el.removeEventListener("mouseup", rippleHide);
  el.removeEventListener("mouseleave", rippleHide);
  el.removeEventListener("keydown", keyboardRippleShow);
  el.removeEventListener("keyup", keyboardRippleHide);
  el.removeEventListener("dragstart", rippleHide);
  el.removeEventListener("blur", focusRippleHide);
}
function mounted(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted(el) {
  delete el._ripple;
  removeListeners(el);
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
const Ripple = {
  mounted,
  unmounted,
  updated
};
const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
const VBtn = genericComponent()({
  name: "VBtn",
  directives: {
    Ripple
  },
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a2;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a2 = link.isActive) == null ? void 0 : _a2.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0 || typeof props.value === "symbol")
        return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e2) {
      var _a2;
      if (isDisabled.value || link.isLink.value && (e2.metaKey || e2.ctrlKey || e2.shiftKey || e2.button !== 0 || attrs.target === "_blank"))
        return;
      (_a2 = link.navigate) == null ? void 0 : _a2.call(link, e2);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      var _a2, _b;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a2 = link.isActive) == null ? void 0 : _a2.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return withDirectives(createVNode(Tag, {
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--slim": props.slim,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "aria-busy": props.loading ? true : void 0,
        "disabled": isDisabled.value || void 0,
        "href": link.href.value,
        "tabindex": props.loading ? -1 : void 0,
        "onClick": onClick,
        "value": valueAttr.value
      }, {
        default: () => {
          var _a3;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a4;
              return [((_a4 = slots.default) == null ? void 0 : _a4.call(slots)) ?? props.text];
            }
          })]), !props.icon && hasAppend && createVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [((_a3 = slots.loader) == null ? void 0 : _a3.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "width": "2"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {
      group
    };
  }
});
function useProvided(props, prop, provided) {
  const internal = useProxiedModel(props, prop);
  internal.value = props[prop] ?? provided.value;
  watch(provided, (v2) => {
    if (props[prop] == null) {
      internal.value = v2;
    }
  });
  return internal;
}
function createProvideFunction(data) {
  return (props) => {
    const current = useProvided(props, "locale", data.current);
    const fallback = useProvided(props, "fallback", data.fallback);
    const messages2 = useProvided(props, "messages", data.messages);
    const i18n = data.useI18n({
      locale: current.value,
      fallbackLocale: fallback.value,
      messages: messages2.value,
      useScope: "local",
      legacy: false,
      inheritLocale: false
    });
    watch(current, (v2) => {
      i18n.locale.value = v2;
    });
    return {
      name: "vue-i18n",
      current,
      fallback,
      messages: messages2,
      t: function(key) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }
        return i18n.t(key, params);
      },
      n: i18n.n,
      provide: createProvideFunction({
        current,
        fallback,
        messages: messages2,
        useI18n: data.useI18n
      })
    };
  };
}
function createVueI18nAdapter(_ref) {
  let {
    i18n,
    useI18n: useI18n2
  } = _ref;
  const current = i18n.global.locale;
  const fallback = i18n.global.fallbackLocale;
  const messages2 = i18n.global.messages;
  return {
    name: "vue-i18n",
    current,
    fallback,
    messages: messages2,
    // @ts-expect-error Type instantiation is excessively deep and possibly infinite
    t: function(key) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      return i18n.global.t(key, params);
    },
    n: i18n.global.n,
    provide: createProvideFunction({
      current,
      fallback,
      messages: messages2,
      useI18n: useI18n2
    })
  };
}
const defaults = {
  IconBtn: {
    icon: true,
    color: "default",
    variant: "text"
  },
  VAlert: {
    density: "comfortable",
    VBtn: {
      color: void 0
    }
  },
  VAvatar: {
    // ℹ️ Remove after next release
    variant: "flat"
  },
  VBadge: {
    // set v-badge default color to primary
    color: "primary"
  },
  VBtn: {
    // set v-btn default color to primary
    color: "primary"
  },
  VMenu: {
    offset: "2px"
  },
  VPagination: {
    showFirstLastPage: true,
    variant: "tonal"
  },
  VTabs: {
    // set v-tabs default color to primary
    color: "primary",
    VSlideGroup: {
      showArrows: true
    }
  },
  VTooltip: {
    // set v-tooltip default location to top
    location: "top"
  },
  VCheckboxBtn: {
    color: "primary"
  },
  VCheckbox: {
    // set v-checkbox default color to primary
    color: "primary",
    density: "comfortable",
    hideDetails: "auto"
  },
  VRadioGroup: {
    color: "primary",
    density: "comfortable",
    hideDetails: "auto"
  },
  VRadio: {
    density: "comfortable",
    hideDetails: "auto"
  },
  VSelect: {
    variant: "outlined",
    color: "primary",
    hideDetails: "auto",
    density: "comfortable"
  },
  VRangeSlider: {
    // set v-range-slider default color to primary
    color: "primary",
    thumbLabel: true,
    hideDetails: "auto",
    trackSize: 6,
    thumbSize: 22,
    elevation: 4
  },
  VRating: {
    // set v-rating default color to primary
    activeColor: "warning",
    color: "disabled",
    emptyIcon: "ri-star-fill"
  },
  VProgressCircular: {
    // set v-progress-circular default color to primary
    color: "primary"
  },
  VProgressLinear: {
    color: "primary",
    height: 6,
    roundedBar: true,
    rounded: true
  },
  VSlider: {
    // set v-slider default color to primary
    color: "primary",
    trackSize: 6,
    hideDetails: "auto",
    thumbSize: 22,
    elevation: 4
  },
  VSnackbar: {
    VBtn: {
      size: "small"
    }
  },
  VTextField: {
    variant: "outlined",
    density: "comfortable",
    color: "primary",
    hideDetails: "auto"
  },
  VAutocomplete: {
    variant: "outlined",
    color: "primary",
    density: "comfortable",
    hideDetails: "auto"
  },
  VCombobox: {
    variant: "outlined",
    color: "primary",
    hideDetails: "auto",
    density: "comfortable",
    VChip: {
      size: "default"
    }
  },
  VFileInput: {
    variant: "outlined",
    color: "primary",
    hideDetails: "auto",
    density: "comfortable"
  },
  VTextarea: {
    variant: "outlined",
    color: "primary",
    hideDetails: "auto",
    density: "comfortable"
  },
  VSwitch: {
    // set v-switch default color to primary
    inset: true,
    color: "primary",
    hideDetails: "auto"
  },
  VNavigationDrawer: {
    touchless: true
  }
};
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  class: "custom-checkbox-checked"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "m11 13.586 4.596-4.597.707.707L11 15l-3.182-3.182.707-.707z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$4,
  _hoisted_3$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._hoisted_4$1]);
}
const checkboxChecked = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  class: "custom-checkbox-indeterminate"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M8.5 11.5h7v1h-7z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_4]);
}
const checkboxIndeterminate = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  class: "custom-checkbox-unchecked"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-opacity": ".6",
  "stroke-width": "2",
  d: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const checkboxUnchecked = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  class: "custom-radio-checked"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  stroke: "currentColor",
  "stroke-width": "5",
  d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const radioChecked = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-opacity": ".6",
  "stroke-width": "2",
  d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const radioUnchecked = { render };
const customIcons = {
  "mdi-checkbox-blank-outline": checkboxUnchecked,
  "mdi-checkbox-marked": checkboxChecked,
  "mdi-minus-box": checkboxIndeterminate,
  "mdi-radiobox-marked": radioChecked,
  "mdi-radiobox-blank": radioUnchecked
};
const aliases = {
  info: "ri-error-warning-line",
  success: "ri-checkbox-circle-line",
  warning: "ri-alert-line",
  error: "ri-error-warning-line",
  calendar: "ri-calendar-2-line",
  collapse: "ri-arrow-up-s-line",
  complete: "ri-check-line",
  cancel: "ri-close-line",
  close: "ri-close-line",
  delete: "ri-close-circle-fill",
  clear: "ri-close-line",
  prev: "ri-arrow-left-s-line",
  next: "ri-arrow-right-s-line",
  delimiter: "ri-circle-line",
  sort: "ri-arrow-up-line",
  expand: "ri-arrow-down-s-line",
  menu: "ri-menu-line",
  subgroup: "ri-arrow-down-s-fill",
  dropdown: "ri-arrow-down-s-line",
  edit: "ri-pencil-line",
  ratingEmpty: "ri-star-line",
  ratingFull: "ri-star-fill",
  ratingHalf: "ri-star-half-line",
  loading: "ri-refresh-line",
  first: "ri-skip-back-mini-line",
  last: "ri-skip-forward-mini-line",
  unfold: "ri-split-cells-vertical",
  file: "ri-attachment-2",
  plus: "ri-add-line",
  minus: "ri-subtract-line",
  sortAsc: "ri-arrow-up-line",
  sortDesc: "ri-arrow-down-line"
};
const iconify = {
  component: (props) => {
    if (typeof props.icon === "string") {
      const iconComponent = customIcons[props.icon];
      if (iconComponent)
        return h$1(iconComponent);
    }
    return h$1(props.tag, {
      ...props,
      // As we are using class based icons
      class: [props.icon],
      // Remove used props from DOM rendering
      tag: void 0,
      icon: void 0
    });
  }
};
const icons = {
  defaultSet: "iconify",
  aliases,
  sets: {
    iconify
  }
};
const staticPrimaryColor = "#666CFF";
const staticPrimaryDarkenColor = "#5C61E6";
const themes = {
  light: {
    dark: false,
    colors: {
      "primary": staticPrimaryColor,
      "on-primary": "#fff",
      "primary-darken-1": staticPrimaryDarkenColor,
      "secondary": "#6D788D",
      "secondary-darken-1": "#626C7F",
      "on-secondary": "#fff",
      "success": "#72E128",
      "success-darken-1": "#67CB24",
      "on-success": "#fff",
      "info": "#26C6F9",
      "info-darken-1": "#22B3E1",
      "on-info": "#fff",
      "warning": "#FDB528",
      "warning-darken-1": "#E4A324",
      "on-warning": "#fff",
      "error": "#FF4D49",
      "error-darken-1": "#E64542",
      "on-error": "#fff",
      "background": "#F7F7F9",
      "on-background": "#262B43",
      "surface": "#fff",
      "on-surface": "#262B43",
      "grey-50": "#FAFAFA",
      "grey-100": "#F5F5F5",
      "grey-200": "#EEEEEE",
      "grey-300": "#E0E0E0",
      "grey-400": "#BDBDBD",
      "grey-500": "#9E9E9E",
      "grey-600": "#757575",
      "grey-700": "#616161",
      "grey-800": "#424242",
      "grey-900": "#212121",
      "perfect-scrollbar-thumb": "#dbdade",
      "skin-bordered-background": "#fff",
      "skin-bordered-surface": "#fff",
      "expansion-panel-text-custom-bg": "#fafafa",
      "track-bg": "#FAFAFD",
      "chat-bg": "#F7F6FA"
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#262B43",
      "tooltip-background": "#282A42",
      "overlay-scrim-opacity": 0.5,
      "hover-opacity": 0.06,
      "focus-opacity": 0.1,
      "selected-opacity": 0.08,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "dragged-opacity": 0.1,
      "disabled-opacity": 0.4,
      "border-color": "#262B43",
      "border-opacity": 0.12,
      "table-header-color": "#F5F5F7",
      "high-emphasis-opacity": 0.9,
      "medium-emphasis-opacity": 0.7,
      // 👉 shadows
      "shadow-key-umbra-color": "#262B43",
      "shadow-xs-opacity": "0.14",
      "shadow-sm-opacity": "0.16",
      "shadow-md-opacity": "0.16",
      "shadow-lg-opacity": "0.18",
      "shadow-xl-opacity": "0.18"
    }
  },
  dark: {
    dark: true,
    colors: {
      "primary": staticPrimaryColor,
      "on-primary": "#fff",
      "primary-darken-1": staticPrimaryDarkenColor,
      "secondary": "#6D788D",
      "secondary-darken-1": "#626C7F",
      "on-secondary": "#fff",
      "success": "#72E128",
      "success-darken-1": "#67CB24",
      "on-success": "#fff",
      "info": "#26C6F9",
      "info-darken-1": "#22B3E1",
      "on-info": "#fff",
      "warning": "#FDB528",
      "warning-darken-1": "#E4A324",
      "on-warning": "#fff",
      "error": "#FF4D49",
      "error-darken-1": "#E64542",
      "on-error": "#fff",
      "background": "#282A42",
      "on-background": "#EAEAFF",
      "surface": "#30334E",
      "on-surface": "#EAEAFF",
      "grey-50": "#2A2E42",
      "grey-100": "#2F3349",
      "grey-200": "#4A5072",
      "grey-300": "#5E6692",
      "grey-400": "#7983BB",
      "grey-500": "#8692D0",
      "grey-600": "#AAB3DE",
      "grey-700": "#B6BEE3",
      "grey-800": "#CFD3EC",
      "grey-900": "#E7E9F6",
      "perfect-scrollbar-thumb": "#4a5072",
      "skin-bordered-background": "#30334E",
      "skin-bordered-surface": "#30334E",
      "expansion-panel-text-custom-bg": "#333851",
      "track-bg": "#3C3F59",
      "chat-bg": "#343752"
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#101121",
      "tooltip-background": "#F5F5F5",
      "overlay-scrim-opacity": 0.6,
      "hover-opacity": 0.06,
      "focus-opacity": 0.1,
      "selected-opacity": 0.08,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "disabled-opacity": 0.4,
      "dragged-opacity": 0.1,
      "border-color": "#EAEAFF",
      "border-opacity": 0.12,
      "table-header-color": "#3A3E5B",
      "high-emphasis-opacity": 0.9,
      "medium-emphasis-opacity": 0.7,
      // 👉 Shadows
      "shadow-key-umbra-color": "#101121",
      "shadow-xs-opacity": "0.20",
      "shadow-sm-opacity": "0.24",
      "shadow-md-opacity": "0.26",
      "shadow-lg-opacity": "0.28",
      "shadow-xl-opacity": "0.30"
    }
  }
};
const resolveVuetifyTheme = (defaultTheme) => {
  const cookieColorScheme = cookieRef("color-scheme", usePreferredDark().value ? "dark" : "light");
  const storedTheme = cookieRef("theme", defaultTheme).value;
  return storedTheme === "system" ? cookieColorScheme.value === "dark" ? "dark" : "light" : storedTheme;
};
function index(app) {
  const cookieThemeValues = {
    defaultTheme: resolveVuetifyTheme(themeConfig.app.theme),
    themes: {
      light: {
        colors: {
          "primary": cookieRef("lightThemePrimaryColor", staticPrimaryColor).value,
          "primary-darken-1": cookieRef("lightThemePrimaryDarkenColor", staticPrimaryDarkenColor).value
        }
      },
      dark: {
        colors: {
          "primary": cookieRef("darkThemePrimaryColor", staticPrimaryColor).value,
          "primary-darken-1": cookieRef("darkThemePrimaryDarkenColor", staticPrimaryDarkenColor).value
        }
      }
    }
  };
  const optionTheme = deepMerge({ themes }, cookieThemeValues);
  const vuetify = createVuetify({
    aliases: {
      IconBtn: VBtn
    },
    defaults,
    icons,
    theme: optionTheme,
    locale: {
      adapter: createVueI18nAdapter({ i18n: getI18n(), useI18n })
    }
  });
  app.use(vuetify);
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
async function loadFonts() {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */
    "webfontloader"
  );
  webFontLoader.load({
    google: {
      api: "https://fonts.googleapis.com/css2",
      families: ["Inter:wght@300;400;500;600;700;900&display=swap"]
    }
  });
}
function webfontloader() {
  loadFonts();
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: webfontloader,
  loadFonts
}, Symbol.toStringTag, { value: "Module" }));
const registerPlugins = (app) => {
  const imports = /* @__PURE__ */ Object.assign({ "../../plugins/1.router/index.js": __vite_glob_0_0$1, "../../plugins/2.pinia.js": __vite_glob_0_1$1, "../../plugins/casl/index.js": __vite_glob_0_2$1, "../../plugins/fake-api/index.js": __vite_glob_0_3, "../../plugins/i18n/index.js": __vite_glob_0_4, "../../plugins/iconify/index.js": __vite_glob_0_5, "../../plugins/layouts.js": __vite_glob_0_6, "../../plugins/vuetify/index.js": __vite_glob_0_7, "../../plugins/webfontloader.js": __vite_glob_0_8 });
  const importPaths = Object.keys(imports).sort();
  importPaths.forEach((path) => {
    var _a2;
    const pluginImportModule = imports[path];
    (_a2 = pluginImportModule.default) == null ? void 0 : _a2.call(pluginImportModule, app);
  });
};
var define_import_meta_env_default = { BASE_URL: "/build/", MODE: "production", DEV: false, PROD: true, SSR: true };
const appName = define_import_meta_env_default.VITE_APP_NAME || "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/App.vue": () => import("./assets/App-CCnfXOvA.js"), "./Pages/[...error].vue": () => import("./assets/_...error_-BmsGZn3y.js"), "./Pages/access-control.vue": () => import("./assets/access-control-Darg8t9_.js"), "./Pages/apps/academy/course-details.vue": () => import("./assets/course-details-B4m0rAiN.js"), "./Pages/apps/academy/dashboard.vue": () => import("./assets/dashboard-BQmfxZD7.js"), "./Pages/apps/academy/my-course.vue": () => import("./assets/my-course-DoI2ouy6.js"), "./Pages/apps/calendar.vue": () => import("./assets/calendar-0QADYWJB.js"), "./Pages/apps/chat.vue": () => import("./assets/chat-B-uSDUqH.js"), "./Pages/apps/ecommerce/customer/details/[id].vue": () => import("./assets/_id_-CF4kg3sO.js"), "./Pages/apps/ecommerce/customer/list/index.vue": () => import("./assets/index-CSKBK6Nj.js"), "./Pages/apps/ecommerce/manage-review.vue": () => import("./assets/manage-review-22lgJzMf.js"), "./Pages/apps/ecommerce/order/details/[id].vue": () => import("./assets/_id_-Cozrmvoa.js"), "./Pages/apps/ecommerce/order/list/index.vue": () => import("./assets/index-CH7Uwa81.js"), "./Pages/apps/ecommerce/product/add/index.vue": () => import("./assets/index-DAjwLYjl.js"), "./Pages/apps/ecommerce/product/category-list.vue": () => import("./assets/category-list-C19KSFoo.js"), "./Pages/apps/ecommerce/product/list/index.vue": () => import("./assets/index-DxMpeSzh.js"), "./Pages/apps/ecommerce/referrals.vue": () => import("./assets/referrals-DtzJkaHi.js"), "./Pages/apps/ecommerce/settings.vue": () => import("./assets/settings-wO2I33HD.js"), "./Pages/apps/email/index.vue": () => import("./assets/index-3xvjJWz0.js"), "./Pages/apps/invoice/add/index.vue": () => import("./assets/index-BC9ZxJDh.js"), "./Pages/apps/invoice/edit/[id].vue": () => import("./assets/_id_-BeP8XqMg.js"), "./Pages/apps/invoice/list/index.vue": () => import("./assets/index-WJolgWHO.js"), "./Pages/apps/invoice/preview/[id].vue": () => import("./assets/_id_-C1l4B58M.js"), "./Pages/apps/kanban/index.vue": () => import("./assets/index-0kinG0Bd.js"), "./Pages/apps/logistics/dashboard.vue": () => import("./assets/dashboard-BxmfJPc5.js"), "./Pages/apps/logistics/fleet.vue": () => import("./assets/fleet-B6qWJkTU.js"), "./Pages/apps/permissions/index.vue": () => import("./assets/index-DTfjuvA3.js"), "./Pages/apps/roles/index.vue": () => import("./assets/index-P2ZBckFt.js"), "./Pages/apps/user/list/index.vue": () => import("./assets/index-BzhR788M.js"), "./Pages/apps/user/view/[id].vue": () => import("./assets/_id_-Ce2n2zd_.js"), "./Pages/charts/apex-chart.vue": () => import("./assets/apex-chart-CbMfkvp8.js"), "./Pages/charts/chartjs.vue": () => import("./assets/chartjs-BsImyKbE.js"), "./Pages/components/alert.vue": () => import("./assets/alert-6RCzg_ny.js"), "./Pages/components/avatar.vue": () => import("./assets/avatar-Ct1x_OQh.js"), "./Pages/components/badge.vue": () => import("./assets/badge-Bv1rJTvo.js"), "./Pages/components/button.vue": () => import("./assets/button-CNXKl3pF.js"), "./Pages/components/chip.vue": () => import("./assets/chip-BBnqCAIZ.js"), "./Pages/components/dialog.vue": () => import("./assets/dialog-z40ZnUkC.js"), "./Pages/components/expansion-panel.vue": () => import("./assets/expansion-panel-DYlETZCI.js"), "./Pages/components/list.vue": () => import("./assets/list-DWWmZ4rt.js"), "./Pages/components/menu.vue": () => import("./assets/menu-B-3TD52G.js"), "./Pages/components/pagination.vue": () => import("./assets/pagination-DEuY7ge3.js"), "./Pages/components/progress-circular.vue": () => import("./assets/progress-circular-D9Mkz0GG.js"), "./Pages/components/progress-linear.vue": () => import("./assets/progress-linear-BxfAWGjP.js"), "./Pages/components/snackbar.vue": () => import("./assets/snackbar-BEqUIDoB.js"), "./Pages/components/tabs.vue": () => import("./assets/tabs-DK5aIJED.js"), "./Pages/components/timeline.vue": () => import("./assets/timeline-9xBf77XT.js"), "./Pages/components/tooltip.vue": () => import("./assets/tooltip-BbpPQBME.js"), "./Pages/dashboards/analytics.vue": () => import("./assets/analytics-DCn4nzTA.js"), "./Pages/dashboards/crm.vue": () => import("./assets/crm-ByGx7ITW.js"), "./Pages/dashboards/ecommerce.vue": () => import("./assets/ecommerce-BeZ__1q5.js"), "./Pages/extensions/swiper.vue": () => import("./assets/swiper-B9RD07YW.js"), "./Pages/extensions/tour.vue": () => import("./assets/tour-CaLJ5QiU.js"), "./Pages/forgot-password.vue": () => import("./assets/forgot-password-CS23RTwu.js"), "./Pages/forms/autocomplete.vue": () => import("./assets/autocomplete-eAciEy_n.js"), "./Pages/forms/checkbox.vue": () => import("./assets/checkbox-DeVJF71j.js"), "./Pages/forms/combobox.vue": () => import("./assets/combobox-CcGEFSIE.js"), "./Pages/forms/custom-input.vue": () => import("./assets/custom-input-CRYoIxk3.js"), "./Pages/forms/date-time-picker.vue": () => import("./assets/date-time-picker-CE0zot_G.js"), "./Pages/forms/editors.vue": () => import("./assets/editors-CXt_NhDh.js"), "./Pages/forms/file-input.vue": () => import("./assets/file-input-CnoD57r0.js"), "./Pages/forms/form-layouts.vue": () => import("./assets/form-layouts-CagbeStQ.js"), "./Pages/forms/form-validation.vue": () => import("./assets/form-validation-DQVJdMaF.js"), "./Pages/forms/form-wizard-icons.vue": () => import("./assets/form-wizard-icons-DijkFSrt.js"), "./Pages/forms/form-wizard-numbered.vue": () => import("./assets/form-wizard-numbered-DSbA1jBW.js"), "./Pages/forms/radio.vue": () => import("./assets/radio-Db48H7Rq.js"), "./Pages/forms/range-slider.vue": () => import("./assets/range-slider-DWwt0ghN.js"), "./Pages/forms/rating.vue": () => import("./assets/rating-BQtftD3B.js"), "./Pages/forms/select.vue": () => import("./assets/select-uweJmPw9.js"), "./Pages/forms/slider.vue": () => import("./assets/slider-DQ8kfJBn.js"), "./Pages/forms/switch.vue": () => import("./assets/switch-B-fL5gyw.js"), "./Pages/forms/textarea.vue": () => import("./assets/textarea-CbjvENlU.js"), "./Pages/forms/textfield.vue": () => import("./assets/textfield-MGdmYYh2.js"), "./Pages/front-pages/checkout.vue": () => import("./assets/checkout-CxOiEVd7.js"), "./Pages/front-pages/help-center/article/[title].vue": () => import("./assets/_title_-kgOwlSyG.js"), "./Pages/front-pages/help-center/index.vue": () => import("./assets/index-BeC5dk9N.js"), "./Pages/front-pages/landing-page/index.vue": () => import("./assets/index-C7KLFzoO.js"), "./Pages/front-pages/payment.vue": () => import("./assets/payment-DJjXgXFO.js"), "./Pages/front-pages/pricing.vue": () => import("./assets/pricing-BK25qmFh.js"), "./Pages/login.vue": () => import("./assets/login-BqJYm8ON.js"), "./Pages/not-authorized.vue": () => import("./assets/not-authorized-D1QC3FrX.js"), "./Pages/pages/account-settings/[tab].vue": () => import("./assets/_tab_-uJzUM9Oc.js"), "./Pages/pages/authentication/forgot-password-v1.vue": () => import("./assets/forgot-password-v1-DTnDlwdz.js"), "./Pages/pages/authentication/forgot-password-v2.vue": () => import("./assets/forgot-password-v2-UAf-LkKy.js"), "./Pages/pages/authentication/login-v1.vue": () => import("./assets/login-v1-D8mVm3SL.js"), "./Pages/pages/authentication/login-v2.vue": () => import("./assets/login-v2-beSUSUnm.js"), "./Pages/pages/authentication/register-multi-steps.vue": () => import("./assets/register-multi-steps-DSy8ULu8.js"), "./Pages/pages/authentication/register-v1.vue": () => import("./assets/register-v1-BoNDib73.js"), "./Pages/pages/authentication/register-v2.vue": () => import("./assets/register-v2-CecXWU14.js"), "./Pages/pages/authentication/reset-password-v1.vue": () => import("./assets/reset-password-v1-CWEgjVw4.js"), "./Pages/pages/authentication/reset-password-v2.vue": () => import("./assets/reset-password-v2-DmuMovM4.js"), "./Pages/pages/authentication/two-steps-v1.vue": () => import("./assets/two-steps-v1-yaxfNaBb.js"), "./Pages/pages/authentication/two-steps-v2.vue": () => import("./assets/two-steps-v2-Cxwmyxs4.js"), "./Pages/pages/authentication/verify-email-v1.vue": () => import("./assets/verify-email-v1-BiJNd3f-.js"), "./Pages/pages/authentication/verify-email-v2.vue": () => import("./assets/verify-email-v2-DwwX-2IG.js"), "./Pages/pages/cards/card-actions.vue": () => import("./assets/card-actions-B2maObQy.js"), "./Pages/pages/cards/card-advance.vue": () => import("./assets/card-advance-CsmKMHvU.js"), "./Pages/pages/cards/card-basic.vue": () => import("./assets/card-basic-DPDAMjVE.js"), "./Pages/pages/cards/card-gamification.vue": () => import("./assets/card-gamification-use2dPh0.js"), "./Pages/pages/cards/card-statistics.vue": () => import("./assets/card-statistics-CT_8t9yu.js"), "./Pages/pages/cards/card-widgets.vue": () => import("./assets/card-widgets-Cy6-Z2m5.js"), "./Pages/pages/dialog-examples/index.vue": () => import("./assets/index-ChSoUVb_.js"), "./Pages/pages/faq.vue": () => import("./assets/faq-qIFSS9Ty.js"), "./Pages/pages/icons.vue": () => import("./assets/icons-D4w4eMOW.js"), "./Pages/pages/misc/coming-soon.vue": () => import("./assets/coming-soon-BEEXK3KP.js"), "./Pages/pages/misc/under-maintenance.vue": () => import("./assets/under-maintenance-Bqh_uQSm.js"), "./Pages/pages/pricing.vue": () => import("./assets/pricing-Dp_hza24.js"), "./Pages/pages/typography.vue": () => import("./assets/typography-CDGSYwyf.js"), "./Pages/pages/user-profile/[tab].vue": () => import("./assets/_tab_-B1QhFacy.js"), "./Pages/register.vue": () => import("./assets/register-Da-v4Wwu.js"), "./Pages/tables/data-table.vue": () => import("./assets/data-table-D2GwP_lw.js"), "./Pages/tables/simple-table.vue": () => import("./assets/simple-table-Cv57HZn8.js"), "./Pages/wizard-examples/checkout.vue": () => import("./assets/checkout-DCxmwyt8.js"), "./Pages/wizard-examples/create-deal.vue": () => import("./assets/create-deal-CyJLRcdM.js"), "./Pages/wizard-examples/property-listing.vue": () => import("./assets/property-listing-B2PpEyaU.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(registerPlugins).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    },
    progress: {
      color: "#4B5563"
    }
  })
);
export {
  IconValue as $,
  VBtnGroup as A,
  themeConfig as B,
  propsFactory as C,
  makeComponentProps as D,
  genericComponent as E,
  useRender as F,
  makeTagProps as G,
  avatar8 as H,
  avatar9 as I,
  avatar10 as J,
  react as K,
  figma as L,
  vue as M,
  html5 as N,
  hexToRgb as O,
  makeDimensionProps as P,
  useDimension as Q,
  makeRoundedProps as R,
  SUPPORTS_INTERSECTION as S,
  useBackgroundColor as T,
  useRounded as U,
  VBtn as V,
  getCurrentInstance as W,
  convertToUnit as X,
  breakpoints as Y,
  provideDefaults as Z,
  _export_sfc as _,
  VIcon as a,
  eventName as a$,
  makeDensityProps as a0,
  VDefaultsProvider as a1,
  makeBorderProps as a2,
  makeElevationProps as a3,
  makeLoaderProps as a4,
  makeLocationProps as a5,
  makePositionProps as a6,
  makeRouterProps as a7,
  makeThemeProps as a8,
  makeVariantProps as a9,
  deprecate as aA,
  getPropertyFromItem as aB,
  omit as aC,
  focusChild as aD,
  filterInputAttrs as aE,
  wrapInArray as aF,
  getCurrentInstanceName as aG,
  useToggleScope as aH,
  useRtl as aI,
  consoleWarn as aJ,
  makeDisplayProps as aK,
  useResizeObserver as aL,
  IN_BROWSER as aM,
  focusableChildren as aN,
  clamp as aO,
  matchesSelector as aP,
  callEvent as aQ,
  debounce as aR,
  ensureValidVNode as aS,
  isClickInsideElement as aT,
  getNextElement as aU,
  isOn as aV,
  pick as aW,
  defineFunctionalComponent as aX,
  consoleError as aY,
  getObjectValueByPath as aZ,
  isEmpty as a_,
  Ripple as aa,
  provideTheme as ab,
  useBorder as ac,
  useVariant as ad,
  useDensity as ae,
  useElevation as af,
  useLoader as ag,
  useLocation as ah,
  usePosition as ai,
  useLink as aj,
  LoaderSlot as ak,
  genOverlays as al,
  makeSizeProps as am,
  useSize as an,
  useCookie as ao,
  deepEqual as ap,
  makeGroupProps as aq,
  useGroup as ar,
  EventProp as as,
  makeGroupItemProps as at,
  useLocale as au,
  useProxiedModel as av,
  useGroupItem as aw,
  useTextColor as ax,
  getUid as ay,
  defineComponent as az,
  VProgressCircular as b,
  destructComputed as b0,
  parseAnchor as b1,
  flipSide as b2,
  flipAlign as b3,
  flipCorner as b4,
  getAxis as b5,
  defer as b6,
  refElement as b7,
  useRouter as b8,
  useBackButton as b9,
  HSVtoRGB as bA,
  HSVtoHSL as bB,
  RGBtoHSV as bC,
  HSLtoHSV as bD,
  HexToHSV as bE,
  SUPPORTS_EYE_DROPPER as bF,
  HSVtoCSS as bG,
  parseColor as bH,
  RGBtoCSS as bI,
  getContrast as bJ,
  cookieRef as bK,
  namespaceConfig as bL,
  Theme as bM,
  Skins as bN,
  Layout as bO,
  AppContentLayoutNav as bP,
  ContentWidth as bQ,
  Direction as bR,
  staticPrimaryColor as bS,
  staticPrimaryDarkenColor as bT,
  _sfc_main$2 as bU,
  createRange as ba,
  keyValues as bb,
  findChildrenWithProvide as bc,
  CircularBuffer as bd,
  toPhysical as be,
  pickWithRest as bf,
  makeVBtnProps as bg,
  isObject$1 as bh,
  keys as bi,
  humanReadableFileSize as bj,
  VBtnToggle as bk,
  getDecimals as bl,
  noop$1 as bm,
  isComposingIgnoreKey as bn,
  xls as bo,
  only as bp,
  flagIndia as bq,
  flagBrazil as br,
  flagAus as bs,
  flagFr as bt,
  flagChina as bu,
  useSkins as bv,
  _sfc_main$8 as bw,
  getEventCoordinates as bx,
  HSVtoHex as by,
  has as bz,
  avatar1 as c,
  avatar2 as d,
  avatar3 as e,
  avatar4 as f,
  VProgressLinear as g,
  avatar5 as h,
  avatar7 as i,
  avatar6 as j,
  useDisplay as k,
  useTheme as l,
  flagUsa as m,
  product1 as n,
  product9$1 as o,
  product24$1 as p,
  product10$1 as q,
  product19$1 as r,
  product12 as s,
  themes as t,
  useConfigStore as u,
  product14$1 as v,
  product17$1 as w,
  product11$1 as x,
  product2 as y,
  VNodeRenderer as z
};
