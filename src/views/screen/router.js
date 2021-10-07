
export default () => [{
  path: '/home',
  component: () => import('./children/home/index.vue'),
  meta: {
    title: '',
  },
}]