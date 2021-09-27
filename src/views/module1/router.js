const req = require.context('./', true, /router.js/i)//webpack读文件
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
        component: () => import('@/components/Layout/index.vue'),
        redirect: '/module1/menu1',
        meta: {
            title: '模块一',
        },
        children: children
    })