<template>
  <section class="height-full project-section container-fluid js-scroll-block d-flex justify-content-center flex-column rapallax-bgs" ref="main-block">
    <div class="row py-4 project-section__info rapallax-bgs__content">
      <div class="col-12 col-lg-5"></div>
      <div class="col-12 col-lg-5">
        <h3 class="h1 mb-4">Linger</h3>
        <p class="font-large mb-4">Первый в мире мессенджер, который говорит на твоем языке. <a href="#">Read more</a></p>
        <div class="mb-4">
          <a href="https://linger.im/" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
      </div>
    </div>
    <div class="project-section__clip">
      <div class="project-section__item mb-4 mb-md-0 mx-auto">
        <img src="@/images/iphone-light.svg" alt="" class="mw-100 project-section__frame">
        <img src="@/images/projects/linger.png" alt="" class="project-section__pic">
      </div>
    </div>
    <img class="rapallax-bgs__image rapallax-bgs__image--1" v-bind:style="parallaxPercent" src="@/images/blured3.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--2" v-bind:style="parallaxPercent" src="@/images/blured3.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--3" v-bind:style="parallaxPercent" src="@/images/blured3.png">
  </section>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'

export default {
  name: 'mesto-project-kyc',
  mixins: [parallaxBg]
}
</script>
