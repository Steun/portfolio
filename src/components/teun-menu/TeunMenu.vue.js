import { ActionItem } from '@/assets/scripts/actions'

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
