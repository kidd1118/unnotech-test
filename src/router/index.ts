import { createWebHistory, createRouter } from "vue-router";
import list from "../components/BookList.vue";
import detail from "../components/BookDetail.vue";

const routes = [
  { path: "/", redirect: "/list" },
  {
    path: "/list",
    name: "list",
    component: list,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;