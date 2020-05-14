import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'assets/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()
console.log(router)
new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
