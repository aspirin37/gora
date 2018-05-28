import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Portfolio from '@/pages/Portfolio'
import Contacts from '@/pages/Contacts'
import Project from '@/pages/Project'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.name !== from.name) {
      return { y: 0 }
    }
  },
  history: true,
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: Main
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:title',
      name: 'project',
      component: Project
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    { path: "*", redirect: '/' }
  ]
})

export default router
