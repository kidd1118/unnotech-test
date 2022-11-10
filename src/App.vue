<script setup lang="ts">
import BookList from './views/BookList.vue'
import BookDetail from './views/BookDetail.vue'

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
