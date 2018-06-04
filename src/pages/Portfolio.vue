<template>
  <section class="container py-5">
    <h3 class="mb-5">Portfolio<span class="title-char"></span></h3>
    <nav-tabs :links="portfolioTabs" v-on:clicked="activeTab = $event" class="bg-light mb-4"></nav-tabs>
    <portfolio-item
      v-for="(item, index) in portfolioItems" :key="`portfolio-${index}`"
      :info="item"
      :hide="isDisabledTab(item.type)"
    ></portfolio-item>
  </section>
</template>

<script>
import NavTabs from '@/components/utils/NavTabs'
import PortfolioItem from '@/components/portfolio/PortfolioItem'

export default {
  data () {
    return {
      portfolioTabs: ['All', 'Mobile Apps', 'Web Projects'],
      activeTab: 0,
      portfolioItems: [
        {type: 2, title: 'Mesto', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'mesto'},
        {type: 1, title: 'Linger', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'linger'},
        {type: 2, title: 'Eurasia', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'eurasia'},
        {type: 2, title: 'Finteam', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'finteam'},
        {type: 1, title: 'KYC', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'kyc'},
        {type: 1, title: 'Mesto', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'mesto'}
      ]
    }
  },
  components: {
    NavTabs,
    PortfolioItem
  },
  methods: {
    isDisabledTab (type) {
      return this.activeTab !== type && this.activeTab !== 0
    }
  }
}
</script>
