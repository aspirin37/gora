import styles from './styles/app.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import vClickOutside from 'v-click-outside'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true })
Vue.use(vClickOutside)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})