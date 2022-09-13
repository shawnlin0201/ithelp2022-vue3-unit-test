<script setup>
import BaseNavbar from './components/BaseNavbar.vue'
</script>

<template>
  <BaseNavbar />
  <div class="h-full mx-auto mt-12 leading-full max-w-[900px] relative">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
