import { test } from './children/home/api.js'

const state = {
  home: 'home测试',
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  async getData({ commit }, proload) {
    const res = await test(proload)
    if (res && `${res.code}` === '200') {
      return res
    } else {
      throw new Error(res.message)
    }
  },
}

const mutations = {
  SET_HOME(state, info) {
    state.home = info
  },
}
const getters = {
  getHome(state) {
    return state
  },
}
export default () => {
  return {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  }
}