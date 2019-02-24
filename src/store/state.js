export default {
  jokes: [],
  categories: [],
  favorites: JSON.parse(localStorage.getItem('STORAGE_KEY')) || [],
};
