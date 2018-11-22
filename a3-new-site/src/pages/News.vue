<template>
  <div class="container py-5">
    <h3 class="mb-5">{{$t('titles.news')}}<span class="title-char"></span></h3>
    <news-preview-item
      v-for="(item, index) in news"
      :key="`item-${index}`"
      :info="item"
    ></news-preview-item>
  </div>
</template>

<script>
import NewsPreviewItem from '@/components/news/NewsPreviewItem'
export default {
  data () {
    return {}
  },
  components: {
    NewsPreviewItem
  },
  computed: {
    news () {
      return this.$store.state.news
    }
  }
}
</script>
