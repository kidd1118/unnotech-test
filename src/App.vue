<script setup lang="ts">
import BookList from './components/BookList.vue'
import BookDetail from './components/BookDetail.vue'

const views = {
    list: BookList,
    detail: BookDetail
  }
</script>

<template>
  <router-view v-slot="{ views }"></router-view>
</template>

<style scoped>
</style>
