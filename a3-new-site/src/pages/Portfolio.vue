<template>
    <section class="container py-5">
        <h3 class="mb-5">{{$t('titles.portfolio')}}<span class="title-char"></span></h3>
        <nav-tabs :links="portfolioTabs"
                  v-on:clicked="setTab"
                  class="bg-light mb-4"></nav-tabs>
        <portfolio-item v-for="(item, index) in portfolioItems"
                        :key="`portfolio-${index}`"
                        :info="item"
                        :hide="isDisabledTab(item.type)"
                        :index="index"></portfolio-item>
    </section>
</template>
<script>
import NavTabs from '@/components/utils/NavTabs'
import PortfolioItem from '@/components/portfolio/PortfolioItem'

export default {
    data() {
        return {
            portfolioTabs: [this.$t('titles.all'), this.$t('titles.mobile'), this.$t('titles.web')],
            activeTab: 0
        }
    },
    components: {
        NavTabs,
        PortfolioItem
    },
    computed: {
        portfolioItems() {
            return this.$store.state.projects
        }
    },
    methods: {
        isDisabledTab(type) {
            return this.activeTab !== type && this.activeTab !== 0
        },
        setTab(event) {
            this.activeTab = event
        }
    }
}
</script>