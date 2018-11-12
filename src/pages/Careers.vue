<template>
    <section class="container d-flex flex-column py-5">
        <h3 class="mb-5">{{$t('titles.careers')}}<span class="title-char"></span></h3>
        <collapse class="mb-3"
                  v-for="(career, index) in careers"
                  :key="`career-${index}`">
            <div slot="header">{{career.title}}</div>
            <div slot="content"
                 v-html="career.description"></div>
        </collapse>
        <router-link :to="{name: 'contacts'}"
                     class="btn btn-theme btn-rounded mx-auto mt-2">{{$t('titles.contact')}}</router-link>
    </section>
</template>
<script>
import Collapse from '@/components/utils/Collapse'
export default {
    data() {
        return {
            careers: [{
                    title: 'Frontend',
                    description: `<div class="pt-3"><p>Компания <strong>A3 Technology ищет талантливого Frontend разработчика </strong>, который поможет делать сайты быстрыми, адаптивными и удобными.</p> <p>В основном в наших проектах много геолокации, обмен сообщениями с сервером и много деталей.</p> <p><strong>Что предстоит делать:</strong></p> <ul> <li>разбивать крупные задачи на этапы и подзадачи</li> <li>качественно верстать из Sketch / InVision / Photoshop</li> <li>делиться опытом с командой</li> <li>взаимодействовать с backend-разработчиком, UX/UI-дизайнером, project-менеджером и тестировщиками</li> <li>стремиться к лучшему</li> <li>любить детали и видеть битый пиксель издалека</li> </ul> <p><strong>Минимальные требования:</strong></p> <ul> <li>отличное знание Vue.js или React или Angular</li> <li>адаптив всегда и везде</li> <li>опыт Frontend разработки от 2-х лет</li> <li>знать и практиковать SPA</li> <li>HTML5/CSS3 как пять пальцев</li> <li>использовать в работе WebSocket и REST API</li> <li>уметь внедрять библиотеки и технологии JavaScript, jQuery, AJAX, WebPack</li> <li>Яндекс.Метрика и Google Analytics и вот это вот все</li> <li>опыт работы с Git или Bitbucket</li> <li>хорошо бы Jira</li> <li>технический английский язык (иногда чтение документации или ТЗ)</li> </ul> <p><strong>Плюсом будет, если:</strong></p> <ul> <li>есть рабочие проекты в сети (свои или совместные с прошлых работ)</li> <li>умеете писать Unit-тесты и знать для чего они нужны</li> <li>знаете основы backend: PHP, MySQL, PostgreSQL, docker</li> <li>знаете другие языки программирования</li> </ul> <p><strong>Мы предлагаем:</strong></p> <ul> <li>адекватная заработная плата по результатам собеседования и пересмотром по мере роста сотрудника</li> <li>разумный и дружелюбный коллектив</li> <li>официальное трудоустройство с первого дня</li> <li>уютный офис на Петроградской</li> <li>чай/кофе/плюшки/корпоративы/тимбилдинги за наш счет.. всегда</li> <li>гибкое начало и конец рабочего дня</li> <li>возможность иногда работать из дома</li> <li>востребованные и полезные проекты для рынка</li> </ul> <p>Если мало опыта, но хочется расти – пишите, мы рассматриваем всех начинающих и талантливых разработчиков.</p></div>`
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
        }
    },
    // computed: {
    //     careers() {
    //         return this.$store.state.careers
    //     }
    // },
    components: {
        Collapse
    },
    methods: {}
}
</script>