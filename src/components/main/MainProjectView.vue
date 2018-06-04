<template>
  <section
    :class="['height-full project-section container-fluid js-scroll-block d-flex justify-content-center flex-column rapallax-bgs', `bg-${info.path}`]"
    ref="main-block"
  >
    <div class="row py-4 project-section__info rapallax-bgs__content">
      <div class="col-12 col-lg-5"></div>
      <div class="col-12 col-lg-5">
        <h3 class="h1 mb-4 text-white">{{info.title}}</h3>
        <p class="font-large mb-4 text-white">
          {{info.text}}
          <read-more :link="info.path"></read-more>
        </p>
        <div class="mb-4">
          <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
          <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
      </div>
    </div>
    <div class="project-section__clip">
      <div class="project-section__item mb-4 mb-md-0 mx-auto">
        <img src="@/images/iphone-light.svg" alt="" class="mw-100 project-section__frame">
        <img :src="require(`@/images/projects/${info.path}.png`)" alt="" class="project-section__pic">
      </div>
    </div>
    <img class="rapallax-bgs__image rapallax-bgs__image--1" v-bind:style="parallaxPercent" :src="require(`@/images/blured-${info.path}.png`)">
    <img class="rapallax-bgs__image rapallax-bgs__image--2" v-bind:style="parallaxPercent" :src="require(`@/images/blured-${info.path}.png`)">
    <img class="rapallax-bgs__image rapallax-bgs__image--3" v-bind:style="parallaxPercent" :src="require(`@/images/blured-${info.path}.png`)">
  </section>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'
import ReadMore from '@/components/main/ReadMore'

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
    ReadMore
  }
}
</script>
