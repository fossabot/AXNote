import Vue from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css' // Base Style
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js' // Theme
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji' // Emoji Plugin
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list' // Todo List Plugin
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines' // Highlight Lines Plugin
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code' // Copy Code Plugin

// Set Theme(Default: Vuepress)
VueMarkdownEditor.use(vuepressTheme, {
  codeHighlightExtensionMap: {
    vue: 'html'
  }
})

// Plugins
VueMarkdownEditor.use(createEmojiPlugin()) // Emoji
VueMarkdownEditor.use(createTodoListPlugin()) // Todo List
VueMarkdownEditor.use(createHighlightLinesPlugin()) // Highlight Lines
VueMarkdownEditor.use(createCopyCodePlugin()) // Copy Code

Vue.use(VueMarkdownEditor)
