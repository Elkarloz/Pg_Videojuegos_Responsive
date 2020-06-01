import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import Games from '../views/Games/Gm/Game.vue'
import Gta_sanandreas from '../views/Games/Accion/Gta_SanAndreas.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/games/gta_sanandreas',
    name: 'Gta_sanandreas',
    component: Gta_sanandreas
  },

]

const router = new VueRouter({
  routes
})

export default router
