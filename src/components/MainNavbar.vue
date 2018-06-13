<template>
  <header class="fixed-top" v-click-outside="closeMenu">
    <div
      class="bg-navbar d-flex container-fluid justify-content-between align-items-center py-2 navbar-shadow"
      :class="{'navbar-shadow--showed': showNavbarShadow}"
    >
      <div class="d-flex align-items-center">
        <router-link :to="{name: 'main-page'}" class="d-flex align-items-center link-reset mr-4 mr-lg-5">
          <img src="@/images/logo.svg" alt="logo" class="navbar-logo">
          <strong class="my-0 ml-2 h5 text-dark d-none d-md-inline-block">GORA</strong>
        </router-link>
        <languages></languages>
      </div>
      <a href="#" v-on:click.prevent="toggleMenu" class="d-lg-none hamburger-menu__outer">
        <span :class="['d-inline-block hamburger-menu', {'animate': menuShow}]"></span>
      </a>
      <nav class="navbar-menu rounded py-4 py-md-0" :class="{'navbar-menu--opened': menuShow}">
        <router-link
          :to="{name: 'portfolio'}"
          active-class="text-theme navbar-link--active"
          class="py-2 px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block navbar-link"
        >{{$t('titles.portfolio')}}</router-link>
        <router-link
          :to="{name: 'team'}"
          active-class="text-theme navbar-link--active"
          class="py-2 px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block navbar-link"
        >{{$t('titles.team')}}</router-link>
        <router-link
          :to="{name: 'news'}"
          active-class="text-theme navbar-link--active"
          class="py-2 px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block navbar-link"
        >{{$t('titles.news')}}</router-link>
        <router-link
          :to="{name: 'careers'}"
          active-class="text-theme navbar-link--active"
          class="py-2 px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block navbar-link"
        >{{$t('titles.careers')}}</router-link>
        <router-link
          :to="{name: 'contacts'}"
          class="btn btn-theme btn-sm btn-rounded d-block d-md-inline-block ml-md-4"
        >{{$t('titles.contact')}}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import Languages from '@/components/utils/Languages'

export default {
  name: 'main-navbar',
  data () {
    return {
      menuShow: false,
      showNavbarShadow: false
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Languages
  },
  mounted () {
    document.addEventListener('scroll', this.getScrollPos)
  },
  destroyed () {
    this.removeScrollListener()
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  },
  methods: {
    getScrollPos () {
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      
      if (scrollTop > 200) {
        this.showNavbarShadow = true
      } else {
        this.showNavbarShadow = false
      }
    },
    toggleMenu () {
      this.menuShow = !this.menuShow
    },
    closeMenu () {
      this.menuShow = false
    }
  }
}
</script>