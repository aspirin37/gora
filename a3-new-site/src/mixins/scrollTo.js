export default {
  data () {
    return {
      scrolledBlock: ''
    }
  },
  mounted () {
    document.addEventListener('scroll', this.getScrollPos)
  },
  destroyed () {
    this.removeScrollListener()
  },
  methods: {
    getScrollPos () {
      let activeOffset = window.innerHeight / 2
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      let project = document.querySelectorAll('.js-scroll-block')

      project.forEach(item => {
        let topOffset = item.offsetTop
        let bottomOffset = item.offsetTop + item.clientHeight
        let blockScrolledOffsetTop = (topOffset <= scrollTop + activeOffset) && (scrollTop <= topOffset + (item.clientHeight - activeOffset))

        if (blockScrolledOffsetTop) {
          this.scrolledBlock = item.getAttribute('id')
        }
      })
    },
    removeScrollListener () {
      document.removeEventListener('scroll', this.getScrollPos)
    },
    getElementY (query) {
      return window.pageYOffset + document.getElementById(query).getBoundingClientRect().top
    },
    scrollToItem (element, duration) {
      let startingY = window.pageYOffset
      let elementY = this.getElementY(element)
      let diff = elementY - startingY
      let start

      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp

        let time = timestamp - start
        let percent = Math.min(time / duration, 1)

        window.scrollTo(0, startingY + diff * percent)

        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    }
  }
}
