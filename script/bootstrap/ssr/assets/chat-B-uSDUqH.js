import { a as avatarText, f as formatDateToMonthShort, b as formatDate } from "./formatters-DpL1jrjT.js";
import { resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, useSSRContext, computed, mergeProps, isRef, Fragment, renderList, withDirectives, vShow, ref, watch, withModifiers, nextTick } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { a as VIcon, V as VBtn, k as useDisplay, l as useTheme, t as themes } from "../ssr.js";
import { defineStore } from "pinia";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { useVModel } from "@vueuse/core";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { u as useResponsiveLeftSidebar, V as VLayout, a as VMain } from "./VMain-BANwmGQ5.js";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList } from "./VList-Bay5Fixr.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import "./helpers-DX2i3Kdq.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VSelectionControl-DW0YMxqK.js";
/* empty css               */
import "./ssrBoot-Co4_dNdy.js";
import "./scopeId-3C34eX5s.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./dialog-transition-CtM2qLK8.js";
const useChat = () => {
  const resolveAvatarBadgeVariant = (status) => {
    if (status === "online")
      return "success";
    if (status === "busy")
      return "error";
    if (status === "away")
      return "warning";
    return "secondary";
  };
  return {
    resolveAvatarBadgeVariant
  };
};
const useChatStore = defineStore("chat", {
  // ℹ️ arrow function recommended for full type inference
  state: () => ({
    contacts: [],
    chatsContacts: [],
    profileUser: void 0,
    activeChat: null
  }),
  actions: {
    async fetchChatsAndContacts(q) {
      const { data, error } = await useApi(createUrl("/apps/chat/chats-and-contacts", {
        query: {
          q
        }
      }));
      if (error.value) {
        console.log(error.value);
      } else {
        const { chatsContacts, contacts, profileUser } = data.value;
        this.chatsContacts = chatsContacts;
        this.contacts = contacts;
        this.profileUser = profileUser;
      }
    },
    async getChat(userId) {
      const res = await $api(`/apps/chat/chats/${userId}`);
      this.activeChat = res;
    },
    async sendMsg(message) {
      var _a, _b, _c, _d, _e;
      const senderId = (_a = this.profileUser) == null ? void 0 : _a.id;
      const response = await $api(`apps/chat/chats/${(_b = this.activeChat) == null ? void 0 : _b.contact.id}`, {
        method: "POST",
        body: { message, senderId }
      });
      const { msg, chat } = response;
      if (chat !== void 0) {
        const activeChat = this.activeChat;
        this.chatsContacts.push({
          ...activeChat.contact,
          chat: {
            id: chat.id,
            lastMessage: [],
            unseenMsgs: 0,
            messages: [msg]
          }
        });
        if (this.activeChat) {
          this.activeChat.chat = {
            id: chat.id,
            messages: [msg],
            unseenMsgs: 0,
            userId: (_c = this.activeChat) == null ? void 0 : _c.contact.id
          };
        }
      } else {
        (_e = (_d = this.activeChat) == null ? void 0 : _d.chat) == null ? void 0 : _e.messages.push(msg);
      }
      const contact = this.chatsContacts.find((c) => {
        if (this.activeChat)
          return c.id === this.activeChat.contact.id;
        return false;
      });
      contact.chat.lastMessage = msg;
    }
  }
});
const _sfc_main$5 = {
  __name: "ChatActiveChatUserProfileSidebarContent",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const store = useChatStore();
    const { resolveAvatarBadgeVariant } = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      if (unref(store).activeChat) {
        _push(`<!--[--><div class="${ssrRenderClass([_ctx.$vuetify.locale.isRtl ? "text-left" : "text-right", "me-3 pt-3"])}">`);
        _push(ssrRenderComponent(_component_IconBtn, {
          onClick: ($event) => _ctx.$emit("close")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-close-line",
                class: "text-medium-emphasis",
                size: "24"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  icon: "ri-close-line",
                  class: "text-medium-emphasis",
                  size: "24"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-center px-6 mt-n2">`);
        _push(ssrRenderComponent(VBadge, {
          location: "bottom right",
          "offset-x": "13",
          "offset-y": "7",
          bordered: "",
          color: unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status),
          class: "chat-user-profile-badge mb-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                size: "84",
                variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(store).activeChat.contact.avatar) {
                      _push3(ssrRenderComponent(VImg, {
                        src: unref(store).activeChat.contact.avatar
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<span class="text-3xl"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName))}</span>`);
                    }
                  } else {
                    return [
                      unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: unref(store).activeChat.contact.avatar
                      }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-3xl"
                      }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAvatar, {
                  size: "84",
                  variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                  color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0
                }, {
                  default: withCtx(() => [
                    unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: unref(store).activeChat.contact.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-3xl"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                  ]),
                  _: 1
                }, 8, ["variant", "color"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h5 class="text-h5">${ssrInterpolate(unref(store).activeChat.contact.fullName)}</h5><p class="text-body-1 mb-0">${ssrInterpolate(unref(store).activeChat.contact.role)}</p></div>`);
        _push(ssrRenderComponent(unref(PerfectScrollbar), {
          class: "ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5",
          options: { wheelPropagation: false }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="my-6"${_scopeId}><p for="textarea-user-about" class="text-base text-disabled mb-1"${_scopeId}> ABOUT </p><p class="text-body-1 mb-0"${_scopeId}>${ssrInterpolate(unref(store).activeChat.contact.about)}</p></div><div class="mb-6"${_scopeId}><p class="text-base text-disabled mb-1"${_scopeId}> PERSONAL INFORMATION </p><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                color: "high-emphasis",
                icon: "ri-mail-line"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> lucifer@email.com </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                color: "high-emphasis",
                icon: "ri-phone-line"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> +1(123) 456 - 7890 </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                icon: "ri-time-line",
                color: "high-emphasis"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Mon - Fri 10AM - 8PM </h6></div></div><div class="pb-5"${_scopeId}><p class="text-base text-disabled mb-1"${_scopeId}> OPTIONS </p><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                color: "high-emphasis",
                icon: "ri-bookmark-line"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Add Tag </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                color: "high-emphasis",
                icon: "ri-user-star-line"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Important Contact </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                size: "22",
                color: "high-emphasis",
                icon: "ri-image-2-line"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Shared Media </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                size: "22",
                color: "high-emphasis",
                icon: "ri-forbid-2-line",
                class: "me-2"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Block Contact </h6></div></div>`);
              _push2(ssrRenderComponent(VBtn, {
                block: "",
                color: "error",
                "append-icon": "ri-delete-bin-7-line",
                class: "mt-15"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Delete Contact `);
                  } else {
                    return [
                      createTextVNode(" Delete Contact ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "my-6" }, [
                  createVNode("p", {
                    for: "textarea-user-about",
                    class: "text-base text-disabled mb-1"
                  }, " ABOUT "),
                  createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(unref(store).activeChat.contact.about), 1)
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode("p", { class: "text-base text-disabled mb-1" }, " PERSONAL INFORMATION "),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-mail-line"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " lucifer@email.com ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-phone-line"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " +1(123) 456 - 7890 ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      icon: "ri-time-line",
                      color: "high-emphasis"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Mon - Fri 10AM - 8PM ")
                  ])
                ]),
                createVNode("div", { class: "pb-5" }, [
                  createVNode("p", { class: "text-base text-disabled mb-1" }, " OPTIONS "),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-bookmark-line"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Add Tag ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-user-star-line"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Important Contact ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-image-2-line"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Shared Media ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      size: "22",
                      color: "high-emphasis",
                      icon: "ri-forbid-2-line",
                      class: "me-2"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Block Contact ")
                  ])
                ]),
                createVNode(VBtn, {
                  block: "",
                  color: "error",
                  "append-icon": "ri-delete-bin-7-line",
                  class: "mt-15"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Contact ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/chat/ChatActiveChatUserProfileSidebarContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ChatContact",
  __ssrInlineRender: true,
  props: {
    isChatContact: {
      type: Boolean,
      required: false,
      default: false
    },
    user: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const store = useChatStore();
    const { resolveAvatarBadgeVariant } = useChat();
    const isChatContactActive = computed(() => {
      var _a, _b;
      const isActive = ((_a = store.activeChat) == null ? void 0 : _a.contact.id) === props.user.id;
      if (!props.isChatContact)
        return !((_b = store.activeChat) == null ? void 0 : _b.chat) && isActive;
      return isActive;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        key: unref(store).chatsContacts.length,
        class: ["chat-contact cursor-pointer d-flex align-center", { "chat-contact-active": unref(isChatContactActive) }],
        "data-x": unref(store).chatsContacts.length
      }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        dot: "",
        location: "bottom right",
        "offset-x": "3",
        "offset-y": "3",
        color: unref(resolveAvatarBadgeVariant)(props.user.status),
        bordered: "",
        "model-value": props.isChatContact
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, {
              size: "40",
              variant: !props.user.avatar ? "tonal" : void 0,
              color: !props.user.avatar ? unref(resolveAvatarBadgeVariant)(props.user.status) : void 0
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.user.avatar) {
                    _push3(ssrRenderComponent(VImg, {
                      src: props.user.avatar,
                      alt: "John Doe"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(__props.user.fullName))}</span>`);
                  }
                } else {
                  return [
                    props.user.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: props.user.avatar,
                      alt: "John Doe"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(__props.user.fullName)), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, {
                size: "40",
                variant: !props.user.avatar ? "tonal" : void 0,
                color: !props.user.avatar ? unref(resolveAvatarBadgeVariant)(props.user.status) : void 0
              }, {
                default: withCtx(() => [
                  props.user.avatar ? (openBlock(), createBlock(VImg, {
                    key: 0,
                    src: props.user.avatar,
                    alt: "John Doe"
                  }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(__props.user.fullName)), 1))
                ]),
                _: 1
              }, 8, ["variant", "color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-grow-1 ms-4 overflow-hidden"><p class="text-base mb-0">${ssrInterpolate(props.user.fullName)}</p><span class="d-block text-body-2 text-truncate">${ssrInterpolate(props.isChatContact && "chat" in props.user ? props.user.chat.lastMessage.message : props.user.about)}</span></div>`);
      if (props.isChatContact && "chat" in props.user) {
        _push(`<div class="d-flex flex-column align-self-start"><span class="d-block text-sm text-disabled whitespace-no-wrap">${ssrInterpolate(("formatDateToMonthShort" in _ctx ? _ctx.formatDateToMonthShort : unref(formatDateToMonthShort))(props.user.chat.lastMessage.time))}</span>`);
        if (props.user.chat.unseenMsgs) {
          _push(ssrRenderComponent(VBadge, {
            color: "error",
            inline: "",
            content: props.user.chat.unseenMsgs,
            class: "ms-auto"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/chat/ChatContact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ChatLeftSidebarContent",
  __ssrInlineRender: true,
  props: {
    search: {
      type: String,
      required: true
    },
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "openChatOfContact",
    "showUserProfile",
    "close",
    "update:search"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { resolveAvatarBadgeVariant } = useChat();
    const search = useVModel(props, "search", emit);
    const store = useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<!--[-->`);
      if (unref(store).profileUser) {
        _push(`<div class="chat-list-header gap-4">`);
        _push(ssrRenderComponent(VBadge, {
          dot: "",
          location: "bottom right",
          "offset-x": "3",
          "offset-y": "3",
          color: unref(resolveAvatarBadgeVariant)(unref(store).profileUser.status),
          bordered: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                class: "cursor-pointer",
                onClick: ($event) => _ctx.$emit("showUserProfile")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VImg, {
                      src: unref(store).profileUser.avatar,
                      alt: "John Doe"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: unref(store).profileUser.avatar,
                        alt: "John Doe"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAvatar, {
                  class: "cursor-pointer",
                  onClick: ($event) => _ctx.$emit("showUserProfile")
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: unref(store).profileUser.avatar,
                      alt: "John Doe"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VTextField, {
          modelValue: unref(search),
          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
          placeholder: "Search...",
          "prepend-inner-icon": "ri-search-line",
          density: "compact",
          class: "chat-list-search"
        }, null, _parent));
        if (_ctx.$vuetify.display.smAndDown) {
          _push(ssrRenderComponent(_component_IconBtn, {
            onClick: ($event) => _ctx.$emit("close")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VIcon, {
                  icon: "ri-close-line",
                  class: "text-medium-emphasis"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VIcon, {
                    icon: "ri-close-line",
                    class: "text-medium-emphasis"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VDivider, null, null, _parent));
      _push(ssrRenderComponent(unref(PerfectScrollbar), {
        tag: "ul",
        class: "chat-contacts-list px-3 d-flex flex-column gap-1",
        options: { wheelPropagation: false }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="list-none"${_scopeId}><span class="chat-contact-header d-block text-primary text-lg font-weight-medium"${_scopeId}>Chats</span></li><!--[-->`);
            ssrRenderList(unref(store).chatsContacts, (contact) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key: `chat-${contact.id}`,
                user: contact,
                "is-chat-contact": "",
                onClick: ($event) => _ctx.$emit("openChatOfContact", contact.id)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><span style="${ssrRenderStyle(!unref(store).chatsContacts.length ? null : { display: "none" })}" class="no-chat-items-text text-disabled"${_scopeId}>No chats found</span><li class="list-none"${_scopeId}><span class="chat-contact-header d-block text-primary text-lg font-weight-medium mt-5"${_scopeId}>Contacts</span></li><!--[-->`);
            ssrRenderList(unref(store).contacts, (contact) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key: `chat-${contact.id}`,
                user: contact,
                onClick: ($event) => _ctx.$emit("openChatOfContact", contact.id)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><span style="${ssrRenderStyle(!unref(store).contacts.length ? null : { display: "none" })}" class="no-chat-items-text text-disabled"${_scopeId}>No contacts found</span>`);
          } else {
            return [
              createVNode("li", { class: "list-none" }, [
                createVNode("span", { class: "chat-contact-header d-block text-primary text-lg font-weight-medium" }, "Chats")
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(store).chatsContacts, (contact) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  key: `chat-${contact.id}`,
                  user: contact,
                  "is-chat-contact": "",
                  onClick: ($event) => _ctx.$emit("openChatOfContact", contact.id)
                }, null, 8, ["user", "onClick"]);
              }), 128)),
              withDirectives(createVNode("span", { class: "no-chat-items-text text-disabled" }, "No chats found", 512), [
                [vShow, !unref(store).chatsContacts.length]
              ]),
              createVNode("li", { class: "list-none" }, [
                createVNode("span", { class: "chat-contact-header d-block text-primary text-lg font-weight-medium mt-5" }, "Contacts")
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(store).contacts, (contact) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  key: `chat-${contact.id}`,
                  user: contact,
                  onClick: ($event) => _ctx.$emit("openChatOfContact", contact.id)
                }, null, 8, ["user", "onClick"]);
              }), 128)),
              withDirectives(createVNode("span", { class: "no-chat-items-text text-disabled" }, "No contacts found", 512), [
                [vShow, !unref(store).contacts.length]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/chat/ChatLeftSidebarContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ChatLog",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useChatStore();
    const contact = computed(() => {
      var _a, _b;
      return {
        id: (_a = store.activeChat) == null ? void 0 : _a.contact.id,
        avatar: (_b = store.activeChat) == null ? void 0 : _b.contact.avatar
      };
    });
    const resolveFeedbackIcon = (feedback) => {
      if (feedback.isSeen)
        return {
          icon: "ri-check-double-line",
          color: "success"
        };
      else if (feedback.isDelivered)
        return {
          icon: "ri-check-double-line",
          color: void 0
        };
      else
        return {
          icon: "ri-check-line",
          color: void 0
        };
    };
    const msgGroups = computed(() => {
      let messages = [];
      const _msgGroups = [];
      if (store.activeChat.chat) {
        messages = store.activeChat.chat.messages;
        let msgSenderId = messages[0].senderId;
        let msgGroup = {
          senderId: msgSenderId,
          messages: []
        };
        messages.forEach((msg, index) => {
          if (msgSenderId === msg.senderId) {
            msgGroup.messages.push({
              message: msg.message,
              time: msg.time,
              feedback: msg.feedback
            });
          } else {
            msgSenderId = msg.senderId;
            _msgGroups.push(msgGroup);
            msgGroup = {
              senderId: msg.senderId,
              messages: [{
                message: msg.message,
                time: msg.time,
                feedback: msg.feedback
              }]
            };
          }
          if (index === messages.length - 1)
            _msgGroups.push(msgGroup);
        });
      }
      return _msgGroups;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-log pa-5" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(msgGroups), (msgGrp, index) => {
        _push(`<div class="${ssrRenderClass([[{
          "flex-row-reverse": msgGrp.senderId !== unref(contact).id,
          "mb-10": unref(msgGroups).length - 1 !== index
        }], "chat-group d-flex align-start"])}"><div class="${ssrRenderClass([msgGrp.senderId !== unref(contact).id ? "ms-4" : "me-4", "chat-avatar"])}">`);
        _push(ssrRenderComponent(VAvatar, { size: "32" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(ssrRenderComponent(VImg, {
                src: msgGrp.senderId === unref(contact).id ? unref(contact).avatar : (_a = unref(store).profileUser) == null ? void 0 : _a.avatar
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VImg, {
                  src: msgGrp.senderId === unref(contact).id ? unref(contact).avatar : (_b = unref(store).profileUser) == null ? void 0 : _b.avatar
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="${ssrRenderClass([msgGrp.senderId !== unref(contact).id ? "align-end" : "align-start", "chat-body d-inline-flex flex-column"])}"><!--[-->`);
        ssrRenderList(msgGrp.messages, (msgData, msgIndex) => {
          _push(`<div class="${ssrRenderClass([[
            msgGrp.senderId === unref(contact).id ? "bg-surface chat-left" : "bg-primary text-white chat-right",
            msgGrp.messages.length - 1 !== msgIndex ? "mb-2" : "mb-1"
          ], "chat-content text-body-1 py-2 px-4 elevation-2"])}"><p class="mb-0">${ssrInterpolate(msgData.message)}</p></div>`);
        });
        _push(`<!--]--><div class="${ssrRenderClass([{ "text-right": msgGrp.senderId !== unref(contact).id }, "d-flex align-center gap-2"])}">`);
        if (msgGrp.senderId !== unref(contact).id) {
          _push(ssrRenderComponent(VIcon, {
            size: "16",
            color: resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1].feedback).color
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1].feedback).icon)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1].feedback).icon), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-caption text-disabled mb-0" style="${ssrRenderStyle({ "letter-spacing": "0.4px" })}">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(msgGrp.messages[msgGrp.messages.length - 1].time, { hour: "numeric", minute: "numeric" }))}</p></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/chat/ChatLog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ChatUserProfileSidebarContent",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const store = useChatStore();
    const { resolveAvatarBadgeVariant } = useChat();
    const userStatusRadioOptions = [
      {
        title: "Online",
        value: "online",
        color: "success"
      },
      {
        title: "Away",
        value: "away",
        color: "warning"
      },
      {
        title: "Do not Disturb",
        value: "busy",
        color: "error"
      },
      {
        title: "Offline",
        value: "offline",
        color: "secondary"
      }
    ];
    const isTwoStepVerified = ref(true);
    const isNotificationEnabled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      if (unref(store).profileUser) {
        _push(`<!--[--><div class="me-3 pt-3 text-end">`);
        _push(ssrRenderComponent(_component_IconBtn, {
          onClick: ($event) => _ctx.$emit("close")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                class: "text-medium-emphasis",
                icon: "ri-close-line",
                size: "24"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  class: "text-medium-emphasis",
                  icon: "ri-close-line",
                  size: "24"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-center px-6 mt-n2">`);
        _push(ssrRenderComponent(VBadge, {
          location: "bottom right",
          "offset-x": "13",
          "offset-y": "7",
          bordered: "",
          color: unref(resolveAvatarBadgeVariant)(unref(store).profileUser.status),
          class: "chat-user-profile-badge mb-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                size: "84",
                variant: !unref(store).profileUser.avatar ? "tonal" : void 0,
                color: !unref(store).profileUser.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).profileUser.status) : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(store).profileUser.avatar) {
                      _push3(ssrRenderComponent(VImg, {
                        src: unref(store).profileUser.avatar
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<span class="text-3xl"${_scopeId2}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).profileUser.fullName))}</span>`);
                    }
                  } else {
                    return [
                      unref(store).profileUser.avatar ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: unref(store).profileUser.avatar
                      }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-3xl"
                      }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).profileUser.fullName)), 1))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAvatar, {
                  size: "84",
                  variant: !unref(store).profileUser.avatar ? "tonal" : void 0,
                  color: !unref(store).profileUser.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).profileUser.status) : void 0
                }, {
                  default: withCtx(() => [
                    unref(store).profileUser.avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: unref(store).profileUser.avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-3xl"
                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).profileUser.fullName)), 1))
                  ]),
                  _: 1
                }, 8, ["variant", "color"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h5 class="text-h5">${ssrInterpolate(unref(store).profileUser.fullName)}</h5><p class="text-body-1 text-capitalize mb-0">${ssrInterpolate(unref(store).profileUser.role)}</p></div>`);
        _push(ssrRenderComponent(unref(PerfectScrollbar), {
          class: "ps-chat-user-profile-sidebar-content pb-5 px-5",
          options: { wheelPropagation: false }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="my-6 text-medium-emphasis"${_scopeId}><p for="textarea-user-about" class="text-base text-disabled mb-0"${_scopeId}> ABOUT </p>`);
              _push2(ssrRenderComponent(VTextarea, {
                id: "textarea-user-about",
                modelValue: unref(store).profileUser.about,
                "onUpdate:modelValue": ($event) => unref(store).profileUser.about = $event,
                "auto-grow": "",
                class: "mt-1",
                rows: "3"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mb-6"${_scopeId}><p class="text-base text-disabled mb-0"${_scopeId}> STATUS </p>`);
              _push2(ssrRenderComponent(VRadioGroup, {
                modelValue: unref(store).profileUser.status,
                "onUpdate:modelValue": ($event) => unref(store).profileUser.status = $event,
                class: "mt-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(userStatusRadioOptions, (radioOption) => {
                      _push3(ssrRenderComponent(VRadio, {
                        key: radioOption.title,
                        label: radioOption.title,
                        value: radioOption.value,
                        color: radioOption.color
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(userStatusRadioOptions, (radioOption) => {
                        return createVNode(VRadio, {
                          key: radioOption.title,
                          label: radioOption.title,
                          value: radioOption.value,
                          color: radioOption.color
                        }, null, 8, ["label", "value", "color"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-medium-emphasis chat-settings-section"${_scopeId}><p class="text-base text-disabled mb-1"${_scopeId}> SETTINGS </p><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                icon: "ri-lock-password-line",
                size: "22",
                color: "high-emphasis"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Two-step Verification </h6>`);
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSwitch, {
                modelValue: unref(isTwoStepVerified),
                "onUpdate:modelValue": ($event) => isRef(isTwoStepVerified) ? isTwoStepVerified.value = $event : null,
                density: "compact"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                icon: "ri-notification-line",
                size: "22",
                color: "high-emphasis"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Notification </h6>`);
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSwitch, {
                modelValue: unref(isNotificationEnabled),
                "onUpdate:modelValue": ($event) => isRef(isNotificationEnabled) ? isNotificationEnabled.value = $event : null
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                icon: "ri-user-add-line",
                size: "22",
                color: "high-emphasis"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Invite Friends </h6></div><div class="d-flex align-center pa-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                class: "me-2",
                icon: "ri-delete-bin-7-line",
                size: "22",
                color: "high-emphasis"
              }, null, _parent2, _scopeId));
              _push2(`<h6 class="text-h6 font-weight-regular"${_scopeId}> Delete Account </h6></div></div>`);
              _push2(ssrRenderComponent(VBtn, {
                block: "",
                color: "primary",
                class: "mt-11",
                "append-icon": "ri-logout-box-r-line"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Logout `);
                  } else {
                    return [
                      createTextVNode(" Logout ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "my-6 text-medium-emphasis" }, [
                  createVNode("p", {
                    for: "textarea-user-about",
                    class: "text-base text-disabled mb-0"
                  }, " ABOUT "),
                  createVNode(VTextarea, {
                    id: "textarea-user-about",
                    modelValue: unref(store).profileUser.about,
                    "onUpdate:modelValue": ($event) => unref(store).profileUser.about = $event,
                    "auto-grow": "",
                    class: "mt-1",
                    rows: "3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode("p", { class: "text-base text-disabled mb-0" }, " STATUS "),
                  createVNode(VRadioGroup, {
                    modelValue: unref(store).profileUser.status,
                    "onUpdate:modelValue": ($event) => unref(store).profileUser.status = $event,
                    class: "mt-1"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(userStatusRadioOptions, (radioOption) => {
                        return createVNode(VRadio, {
                          key: radioOption.title,
                          label: radioOption.title,
                          value: radioOption.value,
                          color: radioOption.color
                        }, null, 8, ["label", "value", "color"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-medium-emphasis chat-settings-section" }, [
                  createVNode("p", { class: "text-base text-disabled mb-1" }, " SETTINGS "),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      icon: "ri-lock-password-line",
                      size: "22",
                      color: "high-emphasis"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Two-step Verification "),
                    createVNode(VSpacer),
                    createVNode(VSwitch, {
                      modelValue: unref(isTwoStepVerified),
                      "onUpdate:modelValue": ($event) => isRef(isTwoStepVerified) ? isTwoStepVerified.value = $event : null,
                      density: "compact"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      icon: "ri-notification-line",
                      size: "22",
                      color: "high-emphasis"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Notification "),
                    createVNode(VSpacer),
                    createVNode(VSwitch, {
                      modelValue: unref(isNotificationEnabled),
                      "onUpdate:modelValue": ($event) => isRef(isNotificationEnabled) ? isNotificationEnabled.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      icon: "ri-user-add-line",
                      size: "22",
                      color: "high-emphasis"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Invite Friends ")
                  ]),
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(VIcon, {
                      class: "me-2",
                      icon: "ri-delete-bin-7-line",
                      size: "22",
                      color: "high-emphasis"
                    }),
                    createVNode("h6", { class: "text-h6 font-weight-regular" }, " Delete Account ")
                  ])
                ]),
                createVNode(VBtn, {
                  block: "",
                  color: "primary",
                  class: "mt-11",
                  "append-icon": "ri-logout-box-r-line"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Logout ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/chat/ChatUserProfileSidebarContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyDisplays = useDisplay();
    const store = useChatStore();
    const { isLeftSidebarOpen } = useResponsiveLeftSidebar(vuetifyDisplays.smAndDown);
    const { resolveAvatarBadgeVariant } = useChat();
    const chatLogPS = ref();
    const scrollToBottomInChatLog = () => {
      const scrollEl = chatLogPS.value.$el || chatLogPS.value;
      scrollEl.scrollTop = scrollEl.scrollHeight;
    };
    const q = ref("");
    watch(q, (val) => store.fetchChatsAndContacts(val), { immediate: true });
    const startConversation = () => {
      if (vuetifyDisplays.mdAndUp.value)
        return;
      isLeftSidebarOpen.value = true;
    };
    const msg = ref("");
    const sendMessage = async () => {
      if (!msg.value.trim())
        return;
      await store.sendMsg(msg.value);
      msg.value = "";
      nextTick(() => {
        scrollToBottomInChatLog();
      });
    };
    const openChatOfContact = async (userId) => {
      await store.getChat(userId);
      msg.value = "";
      const contact = store.chatsContacts.find((c) => c.id === userId);
      if (contact)
        contact.chat.unseenMsgs = 0;
      if (vuetifyDisplays.smAndDown.value)
        isLeftSidebarOpen.value = false;
      nextTick(() => {
        scrollToBottomInChatLog();
      });
    };
    const isUserProfileSidebarOpen = ref(false);
    const isActiveChatUserProfileSidebarOpen = ref(false);
    const refInputEl = ref();
    const moreList = [
      {
        title: "View Contact",
        value: "View Contact"
      },
      {
        title: "Mute Notifications",
        value: "Mute Notifications"
      },
      {
        title: "Block Contact",
        value: "Block Contact"
      },
      {
        title: "Clear Chat",
        value: "Clear Chat"
      },
      {
        title: "Report",
        value: "Report"
      }
    ];
    const { name } = useTheme();
    const chatContentContainerBg = computed(() => {
      var _a, _b;
      let color = "transparent";
      if (themes)
        color = (_b = (_a = themes) == null ? void 0 : _a[name.value].colors) == null ? void 0 : _b["chat-bg"];
      return color;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _cssVars = { style: {
        "--217cd932": unref(chatContentContainerBg)
      } };
      _push(ssrRenderComponent(VLayout, mergeProps({ class: "chat-app-layout bg-surface" }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(isUserProfileSidebarOpen),
              "onUpdate:modelValue": ($event) => isRef(isUserProfileSidebarOpen) ? isUserProfileSidebarOpen.value = $event : null,
              temporary: "",
              touchless: "",
              absolute: "",
              class: "user-profile-sidebar",
              location: "start",
              width: "370"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    onClose: ($event) => isUserProfileSidebarOpen.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      onClose: ($event) => isUserProfileSidebarOpen.value = false
                    }, null, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(isActiveChatUserProfileSidebarOpen),
              "onUpdate:modelValue": ($event) => isRef(isActiveChatUserProfileSidebarOpen) ? isActiveChatUserProfileSidebarOpen.value = $event : null,
              width: "374",
              absolute: "",
              temporary: "",
              location: "end",
              touchless: "",
              class: "active-chat-user-profile-sidebar"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    onClose: ($event) => isActiveChatUserProfileSidebarOpen.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      onClose: ($event) => isActiveChatUserProfileSidebarOpen.value = false
                    }, null, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(isLeftSidebarOpen),
              "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
              absolute: "",
              touchless: "",
              location: "start",
              width: "370",
              temporary: _ctx.$vuetify.display.smAndDown,
              class: "chat-list-sidebar",
              permanent: _ctx.$vuetify.display.mdAndUp
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    isDrawerOpen: unref(isLeftSidebarOpen),
                    "onUpdate:isDrawerOpen": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                    search: unref(q),
                    "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                    onOpenChatOfContact: openChatOfContact,
                    onShowUserProfile: ($event) => isUserProfileSidebarOpen.value = true,
                    onClose: ($event) => isLeftSidebarOpen.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      isDrawerOpen: unref(isLeftSidebarOpen),
                      "onUpdate:isDrawerOpen": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                      search: unref(q),
                      "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                      onOpenChatOfContact: openChatOfContact,
                      onShowUserProfile: ($event) => isUserProfileSidebarOpen.value = true,
                      onClose: ($event) => isLeftSidebarOpen.value = false
                    }, null, 8, ["isDrawerOpen", "onUpdate:isDrawerOpen", "search", "onUpdate:search", "onShowUserProfile", "onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "chat-content-container" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(store).activeChat) {
                    _push3(`<div class="d-flex flex-column h-100"${_scopeId2}><div class="active-chat-header d-flex align-center text-medium-emphasis"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      class: "d-md-none me-4",
                      onClick: ($event) => isLeftSidebarOpen.value = true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-menu-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-menu-line" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex align-center cursor-pointer"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBadge, {
                      dot: "",
                      location: "bottom right",
                      "offset-x": "3",
                      "offset-y": "3",
                      color: unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status),
                      bordered: "",
                      class: "me-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAvatar, {
                            size: "40",
                            variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                            color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0,
                            class: "cursor-pointer"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(store).activeChat.contact.avatar) {
                                  _push5(ssrRenderComponent(VImg, {
                                    src: unref(store).activeChat.contact.avatar,
                                    alt: unref(store).activeChat.contact.fullName
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName))}</span>`);
                                }
                              } else {
                                return [
                                  unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                                    key: 0,
                                    src: unref(store).activeChat.contact.avatar,
                                    alt: unref(store).activeChat.contact.fullName
                                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VAvatar, {
                              size: "40",
                              variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                              color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0,
                              class: "cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: unref(store).activeChat.contact.avatar,
                                  alt: unref(store).activeChat.contact.fullName
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                              ]),
                              _: 1
                            }, 8, ["variant", "color"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex-grow-1 overflow-hidden"${_scopeId2}><h6 class="text-h6 font-weight-regular"${_scopeId2}>${ssrInterpolate(unref(store).activeChat.contact.fullName)}</h6><p class="text-body-2 text-truncate mb-0"${_scopeId2}>${ssrInterpolate(unref(store).activeChat.contact.role)}</p></div></div>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(`<div class="d-sm-flex align-center gap-1 d-none"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-phone-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-phone-line" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-video-add-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-video-add-line" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-search-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-search-line" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, { items: moreList }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, { items: moreList })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-more-2-line" }),
                            createVNode(VMenu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(VList, { items: moreList })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(PerfectScrollbar), {
                      ref_key: "chatLogPS",
                      ref: chatLogPS,
                      tag: "ul",
                      options: { wheelPropagation: false },
                      class: "flex-grow-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VForm, {
                      class: "chat-log-message-form mb-5 mx-5",
                      onSubmit: sendMessage
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(VTextField, {
                            key: (_a = unref(store).activeChat) == null ? void 0 : _a.contact.id,
                            modelValue: unref(msg),
                            "onUpdate:modelValue": ($event) => isRef(msg) ? msg.value = $event : null,
                            variant: "solo",
                            density: "default",
                            class: "chat-message-input",
                            placeholder: "Type your message...",
                            autofocus: ""
                          }, {
                            "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex gap-1 align-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-mic-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-mic-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_IconBtn, {
                                  size: "small",
                                  onClick: ($event) => {
                                    var _a2;
                                    return (_a2 = unref(refInputEl)) == null ? void 0 : _a2.click();
                                  }
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
                                _push5(ssrRenderComponent(VBtn, {
                                  "append-icon": "ri-send-plane-line",
                                  onClick: sendMessage
                                }, {
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
                                  createVNode("div", { class: "d-flex gap-1 align-center" }, [
                                    createVNode(_component_IconBtn, { size: "small" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-mic-line" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_IconBtn, {
                                      size: "small",
                                      onClick: ($event) => {
                                        var _a2;
                                        return (_a2 = unref(refInputEl)) == null ? void 0 : _a2.click();
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-attachment-2" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      "append-icon": "ri-send-plane-line",
                                      onClick: sendMessage
                                    }, {
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
                          _push4(`<input type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden${_scopeId3}>`);
                        } else {
                          return [
                            (openBlock(), createBlock(VTextField, {
                              key: (_b = unref(store).activeChat) == null ? void 0 : _b.contact.id,
                              modelValue: unref(msg),
                              "onUpdate:modelValue": ($event) => isRef(msg) ? msg.value = $event : null,
                              variant: "solo",
                              density: "default",
                              class: "chat-message-input",
                              placeholder: "Type your message...",
                              autofocus: ""
                            }, {
                              "append-inner": withCtx(() => [
                                createVNode("div", { class: "d-flex gap-1 align-center" }, [
                                  createVNode(_component_IconBtn, { size: "small" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-mic-line" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_IconBtn, {
                                    size: "small",
                                    onClick: ($event) => {
                                      var _a2;
                                      return (_a2 = unref(refInputEl)) == null ? void 0 : _a2.click();
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-attachment-2" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    "append-icon": "ri-send-plane-line",
                                    onClick: sendMessage
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])),
                            createVNode("input", {
                              ref_key: "refInputEl",
                              ref: refInputEl,
                              type: "file",
                              name: "file",
                              accept: ".jpeg,.png,.jpg,GIF",
                              hidden: ""
                            }, null, 512)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="d-flex h-100 align-center justify-center flex-column"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "98",
                      variant: "tonal",
                      color: "primary",
                      class: "mb-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            size: "50",
                            class: "rounded-0",
                            icon: "ri-wechat-line"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              size: "50",
                              class: "rounded-0",
                              icon: "ri-wechat-line"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (_ctx.$vuetify.display.smAndDown) {
                      _push3(ssrRenderComponent(VBtn, {
                        rounded: "pill",
                        onClick: startConversation
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Start Conversation `);
                          } else {
                            return [
                              createTextVNode(" Start Conversation ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<p style="${ssrRenderStyle({ "max-inline-size": "40ch", "text-wrap": "balance" })}" class="text-center text-disabled"${_scopeId2}> Start connecting with the people by selecting one of the contact on left </p>`);
                    }
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    unref(store).activeChat ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex flex-column h-100"
                    }, [
                      createVNode("div", { class: "active-chat-header d-flex align-center text-medium-emphasis" }, [
                        createVNode(_component_IconBtn, {
                          class: "d-md-none me-4",
                          onClick: ($event) => isLeftSidebarOpen.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-menu-line" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("div", {
                          class: "d-flex align-center cursor-pointer",
                          onClick: ($event) => isActiveChatUserProfileSidebarOpen.value = true
                        }, [
                          createVNode(VBadge, {
                            dot: "",
                            location: "bottom right",
                            "offset-x": "3",
                            "offset-y": "3",
                            color: unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status),
                            bordered: "",
                            class: "me-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "40",
                                variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                                color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0,
                                class: "cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                                    key: 0,
                                    src: unref(store).activeChat.contact.avatar,
                                    alt: unref(store).activeChat.contact.fullName
                                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                                ]),
                                _: 1
                              }, 8, ["variant", "color"])
                            ]),
                            _: 1
                          }, 8, ["color"]),
                          createVNode("div", { class: "flex-grow-1 overflow-hidden" }, [
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(unref(store).activeChat.contact.fullName), 1),
                            createVNode("p", { class: "text-body-2 text-truncate mb-0" }, toDisplayString(unref(store).activeChat.contact.role), 1)
                          ])
                        ], 8, ["onClick"]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-sm-flex align-center gap-1 d-none" }, [
                          createVNode(_component_IconBtn, { size: "small" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-phone-line" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, { size: "small" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-video-add-line" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, { size: "small" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-search-line" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, { size: "small" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-more-2-line" }),
                              createVNode(VMenu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(VList, { items: moreList })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VDivider),
                      createVNode(unref(PerfectScrollbar), {
                        ref_key: "chatLogPS",
                        ref: chatLogPS,
                        tag: "ul",
                        options: { wheelPropagation: false },
                        class: "flex-grow-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }, 512),
                      createVNode(VForm, {
                        class: "chat-log-message-form mb-5 mx-5",
                        onSubmit: withModifiers(sendMessage, ["prevent"])
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            (openBlock(), createBlock(VTextField, {
                              key: (_a = unref(store).activeChat) == null ? void 0 : _a.contact.id,
                              modelValue: unref(msg),
                              "onUpdate:modelValue": ($event) => isRef(msg) ? msg.value = $event : null,
                              variant: "solo",
                              density: "default",
                              class: "chat-message-input",
                              placeholder: "Type your message...",
                              autofocus: ""
                            }, {
                              "append-inner": withCtx(() => [
                                createVNode("div", { class: "d-flex gap-1 align-center" }, [
                                  createVNode(_component_IconBtn, { size: "small" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-mic-line" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_IconBtn, {
                                    size: "small",
                                    onClick: ($event) => {
                                      var _a2;
                                      return (_a2 = unref(refInputEl)) == null ? void 0 : _a2.click();
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-attachment-2" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    "append-icon": "ri-send-plane-line",
                                    onClick: sendMessage
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])),
                            createVNode("input", {
                              ref_key: "refInputEl",
                              ref: refInputEl,
                              type: "file",
                              name: "file",
                              accept: ".jpeg,.png,.jpg,GIF",
                              hidden: ""
                            }, null, 512)
                          ];
                        }),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "d-flex h-100 align-center justify-center flex-column"
                    }, [
                      createVNode(VAvatar, {
                        size: "98",
                        variant: "tonal",
                        color: "primary",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "50",
                            class: "rounded-0",
                            icon: "ri-wechat-line"
                          })
                        ]),
                        _: 1
                      }),
                      _ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        rounded: "pill",
                        onClick: startConversation
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Start Conversation ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock("p", {
                        key: 1,
                        style: { "max-inline-size": "40ch", "text-wrap": "balance" },
                        class: "text-center text-disabled"
                      }, " Start connecting with the people by selecting one of the contact on left "))
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VNavigationDrawer, {
                modelValue: unref(isUserProfileSidebarOpen),
                "onUpdate:modelValue": ($event) => isRef(isUserProfileSidebarOpen) ? isUserProfileSidebarOpen.value = $event : null,
                temporary: "",
                touchless: "",
                absolute: "",
                class: "user-profile-sidebar",
                location: "start",
                width: "370"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1, {
                    onClose: ($event) => isUserProfileSidebarOpen.value = false
                  }, null, 8, ["onClose"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VNavigationDrawer, {
                modelValue: unref(isActiveChatUserProfileSidebarOpen),
                "onUpdate:modelValue": ($event) => isRef(isActiveChatUserProfileSidebarOpen) ? isActiveChatUserProfileSidebarOpen.value = $event : null,
                width: "374",
                absolute: "",
                temporary: "",
                location: "end",
                touchless: "",
                class: "active-chat-user-profile-sidebar"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    onClose: ($event) => isActiveChatUserProfileSidebarOpen.value = false
                  }, null, 8, ["onClose"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VNavigationDrawer, {
                modelValue: unref(isLeftSidebarOpen),
                "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                absolute: "",
                touchless: "",
                location: "start",
                width: "370",
                temporary: _ctx.$vuetify.display.smAndDown,
                class: "chat-list-sidebar",
                permanent: _ctx.$vuetify.display.mdAndUp
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    isDrawerOpen: unref(isLeftSidebarOpen),
                    "onUpdate:isDrawerOpen": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                    search: unref(q),
                    "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                    onOpenChatOfContact: openChatOfContact,
                    onShowUserProfile: ($event) => isUserProfileSidebarOpen.value = true,
                    onClose: ($event) => isLeftSidebarOpen.value = false
                  }, null, 8, ["isDrawerOpen", "onUpdate:isDrawerOpen", "search", "onUpdate:search", "onShowUserProfile", "onClose"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "temporary", "permanent"]),
              createVNode(VMain, { class: "chat-content-container" }, {
                default: withCtx(() => [
                  unref(store).activeChat ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex flex-column h-100"
                  }, [
                    createVNode("div", { class: "active-chat-header d-flex align-center text-medium-emphasis" }, [
                      createVNode(_component_IconBtn, {
                        class: "d-md-none me-4",
                        onClick: ($event) => isLeftSidebarOpen.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-menu-line" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", {
                        class: "d-flex align-center cursor-pointer",
                        onClick: ($event) => isActiveChatUserProfileSidebarOpen.value = true
                      }, [
                        createVNode(VBadge, {
                          dot: "",
                          location: "bottom right",
                          "offset-x": "3",
                          "offset-y": "3",
                          color: unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status),
                          bordered: "",
                          class: "me-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "40",
                              variant: !unref(store).activeChat.contact.avatar ? "tonal" : void 0,
                              color: !unref(store).activeChat.contact.avatar ? unref(resolveAvatarBadgeVariant)(unref(store).activeChat.contact.status) : void 0,
                              class: "cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                unref(store).activeChat.contact.avatar ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: unref(store).activeChat.contact.avatar,
                                  alt: unref(store).activeChat.contact.fullName
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(unref(store).activeChat.contact.fullName)), 1))
                              ]),
                              _: 1
                            }, 8, ["variant", "color"])
                          ]),
                          _: 1
                        }, 8, ["color"]),
                        createVNode("div", { class: "flex-grow-1 overflow-hidden" }, [
                          createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(unref(store).activeChat.contact.fullName), 1),
                          createVNode("p", { class: "text-body-2 text-truncate mb-0" }, toDisplayString(unref(store).activeChat.contact.role), 1)
                        ])
                      ], 8, ["onClick"]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-sm-flex align-center gap-1 d-none" }, [
                        createVNode(_component_IconBtn, { size: "small" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-phone-line" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_IconBtn, { size: "small" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-video-add-line" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_IconBtn, { size: "small" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-search-line" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_IconBtn, { size: "small" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-more-2-line" }),
                            createVNode(VMenu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(VList, { items: moreList })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(VDivider),
                    createVNode(unref(PerfectScrollbar), {
                      ref_key: "chatLogPS",
                      ref: chatLogPS,
                      tag: "ul",
                      options: { wheelPropagation: false },
                      class: "flex-grow-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2)
                      ]),
                      _: 1
                    }, 512),
                    createVNode(VForm, {
                      class: "chat-log-message-form mb-5 mx-5",
                      onSubmit: withModifiers(sendMessage, ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          (openBlock(), createBlock(VTextField, {
                            key: (_a = unref(store).activeChat) == null ? void 0 : _a.contact.id,
                            modelValue: unref(msg),
                            "onUpdate:modelValue": ($event) => isRef(msg) ? msg.value = $event : null,
                            variant: "solo",
                            density: "default",
                            class: "chat-message-input",
                            placeholder: "Type your message...",
                            autofocus: ""
                          }, {
                            "append-inner": withCtx(() => [
                              createVNode("div", { class: "d-flex gap-1 align-center" }, [
                                createVNode(_component_IconBtn, { size: "small" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-mic-line" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_IconBtn, {
                                  size: "small",
                                  onClick: ($event) => {
                                    var _a2;
                                    return (_a2 = unref(refInputEl)) == null ? void 0 : _a2.click();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-attachment-2" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  "append-icon": "ri-send-plane-line",
                                  onClick: sendMessage
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Send ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])),
                          createVNode("input", {
                            ref_key: "refInputEl",
                            ref: refInputEl,
                            type: "file",
                            name: "file",
                            accept: ".jpeg,.png,.jpg,GIF",
                            hidden: ""
                          }, null, 512)
                        ];
                      }),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "d-flex h-100 align-center justify-center flex-column"
                  }, [
                    createVNode(VAvatar, {
                      size: "98",
                      variant: "tonal",
                      color: "primary",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "50",
                          class: "rounded-0",
                          icon: "ri-wechat-line"
                        })
                      ]),
                      _: 1
                    }),
                    _ctx.$vuetify.display.smAndDown ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      rounded: "pill",
                      onClick: startConversation
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Start Conversation ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("p", {
                      key: 1,
                      style: { "max-inline-size": "40ch", "text-wrap": "balance" },
                      class: "text-center text-disabled"
                    }, " Start connecting with the people by selecting one of the contact on left "))
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
