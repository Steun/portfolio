import teunMenu from '@/components/teun-menu/TeunMenu'

export default {
  name: 'page',
  data () {
    return {
      title: 'Frontend Developer',
      subtitle: 'Teun Kelting'
    }
  },
  components: {
    teunMenu
  },
  mounted () {
    // console.log(about.a())
  }
}
