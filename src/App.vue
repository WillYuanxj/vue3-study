<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="nav">
    <!-- <router-link to="/"></router-link> -->
    <router-link to="/login">login</router-link>
    <br>
    <router-link to="/slotDemo">slot</router-link>
    <br>
    <router-link to="/refDemo">ref</router-link>
    <br>
    <router-link to="/reactiveDemo">reactive</router-link>
    <br>
    <router-link to="/computedDemo">computed</router-link>
    <br>
    <router-link to="/watchDemo">watch</router-link>
    <br>
    <router-link to="/teleportDemo">teleport</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
