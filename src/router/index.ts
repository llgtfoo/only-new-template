import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import * as nProgress from 'nprogress'
const routes:Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    nProgress.start()
    next()
})

router.afterEach(() => {
    nProgress.done()
})

nProgress.configure({
    ease: 'linear',
    speed: 500,
    showSpinner: false  // 是否使用进度环
})

export default router
