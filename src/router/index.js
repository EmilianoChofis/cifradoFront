import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/Form.vue')
    },
    //rutas de claves usadas para mostrar el uso de hashing progresivo
    {
      path: '/claves',
      name: 'claves',
      component: () => import('../views/Claves.vue')
    },
    {
      path: '/clavesForm',
      name: 'clavesForm',
      component: () => import('../views/clavesForm.vue')
    }
  ]
})

export default router
