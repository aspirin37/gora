<template>
  <form class="relative" v-on:submit.prevent="sendRequest">
    <loader v-if="!messageSended"></loader>
    <p class="mb-2">{{$t('order.type')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form1" :value="$t('order.fulljob')" class="choose-input__input" checked v-model="orderWhat">
        <span class="choose-input__text rounded">{{$t('order.fulljob')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form1" :value="$t('order.outsource')" class="choose-input__input" v-model="orderWhat">
        <span class="choose-input__text rounded">{{$t('order.outsource')}}</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.budget')}}, {{$t('currency')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2" v-for="(price, index) in $t('order.prices')" :key="`price-${index}`">
        <input type="radio" name="form2" :value="price" class="choose-input__input" checked v-model="orderBudget">
        <span class="choose-input__text rounded text-nowrap">{{price}}</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.platforms')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="ios" class="choose-input__input" checked v-model="orderPlatform">
        <span class="choose-input__text rounded">iOS</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="android" class="choose-input__input" v-model="orderPlatform">
        <span class="choose-input__text rounded">Android</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="web" class="choose-input__input" v-model="orderPlatform">
        <span class="choose-input__text rounded">Web</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.additional')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.testing')" class="choose-input__input" v-model="orderAdditional">
        <span class="choose-input__text rounded">{{$t('order.testing')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.promotion')" class="choose-input__input" v-model="orderAdditional">
        <span class="choose-input__text rounded">{{$t('order.promotion')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.support')" class="choose-input__input" v-model="orderAdditional">
        <span class="choose-input__text rounded">{{$t('order.support')}}</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.description')}}</p>
    <div class="mb-3">
      <textarea rows="3" class="form-control" v-model="orderDescription"></textarea>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.name')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control" v-model="orderName" required>
      </div>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.phone')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control" v-model="orderPhone" required>
      </div>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.email')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control" v-model="orderEmail">
      </div>
    </div>
    <div class="text-right">
      <button class="btn btn-link link-reset" type="button" v-on:click="$emit('close')">{{$t('titles.cancel')}}</button>
      <button class="btn btn-theme" type="submit">{{$t('titles.send')}}</button>
    </div>
  </form>
</template>

<script>
import Loader from '@/components/utils/Loader'

export default {
  data () {
    return {
      platforms: [],
      messageSended: true,
      orderWhat: '',
      orderBudget: '',
      orderEmail: '',
      orderName: '',
      orderPhone: '',
      orderDescription: '',
      orderPlatform: [],
      orderAdditional: []
    }
  },
  props: {
    defaultPlatforms: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Loader
  },
  mounted () {
    this.orderPlatform = this.defaultPlatforms
  },
  methods: {
    sendRequest () {
      this.messageSended = false
      let options = new FormData()

      options.append('phone', this.orderPhone)
      options.append('name', this.orderName)
      options.append('type', 2)
      if (this.orderBudget) {
        options.append('budget', `${this.orderBudget} ${this.$t('currency')}`)
      }
      if (this.orderPlatform) {
        options.append('platform', this.orderPlatform)
      }
      if (this.orderAdditional) {
        options.append('additional', this.orderAdditional)
      }
      if (this.orderDescription) {
        options.append('description', this.orderDescription)
      }
      if (this.orderEmail) {
        options.append('email', this.orderEmail)
      }

      this.$http.post('https://gora.studio/mailer/mail.php', options).then(response => {
        this.$emit('close')
        this.messageSended = true
      }).catch(error => {
        this.errorMessage = error.statusText
      })
      
    }
  }
}
</script>