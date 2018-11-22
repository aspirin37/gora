<template>
  <section class="container py-5">
    <h3 class="mb-5">{{$t('titles.team')}}<span class="title-char"></span></h3>
    <div class="d-flex flex-wrap justify-content-around">
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rleft">
          <div class="team-item__img bg-light">
            <img src="@/images/team/artem.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Artem</h5>
        <p class="text-center">GORA CEO</p>
      </div>
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rright">
          <div class="team-item__img bg-light">
            <img src="@/images/team/andrey.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Andrey</h5>
        <p class="text-center">Backend guru</p>
      </div>
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rleft">
          <div class="team-item__img bg-light">
            <img src="@/images/team/julia.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Julia</h5>
        <p class="text-center">Android dev</p>
      </div>
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rright">
          <div class="team-item__img bg-light">
            <img src="@/images/team/slava.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Slava</h5>
        <p class="text-center">Frontend dev</p>
      </div>
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rleft">
          <div class="team-item__img bg-light">
            <img src="@/images/team/andrey2.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Andrey</h5>
        <p class="text-center">iOS dev</p>
      </div>
      <div class="mb-5 mw-100">
        <div class="team-item mb-2 team-item--rright">
          <div class="team-item__img bg-light">
            <img src="@/images/team/nastya.jpg" alt="team">
          </div>
        </div>
        <h5 class="text-center">Nastya</h5>
        <p class="text-center">PM wizard</p>
      </div>
    </div>
    <div class="text-center">
      <router-link
        :to="{name: 'careers'}"
        class="btn btn-light"
      >{{$t('titles.join')}}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
  }
}
</script>
