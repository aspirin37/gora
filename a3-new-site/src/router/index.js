import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Portfolio from '@/pages/Portfolio'
import Contacts from '@/pages/Contacts'
import Project from '@/pages/Project'
import Careers from '@/pages/Careers'
import News from '@/pages/News'
import NewsItem from '@/pages/NewsItem'
import Team from '@/pages/Team'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        if(savedPosition) {
            return savedPosition
        } else if(to.name !== from.name) {
            return { y: 0 }
        }
    },
    history: true,
    routes: [{
            path: '/:lang',
            component: {
                template: '<router-view/>'
            },
            beforeEnter(from, to, next) {
                let supportedLangs = ['ru', 'en', 'de', 'fr']
                if(supportedLangs.includes(from.params.lang)) {
                    let options = {
                        key: 'currentLanguage',
                        value: from.params.lang
                    }
                    router.app.$store.dispatch('setCurrentLanguage', options)
                    let titleInst = document.getElementsByTagName('title')[0]
                    titleInst.innerHTML = router.app.$t('sitetitle')
                    let metaDescription = document.querySelector('meta[name="description"]')
                    metaDescription.content = '111'
                    next()
                } else {
                    next('ru')
                }

            },
            children: [{
                    path: '',
                    name: 'main-page',
                    component: Main
                },
                {
                    path: 'portfolio',
                    name: 'portfolio',
                    component: Portfolio
                },
                {
                    path: 'portfolio/:title',
                    name: 'project',
                    component: Project
                },
                {
                    path: 'news',
                    name: 'news',
                    component: News
                },
                {
                    path: 'news/:id',
                    name: 'news-item',
                    component: NewsItem
                },
                {
                    path: 'contacts',
                    name: 'contacts',
                    component: Contacts
                },
                {
                    path: 'team',
                    name: 'team',
                    component: Team
                },
                {
                    path: 'careers',
                    name: 'careers',
                    component: Careers
                },
            ]
        },
        { path: "*", redirect: '/ru' }
    ]
})

export default router
