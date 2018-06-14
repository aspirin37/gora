<template>
  <footer class="bg-dark py-5 text-white d-flex align-items-center">
    <div class="container d-flex justify-content-between flex-wrap">
      <span>© 2016-{{year}} GORA</span>
      <nav>
        <router-link
          :to="{name: 'portfolio'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('titles.portfolio')}}</router-link>
        <router-link
          :to="{name: 'careers'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('titles.careers')}}</router-link>
        <router-link
          :to="{name: 'contacts'}"
          active-class="text-muted"
          class="text-light mr-2"
        >{{$t('titles.contact')}}</router-link>
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
