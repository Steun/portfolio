<template>
  <nav id="menu" :class="mobileMenuExpanded ? 'expanded' : ''">

    <div class="menu-container">

      <div class="logo-container">
        <router-link :to="{ path: '/', params: { project: projects[0].name } }" class="name desktop"><h3>Teun Kelting</h3></router-link>
        <button @click="toggleMobileMenu()" class="name mobile" title="Open menu">&#8801;</button>
      </div>

      <ul class="menu">
        <li class="item" v-for="p in projects" v-if="p.name !== projects[0].name">
          <router-link :to="{ name: 'project', params: { project: p.name, expanded: true } }" class="item" v-on:click.native="toggleMobileMenu()">{{ p.title }}</router-link>
        </li>
        <li class="item">
          <a class="item about" @click="toggleAbout()" :class="$store.state.aboutExpanded ? 'active' : ''">About</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script src="./TeunMenu.vue.js"></script>
<style lang="scss" src="./TeunMenu.vue.scss"></style>
