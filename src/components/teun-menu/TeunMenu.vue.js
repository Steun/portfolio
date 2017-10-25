import { ActionItem } from '@/assets/scripts/actions'
import store from '@/store'

export default {
  name: 'teunMenu',
  data () {
    return {
      title: 'Menu',
      aboutIsOpen: false,
      projects: store.state.projects
    }
  },
  methods: {
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
    this.aboutAnim = new ActionItem('aboutSlideOut')
  }
}
