<template>
  <div>
    <main-navbar></main-navbar>
    <main class="main-content">
      <transition name="page">
        <router-view></router-view>
      </transition>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'app',
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>
