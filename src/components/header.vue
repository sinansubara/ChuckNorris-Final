<template>
  <header>
    <nav class="z-depth-5">
      <div class="nav-wrapper blue-grey">
        <div class="left input-field col s12">
        <select>
          <option value="" disabled selected>Select category</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
        <a href="#!" class="right brand-logo">
          <img src="../assets/chucknorris_logo.png" alt="Logo">
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selectCategorie: '',
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  created() {
    this.$store.dispatch('getCategories');
  },
};
</script>

<style lang="scss" scoped>
  img {
    max-width: 165px;
  }
  nav {
    height: 100px;
  }
  .input-field {
    margin: 18px 10px 0 10px;
  }
</style>
