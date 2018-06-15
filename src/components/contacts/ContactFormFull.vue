<template>
  <div class="d-flex align-items-stretch flex-wrap flex-md-nowrap rounded-outer">
    <div class="bg-gradient p-4 p-lg-5 w-100 d-flex align-items-center text-left rounded-outer__left rounded-md-left">
      <div class="relative z-index-9">
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/map-pin.svg" alt="pin"></span>
          <p class="font-large">
            <a href="https://goo.gl/maps/gBLnfeFcxDH2" class="text-white" target="_blank">{{$t('contacts.address')}}</a>
            <small class="d-block">{{$t('contacts.city')}}, {{$t('contacts.country')}}</small>
          </p>
        </div>
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/telephone.svg" alt="pin"></span>
          <p class="font-large"><a class="text-white" :href="`tel:${$t('contacts.phone')}`">{{$t('contacts.phone')}}</a></p>
        </div>
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/mailbox.svg" alt="pin"></span>
          <p class="font-large"><a class="text-white" :href="`mailto:${email}`">{{email}}</a></p>
        </div>
        <button class="btn btn-light btn-rounded mt-4 btn-lg px-3 px-md-4" v-on:click="showOrderModal">{{$t('order.order')}}</button>
      </div>
    </div>
    <div class="w-100 d-flex align-items-stretch feedback-form">
      <transition name="feedback-in">
        <div class="px-4 px-lg-5 py-4 current-shadow w-100 bg-white text-center d-flex align-items-center justify-content-center rounded-outer__right" v-if="feedbackSended">
          <div>
            <span class="circled-icon mb-3 bg-success"><img src="@/images/check-done.svg" alt="done"></span>
            <div><b>{{$t('contacts.sendedtitle')}}</b></div>
            <p>{{$t('contacts.sendedsubtitle')}}</p>
          </div>
        </div>
      </transition>
      <transition name="feedback-out">
        <div class="px-4 px-lg-5 py-4 current-shadow w-100 bg-white rounded-outer__right" v-if="!feedbackSended">
          <h5 class="mb-4">{{$t('titles.feedback')}}</h5>
          <contact-form v-on:sended="feedbackSended = $event"></contact-form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/contacts/ContactForm'
import OrderForm from '@/components/OrderForm'

export default {
  data () {
    return {
      feedbackSended: false
    }
  },
  components: {
    ContactForm,
    OrderForm
  },
  computed: {
    email () {
      return this.$store.state.email
    }
  },
  methods: {
    showOrderModal () {
      this.$modal.show(OrderForm, {
      }, {
        height: 'auto',
        scrollable: true,
        width: '100%',
        adaptive: true,
        maxWidth: 870,
        classes: 'p-4 mt-3 bg-white modal-z-index rounded',
        name: 'order'
      })
    }
  }
}
</script>
