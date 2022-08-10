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
  plugins: [createPersistedState({
    // storage: window.sessionStorage,//用sessionStorage代替localStorage
    paths: ['common']
  })],
})
console.log(store ,'store')
export default store
