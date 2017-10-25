<template>
  <div class="project" :class="currentProject.class">
    <div class="title-box">
      <h1 class="title">{{currentProject.title}}</h1>
      <h2 class="title">{{currentProject.subtitle}}</h2>
    </div>

    <div class="button-box">
      <a class="btn border">View site</a>
    </div>
  </div>

</template>

<script src="./Project.vue.js"></script>
<style lang="scss" src="./Project.vue.scss"></style>
