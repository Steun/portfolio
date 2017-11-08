<template>
  <div class="project" :class="currentProject.class">
    <div class="bg"></div>
    <div class="title-box">
      <h1 class="title">{{currentProject.title}}</h1>
      <h2 class="title">{{currentProject.subtitle}}</h2>
      <div class="curlywurly">
        <svg width="210" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 60" preserveAspectRatio>
          <polyline fill="none" stroke="#5148FF"
                    points="5,50 50,5 100,50 150,5 200,50"/>
        </svg>
      </div>
    </div>

    <div class="button-box">
      <router-link :to="{ name: 'info'}" class="btn border">View site</router-link>
    </div>
    <router-view :current-project="currentProject"></router-view>
  </div>

</template>

<script src="./Project.vue.js"></script>
<style lang="scss" src="./Project.vue.scss"></style>
