import anime from 'animejs'
import store from '@/store'

// DOM targets for every element used in actionGroups actions
const DOMelements = {
  about: '#container #about',
  page: '#container #page',
  menu: '#container #menu',
  pageTitle: '#page .title-box .title'
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
    pageTitle: {
      element: DOMelements.pageTitle,
      activate: {
        duration: 630,
        offset: 0,
        translateY: '-3vh',
        color: '#fff',
        opacity: 0,
        easing: 'easeInOutQuart'
      },
      deactivate: {
        translateY: 0,
        color: '#000',
        opacity: 1,
        duration: 730,
        offset: 420,
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
