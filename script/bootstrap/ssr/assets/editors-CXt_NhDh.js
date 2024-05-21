import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, ref, isRef, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { _ as _sfc_main$3 } from "./TiptapEditor-BF8KOFhK.js";
import { _ as _sfc_main$4 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./index-D5WAZiYx.js";
import "../ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "@vueuse/core";
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
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
/* empty css               */
const _sfc_main$2 = {
  __name: "DemoEditorCustomEditor",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = useEditor({
      content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
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
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border pa-2 rounded" }, _attrs))}>`);
      if (unref(editor)) {
        _push(`<div class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2">`);
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().toggleBold().run(),
          color: unref(editor).isActive("bold") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` bold `);
            } else {
              return [
                createTextVNode(" bold ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().toggleItalic().run(),
          color: unref(editor).isActive("italic") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` italic `);
            } else {
              return [
                createTextVNode(" italic ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().toggleStrike().run(),
          color: unref(editor).isActive("strike") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleStrike().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` strike `);
            } else {
              return [
                createTextVNode(" strike ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().toggleCode().run(),
          color: unref(editor).isActive("code") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleCode().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` code `);
            } else {
              return [
                createTextVNode(" code ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          onClick: ($event) => unref(editor).chain().focus().unsetAllMarks().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` clear marks `);
            } else {
              return [
                createTextVNode(" clear marks ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          onClick: ($event) => unref(editor).chain().focus().clearNodes().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` clear nodes `);
            } else {
              return [
                createTextVNode(" clear nodes ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("paragraph") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().setParagraph().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` paragraph `);
            } else {
              return [
                createTextVNode(" paragraph ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 1 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 1 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h1 `);
            } else {
              return [
                createTextVNode(" h1 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 2 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 2 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h2 `);
            } else {
              return [
                createTextVNode(" h2 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 3 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 3 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h3 `);
            } else {
              return [
                createTextVNode(" h3 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 4 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 4 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h4 `);
            } else {
              return [
                createTextVNode(" h4 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 5 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 5 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h5 `);
            } else {
              return [
                createTextVNode(" h5 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("heading", { level: 6 }) ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 6 }).run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` h6 `);
            } else {
              return [
                createTextVNode(" h6 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("bulletList") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` bullet list `);
            } else {
              return [
                createTextVNode(" bullet list ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("orderedList") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleOrderedList().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ordered list `);
            } else {
              return [
                createTextVNode(" ordered list ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("codeBlock") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleCodeBlock().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` code block `);
            } else {
              return [
                createTextVNode(" code block ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          color: unref(editor).isActive("blockquote") ? "primary" : "",
          onClick: ($event) => unref(editor).chain().focus().toggleBlockquote().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` blockquote `);
            } else {
              return [
                createTextVNode(" blockquote ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          onClick: ($event) => unref(editor).chain().focus().setHorizontalRule().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` horizontal rule `);
            } else {
              return [
                createTextVNode(" horizontal rule ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          onClick: ($event) => unref(editor).chain().focus().setHardBreak().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` hard break `);
            } else {
              return [
                createTextVNode(" hard break ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().undo().run(),
          onClick: ($event) => unref(editor).chain().focus().undo().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` undo `);
            } else {
              return [
                createTextVNode(" undo ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VChip, {
          disabled: !unref(editor).can().chain().focus().redo().run(),
          onClick: ($event) => unref(editor).chain().focus().redo().run()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` redo `);
            } else {
              return [
                createTextVNode(" redo ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent));
      _push(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/editor/DemoEditorCustomEditor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoEditorBasicEditor",
  __ssrInlineRender: true,
  setup(__props) {
    const basicEditorContent = ref(`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TiptapEditor = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TiptapEditor, {
        modelValue: unref(basicEditorContent),
        "onUpdate:modelValue": ($event) => isRef(basicEditorContent) ? basicEditorContent.value = $event : null,
        class: "border rounded"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/editor/DemoEditorBasicEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basicEditor = { ts: `<script setup lang="ts">
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded"
    />
  </div>
</template>

<style lang="scss">
.ProseMirror {
  block-size: 200px;
  outline: none;
  overflow-y: auto;
  padding-inline: 0.5rem;
}
</style>
`, js: `<script setup>
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded"
    />
  </div>
</template>

<style lang="scss">
.ProseMirror {
  block-size: 200px;
  outline: none;
  overflow-y: auto;
  padding-inline: 0.5rem;
}
</style>
` };
const customEditor = { ts: `<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-block-start: 0.75em;
  }

  outline: none;
  overflow-y: auto;
  padding-inline: 0.5rem;

  ul,
  ol {
    padding-block: 0;
    padding-inline: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    border-radius: 0.5rem;
    background: #0d0d0d;
    color: #fff;
    font-family: JetBrainsMono, monospace;
    padding-block: 0.75rem;
    padding-inline: 1rem;

    code {
      padding: 0;
      background: none;
      color: inherit;
      font-size: 0.8rem;
    }
  }

  img {
    block-size: auto;
    max-inline-size: 100%;
  }

  blockquote {
    border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
    padding-inline-start: 1rem;
  }

  hr {
    border: none;
    border-block-start: 2px solid rgba(#0d0d0d, 0.1);
    margin-block: 2rem;
    margin-inline: 0;
  }
}
</style>
`, js: `<script setup>
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import {
  EditorContent,
  useEditor,
} from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: [
        'heading',
        'paragraph',
      ],
    }),
    Placeholder.configure({ placeholder: 'Write something here...' }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-block-start: 0.75em;
  }

  outline: none;
  overflow-y: auto;
  padding-inline: 0.5rem;

  ul,
  ol {
    padding-block: 0;
    padding-inline: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    border-radius: 0.5rem;
    background: #0d0d0d;
    color: #fff;
    font-family: JetBrainsMono, monospace;
    padding-block: 0.75rem;
    padding-inline: 1rem;

    code {
      padding: 0;
      background: none;
      color: inherit;
      font-size: 0.8rem;
    }
  }

  img {
    block-size: auto;
    max-inline-size: 100%;
  }

  blockquote {
    border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
    padding-inline-start: 1rem;
  }

  hr {
    border: none;
    border-block-start: 2px solid rgba(#0d0d0d, 0.1);
    margin-block: 2rem;
    margin-inline: 0;
  }
}
</style>
` };
const _sfc_main = {
  __name: "editors",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$4;
      const _component_DemoEditorBasicEditor = _sfc_main$1;
      const _component_DemoEditorCustomEditor = _sfc_main$2;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic Editor",
                    code: basicEditor
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoEditorBasicEditor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoEditorBasicEditor)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic Editor",
                      code: basicEditor
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoEditorBasicEditor)
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
                    title: "Custom Editor",
                    code: customEditor
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoEditorCustomEditor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoEditorCustomEditor)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Editor",
                      code: customEditor
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoEditorCustomEditor)
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
                    title: "Basic Editor",
                    code: basicEditor
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoEditorBasicEditor)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Custom Editor",
                    code: customEditor
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoEditorCustomEditor)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/editors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
