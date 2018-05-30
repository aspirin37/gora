<template>
  <article class="main-section text-center height-full d-flex align-items-center js-scroll-block current-shadow rapallax-bgs" ref="main-block">
    <div class="w-100 mb-5 container rapallax-bgs__content">
      <h1 class="text-center mw-800 mx-auto">Best mobile & web applications all over<span class="title-char"></span></h1>
      <p class="text-center mw-600 mx-auto mb-5">We are «GORA» — mobile and web development company focused on modern technologies and knowledge related on delivery, blockchain, e-commerce.</p>
      <button class="btn btn-theme btn-lg btn-rounded">Keep in touch</button>
    </div>
    <img class="rapallax-bgs__image rapallax-bgs__image--1" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--2" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--3" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <span class="circled-icon scroll-down cursor-pointer" v-on:click="$emit('scrollDown')"><img src="@/images/arrow-down.svg" alt="pin"></span>
  </article>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'

export default {
  name: 'main-page-head',
  mixins: [parallaxBg]
}
</script>
