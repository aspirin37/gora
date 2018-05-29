export default {
  data () {
    return {
      blockHeight: null,
      scrolledWindow: null
    }
  },
  mounted () {
    this.blockHeight = this.$refs['main-block'].clientHeight
    document.addEventListener('scroll', this.getScrollPos)
  },
  computed: {
    parallaxPercent () {
      return `margin-top:${this.scrolledWindow / (this.blockHeight /100).toFixed(1)/10}%`
    }
  },
  destroyed () {
    this.removeScrollListener()
  },
  methods: {
    getScrollPos () {
      this.scrolledWindow = (window.pageYOffset !== undefined) ?
        window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    removeScrollListener () {
      document.removeEventListener('scroll', this.getScrollPos)
    }
  }
}
