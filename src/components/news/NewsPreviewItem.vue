<template>
  <section class="py-5 d-flex border-bottom align-items-center flex-wrap flex-md-nowrap">
    <router-link :to="{name: 'news-item', params: {id: info.id}}" tag="div" class="preview-pic rounded">
      <img :src="info.preview" alt="">
    </router-link>
    <div class="pl-md-3 py-2">
      <h5>{{info.title}}</h5>
      <p>{{info.description}}</p>
      <read-more class="text-dark" :link="{name: 'news-item', params: {id: info.id}}"></read-more>
    </div>
  </section>
</template>

<script>
import ReadMore from '@/components/main/ReadMore'

export default {
  name: 'news-preview-item',
  data () {
    return {}
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ReadMore
  }
}
</script>