<template>
    <section class="container d-flex flex-column py-5">
        <h3 class="mb-5">{{$t('titles.careers')}}<span class="title-char"></span></h3>
        <collapse class="mb-3"
                  v-for="(career, index) in careers"
                  :key="`career-${index}`">
            <div slot="header">{{career.title}}</div>
            <div slot="content"
                 class="pt-3"
                 v-html="career.description"></div>
        </collapse>
        <router-link :to="{name: 'contacts'}"
                     class="btn btn-theme btn-rounded mx-auto mt-2">{{$t('titles.contact')}}</router-link>
    </section>
</template>
<script>
import Collapse from '@/components/utils/Collapse'
export default {
    data() {
        return {}
    },
    computed: {
        careers() {
            return this.$store.state.careers
        }
    },
    components: {
        Collapse
    },
    methods: {}
}
</script>