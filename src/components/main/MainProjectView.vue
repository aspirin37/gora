<template>
  <section
    :class="['height-full-lg project-section container-fluid js-scroll-block d-flex justify-content-center flex-column rapallax-bgs', `bg-${info.path}`]"
    ref="main-block"
  >
    <div class="row py-4 project-section__info rapallax-bgs__content">
      <div class="col-12 col-lg-5"></div>
      <div class="col-12 col-lg-5">
        <h3 class="h1 mb-4 text-white">
          <router-link :to="{name: 'project', params: {title: info.path}}" class="text-white">{{info.title}}</router-link>
        </h3>
        <p class="font-large mb-4 text-white">
          {{$t(`projects.${info.path}.description`)}}
        </p>
        <project-links class="mb-4" :info="info.dlLinks"></project-links>
      </div>
    </div>
    <div class="project-section__clip">
      <div class="project-section__item mb-4 mb-md-0 mx-auto">
        <img src="@/images/iphone-light.svg" alt="" class="mw-100 project-section__frame">
        <img :src="require(`@/images/projects/${info.path}.png`)" alt="" class="project-section__pic">
      </div>
    </div>
    <img class="rapallax-bgs__image" v-bind:style="parallaxPercent" :src="require(`@/images/blured-${info.path}.png`)">
  </section>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'
import ProjectLinks from '@/components/portfolio/ProjectLinks'

export default {
  name: 'main-project-view',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  mixins: [parallaxBg],
  components: {
    ProjectLinks
  }
}
</script>
