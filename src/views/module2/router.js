const req = require.context('./', true, /router.js/i)//webpack读文件
const children = []
req.keys().map(req).forEach((e) => {
  if (e.default) {
    children.push(...e.default())
  }
})
export default () => (
  {
    path: '/module2',
    name: '/module2',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/module2/menu1',
    children: children,
    meta: {
      title: '模块二',
    },
  })