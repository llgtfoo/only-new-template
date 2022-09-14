
const req = import.meta.globEager('./children/*/router.ts')
const children = []
Object.keys(req).forEach(mu=>{
    if (req[mu].default) {
    children.push(...req[mu].default())
  }
})
export default () => (
  {
    path: '/home',
    redirect: '/home/index',
    meta: {
      title: '首页',
    },
    component: () => import('comps/Layout/index.vue'),
    children:children,
  })