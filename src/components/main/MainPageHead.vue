<template>
  <article class="main-section top-main-block text-center height-full d-flex align-items-center js-scroll-block rapallax-bgs" ref="main-block">
    <div class="w-100 mb-5 container rapallax-bgs__content">
      <h1 class="text-center mw-800 mx-auto">{{$t('title')}}<span class="title-char"></span></h1>
      <p class="text-center mw-600 mx-auto">{{$t('subtitle')}}</p>
    </div>
    <span class="circled-icon scroll-down cursor-pointer animated-circle" v-on:click="$emit('scrollDown')">
      <img src="@/images/arrow-down.svg" alt="pin">
    </span>
  </article>
</template>

<script>
export default {
  name: 'main-page-head'
}
</script>
