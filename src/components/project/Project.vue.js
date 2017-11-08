import store from '@/store'
import Info from '@/components/info/Info'
import { mapActions } from 'vuex'

export default {
  name: 'project',
  data() {
    return {
      currentProject: store.state.currentProject
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
    }

  },
  mounted() {
    if (this.$route.params.project) {
      this.setCurrentProject(this.$route.params.project)
    } else {
      this.setCurrentProject(store.state.projects[0].name)
    }
  },
  components: {
    Info
  }
}
