<template>
  <div>
    <main-page-head id="main" v-on:scrollDown="scrollToItem('services', 500)"></main-page-head>

    <article class="height-full bg-white main-section js-scroll-block relative current-shadow d-flex flex-column justify-content-around" id="services">
      <div class="container mb-5">
        <h3 class="text-center">What we do<span class="title-char"></span></h3>
        <p class="font-large text-center">
          We advise, develop and support large projects for iOS, Android and Web platforms
        </p>
      </div>
      <div class="container-fluid px-md-5">
        <div class="row align-items-stretch">
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4" v-on:click="showOrderModal">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/mobile-phone.svg" alt="pin"></span>
                <h5 class="mb-3">Mobile Applications</h5>
                <p class="mb-0">Middle and high complexity mobile solutions for iOS and Android platforms.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4" v-on:click="showOrderModal">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/laptop.svg" alt="pin"></span>
                <h5 class="mb-3">Large Web Services</h5>
                <p class="mb-0">Cross Browser, easy to maintain SPA with any complexity of functionality.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4" v-on:click="showOrderModal">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/shopping.svg" alt="pin"></span>
                <h5 class="mb-3">E-commerce</h5>
                <p class="mb-0">Internet shops and marketplaces with catalogue, searching and personal account.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4" v-on:click="showOrderModal">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/blockchain.svg" alt="pin"></span>
                <h5 class="mb-3">Blockchain</h5>
                <p class="mb-0">Calculation of Tokenomics, ICO support, examination of digital assets, implementation of the FOMO approach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h5 class="text-center mt-5">You can check our latest jobs below</h5>
        <span class="circled-icon scroll-down cursor-pointer" v-on:click="scrollToItem('projects', 500)"><img src="@/images/arrow-down.svg" alt="pin"></span>
      </div>
    </article>

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
        <h3 class="text-center mb-5">Routine<span class="title-char"></span></h3>
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
    </section>

    <section class="js-scroll-block main-section bg-white current-shadow height-half d-flex align-items-center" id="contact">
      <div class="container text-center">
        <h3>Contact Us<span class="title-char"></span></h3>
        <p class="font-large mb-4">Our pleasure to answer you!</p>
        <form class="mw-600 mx-auto">
          <div class="mb-3 input-group">
            <input type="text" class="form-control form-control-lg rounded-left-lg" required placeholder="Name or phone">
            <div class="input-group-append">
              <button class="btn btn-theme btn-lg rounded-left-0">Send</button>
            </div>
          </div>
        </form>
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
      ><span class="side-nav__text">Services</span></a>

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
      ><span class="side-nav__text">Team</span></a>
      <a href="#contact"
        class="side-nav__link border d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'contact'}"
        v-on:click.prevent="scrollToItem('contact', 500)"
      ><span class="side-nav__text">Contact</span></a>
    </nav>
  </div>
</template>

<script>
import MainPageHead from '@/components/main/MainPageHead'
import MainProjectView from '@/components/main/MainProjectView'
import OrderForm from '@/components/OrderForm'
import scrollTo from '@/mixins/scrollTo'

export default {
  data () {
    return {}
  },
  components: {
    MainPageHead,
    MainProjectView,
    OrderForm
  },
  computed: {
    portfolioItems () {
      return this.$store.getters.itemsByArrayValues('projects', 'id', [1, 2, 3])
    }
  },
  mixins: [scrollTo],
  methods: {
    showOrderModal () {
      this.$modal.show(OrderForm, {
      }, {
        height: 'auto',
        scrollable: true,
        width: '100%',
        adaptive: true,
        maxWidth: 870,
        classes: 'p-4 bg-white my-3 modal-z-index rounded',
        name: 'order'
      })
    }
  }
}
</script>
