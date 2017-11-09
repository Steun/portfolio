<template>
  <div class="project" :class="currentProject.class">
    <div class="bg"></div>
    <div class="title-box" :class="currentProject.black ? 'black' : 'white'">
      <h1 class="title">{{currentProject.title}}</h1>
      <h2 class="title">{{currentProject.subtitle}}</h2>
      <div class="curlywurly">
        <svg width="310" height="62" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 60" preserveAspectRatio>
          <polyline fill="none" stroke="#5148FF"
                    points="7,50 50,7 100,50 150,7 200,50 250,7 300,50"/>
        </svg>
      </div>
    </div>

    <div class="button-box" v-if="currentProject.moreInfo">
      <router-link :to="{ name: 'info'}" class="btn border">View site</router-link>
    </div>
    <router-view :current-project="currentProject"></router-view>
  </div>

</template>

<script src="./Project.vue.js"></script>
<style lang="scss" src="./Project.vue.scss"></style>
