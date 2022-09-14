import '@/assets/css/init.css' //全局默认css
import '@/assets/css/scroll.scss' //全局默认css
import '@/assets/iocnFont/iconfont.css'
import 'nprogress/nprogress.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'//ui库
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts' //百度echarts图表
import { createApp } from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue' //入口文件
import components from './components/index' //全局组件
import directives from './directives/index' //全局指令
import axiosPlugin from './http/axios' //axios请求协议
//import "./permission" //路由守卫
import router from './router' //路由
import store from './store' //状态管理
import utils from './utils/index' //全局工具函数
import views from './views/index'
import http from './http/index' //自定义post和get协议

sync(store, router) //route和store结合
const app = createApp(App)
  .use(views, router, store)
  .use(axiosPlugin)
  .use(store)
  .use(router)
  .use(components)
  .use(directives)
  .use(utils)
  .use(ElementPlus, { locale })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//全局挂载
app.config.globalProperties.$http = http
app.config.globalProperties.$echarts = echarts
export default app