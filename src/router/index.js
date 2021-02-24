import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    // route level code-splitting
    // this generates a separate chunk (Wishlist.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Wishlist" */ '../views/Wishlist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  if (to.name === 'Wishlist' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else if (to.name === 'Register' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else next()
})

export default router
