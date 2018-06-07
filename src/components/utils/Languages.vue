<template>
  <div class="d-flex align-items-center">
    <img :src="require(`@/images/countries/${currentLanguage}.svg`)" alt="" class="sm-icon mr-3">
    <u-select
      class="d-inline-block w-auto"
      :options="languages"
      :optionValue="'title'"
      :dropdownClass="['someclass']"
      :itemClass="['someclass']"
      :linkClass="['someclass']"
      :selectedItem="currentIndex"
      v-on:selected="switchLanguage($event.code)"
    ></u-select>
  </div>
</template>

<script>
export default {
  name: 'languages',
  data () {
    return {}
  },
  computed: {
    currentIndex () {
      return this.languages.findIndex(item => item.code === this.currentLanguage)
    },
    languages () {
      return this.$store.state.languages
    },
    currentLanguage () {
      return this.$store.state.currentLanguage
    }
  },
  methods: {
    switchLanguage (val) {
      let options = {
        key: 'currentLanguage',
        value: val
      }
      this.$store.dispatch('setCurrentLanguage', options)
    }
  }
}
</script>