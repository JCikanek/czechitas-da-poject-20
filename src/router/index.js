import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SeznamZbozi from '../views/SeznamZbozi.vue'
import Detail from '../views/Detail.vue'
import Formular from '../views/Formular.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
    {
      path: '/zbozi/:id',
      name: 'Zbozi',
      component: SeznamZbozi,
      props: true
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/formular/:id',
      name: 'Formular',
      component: Formular,
      props: true
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
