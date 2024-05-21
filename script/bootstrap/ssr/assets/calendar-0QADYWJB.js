import { _ as _sfc_main$3 } from "./AppDateTimePicker-B0c_dYDs.js";
import { ref, watch, onMounted, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, createTextVNode, withModifiers, useSSRContext, nextTick, isRef, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import { u as useConfigStore, a as VIcon, V as VBtn, c as avatar1, e as avatar3, h as avatar5, i as avatar7, j as avatar6, d as avatar2, _ as _export_sfc } from "../ssr.js";
import { defineStore } from "pinia";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { r as requiredValidator, u as urlValidator } from "./validators-CW3JK3pA.js";
import { _ as _sfc_main$2 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { u as useResponsiveLeftSidebar, V as VLayout, a as VMain } from "./VMain-BANwmGQ5.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "@vueuse/core";
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
import "./helpers-DX2i3Kdq.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
const useCalendarStore = defineStore("calendar", {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: "error",
        label: "Personal"
      },
      {
        color: "primary",
        label: "Business"
      },
      {
        color: "warning",
        label: "Family"
      },
      {
        color: "success",
        label: "Holiday"
      },
      {
        color: "info",
        label: "ETC"
      }
    ],
    selectedCalendars: ["Personal", "Business", "Family", "Holiday", "ETC"]
  }),
  actions: {
    async fetchEvents() {
      const { data, error } = await useApi(createUrl("/apps/calendar", {
        query: {
          calendars: this.selectedCalendars
        }
      }));
      if (error.value)
        return error.value;
      return data.value;
    },
    async addEvent(event) {
      await $api("/apps/calendar", {
        method: "POST",
        body: event
      });
    },
    async updateEvent(event) {
      return await $api(`/apps/calendar/${event.id}`, {
        method: "PUT",
        body: event
      });
    },
    async removeEvent(eventId) {
      return await $api(`/apps/calendar/${eventId}`, {
        method: "DELETE"
      });
    }
  }
});
const blankEvent = {
  title: "",
  start: "",
  end: "",
  allDay: false,
  url: "",
  extendedProps: {
    /*
          ℹ️ We have to use undefined here because if we have blank string as value then select placeholder will be active (moved to top).
          Hence, we need to set it to undefined or null
        */
    calendar: void 0,
    guests: [],
    location: "",
    description: ""
  }
};
const useCalendar = (event, isEventHandlerSidebarActive, isLeftSidebarOpen) => {
  const configStore = useConfigStore();
  const store = useCalendarStore();
  const refCalendar = ref();
  const calendarsColor = {
    Business: "primary",
    Holiday: "success",
    Personal: "error",
    Family: "warning",
    ETC: "info"
  };
  const extractEventDataFromEventApi = (eventApi) => {
    const { id, title, start, end, url, extendedProps: { calendar: calendar2, guests, location, description }, allDay } = eventApi;
    return {
      id,
      title,
      start,
      end,
      url,
      extendedProps: {
        calendar: calendar2,
        guests,
        location,
        description
      },
      allDay
    };
  };
  if (typeof process !== "undefined" && process.server)
    store.fetchEvents();
  const fetchEvents = (info, successCallback) => {
    if (!info)
      return;
    store.fetchEvents().then((r) => {
      successCallback(r.map((e) => ({
        ...e,
        // Convert string representation of date to Date object
        start: new Date(e.start),
        end: new Date(e.end)
      })));
    }).catch((e) => {
      console.error("Error occurred while fetching calendar events", e);
    });
  };
  const calendarApi = ref(null);
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    var _a;
    const existingEvent = (_a = calendarApi.value) == null ? void 0 : _a.getEventById(String(updatedEventData.id));
    if (!existingEvent) {
      console.warn("Can't found event in calendar to update");
      return;
    }
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index];
      existingEvent.setProp(propName, updatedEventData[propName]);
    }
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay });
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index];
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName]);
    }
  };
  const removeEventInCalendar = (eventId) => {
    var _a;
    const _event = (_a = calendarApi.value) == null ? void 0 : _a.getEventById(eventId);
    if (_event)
      _event.remove();
  };
  const refetchEvents = () => {
    var _a;
    (_a = calendarApi.value) == null ? void 0 : _a.refetchEvents();
  };
  watch(() => store.selectedCalendars, refetchEvents);
  const addEvent = (_event) => {
    store.addEvent(_event).then(() => {
      refetchEvents();
    });
  };
  const updateEvent = (_event) => {
    store.updateEvent(_event).then((r) => {
      const propsToUpdate = ["id", "title", "url"];
      const extendedPropsToUpdate = ["calendar", "guests", "location", "description"];
      updateEventInCalendar(r, propsToUpdate, extendedPropsToUpdate);
    });
    refetchEvents();
  };
  const removeEvent = (eventId) => {
    store.removeEvent(eventId).then(() => {
      removeEventInCalendar(eventId);
    });
  };
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
      start: "drawerToggler,prev,next title",
      end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
    },
    events: fetchEvents,
    // ❗ We need this to be true because when its false and event is allDay event and end date is same as start data then Full calendar will set end to null
    forceEventDuration: true,
    /*
        Enable dragging and resizing event
        Docs: https://fullcalendar.io/docs/editable
      */
    editable: true,
    /*
        Enable resizing event from start
        Docs: https://fullcalendar.io/docs/eventResizableFromStart
      */
    eventResizableFromStart: true,
    /*
        Automatically scroll the scroll-containers during event drag-and-drop and date selecting
        Docs: https://fullcalendar.io/docs/dragScroll
      */
    dragScroll: true,
    /*
        Max number of events within a given day
        Docs: https://fullcalendar.io/docs/dayMaxEvents
      */
    dayMaxEvents: 2,
    /*
        Determines if day names and week names are clickable
        Docs: https://fullcalendar.io/docs/navLinks
      */
    navLinks: true,
    eventClassNames({ event: calendarEvent }) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [
        // Background Color
        `bg-light-${colorName} text-${colorName}`
      ];
    },
    eventClick({ event: clickedEvent, jsEvent }) {
      jsEvent.preventDefault();
      if (clickedEvent.url) {
        window.open(clickedEvent.url, "_blank");
      }
      event.value = extractEventDataFromEventApi(clickedEvent);
      isEventHandlerSidebarActive.value = true;
    },
    // customButtons
    dateClick(info) {
      event.value = { ...event.value, start: info.date };
      isEventHandlerSidebarActive.value = true;
    },
    /*
          Handle event drop (Also include dragged event)
          Docs: https://fullcalendar.io/docs/eventDrop
          We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
        */
    eventDrop({ event: droppedEvent }) {
      updateEvent(extractEventDataFromEventApi(droppedEvent));
    },
    /*
          Handle event resize
          Docs: https://fullcalendar.io/docs/eventResize
        */
    eventResize({ event: resizedEvent }) {
      if (resizedEvent.start && resizedEvent.end)
        updateEvent(extractEventDataFromEventApi(resizedEvent));
    },
    customButtons: {
      drawerToggler: {
        text: "calendarDrawerToggler",
        click() {
          isLeftSidebarOpen.value = true;
        }
      }
    }
  };
  onMounted(() => {
    calendarApi.value = refCalendar.value.getApi();
  });
  const jumpToDate = (currentDate) => {
    var _a;
    (_a = calendarApi.value) == null ? void 0 : _a.gotoDate(new Date(currentDate));
  };
  watch(() => configStore.isAppRTL, (val) => {
    var _a;
    (_a = calendarApi.value) == null ? void 0 : _a.setOption("direction", val ? "rtl" : "ltr");
  }, { immediate: true });
  return {
    refCalendar,
    calendarOptions,
    refetchEvents,
    fetchEvents,
    addEvent,
    updateEvent,
    removeEvent,
    jumpToDate
  };
};
const _sfc_main$1 = {
  __name: "CalendarEventHandler",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    },
    event: {
      type: null,
      required: true
    }
  },
  emits: [
    "update:isDrawerOpen",
    "addEvent",
    "updateEvent",
    "removeEvent"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const store = useCalendarStore();
    const refForm = ref();
    const event = ref(JSON.parse(JSON.stringify(props.event)));
    const resetEvent = () => {
      event.value = JSON.parse(JSON.stringify(props.event));
      nextTick(() => {
        var _a;
        (_a = refForm.value) == null ? void 0 : _a.resetValidation();
      });
    };
    watch(() => props.isDrawerOpen, resetEvent);
    const removeEvent = () => {
      emit("removeEvent", String(event.value.id));
      emit("update:isDrawerOpen", false);
    };
    const handleSubmit = () => {
      var _a;
      (_a = refForm.value) == null ? void 0 : _a.validate().then(({ valid }) => {
        if (valid) {
          if ("id" in event.value)
            emit("updateEvent", event.value);
          else
            emit("addEvent", event.value);
          emit("update:isDrawerOpen", false);
        }
      });
    };
    const guestsOptions = [
      {
        avatar: avatar1,
        name: "Jane Foster"
      },
      {
        avatar: avatar3,
        name: "Donna Frank"
      },
      {
        avatar: avatar5,
        name: "Gabrielle Robertson"
      },
      {
        avatar: avatar7,
        name: "Lori Spears"
      },
      {
        avatar: avatar6,
        name: "Sandy Vega"
      },
      {
        avatar: avatar2,
        name: "Cheryl May"
      }
    ];
    const onCancel = () => {
      emit("update:isDrawerOpen", false);
      nextTick(() => {
        var _a, _b;
        (_a = refForm.value) == null ? void 0 : _a.reset();
        resetEvent();
        (_b = refForm.value) == null ? void 0 : _b.resetValidation();
      });
    };
    const startDateTimePickerConfig = computed(() => {
      const config = {
        enableTime: !event.value.allDay,
        dateFormat: `Y-m-d${event.value.allDay ? "" : " H:i"}`
      };
      if (event.value.end)
        config.maxDate = event.value.end;
      return config;
    });
    const endDateTimePickerConfig = computed(() => ({
      enableTime: !event.value.allDay,
      dateFormat: `Y-m-d${event.value.allDay ? "" : " H:i"}`,
      minDate: event.value.start || void 0
    }));
    const dialogModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$2;
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_AppDateTimePicker = _sfc_main$3;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        location: "end",
        "model-value": props.isDrawerOpen,
        width: "420",
        class: "scrollable-content",
        border: "none",
        "onUpdate:modelValue": dialogModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: unref(event).id ? "Update Event" : "Add Event",
              onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
            }, {
              beforeClose: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    style: unref(event).id ? null : { display: "none" },
                    size: "large",
                    class: "text-medium-emphasis",
                    onClick: removeEvent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_IconBtn, {
                      size: "large",
                      class: "text-medium-emphasis",
                      onClick: removeEvent
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                      ]),
                      _: 1
                    }, 512), [
                      [vShow, unref(event).id]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                                ref_key: "refForm",
                                ref: refForm,
                                onSubmit: handleSubmit
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
                                                  modelValue: unref(event).title,
                                                  "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                                  label: "Title",
                                                  placeholder: "Meeting with Jane",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(event).title,
                                                    "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                                    label: "Title",
                                                    placeholder: "Meeting with Jane",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
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
                                                  modelValue: unref(event).extendedProps.calendar,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                                  label: "Label",
                                                  placeholder: "Select Event Label",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: unref(store).availableCalendars,
                                                  "item-title": (item) => item.label,
                                                  "item-value": (item) => item.label
                                                }, {
                                                  selection: withCtx(({ item }, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div style="${ssrRenderStyle(unref(event).extendedProps.calendar ? null : { display: "none" })}" class="${ssrRenderClass([unref(event).extendedProps.calendar ? "d-flex" : "", "align-center"])}"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        size: "8",
                                                        icon: "ri-circle-fill",
                                                        color: item.raw.color,
                                                        class: "me-2"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span${_scopeId8}>${ssrInterpolate(item.raw.label)}</span></div>`);
                                                    } else {
                                                      return [
                                                        withDirectives(createVNode("div", {
                                                          class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                                        }, [
                                                          createVNode(VIcon, {
                                                            size: "8",
                                                            icon: "ri-circle-fill",
                                                            color: item.raw.color,
                                                            class: "me-2"
                                                          }, null, 8, ["color"]),
                                                          createVNode("span", null, toDisplayString(item.raw.label), 1)
                                                        ], 2), [
                                                          [vShow, unref(event).extendedProps.calendar]
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  item: withCtx(({ item, props: itemProps }, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItem, itemProps, {
                                                        prepend: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VIcon, {
                                                              size: "8",
                                                              icon: "ri-circle-fill",
                                                              color: item.raw.color
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VIcon, {
                                                                size: "8",
                                                                icon: "ri-circle-fill",
                                                                color: item.raw.color
                                                              }, null, 8, ["color"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItem, itemProps, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              size: "8",
                                                              icon: "ri-circle-fill",
                                                              color: item.raw.color
                                                            }, null, 8, ["color"])
                                                          ]),
                                                          _: 2
                                                        }, 1040)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(event).extendedProps.calendar,
                                                    "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                                    label: "Label",
                                                    placeholder: "Select Event Label",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    items: unref(store).availableCalendars,
                                                    "item-title": (item) => item.label,
                                                    "item-value": (item) => item.label
                                                  }, {
                                                    selection: withCtx(({ item }) => [
                                                      withDirectives(createVNode("div", {
                                                        class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                                      }, [
                                                        createVNode(VIcon, {
                                                          size: "8",
                                                          icon: "ri-circle-fill",
                                                          color: item.raw.color,
                                                          class: "me-2"
                                                        }, null, 8, ["color"]),
                                                        createVNode("span", null, toDisplayString(item.raw.label), 1)
                                                      ], 2), [
                                                        [vShow, unref(event).extendedProps.calendar]
                                                      ])
                                                    ]),
                                                    item: withCtx(({ item, props: itemProps }) => [
                                                      createVNode(VListItem, itemProps, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            size: "8",
                                                            icon: "ri-circle-fill",
                                                            color: item.raw.color
                                                          }, null, 8, ["color"])
                                                        ]),
                                                        _: 2
                                                      }, 1040)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppDateTimePicker, {
                                                  key: JSON.stringify(unref(startDateTimePickerConfig)),
                                                  modelValue: unref(event).start,
                                                  "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Start date",
                                                  placeholder: "Select Date",
                                                  config: unref(startDateTimePickerConfig)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                    key: JSON.stringify(unref(startDateTimePickerConfig)),
                                                    modelValue: unref(event).start,
                                                    "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Start date",
                                                    placeholder: "Select Date",
                                                    config: unref(startDateTimePickerConfig)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppDateTimePicker, {
                                                  key: JSON.stringify(unref(endDateTimePickerConfig)),
                                                  modelValue: unref(event).end,
                                                  "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "End date",
                                                  placeholder: "Select End Date",
                                                  config: unref(endDateTimePickerConfig)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                    key: JSON.stringify(unref(endDateTimePickerConfig)),
                                                    modelValue: unref(event).end,
                                                    "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "End date",
                                                    placeholder: "Select End Date",
                                                    config: unref(endDateTimePickerConfig)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  modelValue: unref(event).allDay,
                                                  "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                                  label: "All day"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSwitch, {
                                                    modelValue: unref(event).allDay,
                                                    "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                                    label: "All day"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(event).url,
                                                  "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                                  label: "Event URL",
                                                  placeholder: "https://event.com/meeting",
                                                  rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  type: "url"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(event).url,
                                                    "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                                    label: "Event URL",
                                                    placeholder: "https://event.com/meeting",
                                                    rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                    type: "url"
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
                                                  modelValue: unref(event).extendedProps.guests,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                                  label: "Guests",
                                                  placeholder: "Select guests",
                                                  items: guestsOptions,
                                                  "item-title": (item) => item.name,
                                                  "item-value": (item) => item.name,
                                                  chips: "",
                                                  multiple: "",
                                                  eager: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(event).extendedProps.guests,
                                                    "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                                    label: "Guests",
                                                    placeholder: "Select guests",
                                                    items: guestsOptions,
                                                    "item-title": (item) => item.name,
                                                    "item-value": (item) => item.name,
                                                    chips: "",
                                                    multiple: "",
                                                    eager: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(event).extendedProps.location,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                                  label: "Location",
                                                  placeholder: "Meeting room"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(event).extendedProps.location,
                                                    "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                                    label: "Location",
                                                    placeholder: "Meeting room"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  modelValue: unref(event).extendedProps.description,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                                  label: "Description",
                                                  placeholder: "Meeting description"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextarea, {
                                                    modelValue: unref(event).extendedProps.description,
                                                    "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                                    label: "Description",
                                                    placeholder: "Meeting description"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  class: "me-3"
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
                                                  variant: "outlined",
                                                  color: "secondary",
                                                  onClick: onCancel
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
                                                    class: "me-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Submit ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    variant: "outlined",
                                                    color: "secondary",
                                                    onClick: onCancel
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
                                                  modelValue: unref(event).title,
                                                  "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                                  label: "Title",
                                                  placeholder: "Meeting with Jane",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(event).extendedProps.calendar,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                                  label: "Label",
                                                  placeholder: "Select Event Label",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  items: unref(store).availableCalendars,
                                                  "item-title": (item) => item.label,
                                                  "item-value": (item) => item.label
                                                }, {
                                                  selection: withCtx(({ item }) => [
                                                    withDirectives(createVNode("div", {
                                                      class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                                    }, [
                                                      createVNode(VIcon, {
                                                        size: "8",
                                                        icon: "ri-circle-fill",
                                                        color: item.raw.color,
                                                        class: "me-2"
                                                      }, null, 8, ["color"]),
                                                      createVNode("span", null, toDisplayString(item.raw.label), 1)
                                                    ], 2), [
                                                      [vShow, unref(event).extendedProps.calendar]
                                                    ])
                                                  ]),
                                                  item: withCtx(({ item, props: itemProps }) => [
                                                    createVNode(VListItem, itemProps, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "8",
                                                          icon: "ri-circle-fill",
                                                          color: item.raw.color
                                                        }, null, 8, ["color"])
                                                      ]),
                                                      _: 2
                                                    }, 1040)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                  key: JSON.stringify(unref(startDateTimePickerConfig)),
                                                  modelValue: unref(event).start,
                                                  "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Start date",
                                                  placeholder: "Select Date",
                                                  config: unref(startDateTimePickerConfig)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                  key: JSON.stringify(unref(endDateTimePickerConfig)),
                                                  modelValue: unref(event).end,
                                                  "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "End date",
                                                  placeholder: "Select End Date",
                                                  config: unref(endDateTimePickerConfig)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSwitch, {
                                                  modelValue: unref(event).allDay,
                                                  "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                                  label: "All day"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(event).url,
                                                  "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                                  label: "Event URL",
                                                  placeholder: "https://event.com/meeting",
                                                  rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  type: "url"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(event).extendedProps.guests,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                                  label: "Guests",
                                                  placeholder: "Select guests",
                                                  items: guestsOptions,
                                                  "item-title": (item) => item.name,
                                                  "item-value": (item) => item.name,
                                                  chips: "",
                                                  multiple: "",
                                                  eager: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(event).extendedProps.location,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                                  label: "Location",
                                                  placeholder: "Meeting room"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: unref(event).extendedProps.description,
                                                  "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                                  label: "Description",
                                                  placeholder: "Meeting description"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  class: "me-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Submit ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  color: "secondary",
                                                  onClick: onCancel
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
                                                modelValue: unref(event).title,
                                                "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                                label: "Title",
                                                placeholder: "Meeting with Jane",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(event).extendedProps.calendar,
                                                "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                                label: "Label",
                                                placeholder: "Select Event Label",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                items: unref(store).availableCalendars,
                                                "item-title": (item) => item.label,
                                                "item-value": (item) => item.label
                                              }, {
                                                selection: withCtx(({ item }) => [
                                                  withDirectives(createVNode("div", {
                                                    class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                                  }, [
                                                    createVNode(VIcon, {
                                                      size: "8",
                                                      icon: "ri-circle-fill",
                                                      color: item.raw.color,
                                                      class: "me-2"
                                                    }, null, 8, ["color"]),
                                                    createVNode("span", null, toDisplayString(item.raw.label), 1)
                                                  ], 2), [
                                                    [vShow, unref(event).extendedProps.calendar]
                                                  ])
                                                ]),
                                                item: withCtx(({ item, props: itemProps }) => [
                                                  createVNode(VListItem, itemProps, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        size: "8",
                                                        icon: "ri-circle-fill",
                                                        color: item.raw.color
                                                      }, null, 8, ["color"])
                                                    ]),
                                                    _: 2
                                                  }, 1040)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                key: JSON.stringify(unref(startDateTimePickerConfig)),
                                                modelValue: unref(event).start,
                                                "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Start date",
                                                placeholder: "Select Date",
                                                config: unref(startDateTimePickerConfig)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(_component_AppDateTimePicker, {
                                                key: JSON.stringify(unref(endDateTimePickerConfig)),
                                                modelValue: unref(event).end,
                                                "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "End date",
                                                placeholder: "Select End Date",
                                                config: unref(endDateTimePickerConfig)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSwitch, {
                                                modelValue: unref(event).allDay,
                                                "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                                label: "All day"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(event).url,
                                                "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                                label: "Event URL",
                                                placeholder: "https://event.com/meeting",
                                                rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                type: "url"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(event).extendedProps.guests,
                                                "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                                label: "Guests",
                                                placeholder: "Select guests",
                                                items: guestsOptions,
                                                "item-title": (item) => item.name,
                                                "item-value": (item) => item.name,
                                                chips: "",
                                                multiple: "",
                                                eager: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(event).extendedProps.location,
                                                "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                                label: "Location",
                                                placeholder: "Meeting room"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: unref(event).extendedProps.description,
                                                "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                                label: "Description",
                                                placeholder: "Meeting description"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                class: "me-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Submit ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "secondary",
                                                onClick: onCancel
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
                                createVNode(unref(VForm), {
                                  ref_key: "refForm",
                                  ref: refForm,
                                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(event).title,
                                              "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                              label: "Title",
                                              placeholder: "Meeting with Jane",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(event).extendedProps.calendar,
                                              "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                              label: "Label",
                                              placeholder: "Select Event Label",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              items: unref(store).availableCalendars,
                                              "item-title": (item) => item.label,
                                              "item-value": (item) => item.label
                                            }, {
                                              selection: withCtx(({ item }) => [
                                                withDirectives(createVNode("div", {
                                                  class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                                }, [
                                                  createVNode(VIcon, {
                                                    size: "8",
                                                    icon: "ri-circle-fill",
                                                    color: item.raw.color,
                                                    class: "me-2"
                                                  }, null, 8, ["color"]),
                                                  createVNode("span", null, toDisplayString(item.raw.label), 1)
                                                ], 2), [
                                                  [vShow, unref(event).extendedProps.calendar]
                                                ])
                                              ]),
                                              item: withCtx(({ item, props: itemProps }) => [
                                                createVNode(VListItem, itemProps, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: "8",
                                                      icon: "ri-circle-fill",
                                                      color: item.raw.color
                                                    }, null, 8, ["color"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(_component_AppDateTimePicker, {
                                              key: JSON.stringify(unref(startDateTimePickerConfig)),
                                              modelValue: unref(event).start,
                                              "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Start date",
                                              placeholder: "Select Date",
                                              config: unref(startDateTimePickerConfig)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(_component_AppDateTimePicker, {
                                              key: JSON.stringify(unref(endDateTimePickerConfig)),
                                              modelValue: unref(event).end,
                                              "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "End date",
                                              placeholder: "Select End Date",
                                              config: unref(endDateTimePickerConfig)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: unref(event).allDay,
                                              "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                              label: "All day"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(event).url,
                                              "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                              label: "Event URL",
                                              placeholder: "https://event.com/meeting",
                                              rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                              type: "url"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(event).extendedProps.guests,
                                              "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                              label: "Guests",
                                              placeholder: "Select guests",
                                              items: guestsOptions,
                                              "item-title": (item) => item.name,
                                              "item-value": (item) => item.name,
                                              chips: "",
                                              multiple: "",
                                              eager: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(event).extendedProps.location,
                                              "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                              label: "Location",
                                              placeholder: "Meeting room"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: unref(event).extendedProps.description,
                                              "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                              label: "Description",
                                              placeholder: "Meeting description"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "secondary",
                                              onClick: onCancel
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
                                }, 512)
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
                                ref_key: "refForm",
                                ref: refForm,
                                onSubmit: withModifiers(handleSubmit, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(event).title,
                                            "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                            label: "Title",
                                            placeholder: "Meeting with Jane",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(event).extendedProps.calendar,
                                            "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                            label: "Label",
                                            placeholder: "Select Event Label",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            items: unref(store).availableCalendars,
                                            "item-title": (item) => item.label,
                                            "item-value": (item) => item.label
                                          }, {
                                            selection: withCtx(({ item }) => [
                                              withDirectives(createVNode("div", {
                                                class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                              }, [
                                                createVNode(VIcon, {
                                                  size: "8",
                                                  icon: "ri-circle-fill",
                                                  color: item.raw.color,
                                                  class: "me-2"
                                                }, null, 8, ["color"]),
                                                createVNode("span", null, toDisplayString(item.raw.label), 1)
                                              ], 2), [
                                                [vShow, unref(event).extendedProps.calendar]
                                              ])
                                            ]),
                                            item: withCtx(({ item, props: itemProps }) => [
                                              createVNode(VListItem, itemProps, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "8",
                                                    icon: "ri-circle-fill",
                                                    color: item.raw.color
                                                  }, null, 8, ["color"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(_component_AppDateTimePicker, {
                                            key: JSON.stringify(unref(startDateTimePickerConfig)),
                                            modelValue: unref(event).start,
                                            "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Start date",
                                            placeholder: "Select Date",
                                            config: unref(startDateTimePickerConfig)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(_component_AppDateTimePicker, {
                                            key: JSON.stringify(unref(endDateTimePickerConfig)),
                                            modelValue: unref(event).end,
                                            "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "End date",
                                            placeholder: "Select End Date",
                                            config: unref(endDateTimePickerConfig)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, {
                                            modelValue: unref(event).allDay,
                                            "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                            label: "All day"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(event).url,
                                            "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                            label: "Event URL",
                                            placeholder: "https://event.com/meeting",
                                            rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                            type: "url"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(event).extendedProps.guests,
                                            "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                            label: "Guests",
                                            placeholder: "Select guests",
                                            items: guestsOptions,
                                            "item-title": (item) => item.name,
                                            "item-value": (item) => item.name,
                                            chips: "",
                                            multiple: "",
                                            eager: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(event).extendedProps.location,
                                            "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                            label: "Location",
                                            placeholder: "Meeting room"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(event).extendedProps.description,
                                            "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                            label: "Description",
                                            placeholder: "Meeting description"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: onCancel
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
                              }, 512)
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
                              ref_key: "refForm",
                              ref: refForm,
                              onSubmit: withModifiers(handleSubmit, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(event).title,
                                          "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                          label: "Title",
                                          placeholder: "Meeting with Jane",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(event).extendedProps.calendar,
                                          "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                          label: "Label",
                                          placeholder: "Select Event Label",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          items: unref(store).availableCalendars,
                                          "item-title": (item) => item.label,
                                          "item-value": (item) => item.label
                                        }, {
                                          selection: withCtx(({ item }) => [
                                            withDirectives(createVNode("div", {
                                              class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                            }, [
                                              createVNode(VIcon, {
                                                size: "8",
                                                icon: "ri-circle-fill",
                                                color: item.raw.color,
                                                class: "me-2"
                                              }, null, 8, ["color"]),
                                              createVNode("span", null, toDisplayString(item.raw.label), 1)
                                            ], 2), [
                                              [vShow, unref(event).extendedProps.calendar]
                                            ])
                                          ]),
                                          item: withCtx(({ item, props: itemProps }) => [
                                            createVNode(VListItem, itemProps, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "8",
                                                  icon: "ri-circle-fill",
                                                  color: item.raw.color
                                                }, null, 8, ["color"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(_component_AppDateTimePicker, {
                                          key: JSON.stringify(unref(startDateTimePickerConfig)),
                                          modelValue: unref(event).start,
                                          "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Start date",
                                          placeholder: "Select Date",
                                          config: unref(startDateTimePickerConfig)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(_component_AppDateTimePicker, {
                                          key: JSON.stringify(unref(endDateTimePickerConfig)),
                                          modelValue: unref(event).end,
                                          "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "End date",
                                          placeholder: "Select End Date",
                                          config: unref(endDateTimePickerConfig)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, {
                                          modelValue: unref(event).allDay,
                                          "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                          label: "All day"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(event).url,
                                          "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                          label: "Event URL",
                                          placeholder: "https://event.com/meeting",
                                          rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                          type: "url"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(event).extendedProps.guests,
                                          "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                          label: "Guests",
                                          placeholder: "Select guests",
                                          items: guestsOptions,
                                          "item-title": (item) => item.name,
                                          "item-value": (item) => item.name,
                                          chips: "",
                                          multiple: "",
                                          eager: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(event).extendedProps.location,
                                          "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                          label: "Location",
                                          placeholder: "Meeting room"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(event).extendedProps.description,
                                          "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                          label: "Description",
                                          placeholder: "Meeting description"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "secondary",
                                          onClick: onCancel
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
                            }, 512)
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
                title: unref(event).id ? "Update Event" : "Add Event",
                onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
              }, {
                beforeClose: withCtx(() => [
                  withDirectives(createVNode(_component_IconBtn, {
                    size: "large",
                    class: "text-medium-emphasis",
                    onClick: removeEvent
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, unref(event).id]
                  ])
                ]),
                _: 1
              }, 8, ["title", "onCancel"]),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refForm",
                            ref: refForm,
                            onSubmit: withModifiers(handleSubmit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(event).title,
                                        "onUpdate:modelValue": ($event) => unref(event).title = $event,
                                        label: "Title",
                                        placeholder: "Meeting with Jane",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(event).extendedProps.calendar,
                                        "onUpdate:modelValue": ($event) => unref(event).extendedProps.calendar = $event,
                                        label: "Label",
                                        placeholder: "Select Event Label",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        items: unref(store).availableCalendars,
                                        "item-title": (item) => item.label,
                                        "item-value": (item) => item.label
                                      }, {
                                        selection: withCtx(({ item }) => [
                                          withDirectives(createVNode("div", {
                                            class: ["align-center", unref(event).extendedProps.calendar ? "d-flex" : ""]
                                          }, [
                                            createVNode(VIcon, {
                                              size: "8",
                                              icon: "ri-circle-fill",
                                              color: item.raw.color,
                                              class: "me-2"
                                            }, null, 8, ["color"]),
                                            createVNode("span", null, toDisplayString(item.raw.label), 1)
                                          ], 2), [
                                            [vShow, unref(event).extendedProps.calendar]
                                          ])
                                        ]),
                                        item: withCtx(({ item, props: itemProps }) => [
                                          createVNode(VListItem, itemProps, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "8",
                                                icon: "ri-circle-fill",
                                                color: item.raw.color
                                              }, null, 8, ["color"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules", "items", "item-title", "item-value"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(_component_AppDateTimePicker, {
                                        key: JSON.stringify(unref(startDateTimePickerConfig)),
                                        modelValue: unref(event).start,
                                        "onUpdate:modelValue": ($event) => unref(event).start = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Start date",
                                        placeholder: "Select Date",
                                        config: unref(startDateTimePickerConfig)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(_component_AppDateTimePicker, {
                                        key: JSON.stringify(unref(endDateTimePickerConfig)),
                                        modelValue: unref(event).end,
                                        "onUpdate:modelValue": ($event) => unref(event).end = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "End date",
                                        placeholder: "Select End Date",
                                        config: unref(endDateTimePickerConfig)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "config"]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, {
                                        modelValue: unref(event).allDay,
                                        "onUpdate:modelValue": ($event) => unref(event).allDay = $event,
                                        label: "All day"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(event).url,
                                        "onUpdate:modelValue": ($event) => unref(event).url = $event,
                                        label: "Event URL",
                                        placeholder: "https://event.com/meeting",
                                        rules: ["urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                        type: "url"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(event).extendedProps.guests,
                                        "onUpdate:modelValue": ($event) => unref(event).extendedProps.guests = $event,
                                        label: "Guests",
                                        placeholder: "Select guests",
                                        items: guestsOptions,
                                        "item-title": (item) => item.name,
                                        "item-value": (item) => item.name,
                                        chips: "",
                                        multiple: "",
                                        eager: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "item-title", "item-value"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(event).extendedProps.location,
                                        "onUpdate:modelValue": ($event) => unref(event).extendedProps.location = $event,
                                        label: "Location",
                                        placeholder: "Meeting room"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: unref(event).extendedProps.description,
                                        "onUpdate:modelValue": ($event) => unref(event).extendedProps.description = $event,
                                        label: "Description",
                                        placeholder: "Meeting description"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "me-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "secondary",
                                        onClick: onCancel
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
                          }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/calendar/CalendarEventHandler.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCalendarStore();
    const event = ref(structuredClone(blankEvent));
    const isEventHandlerSidebarActive = ref(false);
    watch(isEventHandlerSidebarActive, (val) => {
      if (!val)
        event.value = structuredClone(blankEvent);
    });
    const { isLeftSidebarOpen } = useResponsiveLeftSidebar();
    const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen);
    const checkAll = computed({
      /*GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
      SET: If value is `true` => then add all available options in selected filters => Select All
      Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
      */
      get: () => store.selectedCalendars.length === store.availableCalendars.length,
      set: (val) => {
        if (val)
          store.selectedCalendars = store.availableCalendars.map((i) => i.label);
        else if (store.selectedCalendars.length === store.availableCalendars.length)
          store.selectedCalendars = [];
      }
    });
    const calendarApi = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5acd8405>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VLayout, { style: { "z-index": "0" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VNavigationDrawer, {
                    modelValue: unref(isLeftSidebarOpen),
                    "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                    width: "300",
                    absolute: "",
                    touchless: "",
                    location: "start",
                    class: "calendar-add-event-drawer",
                    temporary: _ctx.$vuetify.display.mdAndDown
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-5" data-v-5acd8405${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          block: "",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isEventHandlerSidebarActive.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add event `);
                            } else {
                              return [
                                createTextVNode(" Add event ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex align-center justify-center pa-2" data-v-5acd8405${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(calendarApi),
                          "onUpdate:modelValue": [($event) => isRef(calendarApi) ? calendarApi.value = $event : null, ($event) => unref(jumpToDate)($event)],
                          config: { inline: true },
                          class: "calendar-date-picker"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<div class="pa-5" data-v-5acd8405${_scopeId3}><h5 class="text-h5 mb-4" data-v-5acd8405${_scopeId3}> Event Filters </h5><div class="d-flex flex-column gap-1 calendars-checkbox" data-v-5acd8405${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkAll),
                          "onUpdate:modelValue": ($event) => isRef(checkAll) ? checkAll.value = $event : null,
                          label: "View all"
                        }, null, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(store).availableCalendars, (calendar2) => {
                          _push4(ssrRenderComponent(VCheckbox, {
                            key: calendar2.label,
                            modelValue: unref(store).selectedCalendars,
                            "onUpdate:modelValue": ($event) => unref(store).selectedCalendars = $event,
                            value: calendar2.label,
                            color: calendar2.color,
                            label: calendar2.label
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-5" }, [
                            createVNode(VBtn, {
                              block: "",
                              "prepend-icon": "ri-add-line",
                              onClick: ($event) => isEventHandlerSidebarActive.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add event ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(VDivider),
                          createVNode("div", { class: "d-flex align-center justify-center pa-2" }, [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(calendarApi),
                              "onUpdate:modelValue": [($event) => isRef(calendarApi) ? calendarApi.value = $event : null, ($event) => unref(jumpToDate)($event)],
                              config: { inline: true },
                              class: "calendar-date-picker"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VDivider),
                          createVNode("div", { class: "pa-5" }, [
                            createVNode("h5", { class: "text-h5 mb-4" }, " Event Filters "),
                            createVNode("div", { class: "d-flex flex-column gap-1 calendars-checkbox" }, [
                              createVNode(VCheckbox, {
                                modelValue: unref(checkAll),
                                "onUpdate:modelValue": ($event) => isRef(checkAll) ? checkAll.value = $event : null,
                                label: "View all"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(store).availableCalendars, (calendar2) => {
                                return openBlock(), createBlock(VCheckbox, {
                                  key: calendar2.label,
                                  modelValue: unref(store).selectedCalendars,
                                  "onUpdate:modelValue": ($event) => unref(store).selectedCalendars = $event,
                                  value: calendar2.label,
                                  color: calendar2.color,
                                  label: calendar2.label
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "color", "label"]);
                              }), 128))
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMain, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(FullCalendar), {
                                ref_key: "refCalendar",
                                ref: refCalendar,
                                options: unref(calendarOptions)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(FullCalendar), {
                                  ref_key: "refCalendar",
                                  ref: refCalendar,
                                  options: unref(calendarOptions)
                                }, null, 8, ["options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(FullCalendar), {
                                ref_key: "refCalendar",
                                ref: refCalendar,
                                options: unref(calendarOptions)
                              }, null, 8, ["options"])
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
                    createVNode(VNavigationDrawer, {
                      modelValue: unref(isLeftSidebarOpen),
                      "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                      width: "300",
                      absolute: "",
                      touchless: "",
                      location: "start",
                      class: "calendar-add-event-drawer",
                      temporary: _ctx.$vuetify.display.mdAndDown
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-5" }, [
                          createVNode(VBtn, {
                            block: "",
                            "prepend-icon": "ri-add-line",
                            onClick: ($event) => isEventHandlerSidebarActive.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add event ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(VDivider),
                        createVNode("div", { class: "d-flex align-center justify-center pa-2" }, [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(calendarApi),
                            "onUpdate:modelValue": [($event) => isRef(calendarApi) ? calendarApi.value = $event : null, ($event) => unref(jumpToDate)($event)],
                            config: { inline: true },
                            class: "calendar-date-picker"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VDivider),
                        createVNode("div", { class: "pa-5" }, [
                          createVNode("h5", { class: "text-h5 mb-4" }, " Event Filters "),
                          createVNode("div", { class: "d-flex flex-column gap-1 calendars-checkbox" }, [
                            createVNode(VCheckbox, {
                              modelValue: unref(checkAll),
                              "onUpdate:modelValue": ($event) => isRef(checkAll) ? checkAll.value = $event : null,
                              label: "View all"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(store).availableCalendars, (calendar2) => {
                              return openBlock(), createBlock(VCheckbox, {
                                key: calendar2.label,
                                modelValue: unref(store).selectedCalendars,
                                "onUpdate:modelValue": ($event) => unref(store).selectedCalendars = $event,
                                value: calendar2.label,
                                color: calendar2.color,
                                label: calendar2.label
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "color", "label"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "temporary"]),
                    createVNode(VMain, null, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(unref(FullCalendar), {
                              ref_key: "refCalendar",
                              ref: refCalendar,
                              options: unref(calendarOptions)
                            }, null, 8, ["options"])
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
              createVNode(VLayout, { style: { "z-index": "0" } }, {
                default: withCtx(() => [
                  createVNode(VNavigationDrawer, {
                    modelValue: unref(isLeftSidebarOpen),
                    "onUpdate:modelValue": ($event) => isRef(isLeftSidebarOpen) ? isLeftSidebarOpen.value = $event : null,
                    width: "300",
                    absolute: "",
                    touchless: "",
                    location: "start",
                    class: "calendar-add-event-drawer",
                    temporary: _ctx.$vuetify.display.mdAndDown
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-5" }, [
                        createVNode(VBtn, {
                          block: "",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isEventHandlerSidebarActive.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add event ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode(VDivider),
                      createVNode("div", { class: "d-flex align-center justify-center pa-2" }, [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(calendarApi),
                          "onUpdate:modelValue": [($event) => isRef(calendarApi) ? calendarApi.value = $event : null, ($event) => unref(jumpToDate)($event)],
                          config: { inline: true },
                          class: "calendar-date-picker"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VDivider),
                      createVNode("div", { class: "pa-5" }, [
                        createVNode("h5", { class: "text-h5 mb-4" }, " Event Filters "),
                        createVNode("div", { class: "d-flex flex-column gap-1 calendars-checkbox" }, [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkAll),
                            "onUpdate:modelValue": ($event) => isRef(checkAll) ? checkAll.value = $event : null,
                            label: "View all"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(store).availableCalendars, (calendar2) => {
                            return openBlock(), createBlock(VCheckbox, {
                              key: calendar2.label,
                              modelValue: unref(store).selectedCalendars,
                              "onUpdate:modelValue": ($event) => unref(store).selectedCalendars = $event,
                              value: calendar2.label,
                              color: calendar2.color,
                              label: calendar2.label
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "color", "label"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "temporary"]),
                  createVNode(VMain, null, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(unref(FullCalendar), {
                            ref_key: "refCalendar",
                            ref: refCalendar,
                            options: unref(calendarOptions)
                          }, null, 8, ["options"])
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
        isDrawerOpen: unref(isEventHandlerSidebarActive),
        "onUpdate:isDrawerOpen": ($event) => isRef(isEventHandlerSidebarActive) ? isEventHandlerSidebarActive.value = $event : null,
        event: unref(event),
        onAddEvent: unref(addEvent),
        onUpdateEvent: unref(updateEvent),
        onRemoveEvent: unref(removeEvent)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5acd8405"]]);
export {
  calendar as default
};
