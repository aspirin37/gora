import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Portfolio from '@/pages/Portfolio'
import Contacts from '@/pages/Contacts'
import Project from '@/pages/Project'
import Careers from '@/pages/Careers'
import News from '@/pages/News'

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
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    { path: "*", redirect: '/' }
  ]
})

export default router
