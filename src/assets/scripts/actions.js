import anime from 'animejs'
import store from '@/store'

// DOM targets for every element used in actionGroups actions
const DOMelements = {
  about: '#container #about',
  page: '#container #page',
  menu: '#container #menu',
  gradientOverlay: '#page .gradient-overlay',
  titlebox: '#page .title-box',
  curlywurly: '.curlywurly polyline',
  projectInfo: '#info'
}

export const actionGroups = {
  aboutSlideOut: {
    about: {
      element: DOMelements.about,
      activate: {
        translateX: '50vw',
        duration: 700,
        offset: 300,
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
      element: DOMelements.page,
      activate: {
        translateX: '50vw',
        duration: 800,
        scale: 1.1,
        offset: 320,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateX: 0,
        duration: 800,
        scale: 1,
        offset: 20,
        easing: 'easeInOutQuart'
      }
    },
    menu: {
      element: DOMelements.menu,
      activate: {
        translateX: '50vw',
        duration: 730,
        offset: 480,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateX: 0,
        duration: 730,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
    titlebox: {
      element: DOMelements.titlebox,
      activate: {
        duration: 630,
        offset: 0,
        translateY: '-3vh',
        opacity: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateY: 0,
        opacity: 1,
        duration: 730,
        offset: 420,
        easing: 'easeInOutQuart'
      }
    },
    curlywurly: {
      element: DOMelements.curlywurly,
      activate: {
        duration: 600,
        offset: 0,
        strokeDashoffset: 400,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        strokeDashoffset: 0,
        duration: 800,
        easing: 'easeInOutQuart'
      }
    }
  },
  projectInfo: {
    container: {
      element: DOMelements.projectInfo,
      activate: {
        translateX: '-100%',
        duration: 700,
        offset: 20,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateX: 0,
        duration: 700,
        offset: 300,
        easing: 'easeInOutQuart'
      }
    },
    backbutton: {
      element: '#info .btn.close',
      activate: {
        scale: [0, 1],
        duration: 300,
        offset: 700,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 300,
        scale: 0,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
    gradientOverlay: {
      element: DOMelements.gradientOverlay,
      activate: {
        translateY: '20%',
        opacity: 0,
        duration: 700,
        offset: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 1200,
        translateY: 0,
        opacity: 1,
        offset: 700,
        easing: 'easeInOutQuart'
      }
    },
    titlebox: {
      element: DOMelements.titlebox,
      activate: {
        scale: 0.8,
        translateX: '-8vw',
        translateY: '-8vh',
        duration: 700,
        offset: 100,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 700,
        scale: 1,
        translateX: 0,
        translateY: 0,
        offset: 200,
        easing: 'easeInOutQuart'
      }
    }
  }
}

export function ActionItem (name) {
  if (store.state.actionGroups[name] === undefined) {
    console.error(`Invalid Action name: '${name}'`)
    return
  }
  this.name = name
  this.targets = {}
  // Create new anime timeline instances for activate and deactivate
  this.activateTimeline = anime.timeline()
  this.deactivateTimeline = anime.timeline()

  for (const [key, target] of Object.entries(store.state.actionGroups[name])) {
    this.targets[key] = target
    // Set the target element on activate and deactivate so we don't have to repeat that on every element
    this.targets[key].activate.targets = this.targets[key].element
    this.targets[key].deactivate.targets = this.targets[key].element
  }

  this.activate = () => {
    for (const target of Object.values(this.targets)) {
      // Add each of the targets to the animation timeline
      this.activateTimeline.add(target.activate)
    }
  }

  this.deactivate = () => {
    for (const target of Object.values(this.targets)) {
      // Add each of the targets to the animation timeline
      this.deactivateTimeline.add(target.deactivate)
    }
  }
}

export default actionGroups
