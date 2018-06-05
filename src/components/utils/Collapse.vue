<template>
  <div>
    <a href="#"
      v-on:click="showContent = !showContent"
      :class="['collapse__header', {'collapse__header--active': showContent}]"
    >
      <slot name="header"></slot>
    </a>
    <transition name="collapse">
      <div v-show="showContent" class="collapse__content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    isShowContent: {
      type: Boolean,
      default: false
    }
  },
  beforeMount () {
    this.showContent = this.isShowContent
  },
  data () {
    return {
      showContent: false
    }
  }
}
</script>

<style lang="scss">
.collapse{
  $gray-collapse: #fafafa;

  margin-bottom: 1rem;
  &__header{
    $iconSize: 1rem;

    position: relative;
    padding-right: $iconSize * 2;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    display: block;
    text-decoration: none;
    color: inherit;
    border: 1px solid darken($gray-collapse, 10%);
    &:hover, &:focus{
      text-decoration: none;
      color: inherit;
      border-color: darken($gray-collapse, 20%);
    }
    &:after{
      content: '';
      position: absolute;
      right:  $iconSize;
      height: $iconSize;
      width: $iconSize;
      top: 50%;
      margin-top: -$iconSize/2;
      background-image: url(../../images/add.svg);
      background-repeat: no-repeat;
      opacity: 0.5;
    }
    &--active{
      &:after{
        background-image: url(../../images/minus.svg);
      }
    }
  }
  &__content{
    background-color: $gray-collapse;
    padding: 0.5rem 1rem;
  }
}
</style>