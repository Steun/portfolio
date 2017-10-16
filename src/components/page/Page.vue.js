import teunMenu from '@/components/teun-menu/TeunMenu'
import store from '@/store'

export default {
  name: 'page',
  data() {
    return {
      title: 'Frontend Developer',
      subtitle: 'Teun Kelting',
      currentProject: store.state.currentProject
    }
  },
  components: {
    teunMenu
  },
  mounted() {
  }
}
