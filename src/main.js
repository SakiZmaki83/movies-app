import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')