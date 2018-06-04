<template>
  <main-project-view :info="info"></main-project-view>
</template>

<script>
import MainProjectView from './MainProjectView'

export default {
  name: 'mesto-project-linger',
  data () {
    return {
      info: {
        title: 'Linger',
        text: 'Первый в мире мессенджер, который говорит на твоем языке.',
        path: 'linger'
      }
    }
  },
  components: {
    MainProjectView
  }
}
</script>
