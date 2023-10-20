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
  },
  // 放置路由表最后面
  {
    path: '*',
    component: () => import('@/views/error/404.vue')
  }
]

export default new Router({
  routes: constantRoutes
})