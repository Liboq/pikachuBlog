import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {}
  },
  plugins: [
    vue(),
    // ...
    viteCompression({
      filter: /\.(js|css|json|txt|html|ico|svg|png)(\?.*)?$/i, // 需要压缩的文件
	      threshold: 1024*20, // 文件容量大于这个值进行压缩
	      algorithm: 'gzip', // 压缩方式
	      ext: 'gz', // 后缀名
    })
  ],
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
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, '') // 路径重写
      }
    }
  },
  build: {
    outDir: 'pikachuV3'
  }
});
