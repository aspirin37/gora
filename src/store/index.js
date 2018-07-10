import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentLanguage: 'en',
    languages: [
      {
        code: 'ru',
        title: 'Русский'
      },
      {
        code: 'en',
        title: 'English'
      },
      {
        code: 'de',
        title: 'Deutsch'
      },
      {
        code: 'fr',
        title: 'Francais'
      }
    ],
    email: 'hi@gora.studio',
    projects: [
      {
        id: 1,
        type: 2,
        title: 'Mesto',
        description: 'Место — сервис умных доставок день в день по Санкт-Петербургу от 150 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день.',
        path: 'mesto',
        goal: 'Create project better than anybody able to.',
        tags: ['Web', 'Project', 'Mesto'],
        credits: ['Andrey - backend', 'Artem - PM', 'Julia - Android', 'Vladislav - iOS', 'Vladimir - UX/UI'],
        date: '01.09.2017',
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
        goal: 'Create project better than anybody able to.',
        tags: ['Android', 'Application', 'Linger'],
        credits: ['Andrey - backend', 'Artem - PM', 'Julia - Android', 'Vladislav - iOS'],
        date: '01.05.2018',
        dlLinks: {
          web: 'https://linger.im/'
        }
      },
      {
        id: 3,
        type: 1,
        title: 'KYC Legal',
        description: 'Сервис, который позволяет проводить верификацию пользователя и предотвращает мошенничество. Технология блокчейн лежит в основе сервиса в качестве инструмента защиты и подтверждения достоверности личных данных пользователей сети.',
        path: 'kyc',
        goal: 'Create project better than anybody able to.',
        tags: ['Android', 'Application', 'Mesto'],
        credits: ['Andrey - backend', 'Artem - PM', 'Julia - Android', 'Vladislav - iOS'],
        date: '05.05.2018',
        dlLinks: {
          android: 'https://play.google.com/store/apps/details?id=ru.global.id.client',
          web: 'https://kyc.legal/'
        }
      },
      {
        id: 4,
        type: 2,
        title: 'fin.team',
        description: 'Забота о финансах и современная бухгалтерия.',
        path: 'finteam',
        goal: 'Create project better than anybody able to.',
        tags: ['Web', 'Site', 'Finteam'],
        credits: ['Slava - frontend', 'Artem - PM', 'Vladimir - UX/UI'],
        date: '01.11.2017',
        dlLinks: {
          web: 'https://fin.team/'
        }
      },
      {
        id: 5,
        type: 2,
        title: 'First Eurasia Congress',
        description: 'Способствовать развитию большого евразийского партнёрства – Большой Евразии – через создание системы диалога неправительственных организаций.',
        path: 'eurasia',
        goal: 'Create project better than anybody able to.',
        tags: ['Web', 'CMS', 'Eurasia'],
        credits: ['Valery - backend', 'Artem - PM', 'Slava - frontend', 'Vladimir - UX/UI'],
        date: '01.05.2017',
        dlLinks: {
          web: 'https://eurasia-congress.org/'
        }
      }
    ],
    careers: [
      {
        title: 'Frontend',
        description: 'Всегда открыты для опытных frontend-разработчиков. Если вы верстаете с любовью к мелочам и используйте современный фреймворк - присылайте резюме на hi@gora.studio и мы обязательно с вами свяжемся.'
      },
      {
        title: 'iOS',
        description: 'Всегда открыты для опытных iOS-разработчиков. Смотрели все выступления Стива Джобса и онлайн трансляции WWDC, безудержно кодите на Swift и нет-нет, на Obj-C - присылайте резюме на hi@gora.studio и мы обязательно с вами свяжемся.'
      },
      {
        title: 'Android',
        description: 'Всегда открыты для опытных Android-разработчиков. Любите проекты посложнее, знаете Android Studio лучше всех, не боитесь новых ощущений - присылайте резюме на hi@gora.studio и мы обязательно с вами свяжемся.'
      }
    ],
    news: [
      {
        id: '432',
        title: 'News item title',
        date: '07.06.2018',
        preview: '/images/blured-linger.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus modi voluptatibus explicabo esse voluptatem numquam voluptates quisquam illo, ducimus vero tenetur ipsa corrupti quis distinctio minima, architecto minus molestiae.'
      },
      {
        id: '642',
        title: 'News item title',
        date: '07.06.2018',
        preview: '/images/blured-linger.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus modi voluptatibus explicabo esse voluptatem numquam voluptates quisquam illo, ducimus vero tenetur ipsa corrupti quis distinctio minima, architecto minus molestiae.'
      },
      {
        id: '623',
        title: 'News item title',
        date: '07.06.2018',
        preview: '/images/blured-linger.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus modi voluptatibus explicabo esse voluptatem numquam voluptates quisquam illo, ducimus vero tenetur ipsa corrupti quis distinctio minima, architecto minus molestiae.'
      },
      {
        id: '152',
        title: 'News item title',
        date: '07.06.2018',
        preview: '/images/blured-linger.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus modi voluptatibus explicabo esse voluptatem numquam voluptates quisquam illo, ducimus vero tenetur ipsa corrupti quis distinctio minima, architecto minus molestiae.'
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
  actions: {
    setCurrentLanguage ({ commit }, options) {
      commit('CHANGE_VALUE', options)
      Vue.i18n.set(store.state.currentLanguage)
      window.sessionStorage.setItem(options.key, options.value)
    }
  },
  mutations: {
    CHANGE_VALUE (state, options) {
      state[options.key] = options.value
    }
  }
})

export default store
