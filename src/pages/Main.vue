<template>
  <div>
    <main-block id="main"></main-block>

    <article class="bg-light main-section js-scroll-block relative" id="services">
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
      </div>
    </article>

    <div class="bg-white py-4 relative current-shadow">
      <div class="container">
        <h3 class="text-center">Lasets jobs<span class="title-char"></span></h3>
      </div>
    </div>

    <mesto-project id="project-1"></mesto-project>

    <section class="height-full project-section container-fluid js-scroll-block d-flex justify-content-center flex-column" id="project-2">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-5"></div>
        <div class="col-12 col-lg-5">
          <h3 class="h1 mb-4">Linger</h3>
          <p class="font-large mb-4">Первый в мире мессенджер, который говорит на твоем языке. <a href="#">Read more</a></p>
          <div class="mb-4">
            <a href="https://linger.im/" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
          </div>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item mb-4 mb-md-0 mx-auto">
          <img src="@/images/iphone.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/linger.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>

    <section class="height-full project-section container-fluid js-scroll-block d-flex justify-content-center flex-column" id="project-3">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-5"></div>
        <div class="col-12 col-lg-5">
          <h3 class="h1 mb-4">KYC</h3>
          <p class="font-large mb-4">Место — сервис умных доставок день в день по Санкт-Петербургу от 250 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день. <a href="#">Read more</a></p>
          <div class="mb-4">
            <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          </div>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item mb-4 mb-md-0 mx-auto">
          <img src="@/images/samsung.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/kyc.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>

    <section class="js-scroll-block bg-light height-half relative current-shadow" id="team">
      <div class="container py-4">
        <h3 class="text-center">Routine<span class="title-char"></span></h3>
      </div>
      <div class="d-flex flex-wrap">
        <div class="team-item">
          <img src="@/images/team/team1.jpg" alt="team" class="team-item__img">
        </div>
        <div class="team-item">
          <img src="@/images/team/team2.jpg" alt="team" class="team-item__img">
        </div>
        <div class="team-item">
          <img src="@/images/team/team3.jpg" alt="team" class="team-item__img">
        </div>
        <div class="team-item">
          <img src="@/images/team/team4.jpg" alt="team" class="team-item__img">
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
import MainBlock from '@/components/main/MainBlock'
import mestoProject from '@/components/main/mestoProject'

export default {
  data () {
    return {
      scrolledBlock: ''
    }
  },
  components: {
    MainBlock,
    mestoProject
  },
  mounted () {
    document.addEventListener('scroll', this.getScrollPos)
  },
  destroyed () {
    this.removeScrollListener()
  },
  methods: {
    getScrollPos () {
      let activeOffset = window.innerHeight / 2
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      let project = document.querySelectorAll('.js-scroll-block')

      project.forEach(item => {
        let topOffset = item.offsetTop
        let bottomOffset = item.offsetTop + item.clientHeight
        let blockScrolledOffsetTop = (topOffset <= scrollTop + activeOffset) && (scrollTop <= topOffset + (item.clientHeight - activeOffset))

        if (blockScrolledOffsetTop) {
          this.scrolledBlock = item.getAttribute('id')
        }
      })
    },
    removeScrollListener () {
      document.removeEventListener('scroll', this.getScrollPos)
    },
    getElementY (query) {
      return window.pageYOffset + document.getElementById(query).getBoundingClientRect().top
    },
    scrollToItem (element, duration) {
      let startingY = window.pageYOffset
      let elementY = this.getElementY(element)
      let diff = elementY - startingY
      let start

      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp

        let time = timestamp - start
        let percent = Math.min(time / duration, 1)

        window.scrollTo(0, startingY + diff * percent)

        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    }
  }
}
</script>
