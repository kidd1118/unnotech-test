<script setup lang="ts">
import { ref, defineProps } from 'vue'
import defaultImg from '../assets/book.png'
import { book } from '../types/book'

const props = defineProps<{ book: any}>() //TODO: using book type

const title = ref(props.book.title)
const image = ref(props.book.image || defaultImg)
const author = ref(props.book.author)

console.log("aaaaaaa", props.book)
</script>

<template>
  <h2 class="break-words text-gray-900 font-bold text-2xl">{{ title }}</h2>
  <img class="h-full w-80 object-cover" :src="image" alt="book.title"/>
  <p class="break-words text-blue-900">{{ author }}</p>
</template>

<style scoped>
</style>
