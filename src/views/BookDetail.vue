<script setup lang="ts">
import { useBooksStore } from '../stores/books'
import { defineProps } from 'vue'
import editIcon from '../assets/edit.png'

const props = defineProps<{ id: number,}>()

const store = useBooksStore();
store.detail(props.id);  

</script>

<template>
  <div class="flex justify-center h-20">
    <router-link :to="{ name: 'list' }">
      <span class="text-blue-500 text-5xl absolute top-10 left-10 cursor-pointer">&lt;</span>
    </router-link>
    <h1 class="absolute top-10">書本內容</h1>
    <router-link :to="{ name: 'edit', params: { id: props.id }}">
      <span class="text-blue-500 text-5xl absolute top-10 right-10 cursor-pointer">
        <img class="" :src="editIcon" alt="book.title"/>
      </span>
    </router-link>
  </div>
  <div class="flex flex-col items-center m-10 max-w-screen-sm">
    <h2 class="break-words text-gray-900 font-bold text-5xl">{{ store.book.title }}</h2>
    <img class="h-full w-80 object-cover" :src="store.book.image" alt="book.title"/>
    <p class="break-words text-blue-900">{{ store.book.author }}</p>
    <p>{{store.book.description}}</p>
  </div>
</template>

<style scoped>
</style>
