<template>
  <section class="container py-5">
    <h3 class="mb-5">Contacts<span class="title-char"></span></h3>
    <div class="d-flex align-items-stretch flex-wrap flex-md-nowrap">
      <div class="bg-gradient p-4 p-lg-5 w-100 d-flex align-items-center rounded-left">
        <div>
          <div class="d-flex mb-2">
            <span class="circled-icon mr-3"><img src="@/images/map-pin.svg" alt="pin"></span>
            <p class="font-large">Большой проспект ПС, 29, с 10 до 20<small class="d-block">Санкт-Петербург</small></p>
          </div>
          <div class="d-flex mb-2">
            <span class="circled-icon mr-3"><img src="@/images/telephone.svg" alt="pin"></span>
            <p class="font-large"><a class="text-white" href="tel:+7 (812) 408-25-47">+7 (812) 408-25-47</a></p>
          </div>
          <div class="d-flex mb-2">
            <span class="circled-icon mr-3"><img src="@/images/mailbox.svg" alt="pin"></span>
            <p class="font-large"><a class="text-white" href="mailto:hi@a3technology.ru">hi@a3technology.ru</a></p>
          </div>
          <button class="btn btn-light mt-4">Order project</button>
        </div>
      </div>
      <div class="w-100 d-flex align-items-stretch feedback-form">
        <transition name="feedback-in">
          <div class="px-4 px-lg-5 py-4 current-shadow w-100 rounded-right text-center d-flex align-items-center justify-content-center" v-if="feedbackSended">
            <div>
              <span class="circled-icon mb-3 bg-success"><img src="@/images/check-done.svg" alt="done"></span>
              <div><b>Message sended.</b></div>
              <p>We will contact you soon.</p>
            </div>
          </div>
        </transition>
        <transition name="feedback-out">
          <div class="px-4 px-lg-5 py-4 current-shadow w-100 rounded-right bg-white" v-if="!feedbackSended">
            <h5 class="mb-4">Send feedback</h5>
            <contact-form v-on:sended="feedbackSended = $event"></contact-form>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/contacts/ContactForm'

export default {
  data () {
    return {
      feedbackSended: false
    }
  },
  components: {
    ContactForm
  }
}
</script>
