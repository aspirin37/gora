<template>
  <header class="container-fluid fixed-top pt-3" v-click-outside="closeMenu">
    <div class="bg-navbar d-flex container-fluid justify-content-between align-items-center current-shadow rounded py-2">
      <router-link :to="{name: 'main-page'}" class="d-flex align-items-center link-reset">
        <img src="@/images/logo.svg" alt="logo" class="navbar-logo">
        <strong class="my-0 ml-2 h5 text-dark d-none d-md-inline-block">GORA</strong>
      </router-link>
      <a href="#" v-on:click.prevent="toggleMenu" class="d-md-none hamburger-menu" :class="{'animate': menuShow}"></a>
      <nav class="navbar-menu rounded" :class="{'navbar-menu--opened': menuShow}">
        <router-link
          :to="{name: 'portfolio'}"
          active-class="bg-light"
          class="py-2 px-4 mb-2 mb-md-0 link-reset d-inline-block rounded text-dark d-block d-md-inline-block"
        >Portfolio</router-link>
        <router-link
          :to="{name: 'contacts'}"
          class="btn btn-pink btn-sm btn-rounded d-block d-md-inline-block"
        >Contacts Us</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-navbar',
  data () {
    return {
      menuShow: false
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  },
  methods: {
    toggleMenu () {
      this.menuShow = !this.menuShow
    },
    closeMenu () {
      this.menuShow = false
    }
  }
}
</script>