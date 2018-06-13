<template>
  <form v-on:submit.prevent="sendFeedback">
    <div class="form-group">
      <input type="text" class="form-control" :placeholder="$t('titles.name')">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" :placeholder="$t('titles.phone')">
    </div>
    <div class="form-group">
      <textarea class="form-control" :placeholder="$t('titles.message')"></textarea>
    </div>
    <button type="submit" class="btn btn-theme w-100">{{$t('titles.send')}}</button>
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