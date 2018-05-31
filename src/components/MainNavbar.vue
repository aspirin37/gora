<template>
  <header class="container-fluid fixed-top pt-3" v-click-outside="closeMenu">
    <div
      class="bg-navbar d-flex container-fluid justify-content-between align-items-center rounded py-2 navbar-shadow"
      :class="{'navbar-shadow--showed': showNavbarShadow}"
    >
      <router-link :to="{name: 'main-page'}" class="d-flex align-items-center link-reset">
        <img src="@/images/logo.svg" alt="logo" class="navbar-logo">
        <strong class="my-0 ml-2 h5 text-dark d-none d-md-inline-block">GORA</strong>
      </router-link>
      <a href="#" v-on:click.prevent="toggleMenu" class="d-md-none hamburger-menu" :class="{'animate': menuShow}"></a>
      <nav class="navbar-menu rounded py-4 py-md-0" :class="{'navbar-menu--opened': menuShow}">
        <a href="tel:+7 (812) 408-25-47"
          active-class="bg-light"
          class="px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block font-large align-middle"
        >+7 (812) 408-25-47</a>
        <router-link
          :to="{name: 'portfolio'}"
          active-class="bg-light"
          class="py-2 px-4 mb-2 mb-md-0 link-reset rounded text-dark d-block d-md-inline-block"
        >Portfolio</router-link>
        <router-link
          :to="{name: 'contacts'}"
          class="btn btn-theme btn-sm btn-rounded d-block d-md-inline-block"
        >Contact Us</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
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