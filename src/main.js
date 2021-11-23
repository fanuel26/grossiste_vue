import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
