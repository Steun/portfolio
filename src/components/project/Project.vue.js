import ProjectInfo from '@/components/project-info/ProjectInfo'
import {mapActions} from 'vuex'

export default {
  name: 'project',
  data() {
    return {
      progress: 0
    }
  },
  methods: {
    ...mapActions({
      updateProject: 'updateProject'
    }),

    setCurrentProject(project) {
      if (project !== undefined) {
        this.updateProject(this.$store.getters.getProject(project))
      }
    }
  },
  computed: {
    currentProject() {
      return this.$store.state.currentProject
    },

    projectInfoExpanded() {
      return this.$store.state.projectInfoExpanded
    }
  },
  mounted() {
    if (this.$route.params.project) {
      this.setCurrentProject(this.$route.params.project)
      this.$store.dispatch('toggleProjectInfoExpanded', true)
    } else {
      this.setCurrentProject(this.$store.state.projects[0].name)
    }
  },
  components: {
    ProjectInfo
  },
  updated() {
    if (this.$route.params.expanded) {
      setTimeout(() => {
        this.$store.dispatch('toggleProjectInfoExpanded', true)
      }, 600)
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.projectInfoExpanded) {
      this.$store.dispatch('toggleProjectInfoExpanded', false)
      setTimeout(() => {
        next()
      }, 700)
    } else {
      next()
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.projectInfoExpanded) {
      this.$store.dispatch('toggleProjectInfoExpanded', false)
      setTimeout(() => {
        next()
      }, 700)
    } else {
      next()
    }
  },
}
