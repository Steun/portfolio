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
    setCurrentProject (project) {
      if (project !== undefined) {
        this.currentProject = store.getters.getProject(project)
      } else {
        // router.go({name: 'project', params: {project: store.state.projects[0]}})
      }
    }

  },
  mounted() {
    if (this.$route.params.project) {
      this.setCurrentProject(this.$route.params.project)
    } else {
      this.setCurrentProject(store.state.projects[0].name)
    }
  }
}
