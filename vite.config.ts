// https://vitejs.dev/config/
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  publicDir: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   "primary-color": "red",
          //   "link-color": "red",
          //   "border-radius-base": "2px",
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  //起别名配置
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', //编译template组件
      '/@': path.resolve(__dirname, 'src'), //跟目录
      comps: path.join(__dirname, 'src/components'), //组件
      dcts: path.join(__dirname, 'src/directives'), //指令
      http: path.join(__dirname, 'src/http'),
      mock: path.join(__dirname, 'src/mock'), //mock数据
      utils: path.join(__dirname, 'src/utils'), //工具函数
    },
  },
  //服务器配置
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  //插件配置
  plugins: [vue(), vueJsx()],
})


