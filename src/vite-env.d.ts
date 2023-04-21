/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'markdown-it-navbar' {
  import type { DefineComponent } from 'vue'
  const component: any
  export default component
}
