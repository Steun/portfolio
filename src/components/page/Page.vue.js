import teunMenu from '@/components/teun-menu/TeunMenu'
import Project from '@/components/project/Project'

export default {
  name: 'page',
  data() {
    return {
      progress: 0,
      interval: undefined
    }
  },
  methods: {

    ticker() {
      this.clearTickerInterval()

      this.interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 0.2
        } else {
          this.progress = 0
          this.$router.push({ name: 'project', params: { project: this.$store.getters.getProjectByIndex(this.$store.state.nextProjectIndex).name } })
        }
      }, 12)
    },

    clearTickerInterval() {
      clearInterval(this.interval)
      this.progress = 0
    },

    toggleProjectInfo () {
      if (this.$store.state.projectInfoExpanded) {
        this.$store.dispatch('toggleProjectInfoExpanded', false)
      } else {
        this.$store.dispatch('toggleProjectInfoExpanded', true)
      }
    }
  },
  computed: {
    currentProject() {
      return this.$store.state.currentProject
    },

    noProjectIsExpanded() {
      return !this.$store.state.projectInfoExpanded
    }
  },
  watch: {
    currentProject() {
      this.ticker()
    }
  },
  mounted() {
    this.ticker()
  },
  components: {
    teunMenu,
    Project
  }
}
