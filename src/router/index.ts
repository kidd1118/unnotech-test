import { createWebHistory, createRouter } from "vue-router";
import list from "../views/BookList.vue";
import detail from "../views/BookDetail.vue";
import add from "../views/BookAdd.vue";

const routes = [
  { path: "/", redirect: "/books" },
  {
    path: "/books",
    name: "list",
    component: list
  },
  {
    path: "/books/:id",
    name: "detail",
    component: detail,
    props: true
  },
  {
    path: "/books/add",
    name: "add",
    component: add
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;