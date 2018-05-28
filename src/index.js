import styles from './styles/app.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})