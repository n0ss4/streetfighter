import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Ganaste from './views/Ganar.vue'
import Perdiste from './views/Perder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/ganaste',
      name: 'ganaste',
      component: Ganaste
    },
    {
      path: '/perdiste',
      name: 'perdiste',
      component: Perdiste
    }
  ]
})
