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
declare module 'draggable-vue-uploader' {
  import type { DefineComponent } from 'vue'
  const component: any
  export default component
}
// declare module "axios" {
//   interface AxiosResponse<T = any> {
//    data:any
//     // 这里追加你的参数
//   }
//   export function create(config?: AxiosRequestConfig): AxiosInstance;
// }

