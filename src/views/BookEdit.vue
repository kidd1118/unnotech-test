<script setup lang="ts">
import router from '../router';
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import { useBooksStore } from '../stores/books';
import { reactive } from 'vue';

const store = useBooksStore();

const form = reactive({
  title: store.book.title,
  author: store.book.author,
  description: store.book.description
})

const cancel = () => {
  router.push({ name: 'detail', params: { id: store.book.id }})
};

const confirm = () => {
  store.edit(store.book.id, {
    title: form.title,
    author: form.author,
    description: form.description
  }); 
  router.push({ name: 'detail', params: { id: store.book.id }})
};

defineRule("required", (value: string | any[]) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

</script>

<template>
  <div class="flex justify-center h-20">
    <router-link :to="{ name: 'detail', params: { id: store.book.id }}">
      <span class="text-blue-500 text-5xl absolute top-10 left-10 cursor-pointer">&lt;</span>
    </router-link>
    <h1 class="absolute top-10">編輯書本</h1>
  </div>
  <div class="flex flex-col items-center m-10 w-80">
    <img class="h-full w-80 object-cover" :src="store.book.image" alt="book.title"/>
    <Form @submit="confirm" class="flex flex-col items-center m-10 w-full">
      <Field v-model="form.title" rules="required" name="title" as="input" type="text" placeholder="名稱" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5" required/>
      <ErrorMessage name="title" />
      <Field v-model="form.author" rules="required" name="author" as="input" type="text" placeholder="作者" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5" required/>
      <ErrorMessage name="author" />
      <Field v-model="form.description" name="description" as="textarea" type="text" rows="4" placeholder="備註" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5"/>
      <div>
        <button @click="cancel" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">取消</button>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">確定</button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
</style>
