import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'member',
      component: () => import('./pages/Member/Member.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./pages/Detail/Detail.vue')
    }
  ]
})
