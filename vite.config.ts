import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { slugify } from 'transliteration'
import hljs from 'highlight.js'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItEmoji from 'markdown-it-emoji'
import markdownItInline from 'markdown-it-for-inline'
import mdLoader from 'vite-plugin-vue-markdown'
import container from 'markdown-it-container'
// 高亮
function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
  }
}
// 获取 <h3>
function markdownCardWrapper(htmlCode) {
  const group = htmlCode.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').trim().split(':::')
  const templateDoc = group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        const template1 = `<div class="pikachu-article-content">${fragment}</div>`
        return template1
      }
      return fragment
    })
    .join('')
  return templateDoc
}
// ::: 块作用域
function createContainer(klass, defaultTitle) {
  if (klass === 'demo') {
    return [
      container,
      klass,
      {
        render(tokens, idx) {
          let textHtml
          const token = tokens[idx]
          const tokenText = tokens.filter((item) => {
            return item.info.trim() === 'vue' && item.content.trim()
          })
          if (tokenText.length > 0 && tokenText[0].content) {
            textHtml = tokenText[0].content
          }
          if (token.nesting === 1) {
            return `<demo-block ><div class="vue-text-demo">${textHtml}</div> \n`
          }
          return `</demo-block>`
        }
      }
    ]
  }
  if (klass === 'tip') {
    return [
      container,
      klass,
      {
        render(tokens, idx) {
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${
              info || defaultTitle
            }</p>\n`
          }
          return `</div>\n`
        }
      }
    ]
  }
}
function markdownBlock(md) {
  md.use(...createContainer('tip', 'TIP'))
  md.use(...createContainer('demo', 'DEMO'))
}
// add target="_blank" to all links
function markdownLinkOpen(md) {
  md.use(markdownItInline, 'url_new_win', 'link_open', function (tokens, idx) {
    const aIndex = tokens[idx].attrIndex('target')
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      // eslint-disable-next-line no-param-reassign
      tokens[idx].attrs[aIndex][1] = '_blank'
    }
  })
  md.use(markdownItEmoji)

  md.use(markdownItAnchor, {
    slugify,
    level: 2
  })
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
    }
  },
  plugins: [vue(),
    mdLoader({
      transforms: {
        after: markdownCardWrapper
      },
      markdownItOptions: {
        typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
        highlight: markdownHighlight
      },
      markdownItSetup(md) {
        markdownBlock(md)
        markdownLinkOpen(md)
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  server: {
    host:'0.0.0.0',
    port: 3001,
    proxy:{
    '/api':{
    // 实际请求地址
    target:'http://127.0.0.1:7001',
    changeOrigin:true,
    rewrite: (path) => path.replace(/\/api/, '')  // 路径重写
    }
    }
    }

})
