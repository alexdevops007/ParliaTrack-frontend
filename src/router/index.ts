import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderOfBusinessList from '../components/OrderOfBusiness/OrderOfBusinessList.vue'
import OrderOfBusinessForm from '../components/OrderOfBusiness/OrderOfBusinessForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order-of-business',
      name: 'OrderOfBusinessList',
      component: OrderOfBusinessList
    },
    {
      path: '/add-order-of-business',
      name: 'AddOrderOfBusiness',
      component: OrderOfBusinessForm
    }
  ]
})

export default router
