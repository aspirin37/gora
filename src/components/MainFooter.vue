<template>
  <footer class="fixed-bottom bg-dark py-4 text-white main-footer">
    <div class="container d-flex justify-content-between">
      <span>© {{year}} GORA</span>
      <nav>
        <a href="#" class="text-light mr-2">Contacts</a>
        <a href="#" class="text-light mr-2">Careers</a>
        <a href="#" class="text-light">Portfolio</a>
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
