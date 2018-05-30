<template>
  <div>
    <main-page-head id="main" v-on:scrollDown="scrollToItem('services', 500)"></main-page-head>

    <article class="bg-white main-section js-scroll-block relative current-shadow" id="services">
      <div class="container mb-5">
        <h3 class="text-center">What we do<span class="title-char"></span></h3>
        <p class="font-large">Мы занимаемся разработкой средних и крупных проектов под все популярные платформы: iOS, Android, Web. Основные направления нашей деятельности это разработка мобильных приложений и крупных порталов.</p>
      </div>
      <div class="container-fluid">
        <div class="row align-items-center py-5">
          <div class="col-12 col-md-6 text-center text-md-right">
            <img src="@/images/mobile-app.png" alt="mobile" class="mw-100 service-pic mb-4">
          </div>
          <div class="col-12 col-md-6">
            <p class="font-large mw-600">Создаем мобильные решения, позволяющие повышать лояльность клиентов и снижать расходы за счет внедрения средств автоматизации и оптимизации процессов.</p>
          </div>
        </div>
        <div class="row align-items-center py-5">
          <div class="col-12 col-md-6 text-md-right">
            <p class="font-large mw-600 ml-auto">Проектируем архитектуру проекта индивидуально для каждого кейса, учитывая все возможные платформы. Все для того чтобы создать по-настоящему качественный продукт.</p>
          </div>
          <div class="col-12 col-md-6 text-center text-md-left">
            <img src="@/images/web-app.png" alt="web" class="mw-100 service-pic">
          </div>
        </div>
        <h5 class="text-center">You can check our latest jobs below</h5>
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

    <nav class="side-nav">
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
