<template>
  <section class="py-5 d-flex border-bottom align-items-center flex-wrap flex-md-nowrap">
    <router-link :to="{name: 'news-item', params: {id: info.id}}" tag="div" class="preview-pic rounded">
      <img :src="info.preview" alt="">
    </router-link>
    <div class="pl-md-3 py-2">
      <h5><router-link class="text-dark" :to="{name: 'news-item', params: {id: info.id}}">{{info.title}}</router-link></h5>
      <p>{{info.description}}</p>
    </div>
  </section>
</template>

<script>
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
  }
}
</script>