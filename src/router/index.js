import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/',
      component: Index
    },
    {
      path: '/list',
      component: List
    }
  ]
})
