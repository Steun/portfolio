import { ActionItem } from '@/assets/scripts/actions'
import store from '@/store'

export default {
  name: 'teunMenu',
  data () {
    return {
      title: 'Menu',
      projects: store.state.projects
    }
  },
  computed: {
    expanded() {
      return this.$store.state.aboutExpanded
    }
  },
  methods: {
    toggleAbout () {
      if (this.$store.state.aboutExpanded) {
        this.$store.dispatch('toggleAboutExpanded', false)
      } else {
        this.$store.dispatch('toggleAboutExpanded', true)
      }
    }
  },
  mounted () {
    this.aboutAnim = new ActionItem('aboutSlideOut')

    this.$watch('expanded', (newValue) => {
      if (newValue) {
        if (this.$store.state.projectInfoExpanded) {
          this.$store.dispatch('toggleProjectInfoExpanded', false)
        }
        this.aboutAnim.activate()
        this.$parent.clearTickerInterval()
      } else {
        this.aboutAnim.deactivate()
        this.$parent.ticker()
      }
    })
  }
}
