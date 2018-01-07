import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import SchedulePage from '@/pages/SchedulePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: SchedulePage
    }
  ]
})
