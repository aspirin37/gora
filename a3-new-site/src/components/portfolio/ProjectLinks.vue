<template>
  <div>
    <a
      :href="info[property]"
      :key="`link-${index}`"
      target="_blank"
      class="dl-link rounded mr-4"
      v-for="(property, index) in Object.keys(info)"
    >
      <img class="dl-link__img dl-link__img--front" :src="require(`@/images/${property}${isDarkIcons ? '-color' : ''}.svg`)" alt="link">
      <img class="dl-link__img dl-link__img--back" :src="require(`@/images/${property}-hover.svg`)" alt="link">
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
    },
    isDarkIcons: {
      type: Boolean,
      default: false
    }
  }
}
</script>
