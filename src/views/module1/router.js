const req = import.meta.globEager('./children/*/router.js')

const children = []
Object.keys(req).forEach(mu=>{
    if (req[mu].default) {
    children.push(...req[mu].default())
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