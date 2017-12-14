import anime from 'animejs'
import store from '@/store'

// DOM targets for every element used in actionGroups actions
const DOMelements = {
  about: '#container #about',
  page: '#container #page',
  menu: '#container #menu',
  menuContainer: '#menu .container',
  gradientOverlay: '#page .gradient-overlay',
  titlebox: '#page .title-box',
  descriptionbox: '#page .description-box',
  curlywurly: '.curlywurly polyline',
  projectInfo: '#info',
  readMoreButton: '.btn-readmore',
  bg: '.project .bg'
}

export const actionGroups = {
  aboutSlideOut: {
    menu: {
      element: DOMelements.menu,
      activate: {
        translateX: '50vw',
        duration: 730,
        offset: 350,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateX: 0,
        duration: 730,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
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
        offset: 100,
        easing: 'easeInOutQuart'
      }
    },
    page: {
      element: DOMelements.page,
      activate: {
        translateX: '20vw',
        duration: 900,
        offset: 320,
        easing: 'easeInOutSine',
        filter: ['brightness(100%)', 'brightness(50%)']
      },
      deactivate: {
        translateX: 0,
        duration: 650,
        offset: 0,
        easing: 'easeInOutSine',
        filter: ['brightness(50%)', 'brightness(100%)']
      }
    },
    readMoreBtn: {
      element: DOMelements.readMoreButton,
      activate: {
        translateX: '5vw',
        opacity: 0,
        duration: 900,
        offset: 100,
        easing: 'easeInOutSine'
      },
      deactivate: {
        translateX: 0,
        opacity: 1,
        duration: 650,
        offset: 0,
        easing: 'easeInOutSine'
      }
    },
    titlebox: {
      element: DOMelements.titlebox,
      activate: {
        duration: 630,
        offset: 0,
        opacity: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        opacity: 1,
        duration: 730,
        offset: 420,
        easing: 'easeInOutQuart'
      }
    },
    descriptionbox: {
      element: DOMelements.descriptionbox,
      activate: {
        opacity: 0,
        duration: 630,
        offset: 120,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        opacity: 1,
        duration: 630,
        offset: 540,
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
        offset: 300,
        easing: 'easeInOutQuart'
      }
    }
  },
  projectInfo: {
    bg: {
      element: DOMelements.bg,
      activate: {
        filter: ['brightness(100%)', 'brightness(50%)'],
        duration: 700,
        offset: 200,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        filter: ['brightness(50%)', 'brightness(100%)'],
        duration: 700,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
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
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
    backbutton: {
      element: '#info .btn.close',
      activate: {
        opacity: 1,
        duration: 400,
        offset: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 400,
        opacity: 0,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
    gradientOverlay: {
      element: DOMelements.gradientOverlay,
      activate: {
        translateY: '20vh',
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
        translateX: '-4vh',
        translateY: '-8vh',
        width: '30%',
        duration: 700,
        offset: 100,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 700,
        translateX: 0,
        translateY: 0,
        width: ['30%', '100%'],
        offset: 200,
        easing: 'easeInOutQuart'
      }
    },
    descriptionbox: {
      element: DOMelements.descriptionbox,
      activate: {
        duration: 700,
        translateX: '-4vh',
        width: '30%',
        offset: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 700,
        width: ['30%', '100%'],
        translateX: 0,
        offset: 100,
        easing: 'easeInOutQuart'
      }
    },
    rows: {
      element: '.info-inner .rows',
      activate: {
        duration: 600,
        opacity: [0, 1],
        offset: 370,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        duration: 300,
        opacity: 0,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    }
  },
  aboutMobile: {
    menu: {
      element: DOMelements.menu,
      activate: {
        background: '#f2f2f2',
        duration: 700,
        offset: 300,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        background: 'rgba(255, 255, 255, 0)',
        duration: 100,
        offset: 0,
        easing: 'easeInOutQuart'
      }
    },
    about: {
      element: DOMelements.about,
      activate: {
        translateX: '90vw',
        duration: 700,
        offset: 300,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateX: 0,
        duration: 700,
        offset: 100,
        easing: 'easeInOutQuart'
      }
    },
    page: {
      element: DOMelements.page,
      activate: {
        translateX: '20vw',
        filter: ['brightness(100%)', 'brightness(50%)'],
        duration: 500,
        offset: 320,
        easing: 'easeInOutSine'
      },
      deactivate: {
        translateX: 0,
        filter: ['brightness(50%)', 'brightness(100%)'],
        duration: 650,
        offset: 0,
        easing: 'easeInOutSine'
      }
    },
    readMoreBtn: {
      element: DOMelements.readMoreButton,
      activate: {
        opacity: 0,
        duration: 900,
        offset: 0,
        easing: 'easeInOutSine'
      },
      deactivate: {
        opacity: 1,
        duration: 650,
        offset: 200,
        easing: 'easeInOutSine'
      }
    }
  }
}

export function ActionItem(name) {
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
