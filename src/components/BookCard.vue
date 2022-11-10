<script setup lang="ts">
import { ref, defineProps } from 'vue'
import defaultImg from '../assets/book.png'
import { bookType } from '../types/book'
import router from '../router'

const props = defineProps<{ book: bookType}>()

const title = ref(props.book.title)
const image = ref(props.book.image || defaultImg)
const author = ref(props.book.author)

let altImg = e => e.target.src = defaultImg

</script>

<template>
  <router-link to="/detail" v-slot="{navigate, isActive, isExactActive}">
    <div class="card m-8 p-8 flex flex-col max-w-sm cursor-pointer drop-shadow-lg box-border bg-white">
      <h2 class="break-words text-gray-900 font-bold text-2xl">{{ title }}</h2>
      <img class="h-full w-80 object-cover" :src="image" alt="book.title" @error="altImg" />
      <p class="break-words text-blue-900">{{ author }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.card:hover {
  filter: drop-shadow(0 0 2em gray);
}
</style>
