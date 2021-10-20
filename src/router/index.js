import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leads from '../views/Leads.vue'
import Customers from '../views/Customers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leads',
    name: 'leads',
    component: Leads
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
