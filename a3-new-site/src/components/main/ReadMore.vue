<template>
  <router-link :to="link" class="text-white"><b><u>Read more...</u></b></router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {}
    }
  }
}
</script>