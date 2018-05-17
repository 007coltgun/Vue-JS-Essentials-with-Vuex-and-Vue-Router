import api from '../../api/imgur';

const state = {
  token: null
}

const getters = {
  // the parameter 'state' is not the 'const state ={}'
  isLoggedIn: (state) => !!state.token
}

const mutations = {
  setToken: (state, token) => state.token = token
}

const actions = {
  login: () => api.login(),
  logout: ({commit}) => {
    commit('setToken', null);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
