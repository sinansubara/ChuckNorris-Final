<template>
  <header>
    <ul id="dropdown1" class="dropdown-content">
      <li v-for="(category, index) in categories" :key="index">
        <a href="#!">{{ category }}</a>
      </li>
    </ul>
    <nav>
      <div class="nav-wrapper blue-grey">
        <a href="#!" class="brand-logo">
          <img src="../assets/chucknorris_logo.png" alt="Logo">
        </a>
        <ul class="hide-on-med-and-down">
          <li class="dropBtn">
            <a class="dropdown-trigger waves-effect waves-purple"
                href="#!" data-target="dropdown1">Dropdown
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
        <form>
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons xBtn">close</i>
          </div>
        </form>
        <a class="btn-floating btn-large halfway-fab waves-effect waves-dark orange"
              @click="getJoke">
        <i class="material-icons">add</i>
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
  methods: {
    selectCat(category) {
      this.selectCategorie = category;
    },
    getJoke() {
      if (this.selectCategorie === '') {
        this.$store.dispatch('getRandJoke');
      } else {
        this.$store.dispatch('getJoke', this.selectCategorie);
      }
    },
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
  .dropBtn {
    margin: 15px 10px 0 15px;
  }
  .brand-logo {
    right: 15px;
  }
  nav .input-field {
    height: 70px;
  }
  .xBtn {
    right: 41rem !important;
    margin-top: 15px;
  }
  #search {
    width: 350px;
    position: absolute;
    left: 30rem;
    margin-top: 15px;
  }
  .label-icon {
    left: 31rem !important;
    margin-top: 15px;
  }
  .halfway-fab {
    right: 25rem !important;
    bottom: 20px !important;
  }
</style>
