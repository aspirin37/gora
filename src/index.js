import styles from './styles/app.scss'
import store from '@/store'
import Vue from 'vue'
import App from './App'
import router from './router'
import vClickOutside from 'v-click-outside'
import VModal from 'vue-js-modal'
import uSelect from 'u-select'
import vuexI18n from 'vuex-i18n'
import languages from '@/store/languages'

Vue.use(VModal, { dynamic: true })
Vue.use(vClickOutside)
Vue.use(uSelect)

new Vue({
  el: '#app',
  store,
  languages,
  router,
  template: '<App/>',
  components: { App }
})