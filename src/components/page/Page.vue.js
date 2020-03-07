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
      this.playing = true

      this.interval = setInterval(() => {
        if (this.playing) {
          if (this.progress < 100) {
            this.progress += 0.5
          } else {
            this.progress = 0
            this.$router.push({
              name: 'project',
              params: {project: this.$store.getters.getProjectByIndex(this.$store.state.nextProjectIndex).name}
            })
          }
        }
      }, 50)
    },

    clearTickerInterval() {
      clearInterval(this.interval)
      this.progress = 0
      this.playing = false
    },

    pauseTicker() {
      this.playing = false
    },

    resumeTicker() {
      this.playing = true
    },

    toggleTicker() {
      this.playing = !this.playing
    },

    toggleProjectInfo () {
      if (this.$store.state.projectInfoExpanded) {
        this.$store.dispatch('toggleProjectInfoExpanded', false)
      } else {
        this.$store.dispatch('toggleProjectInfoExpanded', true)
        this.$store.dispatch('toggleAboutExpanded', false)
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
