<template>
  <main>
    <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
      <div class="row" v-for="(jokes, index) in getJokes" :key="index">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text"> {{ jokes }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Masonry from 'masonry-layout';

export default {
  methods: {
  },
  mounted() {
    const grid = document.querySelector('.grid');
    this.msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 10,
    });
  },
  computed: {
    getJokes() {
      return this.$store.getters.listJokes;
    },
  },
};
</script>

<style lang="scss" scoped>
  .grid {
    padding-top: 60px;
  }
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
  .grid-item  {
    margin-bottom: 10px;
    .card {
      padding: 10px;
    }
  }
</style>
