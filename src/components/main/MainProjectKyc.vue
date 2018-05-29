<template>
  <section class="height-full project-section container-fluid js-scroll-block d-flex justify-content-center flex-column rapallax-bgs" ref="main-block">
    <div class="row py-4 project-section__info rapallax-bgs__content">
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
    <img class="rapallax-bgs__image rapallax-bgs__image--1" v-bind:style="parallaxPercent" src="@/images/blured2.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--2" v-bind:style="parallaxPercent" src="@/images/blured2.png">
    <img class="rapallax-bgs__image rapallax-bgs__image--3" v-bind:style="parallaxPercent" src="@/images/blured2.png">
  </section>
</template>

<script>
import parallaxBg from '@/mixins/parallaxBg'

export default {
  name: 'mesto-project-kyc',
  mixins: [parallaxBg]
}
</script>
