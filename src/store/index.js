import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        type: 2,
        title: 'Mesto',
        description: 'Место — сервис умных доставок день в день по Санкт-Петербургу от 250 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день.',
        path: 'mesto',
        dlLinks: {
          android: '',
          ios: '',
          web: ''
        }
      },
      {
        id: 2,
        type: 1,
        title: 'Linger',
        description: 'Первый в мире мессенджер, который говорит на твоем языке.',
        path: 'linger',
        dlLinks: {
          android: '',
          ios: '',
          web: ''
        }
      },
      {
        id: 3,
        type: 1,
        title: 'KYC',
        description: 'KYC Legal is a service that allows to verify users. It is based on blockchain technology as a tool for protecting and validating personal data of Internet users.',
        path: 'kyc',
        dlLinks: {
          android: '',
          ios: '',
          web: ''
        }
      },
      {
        id: 4,
        type: 2,
        title: 'Finteam',
        description: 'Забота о финансах и современная бухгалтерия.',
        path: 'finteam',
        dlLinks: {
          android: '',
          ios: '',
          web: ''
        }
      },
      {
        id: 5,
        type: 2,
        title: 'Eurasia',
        description: 'Способствовать развитию большого евразийского партнёрства – Большой Евразии – через создание системы диалога неправительственных организаций.',
        path: 'eurasia',
        dlLinks: {
          android: '',
          ios: '',
          web: ''
        }
      }
    ]
  },
  getters: {
    itemsByArrayValues: state => (prop, key, values) => {
      return state[prop].filter(item => values.indexOf(item[key]) !== -1)
    },
    itemByValue: state => (prop, key, value) => {
      return state[prop].filter(item => item[key] === value)
    }
  },
  actions: {},
  mutations: {}
})

export default store
