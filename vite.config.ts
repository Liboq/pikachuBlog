import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  server: {
    port: 3000,
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
