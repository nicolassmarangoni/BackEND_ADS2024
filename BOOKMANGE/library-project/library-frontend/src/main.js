import Vue from 'vue';
import App from './App.vue';
import router from './router';
import api from './axios'; // Certifique-se de que este arquivo existe e está configurado corretamente

Vue.config.productionTip = false;
Vue.prototype.$http = api; // Adiciona o Axios como uma propriedade global

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
