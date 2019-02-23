<template>
  <header>
    <ul id="dropdown1" class="dropdown-content">
      <li v-for="(category, index) in categories" :key="index">
        <a href="#!">{{ category }}</a>
      </li>
    </ul>
    <nav>
      <div class="nav-wrapper blue-grey">
        <a href="#!" class="right brand-logo">
          <img src="../assets/chucknorris_logo.png" alt="Logo">
        </a>
        <ul class="left hide-on-med-and-down">
          <li>
            <a class="dropdown-trigger waves-effect waves-purple"
                href="#!" data-target="dropdown1">Dropdown
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
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
      return this.$store.getters.listCategories;
    },
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
  ul {
    margin: 15px 10px 0 15px;
  }
</style>
