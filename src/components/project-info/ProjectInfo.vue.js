import { ActionItem } from '@/assets/scripts/actions'

export default {
  name: 'project-info',
  props: ['currentProject'],
  data() {
    return {
      expanded: false,
      projectInfo: undefined
    }
  },
  methods: {
    toggleProjectInfo () {
      if (this.expanded) {
        this.projectInfo.deactivate()
        this.expanded = false
      } else {
        this.projectInfo.activate()
        this.expanded = true
      }
    }
  },
  mounted () {
    this.projectInfo = new ActionItem('projectInfo')
    this.$watch('expanded', (newValue, oldValue) => {
      console.log(newValue)
    })
  }
}
