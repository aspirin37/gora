<template>
  <form>
    <p class="mb-2">{{$t('order.type')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form1" :value="$t('order.fulljob')" class="choose-input__input" checked>
        <span class="choose-input__text rounded">{{$t('order.fulljob')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form1" :value="$t('order.outsource')" class="choose-input__input">
        <span class="choose-input__text rounded">{{$t('order.outsource')}}</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.budget')}}, {{$t('currency')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Комплексная работа" class="choose-input__input" checked>
        <span class="choose-input__text rounded text-nowrap">1 — 3 млн</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Аутсорс или аутстафф разработчиков" class="choose-input__input">
        <span class="choose-input__text rounded text-nowrap">3 — 5 млн</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Комплексная работа" class="choose-input__input">
        <span class="choose-input__text rounded text-nowrap">5 — 10 млн</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Аутсорс или аутстафф разработчиков" class="choose-input__input">
        <span class="choose-input__text rounded text-nowrap">10 — 30 млн</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Комплексная работа" class="choose-input__input">
        <span class="choose-input__text rounded text-nowrap">30 — 50 млн</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="radio" name="form2" value="Аутсорс или аутстафф разработчиков" class="choose-input__input">
        <span class="choose-input__text rounded text-nowrap">50 — 100 млн</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.platforms')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="ios" class="choose-input__input" checked v-model="platforms">
        <span class="choose-input__text rounded">iOS</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="android" class="choose-input__input" v-model="platforms">
        <span class="choose-input__text rounded">Android</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form3" value="web" class="choose-input__input" v-model="platforms">
        <span class="choose-input__text rounded">Web</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.additional')}}</p>
    <div class="row px-2 mb-3 flex-wrap">
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.testing')" class="choose-input__input">
        <span class="choose-input__text rounded">{{$t('order.testing')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.promotion')" class="choose-input__input">
        <span class="choose-input__text rounded">{{$t('order.promotion')}}</span>
      </label>
      <label class="col px-1 choose-input mb-2">
        <input type="checkbox" name="form4" :value="$t('order.support')" class="choose-input__input">
        <span class="choose-input__text rounded">{{$t('order.support')}}</span>
      </label>
    </div>
    <p class="mb-2">{{$t('order.description')}}</p>
    <div class="mb-3">
      <textarea rows="3" class="form-control"></textarea>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.name')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control">
      </div>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.phone')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control">
      </div>
    </div>
    <div class="row mb-3 align-items-center">
      <div class="col-12 col-md-3 col-lg-2 text-md-right">
        <span>{{$t('titles.email')}}</span>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <input type="text" class="form-control">
      </div>
    </div>
    <div class="text-right">
      <button class="btn btn-link link-reset" type="button" v-on:click="$emit('close')">Cancel</button>
      <button class="btn btn-theme" type="submit">{{$t('titles.send')}}</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      platforms: []
    }
  },
  props: {
    defaultPlatforms: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.platforms = this.defaultPlatforms
  }
}
</script>