import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Bootstrap from 'bootstrap-vue'


Vue.use(Bootstrap)
Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
