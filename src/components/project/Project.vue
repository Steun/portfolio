<template>
  <div class="project" :class="`${currentProject.class} ${currentProject.black ? 'theme-black' : 'theme-white'}`" @click.self="handleClose()">
    <img class="project-image" :src="currentProject.projectImage" :srcset="currentProject.projectImageCompressed + ' 2x'">
    <div class="gradient-overlay"></div>

    <div class="title-box" @click.self="handleClose()">
      <h1 class="title">{{currentProject.title}}</h1>
      <h2 class="subtitle">{{currentProject.subtitle}}</h2>
      <div class="curlywurly">
        <svg width="310" height="62" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 60">
          <polyline fill="none" stroke="#5148FF"
                    points="7,50 50,7 100,50 150,7 200,50 250,7 300,50"/>
        </svg>
      </div>
    </div>

    <div v-if="currentProject.name === 'me'" class="splash-buttons">
      <router-link :to="{ name: 'project', params: { project: $store.state.projects[1].name, expanded: false}}" class="btn border">View my projects</router-link>
    </div>

    <div class="description-box" v-if="currentProject.description" @click.self="handleClose()">
      <p class="description">{{currentProject.description}}</p>
    </div>

    <project-info ref="project" :current-project="currentProject"></project-info>

  </div>

</template>

<script src="./Project.vue.js"></script>
<style lang="scss" src="./Project.vue.scss"></style>
