<template>
  <section class="container py-5">
    <h3 class="mb-5">{{$t('titles.contact')}}<span class="title-char"></span></h3>
    <contact-form-full></contact-form-full>
  </section>
</template>

<script>
import ContactFormFull from '@/components/contacts/ContactFormFull'

export default {
  data () {
    return {
    }
  },
  components: {
    ContactFormFull
  },
  methods: {
  }
}
</script>
