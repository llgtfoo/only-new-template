const req = import.meta.globEager('./children/*/router.ts')

const children = []
Object.keys(req).forEach(mu=>{
  if (req[mu].default) {
  children.push(...req[mu].default())
}
})
export default () => (
  {
    path: '/module2',
    name: '/module2',
    component: () => import('comps/Layout/index.vue'),
    redirect: '/module2/menu1',
    children: children,
    meta: {
      title: '模块二',
    },
  })