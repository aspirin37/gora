<template>
  <main-project-view :info="info"></main-project-view>
</template>

<script>
import MainProjectView from './MainProjectView'

export default {
  name: 'mesto-project-kyc',
  data () {
    return {
      info: {
        title: 'kyc',
        text: 'Первый в мире мессенджер, который говорит на твоем языке.',
        path: 'kyc'
      }
    }
  },
  components: {
    MainProjectView
  }
}
</script>
