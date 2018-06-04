<template>
  <main-project-view :info="info"></main-project-view>
</template>

<script>
import MainProjectView from './MainProjectView'

export default {
  name: 'mesto-project-mesto',
  data () {
    return {
      info: {
        title: 'Mesto',
        text: 'Место — сервис умных доставок день в день по Санкт-Петербургу от 250 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день.',
        path: 'mesto'
      }
    }
  },
  components: {
    MainProjectView
  }
}
</script>
