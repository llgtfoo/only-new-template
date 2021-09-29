// import module1 from './index.vue'
import layout from '@/components/Layout/index.vue'
import * as router from './children/*/router.js'
const children = []
Object.keys(router).forEach(ele => {
  children.push(router[ele]())
})

export default () => ({
  path: '/module2',
  component: layout,
  redirect: '/module2/menu1',
  meta: {
    title: '菜单二',
  },
  children,
})