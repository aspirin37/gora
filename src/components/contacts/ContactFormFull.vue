<template>
  <div class="d-flex align-items-stretch flex-wrap flex-md-nowrap">
    <div class="bg-gradient p-4 p-lg-5 w-100 d-flex align-items-center rounded-left text-left">
      <div class="relative z-index-9">
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/map-pin.svg" alt="pin"></span>
          <p class="font-large">{{$t('contacts.address')}}<small class="d-block">{{$t('contacts.city')}}, {{$t('contacts.country')}}</small></p>
        </div>
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/telephone.svg" alt="pin"></span>
          <p class="font-large"><a class="text-white" :href="`tel:${$t('contacts.phone')}`">{{$t('contacts.phone')}}</a></p>
        </div>
        <div class="d-flex mb-2">
          <span class="circled-icon mr-3"><img src="@/images/mailbox.svg" alt="pin"></span>
          <p class="font-large"><a class="text-white" :href="`mailto:${$t('contacts.email')}`">{{$t('contacts.email')}}</a></p>
        </div>
        <button class="btn btn-light mt-4" v-on:click="showOrderModal">{{$t('order.order')}}</button>
      </div>
    </div>
    <div class="w-100 d-flex align-items-stretch feedback-form">
      <transition name="feedback-in">
        <div class="px-4 px-lg-5 py-4 current-shadow w-100 rounded-right bg-white text-center d-flex align-items-center justify-content-center" v-if="feedbackSended">
          <div>
            <span class="circled-icon mb-3 bg-success"><img src="@/images/check-done.svg" alt="done"></span>
            <div><b>Message sended.</b></div>
            <p>We will contact you soon.</p>
          </div>
        </div>
      </transition>
      <transition name="feedback-out">
        <div class="px-4 px-lg-5 py-4 current-shadow w-100 rounded-right bg-white" v-if="!feedbackSended">
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
