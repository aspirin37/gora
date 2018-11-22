import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import translationsEn from './en'
import translationsRu from './ru'
import translationsDe from './de'
import translationsFr from './fr'
import store from '../'

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('ru', translationsRu)
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('de', translationsDe)
Vue.i18n.add('fr', translationsFr)
Vue.i18n.set(store.state.currentLanguage)

export default {}
