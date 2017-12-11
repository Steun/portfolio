<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    handleMobile() {
      if (window.innerWidth >= 1200) {
        this.mobile = false
        if (this.$store.state.mobile) {
          this.$store.dispatch('setMobile', false)
        }
      } else {
        this.mobile = true
        if (!this.$store.state.mobile) {
          this.$store.dispatch('setMobile', true)
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.handleMobile()
      })
      this.handleMobile()
    })
  }
}
</script>

<style src="./App.vue.scss" lang="scss"></style>
