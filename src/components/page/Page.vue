<template>
  <div id="container">

    <div class="about">
      <h3 class="title">Hello,</h3>
      <h3 class="title">Is it me you're looking for?</h3>
      <p class="description">
        I’m a Frontend developer based in Haarlem, currently in my first year of Software Engineering at HvA.
      </p>
      <ul class="socials inline">
        <li><a href="mailto:contact@teunkelting.com" class="link">email</a></li>
        <li><a href="https://twitter.com/teunkelting" class="link">twitter</a></li>
        <li><a href="#" class="link">linkedin</a></li>
      </ul>
    </div>

    <div class="page">
      <div class="title-box">
        <h1 class="title">{{title}}</h1>
        <h2 class="title">{{subtitle}}</h2>
      </div>

      <div class="button-box">
        <a class="btn border">View site</a>
      </div>
    </div>

    <nav class="side-menu">

      <div class="menu-container">

        <div class="logo-container">
          <h3 class="name">Teun Kelting</h3>
        </div>

        <ul class="menu">
          <li class="item"><a href="#">Lift</a></li>
          <li class="item"><a href="#">Project P</a></li>
          <li class="item"><a href="#">Compilex</a></li>
          <li class="item"><a @click="openAbout()" href="#">About</a></li>
        </ul>
      </div>
    </nav>

  </div>

</template>

<script src="./Page.vue.js"></script>
<style lang="scss" src="./Page.vue.scss"></style>
