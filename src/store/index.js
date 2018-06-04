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
        description: 'Первый в мире мессенджер, который говорит на твоем языке.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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
