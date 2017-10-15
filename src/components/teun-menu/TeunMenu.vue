<template>
  <nav id="menu">

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
</template>

<script src="./TeunMenu.vue.js"></script>
<style lang="scss" src="./TeunMenu.vue.scss"></style>
