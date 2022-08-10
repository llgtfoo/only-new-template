

const importAll = (context) => {
  const map = {}
  for (const key of Object.keys(context)) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    map[keyArr.join('.').replace(/index.js/g, '')] =
      context[key] && context[key].default
  }
  return map
}

const req = import.meta.globEager('./children/*/router.js')
const children = importAll(req)
console.log(children, req, 'children')
export default () => (
  {
    path: '/home',
    redirect: '/home/index',
    meta: {
      title: '首页',
    },
    component: () => import('comps/Layout/index.vue'),
    children,
  })