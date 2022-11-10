import { createWebHistory, createRouter } from "vue-router";
import list from "../components/BookList.vue";
import detail from "../components/BookDetail.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;