import anime from 'animejs'

let aboutClosed = {
  targets: '#container .about',
  translateX: 0,
  duration: 650,
  easing: 'easeInOutQuad'
}
let aboutOpen = {
  targets: '#container .about',
  translateX: '50vw',
  duration: 650,
  easing: 'easeInOutQuad'
}

let pageClosed = {
  targets: '#container .page',
  translateX: 0,
  duration: 700,
  easing: 'easeInOutQuad'
}
let pageOpen = {
  targets: '#container .page',
  translateX: '50vw',
  duration: 700,
  easing: 'easeInOutQuad'
}

let menuClosed = {
  targets: '#container .side-menu',
  translateX: 0,
  duration: 630,
  easing: 'easeInOutQuad'
}
let menuOpen = {
  targets: '#container .side-menu',
  translateX: '50vw',
  duration: 630,
  easing: 'easeInOutQuad'
}

export default {
  name: 'teunMenu',
  data () {
    return {
      title: 'Menu',
      aboutIsOpen: false
    }
  },
  methods: {
    openAbout () {
      if (this.aboutIsOpen) {
        anime(aboutClosed)
        anime(pageClosed)
        anime(menuClosed)
        this.aboutIsOpen = false
      } else {
        anime(aboutOpen)
        anime(pageOpen)
        anime(menuOpen)
        this.aboutIsOpen = true
      }
    }
  },
  mounted () {
    // console.log(about.a())
  }
}
