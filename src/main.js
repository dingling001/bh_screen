import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/common/mycss.css';
import './styles/Animation.css';
import heatmapjsVue from 'heatmapjs-vue';
import api from "./http";
Vue.use(api);
Vue.use(heatmapjsVue);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
