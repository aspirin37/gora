<template>
    <div>
        <main-navbar></main-navbar>
        <main class="main-content">
            <transition name="page">
                <router-view></router-view>
            </transition>
        </main>
        <main-footer></main-footer>
        <modals-container class="modal-z-index relative" />
    </div>
</template>
<script>
import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'

export default {
    name: 'app',
    components: {
        MainNavbar,
        MainFooter
    },
    data() {
        return {
            metaInfo: {
                title: 'Default Title',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'description', content: 'foo' }
                ]
            }
        }
    },
    beforeMount() {
        this.checkLanguage()
    },
    methods: {
        checkStorageLanguage() {
            let lang = window.sessionStorage.currentLanguage

            if (lang) {
                let options = {
                    key: 'currentLanguage',
                    value: lang
                }

                this.$store.dispatch('setCurrentLanguage', options)
            } else {
                this.checkBrowserLanguage()
            }
        },
        checkBrowserLanguage() {
            let lang = window.navigator.language

            if (lang) {
                let options = {
                    key: 'currentLanguage',
                    value: lang.substring(0, 2)
                }

                this.$store.dispatch('setCurrentLanguage', options)
            }
        },
        checkLanguage() {
            this.checkStorageLanguage()
        }
    }
}
</script>