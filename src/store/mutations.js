import axios from 'axios';
import types from './mutation_types';

export default {
  [types.GET_CATEGORIES](state) {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        state.categories.push(...response.data);
      });
  },
};
