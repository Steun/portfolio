<template>
  <div class="project" :class="`${currentProject.class} ${currentProject.black ? 'theme-black' : 'theme-white'}`">
    <div class="bg"></div>
    <div class="gradient-overlay"></div>

    <div class="title-box">
      <h1 class="title">{{currentProject.title}}</h1>
      <h2 class="subtitle">{{currentProject.subtitle}}</h2>
      <div class="curlywurly">
        <svg width="310" height="62" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 60">
          <polyline fill="none" stroke="#5148FF"
                    points="7,50 50,7 100,50 150,7 200,50 250,7 300,50"/>
        </svg>
      </div>
      <progress :value="progress" max="100" style="position:absolute;"></progress>
    </div>

    <div class="description-box" v-if="currentProject.description">
      <p class="description">{{currentProject.description}}</p>
    </div>

    <project-info :current-project="currentProject"></project-info>

  </div>

</template>

<script src="./Project.vue.js"></script>
<style lang="scss" src="./Project.vue.scss"></style>
