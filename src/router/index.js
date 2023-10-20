import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// constant routes
const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

export default new Router({
  routes: constantRoutes
})