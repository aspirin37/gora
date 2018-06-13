<template>
  <div>
    <article class="container py-5 mw-800">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <h1 class="mb-0 mr-2">{{projectInfo.title}}<span class="title-char"></span></h1>
        <project-links :info="projectInfo.dlLinks" class="py-2" :isDarkIcons="true"></project-links>
      </div>

      <p class="font-large mb-4">{{projectInfo.description}}</p>

      <project-tags :tags="projectInfo.tags" class="mb-5" :isDarkIcons="true"></project-tags>

      <div class="bg-light rounded px-4 py-3 mb-5">
        <span>Project's goal:</span>
        <p class="font-large mb-0 text-dark">{{projectInfo.goal}}</p>
      </div>

      <div class="mb-4">
        <img src="@/images/team.jpeg" alt="" class="w-100">
      </div>
      <p class="font-large mb-4">{{projectInfo.description}}</p>
      <div class="mb-4">
        <img src="@/images/team.jpeg" alt="" class="w-100">
      </div>
      <p class="font-large mb-4">{{projectInfo.description}}</p>

      <h5>{{$t('titles.credits')}}</h5>
      <p>{{projectInfo.credits.join(', ')}}</p>
      <p>{{$t('titles.release')}}: <time>{{projectInfo.date}}</time></p>
    </article>
    <project-contact></project-contact>
  </div>
</template>

<script>
import ProjectContact from '@/components/portfolio/ProjectContact'
import ProjectLinks from '@/components/portfolio/ProjectLinks'
import ProjectTags from '@/components/portfolio/ProjectTags'

export default {
  components: {
    ProjectContact,
    ProjectLinks,
    ProjectTags
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
