<script setup lang="ts">
import BookCard from './BookCard.vue'
import { useBooksStore } from '../stores/books'

const store = useBooksStore();
store.list();

</script>

<template>
  <div>
    <h1>書本列表</h1>
    <span class="text-blue-500 text-5xl absolute top-10 right-10 cursor-pointer">+</span>
  </div>
  <div class="flex flex-wrap justify-center w-full">
    <BookCard v-for="(item, index) in store.books" :key="index" :book="item"/>
  </div>
</template>

<style scoped>
</style>
