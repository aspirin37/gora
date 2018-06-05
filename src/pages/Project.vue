<template>
  <div>
    <article class="container py-5 mw-800">
      <h1 class="mb-5">{{projectInfo.title}}<span class="title-char"></span></h1>
      <p class="font-large">{{projectInfo.description}}</p>

      <project-links class="mb-5" :info="projectInfo.dlLinks"></project-links>

      <div class="mb-4">
        <img src="@/images/team.jpeg" alt="" class="mw-100">
      </div>
      <p class="font-large">{{projectInfo.description}}</p>
    </article>
    <project-contact></project-contact>
  </div>
</template>

<script>
import ProjectContact from '@/components/portfolio/ProjectContact'
import ProjectLinks from '@/components/portfolio/ProjectLinks'

export default {
  components: {
    ProjectContact,
    ProjectLinks
  },
  computed: {
    projectPath () {
      return this.$route.params.title
    },
    projectInfo () {
      return this.$store.getters.itemsByArrayValues('projects', 'path', this.projectPath)[0]
    }
  }
}
</script>
