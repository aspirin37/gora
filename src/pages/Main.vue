<template>
  <div>
    <main-page-head id="main" v-on:scrollDown="scrollToItem('services', 500)"></main-page-head>

    <article class="bg-white main-section js-scroll-block relative current-shadow" id="services">
      <div class="container mb-5">
        <h3 class="text-center">What we do<span class="title-char"></span></h3>
        <p class="font-large text-center">
          We advise, develop and support large projects for iOS, Android and Web platforms
        </p>
      </div>
      <div class="container-fluid px-md-5">
        <div class="row align-items-stretch">
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/mobile-phone.svg" alt="pin"></span>
                <h5 class="mb-3">Mobile Applications</h5>
                <p class="mb-0">Middle and high complexity mobile solutions for iOS and Android platforms.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/laptop.svg" alt="pin"></span>
                <h5 class="mb-3">Large Web Services</h5>
                <p class="mb-0">Cross Browser, easy to maintain SPA with any complexity of functionality.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/shopping.svg" alt="pin"></span>
                <h5 class="mb-3">E-commerce</h5>
                <p class="mb-0">Internet shops and marketplaces with catalogue, searching and personal account.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="bg-light cursor-pointer h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
              <div class="relative z-index-9">
                <span class="circled-icon bg-theme mb-3"><img src="@/images/blockchain.svg" alt="pin"></span>
                <h5 class="mb-3">Blockchain</h5>
                <p class="mb-0">Calculation of Tokenomics, ICO support, examination of digital assets, implementation of the FOMO approach.</p>
              </div>
            </div>
          </div>
        </div>
        <h5 class="text-center mt-5">You can check our latest jobs below</h5>
        <span class="circled-icon scroll-down cursor-pointer" v-on:click="scrollToItem('project-1', 500)"><img src="@/images/arrow-down.svg" alt="pin"></span>
      </div>
    </article>

    <main-project-mesto id="project-1"></main-project-mesto>

    <main-project-linger id="project-2"></main-project-linger>

    <main-project-kyc id="project-3"></main-project-kyc>

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
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'main'}"
        v-on:click.prevent="scrollToItem('main', 500)"
      ></a>
      <a href="#services"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'services'}"
        v-on:click.prevent="scrollToItem('services', 500)"
      ><span class="side-nav__text">Services</span></a>
      <a href="#project-1"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-1'}"
        v-on:click.prevent="scrollToItem('project-1', 500)"
      ><span class="side-nav__text">Mesto.Delivery</span></a>
      <a href="#project-2"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-2'}"
        v-on:click.prevent="scrollToItem('project-2', 500)"
      ><span class="side-nav__text">Linger</span></a>
      <a href="#project-3"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-3'}"
        v-on:click.prevent="scrollToItem('project-3', 500)"
      ><span class="side-nav__text">KYC</span></a>
      <a href="#team"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'team'}"
        v-on:click.prevent="scrollToItem('team', 500)"
      ><span class="side-nav__text">Team</span></a>
      <a href="#contact"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'contact'}"
        v-on:click.prevent="scrollToItem('contact', 500)"
      ><span class="side-nav__text">Contact</span></a>
    </nav>
  </div>
</template>

<script>
import MainPageHead from '@/components/main/MainPageHead'
import MainProjectMesto from '@/components/main/MainProjectMesto'
import MainProjectKyc from '@/components/main/MainProjectKyc'
import MainProjectLinger from '@/components/main/MainProjectLinger'
import scrollTo from '@/mixins/scrollTo'

export default {
  data () {
    return {}
  },
  components: {
    MainPageHead,
    MainProjectMesto,
    MainProjectKyc,
    MainProjectLinger
  },
  mixins: [scrollTo],
  methods: {}
}
</script>
