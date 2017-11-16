import router from '@/router'
import store from '@/store'
import ProjectInfo from '@/components/project-info/ProjectInfo'
import { mapActions } from 'vuex'

export default {
  name: 'project',
  data() {
    return {
      currentProject: store.state.currentProject,
      progress: 0,
      currentIndex: 0,
      nextIndex: 1
    }
  },
  methods: {
    ...mapActions({
      actionSetCurrentProject: 'commitCurrentProject'
    }),

    setCurrentProject (project) {
      if (project !== undefined) {
        this.actionSetCurrentProject(store.getters.getProject(project))
        this.currentProject = store.state.currentProject
      }
    },

    updateIndexes() {
      this.currentIndex = store.state.projects.findIndex(project => project.name === store.state.currentProject.name)
      this.nextIndex = (this.currentIndex === store.state.projects.length - 1) ? 1 : this.currentIndex + 1
    },

    ticker() {
      setInterval(() => {
        if (this.progress < 100) {
          this.progress += 0.2
        } else {
          this.updateIndexes()
          // let currentIndex = store.state.projects.findIndex(project => project.name === store.state.currentProject.name)
          // let nextIndex = (this.currentIndex === store.state.projects.length - 1) ? 1 : this.currentIndex + 1

          router.push({ name: 'project', params: { project: store.state.projects[this.nextIndex].name } })
        }
      }, 10)
    }

  },
  mounted() {
    // this.updateIndexes()
    // this.ticker()
    if (this.$route.params.project) {
      this.setCurrentProject(this.$route.params.project)
    } else {
      this.setCurrentProject(store.state.projects[0].name)
    }
  },
  components: {
    ProjectInfo
  }
}
