import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {}
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {}
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 192, // 1rem的大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
    proxy: {
      '/api': {
        // 实际请求地址
        target: '150.158.213.45:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, '') // 路径重写
      }
    }
  },
  build: {
    outDir: 'pikachuV3'
  }
});
