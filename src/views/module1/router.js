const req = import.meta.globEager('./*/router.js')

const children = []
req.keys().map(req).forEach((e) => {
  if (e.default) {
    children.push(...e.default())
  }
})
export default () => (
  {
    path: '/module1',
    name: '/module1',
    component: () => import('comps/Layout/index.vue'),
    redirect: '/module1/menu1',
    meta: {
      title: '模块一',
    },
    children: children,
  })