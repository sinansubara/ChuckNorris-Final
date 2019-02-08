import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import '../node_modules/materialize-css/dist/js/materialize';
import '../node_modules/materialize-css/dist/css/materialize.css';

Vue.prototype.$axios = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
