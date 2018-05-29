<template>
  <div class="js-scroll-block rapallax-bgs" ref="main-block">
    <img class="rapallax-bgs__image rapallax-bgs__image--1" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--2" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--3" v-bind:style="parallaxPercent" src="@/images/blured1.png">
    <section class="height-full project-section container-fluid  d-flex justify-content-center flex-column">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-5"></div>
        <div class="col-12 col-lg-5">
          <h3 class="h1 mb-4">Mesto.Delivery</h3>
          <p class="font-large mb-4">Место — сервис умных доставок день в день по Санкт-Петербургу от 250 руб. Подача 60 мин. Следи за посылкой онлайн. Личный кабинет. Простые iOS и Android приложения. Оплата наличными и картой. Работаем с юр. лицами. Аренда курьера на день. <a href="#">Read more</a></p>
          <div class="mb-4">
            <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
            <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
            <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
          </div>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item mb-4 mb-md-0 mx-auto">
          <img src="@/images/samsung.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/mesto-phone.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>

    <section class="height-full project-section container-fluid d-flex justify-content-center flex-column">
      <div class="row py-4 project-section__info">
        <div class="col-12 col-lg-5"></div>
        <div class="col-12 col-lg-5">
          <p class="font-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laborum odit aspernatur dignissimos magnam dolor accusantium veritatis tempora suscipit. Ea vel dignissimos inventore saepe enim molestias aliquid in similique quo.</p>
        </div>
      </div>
      <div class="project-section__clip">
        <div class="project-section__item mb-4 mb-md-0 mx-auto">
          <img src="@/images/samsung.svg" alt="" class="mw-100 project-section__frame">
          <img src="@/images/projects/mesto-phone.png" alt="" class="project-section__pic">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'

export default {
  name: 'mesto-project',
  mixins: [parallaxBg]
}
</script>

</script>