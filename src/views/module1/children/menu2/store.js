
const state = {
    home: 'home测试',
}

const actions = {
    // eslint-disable-next-line no-unused-vars
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

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}