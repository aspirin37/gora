<template>
  <nav class="nav-ul-tabs">
    <a href="#"
      class="py-3 px-3 link-reset nav-ul-tabs__link text-secondary"
      v-for="(link, index) in links"
      v-on:click.prevent="emitLink(index)"
      :key="`link-${index}`"
      :class="{'nav-ul-tabs__link--active': activeLink === index}"
    ><b>{{link}}</b></a>
  </nav>
</template>

<script>
export default {
  name: 'nav-tabs',
  data () {
    return {
      activeLink: 0
    }
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    let ind = this.$route.query.tab

    if (ind) {
      this.emitLink(+ind)
    }
  },
  methods: {
    emitLink (index) {
      this.activeLink = index
      this.$router.push({query: {tab: this.activeLink || null}})
      this.$emit('clicked', this.activeLink)
    }
  }
}
</script>