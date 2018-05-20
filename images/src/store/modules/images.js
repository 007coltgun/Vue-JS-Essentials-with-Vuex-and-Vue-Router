import api from '../../api/imgur';

const state = {
  allImages: []
}

const getters = {
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }

}

const actions = {
  async fetchImages({rootState}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
