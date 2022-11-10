<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
