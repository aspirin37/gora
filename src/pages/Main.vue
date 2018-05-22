<template>
  <div>
    <section class="py-5 text-center height-full d-flex align-items-center js-scroll-block" id="main">
      <div class="w-100 mb-5 container">
        <h1 class="text-center mw-800 mx-auto mb-5">Best mobile & web applications all over<span class="title-char"></span></h1>
        <button class="btn btn-pink btn-lg btn-rounded">Keep in touch</button>
      </div>
    </section>
    <section class="height-full bg-light project-section container-fluid align-items-center js-scroll-block d-flex justify-content-center flex-column" id="project-1">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-3 text-center">
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
        <div class="col-12 col-lg-4"></div>
        <div class="col-12 col-lg-4">
          <h3 class="h1">Mesto.Delivery</h3>
          <p>Место — сервис умных доставок день в день по Санкт-Петербургу от 250 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день.</p>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item mb-4 mb-md-0 mx-auto">
          <img src="@/images/iphone.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/mesto-phone.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>
    <section class="height-full bg-light project-section container-fluid align-items-center js-scroll-block d-flex justify-content-center flex-column" id="project-2">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-3 text-center">
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
        <div class="col-12 col-lg-4"></div>
        <div class="col-12 col-lg-4">
          <h3>Web Projects</h3>
          <p>Проектируем архитектуру проекта индивидуально для каждого кейса, учитывая все возможные платформы. Все для того чтобы создать по-настоящему качественный продукт.</p>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item">
          <img src="@/images/samsung.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/mesto-phone.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>
    <section class="height-full bg-light project-section container-fluid align-items-center js-scroll-block d-flex justify-content-center flex-column" id="project-3">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-3 text-center">
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
        <div class="col-12 col-lg-4"></div>
        <div class="col-12 col-lg-4">
          <h3>Blockchain</h3>
          <p>Консультируем и разрабатываем проекты с использованием Blockchain технологий. Рассчет токеномики, сопровождение ICO, экспертиза цифровых активов, внедрение FOMO-подхода. Будьте в тренде цифровой трансформации!</p>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item">
          <img src="@/images/iphone.svg" alt="" class="mw-100">
        </div>
      </div>
    </section>
    <section class="height-full bg-light project-section container-fluid align-items-center js-scroll-block d-flex justify-content-center flex-column" id="project-4">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-3 text-center">
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
          <a href="#" class="dl-link rounded mx-2 p-3"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
        </div>
        <div class="col-12 col-lg-4"></div>
        <div class="col-12 col-lg-4">
          <h3>E-Commerce</h3>
          <p>Разрабатываем полноценные цифровые каналы продаж, интегрированные и автоматизированные решения обеспечивающие бесшовный покупательский опыт в рамках омниканальной стратегии.</p>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item">
          <img src="@/images/samsung.svg" alt="" class="mw-100">
        </div>
      </div>
    </section>
    <nav class="side-nav">
      <a href="#main"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'main'}"
        v-on:click.prevent="scrollToItem('main', 500)"
      ></a>
      <a href="#project-1"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-1'}"
        v-on:click.prevent="scrollToItem('project-1', 500)"
      ><span class="side-nav__text">Mobile Apps</span></a>
      <a href="#project-2"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-2'}"
        v-on:click.prevent="scrollToItem('project-2', 500)"
      ><span class="side-nav__text">Web Projects</span></a>
      <a href="#project-3"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-3'}"
        v-on:click.prevent="scrollToItem('project-3', 500)"
      ><span class="side-nav__text">Blockchain</span></a>
      <a href="#project-4"
        class="side-nav__link current-shadow d-block ml-auto"
        :class="{'bg-dark active': scrolledBlock === 'project-4'}"
        v-on:click.prevent="scrollToItem('project-4', 500)"
      ><span class="side-nav__text">E-Commerce</span></a>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrolledBlock: ''
    }
  },
  mounted () {
    document.addEventListener('scroll', this.getScrollPos)
  },
  destroyed () {
    this.removeScrollListener()
  },
  methods: {
    getScrollPos () {
      let activeOffset = 200
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      let project = document.querySelectorAll('.js-scroll-block')

      project.forEach(item => {
        let topOffset = item.offsetTop

        if ((topOffset <= scrollTop + activeOffset) && (topOffset >= scrollTop - activeOffset)) {
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
