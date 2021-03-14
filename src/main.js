import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

//Import Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Import Pages
import LoginPage  from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import HomePage   from './components/pages/HomePage'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
  ]
})

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
