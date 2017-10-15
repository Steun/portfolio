import anime from 'animejs'
import * as projects from '../../services/projects.service'

console.log(projects.get('aa'))

let about,
    page,
    menu

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
  name: 'page',
  data () {
    return {
      title: 'Frontend Developer',
      subtitle: 'Teun Kelting',
      aboutIsOpen: false
    }
  },
  methods: {
    openAbout () {
      if (this.aboutIsOpen) {
        about = anime(aboutClosed)
        page = anime(pageClosed)
        menu = anime(menuClosed)
        this.aboutIsOpen = false
      } else {
        about = anime(aboutOpen)
        page = anime(pageOpen)
        menu = anime(menuOpen)
        this.aboutIsOpen = true
      }
    }
  },
  mounted () {
    // console.log(about.a())
  }
}
