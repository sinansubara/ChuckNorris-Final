// eslint-disable-next-line
import types from './mutation_types';

export default {
  getCategories({ commit }) {
    commit(types.GET_CATEGORIES);
  },
};
