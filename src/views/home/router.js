const req = require.context('./', true, /router.js/i)//webpack读文件
const children = []
req.keys().map(req).forEach((e) => {
  if (e.default) {
    children.push(...e.default())
  }
})
export default () => (
  {
    path: '/home',
    redirect: '/home/index',
    meta: {
      title: '首页',
    },
    component: () => import('@/components/Layout/index.vue'),
    children,
  })