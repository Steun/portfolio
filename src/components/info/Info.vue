<template>
  <div id="info" v-if="currentProject.moreInfo">
    <router-link :to="{ name: 'project'}"><span class="btn border close">&times;</span></router-link>

    <div class="info-inner" v-if="currentProject.moreLayoutType == 1">
      <div class="row">
        <div class="col six">
          <img src="" alt="">
        </div>
        <div class="col six">
          {{currentProject.infoText1}}
        </div>
      </div>
      <div class="row">
        <div class="col six">
          {{currentProject.infoText2}}
        </div>
        <div class="col six">
          <img src="" alt="">
        </div>
      </div>
    </div>

    <div class="info-inner" v-if="currentProject.moreLayoutType == 2">
      <div class="row">
        <div class="col twelve">
          <img src="" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col twelve">
          {{currentProject.infoText1}}
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./Info.vue.js"></script>
<style lang="scss" src="./Info.vue.scss"></style>
