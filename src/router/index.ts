import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Search from '../components/Search.vue'
import Home from '../components/home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*', redirect: '/'
  },
  {
    path: '/', name: 'Home', component: Home
  },
  {
    path: '/search/:search/:offset',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
