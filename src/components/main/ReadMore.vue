<template>
  <router-link :to="{name: 'project', params: {title: link}}" class="text-white"><b>Read more...</b></router-link>
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