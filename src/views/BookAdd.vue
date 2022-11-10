<script setup lang="ts">
import { useBooksStore } from '../stores/books'

</script>

<template>
  <div class="">
    <router-link :to="{ name: 'list' }">
      <span class="text-blue-500 text-5xl absolute top-10 left-10 cursor-pointer">&lt;</span>
    </router-link>
    <h1>新增書本</h1>
  </div>
  <div class="flex flex-col items-center m-10">
    <input placeholder="書本"/>
  </div>
</template>

<style scoped>
</style>
