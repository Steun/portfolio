<template>
  <div id="container">
    <div id="about">
      <section class="about-inner">
        <div class="top">
          <h3 class="title">Hello,</h3>
          <h3 class="title">Is it me you're looking for?</h3>
          <p class="description">
            I craft user interfaces using modern web technologies. Currently in
            my third year of Software Engineering at the Hogeschool van
            Amsterdam.
          </p>
          <ul class="socials inline">
            <li>
              <a
                href="mailto:contact@teunkelting.com"
                target="_blank"
                class="link"
                >email</a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/teunkelting"
                target="_blank"
                class="link"
                >twitter</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/teun-kelting-99615810a/"
                class="link"
                target="_blank"
                >linkedin</a
              >
            </li>
          </ul>
        </div>
        <p class="built-by-me">
          Built and designed by me, with
          <a href="https://vuejs.org/" target="_blank">Vue.js</a>
        </p>
      </section>
    </div>

    <div id="page">
      <transition name="fade" mode="in-out">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>

    <transition name="slide-readmore" mode="in-out">
      <div
        class="button-box btn-readmore"
        v-if="currentProject.moreInfo && noProjectIsExpanded"
      >
        <progress :value="progress" max="100"></progress>
        <button
          type="button"
          @click="toggleProjectInfo()"
          @mouseover="toggleTicker()"
          @mouseleave="toggleTicker()"
          class="btn border"
        >
          Read more
        </button>
      </div>
    </transition>

    <teun-menu></teun-menu>
  </div>
</template>

<script src="./Page.vue.js"></script>
<style lang="scss" src="./Page.vue.scss"></style>
