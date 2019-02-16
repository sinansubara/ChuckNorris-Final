export default {
  categories: [],
  favorites: JSON.parse(localStorage.getItem('STORAGE_KEY')) || [],
};
