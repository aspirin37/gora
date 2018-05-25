<template>
  <footer class="container-fluid text-center fixed-bottom bg-dark py-4 text-white main-footer">
    <span>© {{year}} GORA</span>
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
