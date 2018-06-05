<template>
  <section class="container py-5">
    <h3 class="mb-5">Careers<span class="title-char"></span></h3>
    <collapse class="mb-3" v-for="career in careers">
      <div slot="header">{{career.title}}</div>
      <div slot="content">{{career.description}}</div>
    </collapse>
  </section>
</template>

<script>
import Collapse from '@/components/utils/Collapse'
export default {
  data () {
    return {
    }
  },
  computed: {
    careers () {
      return this.$store.state.careers
    }
  },
  components: {
    Collapse
  },
  methods: {
  }
}
</script>
