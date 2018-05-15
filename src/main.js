import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import AppMovies from './components/AppMovies'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/movies', component: AppMovies },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')