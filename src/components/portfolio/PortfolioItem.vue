<template>
  <transition name="portfolio-item">
    <router-link
      v-if="!hide"
      :to="{name: 'project', params: {title: info.path}}"
      class="d-block portfolio-item link-reset cursor-pointer rounded-bottom"
    >
      <div :class="['mt-3 h-100 rounded-top overflow-hidden', `bg-${info.path}`]">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-md-6 col-lg-5 order-2 order-md-1">
            <div class="portfolio-item__pic">
              <img src="@/images/iphone-light.svg" alt="" class="mw-100 project-section__frame">
              <img :src="require(`@/images/projects/${info.path}.png`)" alt="" class="project-section__pic">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7 order-1 order-md-2">
            <div class="pr-4 pr-lg-5 pl-4 pl-md-0 pt-4 pb-md-4 pb-2">
              <h5 class="text-white"><b>{{info.title}}</b></h5>
              <p class="text-white">{{info.description}}</p>
              <project-tags :tags="info.tags" class="mb-4 text-white" :isDarkIcons="true"></project-tags>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </transition>
</template>

<script>
import ProjectTags from '@/components/portfolio/ProjectTags'

export default {
  name: 'portfolio-item',
  data () {
    return {}
  },
  components: {
    ProjectTags
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