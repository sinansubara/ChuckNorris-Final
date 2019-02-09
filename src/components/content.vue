<template>
  <div>
    <button v-on:click="get">FETCH</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    get() {
      // eslint-disable-next-line
      axios.get('https://api.chucknorris.io/jokes') // eslint-disable-next-line
        .then(response => console.log(response)) // eslint-disable-next-line
        .catch(error => console.log(error));
    },
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
