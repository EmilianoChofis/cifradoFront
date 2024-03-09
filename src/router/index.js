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
      //rutas de Pagos
    {
      path: '/detailsPayment',
      name: 'detailsPayment',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/payments',
      name: 'payments',
      component: () => import('../views/Payments.vue')
    },
    {
      path: '/paymentForm',
      name: 'paymentForm',
      component: () => import('../views/PaymentForm.vue')
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
      component: () => import('../views/ClavesForm.vue')
    }
  ]
})

export default router
