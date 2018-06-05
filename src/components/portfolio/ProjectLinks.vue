<template>
  <div>
    <a :href="info[property]" target="_blank" class="dl-link rounded mr-2 px-4 py-2" v-for="(property, index) in Object.keys(info)" :key="`link-${index}`">
      <img class="dl-link__img" :src="require(`@/images/${property}.svg`)" alt="link">
    </a>
  </div>
</template>

<script>
export default {
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
