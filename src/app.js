
import { http } from '@/lib/http/index' //封装后的axios
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//ui框架
import Vue from 'vue'
// 设置cookie
import VueCookies from 'vue-cookies'
import Fragment from 'vue-fragment'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import components from './components/index'
import directives from './directives/index'
// import './permission'
import router from './router'
import store from './store'
import utils from './utils/index'
import views from './views/index'

import '@/assets/css/init.css' //默认css
import '@/assets/css/scroll.scss' //默认css
import '@/lib/http/axios' //axios

Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.use(components) //全局组件
Vue.use(directives) //全局指令
Vue.use(utils) //全局工具函数
sync(store, router) //route和store结合

Vue.use(Fragment.Plugin) //跟元素

Vue.prototype.http = http
Vue.prototype.echarts = echarts
Vue.use(views, router, store)

Vue.config.productionTip = false
export default new Vue({
  router,
  store,
  render: h => h(App),
})