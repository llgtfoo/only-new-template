export default () => ([
    {
        path: '/module1/menu1',
        name: '/module1/menu1',
        component: () => import('@/components/SideMenu/index.vue'),
        redirect: '/module1/menu1/index1',
        meta: {
            title: '子菜单一',
        },
        children: [
            {
                path: '/module1/menu1/index1',
                name: '/module1/menu1/index1',
                component: () => import('./views/menu1-1/index.vue'),
                meta: {
                    title: '页面一',
                },
            }
        ]
    },
])