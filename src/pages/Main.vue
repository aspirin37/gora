<template>
  <div>
    <main-page-head id="main" v-on:scrollDown="scrollToItem('services', 500)"></main-page-head>

    <main-page-services id="services" v-on:scrollDown="scrollToItem('projects', 500)"></main-page-services>

    <!-- Portfolio -->
    <div id="projects">
      <main-project-view
        v-for="(project, index) in portfolioItems"
        :info="project"
        :key="`project-${index}`"
        :id="`project-${project.path}`"
      ></main-project-view>
    </div>
    <!-- /Portfolio -->

    <section class="js-scroll-block main-section bg-light height-half" id="team">
      <div class="container">
        <h3 class="text-center mb-5">{{$t('titles.team')}}<span class="title-char"></span></h3>
      </div>
      <div class="container-fluid px-md-5 d-flex flex-wrap justify-content-around">
        <div class="team-item mb-5 team-item--rleft">
          <div class="team-item__img">
            <img src="@/images/team/team1.jpg" alt="team">
          </div>
        </div>
        <div class="team-item mb-5 team-item--rright">
          <div class="team-item__img">
            <img src="@/images/team/team2.jpg" alt="team">
          </div>
        </div>
        <div class="team-item mb-5 team-item--rleft">
          <div class="team-item__img">
            <img src="@/images/team/team3.jpg" alt="team">
          </div>
        </div>
        <div class="team-item mb-5 team-item--rright">
          <div class="team-item__img">
            <img src="@/images/team/team4.jpg" alt="team">
          </div>
        </div>
      </div>
      <div class="container text-center">
        <router-link tag="button" :to="{name: 'team'}" class="btn btn-light">More about team</router-link>
      </div>
    </section>

    <section class="js-scroll-block main-section bg-dark height-half d-flex align-items-center" id="contact">
      <div class="container">
        <h3 class="text-white text-center">{{$t('titles.contact')}}<span class="title-char"></span></h3>
        <p class="font-large mb-4 text-white text-center">{{$t('subtitles.contact')}}</p>
        <contact-form-full></contact-form-full>
        <!-- <form class="mw-600 mx-auto">
          <div class="mb-3 input-group">
            <input type="text" class="form-control form-control-lg rounded-left-lg" required placeholder="Name or phone">
            <div class="input-group-append">
              <button class="btn btn-theme btn-lg rounded-left-0">Send</button>
            </div>
          </div>
        </form> -->
      </div>
    </section>

    <nav class="side-nav d-none d-md-block">
      <a href="#main"
        class="side-nav__link border d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'main'}"
        v-on:click.prevent="scrollToItem('main', 500)"
      ></a>
      <a href="#services"
        class="side-nav__link border d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'services'}"
        v-on:click.prevent="scrollToItem('services', 500)"
      ><span class="side-nav__text">{{$t('titles.whatwedo')}}</span></a>

      <!-- Projects nav -->
      <a :href="`#project-${project.path}`"
        v-for="(project, index) in portfolioItems"
        :key="`proj-${index}`"
        :class="['side-nav__link border d-block ml-auto', {'bg-dark active': scrolledBlock === `project-${project.path}`}]"
        v-on:click.prevent="scrollToItem(`project-${project.path}`, 500)"
      ><span class="side-nav__text">{{project.title}}</span></a>
      <!-- Projects nav -->

      <a href="#team"
        class="side-nav__link border d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'team'}"
        v-on:click.prevent="scrollToItem('team', 500)"
      ><span class="side-nav__text">{{$t('titles.team')}}</span></a>
      <a href="#contact"
        class="side-nav__link border d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'contact'}"
        v-on:click.prevent="scrollToItem('contact', 500)"
      ><span class="side-nav__text">{{$t('titles.contact')}}</span></a>
    </nav>
  </div>
</template>

<script>
import MainPageHead from '@/components/main/MainPageHead'
import MainProjectView from '@/components/main/MainProjectView'
import MainPageServices from '@/components/main/MainPageServices'
import ContactFormFull from '@/components/contacts/ContactFormFull'
import scrollTo from '@/mixins/scrollTo'

export default {
  data () {
    return {}
  },
  components: {
    MainPageHead,
    MainProjectView,
    MainPageServices,
    ContactFormFull
  },
  computed: {
    portfolioItems () {
      return this.$store.getters.itemsByArrayValues('projects', 'id', [1, 2, 3])
    }
  },
  mixins: [scrollTo],
  methods: {
  }
}
</script>
