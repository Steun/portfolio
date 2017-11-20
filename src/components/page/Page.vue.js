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
      this.progress = 0

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
    }
  },
  computed: {
    currentProject() {
      return this.$store.state.currentProject
    }
  },
  watch: {
    currentProject() {
      this.progress = 0
      this.ticker()
      this.$store.dispatch('toggleProjectInfoExpanded', false)
    }
  },
  mounted() {
    this.progress = 0
    this.clearTickerInterval()
  },
  components: {
    teunMenu,
    Project
  }
}
