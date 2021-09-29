export default () => ({
  path: '/module1/menu1',
  component: () => import('./views/index.vue'),
  meta: {
    title: '实有人口',
  },
})