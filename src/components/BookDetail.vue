<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import { useBooksStore } from '../stores/books'
import { defineProps } from 'vue'

const props = defineProps<{ id: number,}>()

const store = useBooksStore();
store.detail(props.id);  

console.log("store.book", store.book)
</script>

<template>
  <div class="flex flex-col items-center m-10">
    <BookCard :book="store.book"/>
    <p>{{store.book.description}}</p>
  </div>
</template>

<style scoped>
</style>
