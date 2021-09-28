import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import common from './common/index'
const store = createStore({
  state: {
    email: 'llgtfoo@163.com',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
  },
  plugins: [createPersistedState({ paths: ['common'] })],
})
console.log(store, 'store')
export default store
