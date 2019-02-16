<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Content from './components/content.vue';
import Footer from './components/footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Content,
    Footer,
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
};
</script>

<style lang="scss">
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
