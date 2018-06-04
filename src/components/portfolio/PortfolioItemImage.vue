<template>
  <transition name="portfolio-item">
    <router-link
      v-if="!hide"
      :to="{name: 'project', params: {title: info.link}}"
      class="d-block portfolio-item link-reset cursor-pointer"
    >
      <div :class="['mt-3 h-100 rounded overflow-hidden', `bg-${info.link}`]">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-md-6">
            <div class="portfolio-item__pic">
              <img src="@/images/iphone-light.svg" alt="" class="mw-100 project-section__frame">
              <img src="@/images/projects/mesto.png" alt="" class="project-section__pic">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-4">
              <h5 class="text-white"><b>{{info.title}}</b></h5>
              <p class="text-white">{{info.description}}</p>
              <img :src="`@/images/projects/${info.link}.png`" alt="">
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </transition>
</template>

<script>
export default {
  name: 'portfolio-item-image',
  data () {
    return {
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    hide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  }
}
</script>