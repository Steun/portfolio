<template>
  <div id="container">

    <div id="about">
      <section class="about-inner">
        <div class="top">
          <h3 class="title">Hello,</h3>
          <h3 class="title">Is it me you're looking for?</h3>
          <p class="description">
            I'm a Frontend developer based in Haarlem, currently in my first year of Software Engineering at HvA.
          </p>
          <ul class="socials inline">
            <li><a href="mailto:contact@teunkelting.com" class="link">email</a></li>
            <li><a href="https://twitter.com/teunkelting" class="link">twitter</a></li>
            <li><a href="#" class="link">linkedin</a></li>
          </ul>
        </div>
        <p class="built-by-me">Built by me with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
      </section>
    </div>

    <div id="page">
      <div class="title-box">
        <h1 class="title">{{title}}</h1>
        <h2 class="title">{{subtitle}}</h2>
      </div>

      <div class="button-box">
        <a class="btn border">View site</a>
      </div>
    </div>

    <teun-menu></teun-menu>

  </div>

</template>

<script src="./Page.vue.js"></script>
<style lang="scss" src="./Page.vue.scss"></style>
