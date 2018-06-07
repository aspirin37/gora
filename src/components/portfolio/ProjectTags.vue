<template>
  <div class="overflow-x text-nowrap">
    <span
      :key="`tag-${index}`"
      class="tag mr-2 mb-2 text-nowrap d-inline-block"
      v-for="(tag, index) in tags"
    >
      {{tag}}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    isDarkIcons: {
      type: Boolean,
      default: false
    }
  }
}
</script>
