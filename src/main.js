import Vue from 'vue';
import App from './App.vue';
// import VueResource from 'vue-resource'; // TODO: Remove?
// import VueRouter from 'vue-router'; // TODO: Remove?
// import { ROUTES } from './routes'; // TODO: Remove?

// Vue.use(VueResource);
// Vue.use(VueRouter);

// const ROUTER = new VueRouter({ 
//   routes: ROUTES, 
//   mode: 'history' 
// });

new Vue({
  el: '#app',
  // router: ROUTER,
  render: h => h(App)
});