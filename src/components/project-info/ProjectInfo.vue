<template>
  <div class="project-info">

    <div class="gradient-overlay"></div>

    <div id="info" v-if="currentProject.moreInfo">
      <button type="button" @click="toggleProjectInfo()" class="btn border close"></button>

      <div class="info-inner" v-if="currentProject.moreLayoutType === 1">
        <div class="rows">
          <div class="row">
            <div class="col six">
              <figure class="image-container">
                <img :src="currentProject.infoImageName1" alt="Project image 1"
                     :class="currentProject.infoImageShadow1 ? 'shadow' : ''">
              </figure>
            </div>
            <div class="col six">
              <h2 class="title">{{currentProject.infoTitle1}}</h2>
              <p>{{currentProject.infoText1}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col six">
              <h2 class="title">{{currentProject.infoTitle2}}</h2>
              <p>{{currentProject.infoText2}}</p>
            </div>
            <div class="col six">
              <figure class="image-container">
                <img :src="currentProject.infoImageName2" alt="Project image 2"
                     :class="currentProject.infoImageShadow2 ? 'shadow' : ''">
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col twelve project-link-container" v-if="currentProject.projectLink">
              <a :href="currentProject.projectLink" target="_blank" class="btn btn-project">View project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="info-inner" v-if="currentProject.moreLayoutType === 2">
        <div class="row">
          <div class="col twelve">
            <figure class="image-container">
              <img :src="currentProject.infoImageName1" alt="Project image 1" :class="currentProject.infoImageShadow1 ? 'shadow' : ''">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col twelve">
            <h2 class="title">{{currentProject.infoTitle1}}</h2>
            <p>{{currentProject.infoText1}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col twelve">
            <figure class="image-container">
              <img :src="currentProject.infoImageName2" alt="Project image 2" :class="currentProject.infoImageShadow2 ? 'shadow' : ''">
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col twelve">
            <h2 class="title">{{currentProject.infoTitle2}}</h2>
            <p>{{currentProject.infoText2}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col twelve project-link-container" v-if="currentProject.projectLink">
            <a :href="currentProject.projectLink" target="_blank" class="btn btn-project">View project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProjectInfo.vue.js"></script>
<style lang="scss" src="./ProjectInfo.vue.scss"></style>
