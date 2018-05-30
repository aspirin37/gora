<template>
  <footer class="fixed-bottom bg-dark py-4 text-white main-footer">
    <div class="container d-flex justify-content-between">
      <span>© {{year}} GORA</span>
      <nav>
        <router-link
          :to="{name: 'careers'}"
          active-class="text-muted"
          class="text-light mr-2"
        >Careers</router-link>
        <router-link
          :to="{name: 'portfolio'}"
          active-class="text-muted"
          class="text-light mr-2"
        >Portfolio</router-link>
        <router-link
          :to="{name: 'contacts'}"
          active-class="text-muted"
          class="text-light mr-2"
        >Contacts</router-link>
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
