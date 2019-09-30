import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/second',
      name: 'secondScreem',
      component: () => import(/* webpackChunkName: "second_screem" */ './views/Second.vue'),
    },
    {
      path: '/thrid',
      name: 'thridScreen',
      component: () => import(/* webpackChunkName: "second_screem" */ './views/Thrid.vue'),
    },
    {
      path: '/imgview',
      name: 'imgview',
      mate: {
        headershow: false,
      },
      component: () => import(/* webpackChunkName: "second_screem" */ './views/Imgview.vue'),
    }
  ],
});
