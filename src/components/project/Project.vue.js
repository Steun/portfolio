import store from '@/store'
import router from '@/router'

export default {
  name: 'project',
  data() {
    return {
      currentProject: store.state.currentProject
    }
  },
  methods: {
    setCurrentProject (name) {
      this.currentProject = store.getters.getProject(name)
    }

  },
  beforeRouteUpdate(to, from, next) {
    this.setCurrentProject(to.params.project)
    next()
  },
  mounted() {
    if (this.$route.params.project !== this.currentProject.name) {
      this.setCurrentProject(this.$route.params.project)
    }
  }

}
