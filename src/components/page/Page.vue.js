import anime from 'animejs'
import * as about from './partials/about'

// let about,
//     page,
//     menu
//
// let aboutClosed = {
//   targets: '#container .about',
//   translateX: '-50vw',
//   duration: 800,
//   easing: 'easeInOutQuad'
// }
// let aboutOpen = {
//   targets: '#container .about',
//   translateX: [
//     {value: '-50vw', duration: 0},
//     {value: 0, duration: 800}
//   ],
//   easing: 'easeInOutQuad'
// }
//
// let pageClosed = {
//   targets: '#container .page',
//   translateX: 0,
//   duration: 900,
//   easing: 'easeInOutQuad'
// }
// let pageOpen = {
//   targets: '#container .page',
//   translateX: '50vw',
//   duration: 900,
//   easing: 'easeInOutQuad'
// }
//
// let menuClosed = {
//   targets: '#container .side-menu',
//   translateX: 0,
//   duration: 830,
//   easing: 'easeInOutQuad'
// }
// let menuOpen = {
//   targets: '#container .side-menu',
//   translateX: '50vw',
//   duration: 830,
//   easing: 'easeInOutQuad'
// }

export default {
  name: 'page',
  data () {
    return {
      title: 'Frontend Developer',
      subtitle: 'Teun Kelting'
    }
  },
  methods: {
    openAbout () {
      // about = anime(aboutOpen)
      // page = anime(pageOpen)
      // menu = anime(menuOpen)
    }
  },
  mounted () {
    console.log(about.a())
  }
}
