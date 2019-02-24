// eslint-disable-next-line
import types from './mutation_types';

export default {
  getCategories({ commit }) {
    commit(types.GET_CATEGORIES);
  },
  getRandJoke({ commit }) {
    commit(types.GET_RANDJOKE);
  },
  getJoke({ commit }, category) {
    commit(types.GET_JOKE, category);
  },
};
