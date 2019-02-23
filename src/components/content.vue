<template>
  <main>
    <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  methods: {
  },
  mounted() {
  },
  computed: {
    categories() {
      return this.$store.getters.listCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1 0 auto;
  }
  .row {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .row::after {
    display:none;
  }
  .row .col.m5 {
    width: 20%;
  }
  .card {
    margin: 10px;
    display: inline-flex;
    font-size: 30px;
  }
</style>
