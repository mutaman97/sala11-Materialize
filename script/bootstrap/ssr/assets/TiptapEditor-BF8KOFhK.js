import { useSSRContext, ref, watch, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { V as VBtn } from "../ssr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
const _sfc_main = {
  __name: "TiptapEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editorRef = ref();
    const editor = useEditor({
      content: props.modelValue,
      extensions: [
        StarterKit,
        TextAlign.configure({
          types: [
            "heading",
            "paragraph"
          ]
        }),
        Placeholder.configure({ placeholder: "Write something here..." }),
        Underline
      ],
      onUpdate() {
        if (!editor.value)
          return;
        emit("update:modelValue", editor.value.getHTML());
      }
    });
    watch(() => props.modelValue, () => {
      var _a, _b;
      const isSame = ((_a = editor.value) == null ? void 0 : _a.getHTML()) === props.modelValue;
      if (isSame)
        return;
      (_b = editor.value) == null ? void 0 : _b.commands.setContent(props.modelValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-5" }, _attrs))}>`);
      if (unref(editor)) {
        _push(`<div class="d-flex flex-wrap">`);
        _push(ssrRenderComponent(VBtn, {
          class: [{ "is-active": unref(editor).isActive("bold") }, "rounded"],
          icon: "ri-bold",
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          class: [{ "is-active": unref(editor).isActive("underline") }, "rounded"],
          icon: "ri-underline",
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).commands.toggleUnderline()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-italic",
          class: ["rounded", { "is-active": unref(editor).isActive("italic") }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-strikethrough",
          class: ["rounded", { "is-active": unref(editor).isActive("strike") }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().toggleStrike().run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-align-left",
          class: ["rounded", { "is-active": unref(editor).isActive({ textAlign: "left" }) }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().setTextAlign("left").run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-align-center",
          class: ["rounded", { "is-active": unref(editor).isActive({ textAlign: "center" }) }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().setTextAlign("center").run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-align-right",
          class: ["rounded", { "is-active": unref(editor).isActive({ textAlign: "right" }) }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().setTextAlign("right").run()
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-align-justify",
          class: ["rounded", { "is-active": unref(editor).isActive({ textAlign: "justify" }) }],
          size: "small",
          variant: "text",
          color: "default",
          onClick: ($event) => unref(editor).chain().focus().setTextAlign("justify").run()
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VDivider, { class: "mt-4 mb-2" }, null, _parent));
      _push(ssrRenderComponent(unref(EditorContent), {
        ref_key: "editorRef",
        ref: editorRef,
        editor: unref(editor)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/TiptapEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
