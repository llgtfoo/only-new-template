// import * as modules from './modules/*.ts'
const importAll = (context) => {
  const map = {}
  for (const key of Object.keys(context)) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    map[keyArr[1].replace(/\.js$/g, '')] =
      context[key] ? context[key].default : {}
  }
  return map
}
const req = import.meta.globEager("./modules/*.js")
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