import { watch, onMounted, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useShepherd } from "vue-shepherd";
import { V as VBtn } from "../ssr.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { useMagicKeys } from "@vueuse/core";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
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
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
const _sfc_main = {
  __name: "tour",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { ctrl_k, meta_k } = useMagicKeys();
    let tour = null;
    watch([
      ctrl_k,
      meta_k,
      () => route.path
    ], () => {
      if (tour.isActive())
        tour.cancel();
    });
    onMounted(() => {
      const navbar = document.querySelector(".layout-navbar");
      tour = useShepherd({
        useModalOverlay: true,
        stepsContainer: document.querySelector(".layout-wrapper"),
        modelContainer: document.querySelector(".layout-wrapper"),
        defaultStepOptions: {
          cancelIcon: { enabled: true },
          modalOverlayOpeningPadding: 2,
          modalOverlayOpeningRadius: 5
        }
      });
      tour.addSteps([
        {
          id: "welcome",
          title: "Welcome",
          arrow: true,
          attachTo: {
            element: navbar,
            on: "bottom"
          },
          text: "Welcome to our tour page, Guide users to the key features of the product.",
          buttons: [
            {
              action: tour.cancel,
              classes: "backBtnClass",
              text: "Back"
            },
            {
              action: tour.next,
              text: "Next",
              classes: "nextBtnClass"
            }
          ]
        },
        {
          id: "notification",
          title: "Notifications",
          arrow: true,
          attachTo: {
            element: document.querySelector("#notification-btn"),
            on: "bottom"
          },
          text: "Manage your notifications and stay up-to-date with latest updates.",
          buttons: [
            {
              label: "Back",
              text: "Back",
              action: tour.back,
              classes: "backBtnClass"
            },
            {
              label: "Next",
              text: "Next",
              action: tour.next,
              classes: "nextBtnClass"
            }
          ]
        },
        {
          id: "footer",
          title: "Footer",
          arrow: true,
          attachTo: {
            element: document.querySelector(".layout-footer"),
            on: "bottom"
          },
          text: "Footer section of the page.",
          buttons: [
            {
              label: "Back",
              text: "Back",
              action: tour.back,
              classes: "backBtnClass"
            },
            {
              label: "Finish",
              text: "Finish",
              action: tour.complete,
              classes: "nextBtnClass"
            }
          ]
        }
      ]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, { title: "Tour" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    onClick: () => {
                      unref(tour) && unref(tour).start();
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Start Tour `);
                      } else {
                        return [
                          createTextVNode(" Start Tour ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      onClick: () => {
                        unref(tour) && unref(tour).start();
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Start Tour ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    onClick: () => {
                      unref(tour) && unref(tour).start();
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Start Tour ")
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/extensions/tour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
