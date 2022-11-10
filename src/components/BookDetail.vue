<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import { useBooksStore } from '../stores/books'
import { ref, defineProps } from 'vue'

const props = defineProps<{ id: number,}>()

const store = useBooksStore();
const book = await store.detail(58);
const title = ref(book.title);
console.log("aaaa", book)

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  <div class="">
    <BookCard :book="book"/>
  </div>
</template>

<style scoped>
</style>
