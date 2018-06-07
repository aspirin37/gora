<template>
  <footer class="fixed-bottom bg-dark py-2 text-white main-footer d-flex align-items-center">
    <div class="container d-flex justify-content-between flex-wrap">
      <span>© {{year}} GORA</span>
      <nav>
        <router-link
          :to="{name: 'portfolio'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('navbar.portfolio')}}</router-link>
        <router-link
          :to="{name: 'careers'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('navbar.careers')}}</router-link>
        <router-link
          :to="{name: 'contacts'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('navbar.contact')}}</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
