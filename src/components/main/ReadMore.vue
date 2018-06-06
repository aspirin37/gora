<template>
  <router-link :to="{name: 'project', params: {title: link}}" class="text-white"><b><u>Read more...</u></b></router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>