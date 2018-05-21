import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  allImages: []
}

const getters = {
  allImages: state => state.allImages
}

const mutations = {
  setImages: (state, images) => {
    state.allImages = images;
  }
}

const actions = {
  async fetchImages({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({rootState}, images) {
    // Get access toke
    const {token} = rootState.auth;

    // call our API module to do the upload
    await api.uploadImages(images, token);

    // Redirect our user to ImageList
    router.push('/');
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
