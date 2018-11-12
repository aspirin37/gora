import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentLanguage: 'en',
        languages: [{
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
        projects: [{
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
                id: 6,
                type: 1,
                title: 'Architeque',
                description: 'Мобильное приложение, позволяющее просматривать подробнейшие 3D-модели архитектурных сооружений',
                path: 'architeque',
                goal: 'Create project better than anybody able to.',
                tags: ['Android', 'iOS', 'Architeque'],
                credits: ['Andrey - backend', 'Artem - PM', 'Julia - Android', 'Vladislav - iOS'],
                date: '05.05.2018',
                dlLinks: {
                    // android: 'https://play.google.com/store/apps/details?id=ru.global.id.client',
                    // web: 'https://kyc.legal/'
                }
            },
            {
                id: 7,
                type: 1,
                title: 'Ballsy',
                description: 'Ballsy - найти любовь просто',
                path: 'ballsy',
                goal: 'Create project better than anybody able to.',
                tags: ['Android', 'iOS', 'Ballsy'],
                credits: ['Andrey - backend', 'Artem - PM', 'Julia - Android', 'Vladislav - iOS'],
                date: '15.10.2018',
                dlLinks: {
                    // android: 'https://play.google.com/store/apps/details?id=ru.global.id.client',
                    // web: 'https://kyc.legal/'
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
                    //   web: 'https://linger.im/'
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
                    //   web: 'https://eurasia-congress.org/'
                }
            },
        ],
        careers: [{
                title: 'Frontend',
                description: `<p><strong>GORA Studio ищет талантливого Frontend разработчика </strong>, который поможет делать сайты быстрыми, адаптивными и удобными.</p> <p>В основном в наших проектах много геолокации, обмен сообщениями с сервером и много деталей.</p> <p><strong>Что предстоит делать:</strong></p> <ul> <li>разбивать крупные задачи на этапы и подзадачи</li> <li>качественно верстать из Sketch / InVision / Photoshop</li> <li>делиться опытом с командой</li> <li>взаимодействовать с backend-разработчиком, UX/UI-дизайнером, project-менеджером и тестировщиками</li> <li>стремиться к лучшему</li> <li>любить детали и видеть битый пиксель издалека</li> </ul> <p><strong>Минимальные требования:</strong></p> <ul> <li>отличное знание Vue.js или React или Angular</li> <li>адаптив всегда и везде</li> <li>опыт Frontend разработки от 2-х лет</li> <li>знать и практиковать SPA</li> <li>HTML5/CSS3 как пять пальцев</li> <li>использовать в работе WebSocket и REST API</li> <li>уметь внедрять библиотеки и технологии JavaScript, jQuery, AJAX, WebPack</li> <li>Яндекс.Метрика и Google Analytics и вот это вот все</li> <li>опыт работы с Git или Bitbucket</li> <li>хорошо бы Jira</li> <li>технический английский язык (иногда чтение документации или ТЗ)</li> </ul> <p><strong>Плюсом будет, если:</strong></p> <ul> <li>есть рабочие проекты в сети (свои или совместные с прошлых работ)</li> <li>умеете писать Unit-тесты и знать для чего они нужны</li> <li>знаете основы backend: PHP, MySQL, PostgreSQL, docker</li> <li>знаете другие языки программирования</li> </ul> <p><strong>Мы предлагаем:</strong></p> <ul> <li>адекватная заработная плата по результатам собеседования и пересмотром по мере роста сотрудника</li> <li>разумный и дружелюбный коллектив</li> <li>официальное трудоустройство с первого дня</li> <li>уютный офис на Петроградской</li> <li>чай/кофе/плюшки/корпоративы/тимбилдинги за наш счет.. всегда</li> <li>гибкое начало и конец рабочего дня</li> <li>возможность иногда работать из дома</li> <li>востребованные и полезные проекты для рынка</li> </ul> <p>Если мало опыта, но хочется расти – пишите, мы рассматриваем всех начинающих и талантливых разработчиков.</p>`
            },
            // 'КомпанияA3 Technology ищет талантливого разработчика мобильных приложений iOS (Swift),который умеет делать приложения быстрыми, простыми и полезными.Расширяем команду для реализации новых проектов.У нас интересные задачи и нет бюрократии.Верим в best practices и применяем их в разработке.Что предстоит делать:Минимальные требования:Плюсом будет, если:Мы предлагаем:Если мало опыта, но хочется расти – пишите, мы рассматриваем всех начинающих и талантливыхразработчиков.Ключевые навыкиразбивать крупные задачи на этапы и подзадачиписать качественный код на Swiftвзаимодействовать с backend­разработчиком, UX/UI­дизайнером, project­менеджером и тестировщикамистремиться к лучшемуотличное знание Swift и/или Obj­Cопыт разработки под iOS от 2­х летпридерживаться SOLID и Clean Architectureуметь использовать библиотеки и технологии Realm/CoreData, Google Maps API, Alomofire, CocoaPods,Firebase,внедрять и анализировать Crashlytics, Flurry и Google Analytics (Firebase)опыт работы с Git или Bitbucketобязательно Jiraтехнический английский язык (иногда чтение документации или ТЗ)есть приложения в AppStore (свои или совместные с прошлых работ)умеете писать Unit­тесты для своих приложенийразверстаете все что нужно из Sktech/PSDесть понимание основ разработки backend (php, go) и баз данных (PostgreSQL)знаете другие языки программированияадекватная заработная плата по результатам собеседования и пересмотром по мере роста сотрудникаразумный и дружелюбный коллективофициальное трудоустройство с первого днясупер­офис на Петроградскойчай/кофе/плюшки/корпоративы/тимбилдинги за наш счет всегдагибкое начало и конец рабочего днявозможность иногда работать из домавостребованные и полезные проекты для рынка',
            {
                title: 'iOS',
                description: `<p><strong>GORA Studio ищет талантливого разработчика мобильных приложений iOS (Swift)</strong>, который умеет делать приложения быстрыми, простыми и полезными.</p><p>Расширяем команду для реализации новых проектов. У нас интересные задачи и нет бюрократии. Верим в best practices и применяем их в разработке.</p><b>Что предстоит делать:</b><ul><li>разбивать крупные задачи на этапы и подзадачи</li><li>писать качественный код на Swift</li><li>взаимодействовать с backend­разработчиком, UX/UI­дизайнером, project­менеджером и тестировщиками</li><li>стремиться к лучшему</li></ul><b>Минимальные требования:</b><ul><li>отличное знание Swift и/или Obj­C</li><li>опыт разработки под iOS от 2­х лет</li><li>придерживаться SOLID и Clean Architecture</li><li>уметь использовать библиотеки и технологии Realm/CoreData, Google Maps API, Alomofire, CocoaPods,Firebase</li><li>внедрять и анализировать Crashlytics, Flurry и Google Analytics (Firebase)</li><li>опыт работы с Git или Bitbucket</li><li>обязательно Jira</li><li>технический английский язык (иногда чтение документации или ТЗ)</li></ul><b>Плюсом будет, если:</b><ul><li>есть приложения в AppStore (свои или совместные с прошлых работ)</li><li>умеете писать Unit­тесты для своих приложений</li><li>разверстаете все что нужно из Sktech/PSD</li><li>есть понимание основ разработки backend (php, go) и баз данных (PostgreSQL)</li><li>знаете другие языки программирования</li></ul><b>Мы предлагаем:</b><ul><li>адекватная заработная плата по результатам собеседования и пересмотром по мере роста сотрудника</li><li>разумный и дружелюбный коллектив</li><li>официальное трудоустройство с первого дня</li><li>уютный офис на Петроградской</li><li>чай/кофе/плюшки/корпоративы/тимбилдинги за наш счет.. всегда</li><li>гибкое начало и конец рабочего дня</li><li>возможность иногда работать из дома</li><li>востребованные и полезные проекты для рынка</li></ul>`
            },
            {
                title: 'Android',
                description: `<p><strong>GORA Studio ищет талантливого разработчика мобильных приложений Android (Java)</strong>,который поможет делать приложения быстрыми, стабильными, простыми и полезными.</p><p>Расширяем команду для реализации новых проектов. У нас интересные задачи и нет бюрократии. Верим в best practices и применяем их в разработке.</p><b>Что предстоит делать:</b><ul><li>разбивать крупные задачи на этапы и подзадачиписать качественный код на Java под Android</li><li>взаимодействовать с backend­разработчиком, UX/UI­дизайнером, project­менеджером и тестировщиками</li><li>стремиться к лучшему</li></ul><b>Минимальные требования:</b><ul><li>отличное знание Java и Android SDK</li><li>опыт разработки под Android от 2­х лет</li><li>знать и практиковать MVP</li><li>придерживаться SOLID и Clean Architectureиспользовать в работе RESTуметь использовать библиотеки и технологии Dagger 2, Google Maps API, Retrofit 2, httpUrlConnection,Realm, Picassoвнедрять и анализировать Crashlytics, Flurry и Google Analyticsопыт работы с Git или Bitbucket</li><li>обязательно Jira</li><li>технический английский язык (иногда чтение документации или ТЗ)</li></ul><b>Плюсом будет, если:</b><ul><li>есть приложения в PlayMarket (свои или совместные с прошлых работ)</li>умеете писать Unit­тесты для своих приложений</li><li>имеете опыт или желание писать на Kotlin</li><li>разверстаете все что нужно из Sketch/InVision</li><li>есть понимание основ разработки backend(go, php) и баз данных (MySQL, PostgreSQL)</li><li>знаете другие языки программирования</li></ul><b>Мы предлагаем:</b><ul><li>адекватная заработная плата по результатам собеседования и пересмотром по мере роста сотрудника</li><li>разумный и дружелюбный коллектив</li><li>официальное трудоустройство с первого дня</li><li>уютный офис на Петроградской</li><li>чай/кофе/плюшки/корпоративы/тимбилдинги за наш счет.. всегда</li><li>гибкое начало и конец рабочего дня</li><li>возможность иногда работать из дома</li><li>востребованные и полезные проекты для рынка</li></ul>`
            }
        ],
        news: [{
            id: '432',
            title: 'Только хорошие новости от Gora.Studio',
            date: '17.05.2018',
            preview: '/images/blured-a3.png',
            description: ''
        }]
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
        setCurrentLanguage({ commit }, options) {
            commit('CHANGE_VALUE', options)
            Vue.i18n.set(store.state.currentLanguage)
            window.sessionStorage.setItem(options.key, options.value)
        }
    },
    mutations: {
        CHANGE_VALUE(state, options) {
            state[options.key] = options.value
        }
    }
})

export default store
