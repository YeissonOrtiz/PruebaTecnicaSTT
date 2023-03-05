<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/molecules/NavBar.vue'
</script>

<template>
  <header>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <NavBar/>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
