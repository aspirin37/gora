<template>
  <form v-on:submit.prevent="sendFeedback">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Phone">
    </div>
    <div class="form-group">
      <textarea class="form-control" placeholder="Message"></textarea>
    </div>
    <button type="submit" class="btn btn-theme w-100">Send</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    sendFeedback () {
      this.$emit('sended', true)
    }
  }
}
</script>