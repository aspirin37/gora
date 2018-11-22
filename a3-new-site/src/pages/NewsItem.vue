<template>
  <div>
    <article class="container py-5 mw-800">
      <div class="mb-4">
        <h1>{{itemInfo.title}}<span class="title-char"></span></h1>
        <time :datetime="itemInfo.date">{{itemInfo.date}}</time>
      </div>
      <div class="mb-4">
        <img :src="itemInfo.preview" alt="" class="w-100">
      </div>
      <p class="font-large mb-4">{{itemInfo.description}}</p>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    itemPath () {
      return this.$route.params.id
    },
    itemInfo () {
      return this.$store.getters.itemsByArrayValues('news', 'id', this.itemPath)[0]
    }
  }
}
</script>
