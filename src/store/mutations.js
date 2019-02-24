import axios from 'axios';
import types from './mutation_types';

export default {
  [types.GET_CATEGORIES](state) {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        state.categories.push(...response.data);
      });
  },
  [types.GET_RANDJOKE](state) {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        state.jokes.push(response.data.value);
      });
  },
  [types.GET_JOKE](state, category) {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        state.jokes.push(response.data.value);
      });
  },
};
