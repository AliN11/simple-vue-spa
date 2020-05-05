import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: require('./components/Home.vue').default
  },
  {
    path: '/users',
    component: require('./components/Users.vue').default
  }
];


const router = new VueRouter({
  mode: 'history',
  routes
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
