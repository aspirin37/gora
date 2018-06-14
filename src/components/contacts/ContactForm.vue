<template>
  <form v-on:submit.prevent="sendFeedback">
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
export default {
  data () {
    return {
      feedName: '',
      feedPhone: '',
      feedMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    sendFeedback () {
      let options = {
        phone: this.feedPhone,
        name: this.feedName
      }
      if (this.feedMessage) {
        options.message = this.feedMessage
      }
      this.$http.post('https://gora.studio/mailer/mail.php', JSON.stringify(options)).then(response => {
        this.$emit('sended', true)
      }).catch(error => {
        this.errorMessage = error.statusText
      })
      
    }
  }
}
</script>