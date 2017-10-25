<template>
  <nav id="menu">

    <div class="menu-container">

      <div class="logo-container">
        <router-link :to="{ name: 'project', params: { project: projects[0].name}}" class="name"><h3>Teun Kelting</h3></router-link>
      </div>

      <ul class="menu">
        <li class="item" v-for="p in projects" v-if="p.name !== projects[0].name">
          <router-link :to="{ name: 'project', params: { project: p.name}}" class="item">{{ p.title }}</router-link>
        </li>
        <li class="item"><a @click="openAbout()" href="#">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<script src="./TeunMenu.vue.js"></script>
<style lang="scss" src="./TeunMenu.vue.scss"></style>
