import moduleRouters from './router'
import modulesStores from './store'

export default (Vue, store, router) => { // eslint-disable-line
  router.addRoute(moduleRouters())
  store.registerModule('module2', modulesStores())
}