import { ActionItem } from '../../assets/api/actions'

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
    console.log(ActionItem)
    this.aboutAnim = new ActionItem('aboutSlideOut')
    // console.log(about.a())
  }
}
