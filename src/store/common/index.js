// import * as modules from './modules/*.ts'
const importAll = (context) => {
  const map = {}
  for (const key of context.keys()) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    map[keyArr.join('.').replace(/\.ts$/g, '')]
      = context(key) && context(key).default
  }
  return map
}
const req = require.context('./modules/', true, /\.ts$/)
const modules = importAll(req)

const state = {}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules,
}