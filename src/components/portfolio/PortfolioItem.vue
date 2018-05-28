<template>
  <router-link
    :to="{name: 'project', params: {title: info.link}}"
    class="d-block portfolio-item my-3 link-reset cursor-pointer current-shadow rounded bg-dark"
  >
    <img src="@/images/team.jpeg" alt="portfolio" class="portfolio-item__pic">
    <div class="portfolio-item__description px-4 pt-3 bg-white current-shadow">
      <h5><b>{{info.title}}</b></h5>
      <p>{{info.description}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'portfolio-item',
  data () {
    return {
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
  }
}
</script>