<template>
  <div id="app" :class="$store.state.mobile ? 'mobile' : 'desktop'">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    handleMobile() {
      if (window.innerWidth >= 1200) {
        if (this.$store.state.mobile) {
          this.$store.dispatch("setMobile", false);
        }
      } else {
        if (!this.$store.state.mobile) {
          this.$store.dispatch("setMobile", true);
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.handleMobile();
      });
      this.handleMobile();
    });
  }
};
</script>

<style src="./App.vue.scss" lang="scss"></style>
