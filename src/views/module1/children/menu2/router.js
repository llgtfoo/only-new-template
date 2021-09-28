export default () => ([
  {
    path: '/module1/menu2',
    name: '/module1/menu2',
    component: () => import('@/components/SideMenu/index.vue'),
    redirect: '/module1/menu2/index1',
    meta: {
      title: '子菜单二',
    },
    children: [
      {
        path: '/module1/menu2/index1',
        name: '/module1/menu2/index1',
        component: () => import('./views/menu1-1/index.vue'),
        meta: {
          title: '页面二',
        },
      },
    ],
  },
])