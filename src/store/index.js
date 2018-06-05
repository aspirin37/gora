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
          android: 'https://play.google.com/store/apps/details?id=delivery.mesto.client_android',
          ios: 'https://itunes.apple.com/ru/app/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D1%82%D0%B2%D0%BE%D1%8F-%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0/id1140907953?l=ru&ls=1&mt=8',
          web: 'https://mesto.delivery'
        }
      },
      {
        id: 2,
        type: 1,
        title: 'Linger',
        description: 'Первый в мире мессенджер, который говорит на твоем языке.',
        path: 'linger',
        dlLinks: {
          web: 'https://linger.im/'
        }
      },
      {
        id: 3,
        type: 1,
        title: 'KYC',
        description: 'KYC Legal is a service that allows to verify users. It is based on blockchain technology as a tool for protecting and validating personal data of Internet users.',
        path: 'kyc',
        dlLinks: {
          android: 'https://play.google.com/store/apps/details?id=ru.global.id.client'
        }
      },
      {
        id: 4,
        type: 2,
        title: 'Finteam',
        description: 'Забота о финансах и современная бухгалтерия.',
        path: 'finteam',
        dlLinks: {
          web: 'https://fin.team/'
        }
      },
      {
        id: 5,
        type: 2,
        title: 'Eurasia',
        description: 'Способствовать развитию большого евразийского партнёрства – Большой Евразии – через создание системы диалога неправительственных организаций.',
        path: 'eurasia',
        dlLinks: {
          web: 'https://eurasia-congress.org/'
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
