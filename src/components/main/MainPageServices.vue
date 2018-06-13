<template>
  <article class="height-full bg-white main-section js-scroll-block relative current-shadow d-flex flex-column justify-content-around">
    <div class="container mb-5">
      <h3 class="text-center">{{$t('titles.whatwedo')}}<span class="title-char"></span></h3>
      <p class="font-large text-center">
        {{$t('subtitles.whatwedo')}}
      </p>
    </div>
    <div class="container-fluid px-md-5">
      <div class="row align-items-stretch">
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="bg-light h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
            <div class="relative z-index-9">
              <span class="circled-icon bg-theme mb-3"><img src="@/images/mobile-phone.svg" alt="pin"></span>
              <h5 class="mb-3">{{$t('titles.mobile')}}</h5>
              <p class="mb-0">{{$t('subtitles.mobile')}}</p>
              <a href="#" v-on:click.prevent="showOrderModal(['ios', 'android'])" class="link-dotted"><b>{{$t('titles.getit')}}</b></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="bg-light h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
            <div class="relative z-index-9">
              <span class="circled-icon bg-theme mb-3"><img src="@/images/laptop.svg" alt="pin"></span>
              <h5 class="mb-3">{{$t('titles.web')}}</h5>
              <p class="mb-0">{{$t('subtitles.web')}}</p>
              <a href="#" v-on:click.prevent="showOrderModal(['web'])" class="link-dotted"><b>{{$t('titles.getit')}}</b></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="bg-light h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
            <div class="relative z-index-9">
              <span class="circled-icon bg-theme mb-3"><img src="@/images/shopping.svg" alt="pin"></span>
              <h5 class="mb-3">{{$t('titles.ecommerce')}}</h5>
              <p class="mb-0">{{$t('subtitles.ecommerce')}}</p>
              <a href="#" v-on:click.prevent="showOrderModal(['web'])" class="link-dotted"><b>{{$t('titles.getit')}}</b></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="bg-light h-100 rounded py-4 pr-4 mx-2 overflow-hidden px-5 py-4">
            <div class="relative z-index-9">
              <span class="circled-icon bg-theme mb-3"><img src="@/images/blockchain.svg" alt="pin"></span>
              <h5 class="mb-3">{{$t('titles.blockchain')}}</h5>
              <p class="mb-0">{{$t('subtitles.blockchain')}}</p>
              <a href="#" v-on:click.prevent="showOrderModal(['web'])" class="link-dotted"><b>{{$t('titles.getit')}}</b></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h5 class="text-center mt-5">{{$t('titles.checkjobs')}}</h5>
      <span class="circled-icon scroll-down cursor-pointer" v-on:click="$emit('scrollDown')"><img src="@/images/arrow-down.svg" alt="pin"></span>
    </div>
  </article>
</template>

<script>
import OrderForm from '@/components/OrderForm'

export default {
  name: 'main-page-services',
  data () {
    return {}
  },
  components: {
    OrderForm
  },
  methods: {
    showOrderModal (platform) {
      this.$modal.show(OrderForm, {
        defaultPlatforms: platform
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
