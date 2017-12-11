import { ActionItem } from '@/assets/scripts/actions'
import store from '@/store'

export default {
  name: 'teunMenu',
  data () {
    return {
      title: 'Menu',
      projects: store.state.projects,
      mobileMenuExpanded: false
    }
  },
  computed: {
    expanded() {
      return this.$store.state.aboutExpanded
    }
  },
  methods: {
    toggleAbout () {
      this.toggleMobileMenu()
      if (this.$store.state.aboutExpanded) {
        this.$store.dispatch('toggleAboutExpanded', false)
      } else {
        this.$store.dispatch('toggleAboutExpanded', true)
      }
    },

    toggleMobileMenu () {
      this.mobileMenuExpanded = !this.mobileMenuExpanded
    }
  },
  mounted () {
    this.aboutAnim = new ActionItem('aboutSlideOut')
    this.aboutMobileAnim = new ActionItem('aboutMobile')

    this.$watch('expanded', (expanded) => {
      if (expanded) {
        if (this.$store.state.projectInfoExpanded) {
          this.$store.dispatch('toggleProjectInfoExpanded', false)
        }
        this.$store.state.mobile ? this.aboutMobileAnim.activate() : this.aboutAnim.activate()
        this.$parent.clearTickerInterval()
      } else {
        this.$store.state.mobile ? this.aboutMobileAnim.deactivate() : this.aboutAnim.deactivate()
        this.$parent.ticker()
      }
    })
  }
}
