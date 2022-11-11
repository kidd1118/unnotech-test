<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import { useBooksStore } from '../stores/books'

const store = useBooksStore();
store.list();

</script>

<template>
  <div class="flex justify-center h-20">
    <h1 class="absolute top-10">書本列表</h1>
    <router-link :to="{ name: 'add' }">
      <span class="text-blue-500 text-5xl absolute top-10 right-10 cursor-pointer">+</span>
    </router-link>
  </div>
  <div class="flex flex-wrap justify-center w-full">
    <router-link v-for="(item, index) in store.books" :key="index" :book="item" :to="{ name: 'detail', params: { id: item.id } }">
      <div class="card m-8 p-8 flex flex-col max-w-sm cursor-pointer drop-shadow-lg box-border bg-white">
        <BookCard :book="item"/>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card:hover {
  filter: drop-shadow(0 0 2em gray);
}
</style>
