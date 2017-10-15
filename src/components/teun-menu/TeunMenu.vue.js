import anime from 'animejs'

const elements = {
  about: {
    element: '#container #about',
    activate: {
      translateX: '50vw',
      duration: 700,
      offset: 0,
      easing: 'easeInOutQuart'
    },
    deactivate: {
      translateX: 0,
      duration: 700,
      offset: 0,
      easing: 'easeInOutQuart'
    }
  },
  page: {
    element: '#container #page',
    activate: {
      translateX: '50vw',
      duration: 800,
      offset: 20,
      easing: 'easeInOutQuart'
    },
    deactivate: {
      translateX: 0,
      duration: 800,
      offset: 20,
      easing: 'easeInOutQuart'
    }
  },
  menu: {
    element: '#container #menu',
    activate: {
      translateX: '50vw',
      duration: 730,
      offset: 100,
      easing: 'easeInOutQuart'
    },
    deactivate: {
      translateX: 0,
      duration: 730,
      offset: 0,
      easing: 'easeInOutQuart'
    }
  }
}

function ActionItem (name, targets) {
  this.name = name
  this.targets = []

  // Create new anime timeline instances for activate and deactivate
  this.activateTimeline = anime.timeline()
  this.deactivateTimeline = anime.timeline()

  targets.forEach((target, key) => {
    if (elements[target] === undefined) {
      console.error(`Invalid ActionItem target: '${target}'`)
      return
    }
    this.targets.push(elements[target])
    // Set the target element on activate and deactivate so we don't have to repeat that on every element
    this.targets[key].activate.targets = this.targets[key].element
    this.targets[key].deactivate.targets = this.targets[key].element
  })

  this.activate = () => {
    this.targets.forEach((target) => {
      // Add each of the targets to the animation timeline
      this.activateTimeline.add(target.activate)
    })
  }

  this.deactivate = () => {
    this.targets.forEach((target) => {
      // Add each of the targets to the animation timeline
      this.deactivateTimeline.add(target.deactivate)
    })
  }
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

    close (targets, duration = 630, easing = 'easeInOutQuad') {
      anime({
        targets: targets,
        duration: duration,
        easing: easing
      })
    },

    openAbout () {
      if (this.aboutIsOpen) {
        this.aboutAnim.deactivate()
        this.aboutIsOpen = false
      } else {
        this.aboutAnim.activate()
        this.aboutIsOpen = true
      }
    }
  },
  mounted () {
    this.aboutAnim = new ActionItem('about', ['about', 'page', 'menu'])
    // console.log(about.a())
  }
}
