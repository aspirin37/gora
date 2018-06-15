<template>
  <form v-on:submit.prevent="sendFeedback" class="relative">
    <loader v-if="!messageSended"></loader>
    <div class="form-group">
      <input type="text" class="form-control" :placeholder="$t('titles.name')" v-model="feedName" required>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" :placeholder="$t('titles.phone')" v-model="feedPhone" required>
    </div>
    <div class="form-group">
      <textarea class="form-control" :placeholder="$t('titles.message')" v-model="feedMessage"></textarea>
    </div>
    <button type="submit" class="btn btn-theme w-100 mb-3">{{$t('titles.send')}}</button>
    <span class="text-danger" v-if="errorMessage">{{errorMessage}}</span>
  </form>
</template>

<script>
import Loader from '@/components/utils/Loader'

export default {
  data () {
    return {
      feedName: '',
      feedPhone: '',
      feedMessage: '',
      errorMessage: '',
      messageSended: true
    }
  },
  components: {
    Loader
  },
  methods: {
    sendFeedback () {
      this.messageSended = false
      let options = new FormData()

      options.append('phone', this.feedPhone)
      options.append('name', this.feedName)
      if (this.feedMessage) {
        options.append('description', this.feedMessage)
      }
      this.$http.post('https://gora.studio/mailer/mail.php', options).then(response => {
        this.$emit('sended', true)
        this.messageSended = true
      }).catch(error => {
        this.errorMessage = error.statusText
      })
      
    }
  }
}
</script>