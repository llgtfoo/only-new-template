/* eslint-disable indent */
import * as modules from './*/index.js'

export default (Vue, router, store) => {
    Object.keys(modules).forEach(key => {
        Vue.use(modules[key], store, router)
    })
    router.addRoutes(
        [{
                path: '/',
                name: 'root',
                redirect: '/login',
            },
            {
                path: '/login',
                name: 'login',
                component: () =>
                    import ('./login/index.vue'),
            },
            {
                path: '/404', // 此处需特别注意至于最底部
                component: () =>
                    import ('../components/NotFound'),
            },
            {
                path: '*',
                redirect: '/404',
            },
        ])
    console.log(router, 'router')
}