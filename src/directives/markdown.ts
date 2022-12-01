import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import markdownItAnchor from 'markdown-it-anchor';
import { slugify } from 'transliteration';
import markdownItEmoji from 'markdown-it-emoji';
import container from 'markdown-it-container';
import string from 'string'
const slugify2 = (s:any) => string(s).slugify().toString()
function markdownHighlight(str: string, lang: string) {
  hljs.configure({
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
  });
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }
  return '';
}
export const markdown = {
  name: 'markdown',
  beforeMount(el: any, binding: { value: any }, vnode: any) {
    const { value } = binding;
    const mdIt = MarkdownIt({
      typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
      highlight: markdownHighlight
    });
    mdIt.use(markdownItAnchor, { slugify, level: 2 });
    mdIt.use(markdownItEmoji);
    mdIt.use(container, 'demo', {
      render(tokens: any, idx: any) {
        let textHtml;
        const token = tokens[idx];
        const tokenText = tokens.filter((item: any) => {
          return item.info.trim() === 'vue' && item.content.trim();
        });
        if (tokenText.length > 0 && tokenText[0].content) {
          textHtml = tokenText[0].content;
        }
        if (token.nesting === 1) {
          return `<demo-block ><div class="vue-text-demo">${textHtml}</div> \n`;
        }
        return `</demo-block>`;
      }
    });
    mdIt.use(container, 'tip', {
      render(tokens: any, idx: any) {
        const token = tokens[idx];
        const info = token.info.trim().slice(3).trim();
        if (token.nesting === 1) {
          return `<div class="Tip custom-block"><p class="custom-block-title">${
            info 
          }</p>\n`;
        }
        return `</div>\n`;
      }
    });
    const defaultRender = mdIt.renderer.rules.link_open;
    mdIt.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const aIndex = tokens[idx].attrIndex('target');
    
        if (aIndex < 0) {
          tokens[idx].attrPush(['target', '_blank']); // add new attribute
        }
    
        if (defaultRender) {
          return defaultRender(tokens, idx, options, env, self);
        }
    
        return self.renderToken(tokens, idx, options);
      };
    const innerHTML = mdIt.render(value);
    el.innerHTML = innerHTML;
  }
};
