import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
