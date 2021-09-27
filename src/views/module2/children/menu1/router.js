export default () => ([
    {
        path: '/module2/menu1',
        name: '/module2/menu1',
        component: () => import('@/components/SideMenu/index.vue'),
        redirect: '/module2/menu1/index1',
        meta: {
            title: '子菜单一',
        },
        children: [
            {
                path: '/module2/menu1/index1',
                name: '/module2/menu1/index1',
                component: () => import('./views/menu1-1/index.vue'),
                meta: {
                    title: '页面一',
                },
            }
        ]
    },
])